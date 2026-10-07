/* Rift Scout: views and routing. Routes are plain hash tokens:
   #champions, #matchups, #builds, #items, #meta, #meta.<role>, #patches, #<championId>,
   #<championId>.vs.<championId> */
(function () {
  "use strict";
  const E = window.RiftEngine;
  const { champs, byId, ROLES, STATS } = E;
  const app = document.getElementById("app");
  const TOTAL = champs.length * (champs.length - 1);
  const BUILDS = champs.reduce((n, c) => n + 1 + (c.ob || []).length, 0);
  const GROUPS = { controller: "Controller", fighter: "Fighter", mage: "Mage", marksman: "Marksman", slayer: "Slayer", tank: "Tank", specialist: "Specialist" };
  const DEFAULT_PAIR = ["ahri", "zed"];
  const PATCH = "26.20";   // the patch the profiles and builds were written for

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const fmt = n => n.toLocaleString("en-US");
  const signed = v => (v > 0.005 ? "+" : v < -0.005 ? "−" : "") + Math.abs(v).toFixed(2);
  const norm = s => String(s || "").toLowerCase().replace(/[^a-z]/g, "");
  const nameIndex = {};
  champs.forEach(c => { nameIndex[norm(c.name)] = c; nameIndex[c.id] = c; });
  const findChamp = s => nameIndex[norm(s)] || null;
  const roleText = c => c.roles.map(r => ROLES[r]).join(" · ");

  // Icons are Riot Data Dragon squares saved in assets/img/<id>.png; initials show if one fails to load.
  function portrait(c, size) {
    return `<span class="pt pt-${size} g-${c.group}" aria-hidden="true">${esc(c.initials)}<img src="assets/img/${c.id}.png" alt="" loading="lazy" decoding="async"></span>`;
  }
  document.addEventListener("error", e => {
    const box = e.target.tagName === "IMG" && e.target.parentElement;
    if (box && (box.classList.contains("pt") || box.classList.contains("ic"))) e.target.remove();
    const pic = box && box.closest(".patch-pic");
    if (pic) pic.remove();
  }, true);

  /* ---------- Riot's official data (Data Dragon): lore, abilities, items ----------
     Loaded live in the visitor's browser, so it always matches the current patch. */
  const DD = "https://ddragon.leagueoflegends.com";
  // Every language Riot publishes its texts in, one entry per language.
  const LANGS = {
    en_US: "English", cs_CZ: "Čeština", de_DE: "Deutsch", el_GR: "Ελληνικά", es_ES: "Español", fr_FR: "Français", hu_HU: "Magyar",
    it_IT: "Italiano", pl_PL: "Polski", pt_BR: "Português", ro_RO: "Română", ru_RU: "Русский", tr_TR: "Türkçe", ar_AE: "العربية",
    id_ID: "Bahasa Indonesia", vi_VN: "Tiếng Việt", th_TH: "ไทย", ja_JP: "日本語", ko_KR: "한국어", zh_CN: "简体中文", zh_TW: "繁體中文"
  };
  const RTL = ["ar_AE"];   // written right to left
  const riot = { version: null, lang: "en_US", champ: {}, items: {} };
  try { const saved = localStorage.getItem("rs-lang"); if (LANGS[saved]) riot.lang = saved; } catch (e) { /* storage unavailable */ }
  function setLang(lang) {
    if (!LANGS[lang]) return;
    riot.lang = lang;
    try { localStorage.setItem("rs-lang", lang); } catch (e) { /* storage unavailable */ }
  }
  const riotDir = () => (RTL.includes(riot.lang) ? "rtl" : "ltr");
  // A champion's splash picture, used as the backdrop of page headers (styles.css: .art, .duel).
  const splash = c => `${DD}/cdn/img/champion/splash/${c.key}_0.jpg`;
  const artStyle = c => `style="--art:url('${splash(c)}')"`;
  // The start page shows a different champion on every visit.
  const FEATURED = champs[Math.floor(Math.random() * champs.length)];
  async function getJson(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }
  async function ddVersion() {
    if (!riot.version) riot.version = (await getJson(DD + "/api/versions.json"))[0];
    return riot.version;
  }
  async function ddChampion(c, lang) {
    const v = await ddVersion(), k = lang + ":" + c.key;
    if (!riot.champ[k]) riot.champ[k] = Object.values((await getJson(`${DD}/cdn/${v}/data/${lang}/champion/${c.key}.json`)).data)[0];
    return riot.champ[k];
  }
  async function ddItems(lang) {
    const v = await ddVersion();
    if (!riot.items[lang]) riot.items[lang] = shopItems((await getJson(`${DD}/cdn/${v}/data/${lang}/item.json`)).data);
    return riot.items[lang];
  }
  // Riot's descriptions carry their own markup; keep the line breaks and drop the tags.
  function riotText(html) {
    const doc = new DOMParser().parseFromString(String(html || "").replace(/<br\s*\/?>/gi, "\n").replace(/<\/?li>/gi, "\n"), "text/html");
    return doc.body.textContent.replace(/[ \t]+\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
  }
  const multiline = s => esc(s).replace(/\n/g, "<br>");
  // The normal Summoner's Rift shop: ids of 100000 and up are copies for other game modes.
  function shopItems(data) {
    const seen = new Set(), out = [];
    const real = id => +id < 100000 && data[id];
    Object.keys(data).forEach(id => {
      const it = data[id];
      if (+id >= 100000 || !it.maps || !it.maps["11"] || !it.gold || !it.gold.purchasable || it.inStore === false || it.requiredChampion || it.requiredAlly) return;
      if (seen.has(it.name)) return;
      seen.add(it.name);
      const tags = it.tags || [];
      const upgrades = (it.into || []).some(t => real(t) && data[t].gold.purchasable);
      const fromBoots = (it.from || []).some(f => real(f) && (data[f].tags || []).includes("Boots"));
      let cat = "starter";
      if (tags.includes("Boots") || fromBoots) cat = "boots";
      else if (!upgrades && it.gold.total >= 1400) cat = "completed";
      else if (upgrades && !["Consumable", "Trinket", "Jungle", "GoldPer"].some(t => tags.includes(t))) cat = "component";
      out.push({
        id, name: it.name, key: norm(it.name), gold: it.gold.total, plain: it.plaintext || "", text: riotText(it.description), cat, icon: it.image.full,
        from: [...new Set((it.from || []).filter(real).map(x => data[x].name))],
        into: [...new Set((it.into || []).filter(real).map(x => data[x].name))]
      });
    });
    return out.sort((a, b) => a.name.localeCompare(b.name));
  }
  const langToggle = () => `<select class="lang" data-lang aria-label="Language of Riot's text">${Object.keys(LANGS).map(l => `<option value="${l}"${riot.lang === l ? " selected" : ""}>${LANGS[l]}</option>`).join("")}</select>`;
  // Item names in builds link to the item page. Entries that aren't a single shop item stay plain.
  const itemChip = (name, core) => /[(+]/.test(name)
    ? `<span class="item${core ? " core" : ""}">${esc(name)}</span>`
    : `<a class="item${core ? " core" : ""}" href="#items" data-item="${esc(name)}">${esc(name)}</a>`;
  const pill = v => `<span class="pill v-${v.key}">${esc(v.short)}</span>`;
  function edgeBar(total, scale) {
    const w = Math.min(50, Math.abs(total) / (scale || 1.6) * 50);
    return `<div class="edge" role="img" aria-label="Edge ${signed(total)}"><i class="${total >= 0 ? "pos" : "neg"}" style="width:${w.toFixed(1)}%"></i></div>`;
  }
  function tug(total, scale) {
    const pct = 50 + Math.max(-1, Math.min(1, total / (scale || 1.6))) * 46;
    return `<div class="tug" role="img" aria-label="Edge ${signed(total)}"><div class="blue" style="width:${pct.toFixed(1)}%"></div></div>`;
  }
  const list = (items, cls) => `<ul class="list ${cls || ""}">${items.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;

  function setNav(key, title) {
    document.querySelectorAll(".nav a").forEach(a => {
      if (a.dataset.nav === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.title = title ? `${title} · Rift Scout` : "Rift Scout";
  }

  function chrome() {
    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <div class="topbar-inner">
        <a class="brand" href="#champions"><span class="rift-mark" aria-hidden="true"></span>Rift Scout</a>
        <nav class="nav" aria-label="Sections">
          <a href="#champions" data-nav="champions">Champions</a>
          <a href="#matchups" data-nav="matchups">Matchups</a>
          <a href="#builds" data-nav="builds">Builds</a>
          <a href="#items" data-nav="items">Items</a>
          <a href="#meta" data-nav="meta">Meta</a>
          <a href="#patches" data-nav="patches">Patches</a>
        </nav>
        <form class="search" id="gsearch" role="search">
          <input type="search" id="gq" list="champ-names" placeholder="Find a champion" aria-label="Find a champion" autocomplete="off">
          <button type="submit">Go</button>
        </form>
      </div>`;
    document.body.insertBefore(header, app);
    const dl = document.createElement("datalist");
    dl.id = "champ-names";
    dl.innerHTML = champs.map(c => `<option value="${esc(c.name)}"></option>`).join("");
    document.body.appendChild(dl);
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>Matchup ratings and meta tiers come from the champion profiles on this site and a rules-based model. They are not win-rate statistics. Builds use the Season 2026 item pool as of patch ${PATCH}. Lore, ability and item text and their icons are loaded from Riot Games' Data Dragon. Rift Scout isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.</p>`;
    document.body.appendChild(footer);
    const form = header.querySelector("#gsearch");
    const input = header.querySelector("#gq");
    input.addEventListener("input", () => input.setCustomValidity(""));
    form.addEventListener("submit", e => {
      e.preventDefault();
      const c = findChamp(input.value);
      if (!c) { input.setCustomValidity("No champion by that name. Pick one from the list."); input.reportValidity(); return; }
      input.value = "";
      location.hash = c.id;
    });
  }

  /* ---------- Champions ---------- */
  const filt = { role: "all", group: "all", q: "" };

  function viewChampions() {
    setNav("champions");
    const [pa, pb] = DEFAULT_PAIR.map(id => byId[id]);
    app.innerHTML = `
      <section class="intro art" ${artStyle(FEATURED)}>
        <div>
          <p class="eyebrow"><a href="#patches">Patch ${PATCH}</a> · Season 2026</p>
          <h1>Every champion. Every matchup.</h1>
          <p class="lede">Lore, abilities, strengths, weaknesses, risk limits and builds for all ${champs.length} champions, every shop item, and a breakdown of each of the ${fmt(TOTAL)} ranked matchups. Mirror matchups are left out because Ranked doesn't allow them.</p>
          <div class="counts">
            <div><b>${champs.length}</b><span>Champions</span></div>
            <div><b>${fmt(TOTAL)}</b><span>Matchups</span></div>
            <div><b>${BUILDS}</b><span>Builds</span></div>
          </div>
        </div>
        <form class="panel quickvs" id="quickvs">
          <h3>Open a matchup</h3>
          <div class="row">
            <span class="field-blue"><input type="text" id="qa" list="champ-names" value="${esc(pa.name)}" aria-label="Your champion" placeholder="Your champion" autocomplete="off"></span>
            <span class="vs">VS</span>
            <span class="field-red"><input type="text" id="qb" list="champ-names" value="${esc(pb.name)}" aria-label="Enemy champion" placeholder="Enemy champion" autocomplete="off"></span>
          </div>
          <button class="btn-primary" type="submit">Show matchup</button>
        </form>
      </section>
      <section class="section">
        <div class="section-head"><h2>Champions</h2><span class="muted num" id="count"></span></div>
        <div class="filters" id="filters">
          ${["all", ...Object.keys(ROLES)].map(r => `<button type="button" class="chip-btn" data-role="${r}" aria-pressed="${filt.role === r}">${r === "all" ? "All roles" : ROLES[r]}</button>`).join("")}
          <span class="spacer"></span>
          <input type="search" id="fq" placeholder="Filter by name" aria-label="Filter champions by name" value="${esc(filt.q)}">
        </div>
        <div class="filters">
          ${["all", ...Object.keys(GROUPS)].map(g => `<button type="button" class="chip-btn" data-group="${g}" aria-pressed="${filt.group === g}">${g === "all" ? "All classes" : GROUPS[g]}</button>`).join("")}
        </div>
        <div class="champ-grid" id="grid"></div>
      </section>`;
    wirePair(app.querySelector("#quickvs"), "#qa", "#qb");
    app.querySelectorAll("[data-role]").forEach(b => b.addEventListener("click", () => { filt.role = b.dataset.role; syncChips(); renderGrid(); }));
    app.querySelectorAll("[data-group]").forEach(b => b.addEventListener("click", () => { filt.group = b.dataset.group; syncChips(); renderGrid(); }));
    app.querySelector("#fq").addEventListener("input", e => { filt.q = e.target.value; renderGrid(); });
    renderGrid();
  }
  function syncChips() {
    app.querySelectorAll("[data-role]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.role === filt.role)));
    app.querySelectorAll("[data-group]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.group === filt.group)));
  }
  function renderGrid() {
    const q = norm(filt.q);
    const shown = champs.filter(c =>
      (filt.role === "all" || c.roles.includes(filt.role)) &&
      (filt.group === "all" || c.group === filt.group) &&
      (!q || norm(c.name).includes(q)));
    app.querySelector("#count").textContent = `${shown.length} of ${champs.length}`;
    app.querySelector("#grid").innerHTML = shown.length
      ? shown.map(c => `<a class="tile" href="#${c.id}">${portrait(c, "s")}<span><b>${esc(c.name)}</b><small>${esc(c.cls)} · ${esc(roleText(c))}</small></span></a>`).join("")
      : `<p class="muted">No champion matches those filters.</p>`;
  }

  function wirePair(form, aSel, bSel) {
    const ia = form.querySelector(aSel), ib = form.querySelector(bSel);
    [ia, ib].forEach(i => i.addEventListener("input", () => i.setCustomValidity("")));
    form.addEventListener("submit", e => {
      e.preventDefault();
      const a = findChamp(ia.value), b = findChamp(ib.value);
      if (!a) { ia.setCustomValidity("Pick a champion from the list."); ia.reportValidity(); return; }
      if (!b) { ib.setCustomValidity("Pick a champion from the list."); ib.reportValidity(); return; }
      if (a.id === b.id) { ib.setCustomValidity("Mirror matchups can't happen in Ranked. Pick a different enemy."); ib.reportValidity(); return; }
      location.hash = `${a.id}.vs.${b.id}`;
    });
  }

  /* ---------- Champion profile ---------- */
  function curve(c) {
    const xs = [34, 120, 206], y = v => 86 - (v - 1) * 17;
    const pts = [c.S.e, c.S.m, c.S.l].map((v, i) => [xs[i], y(v)]);
    const line = pts.map(p => p.join(",")).join(" ");
    const area = `${xs[0]},${y(1)} ${line} ${xs[2]},${y(1)}`;
    const grid = [1, 2, 3, 4, 5].map(v => `<line class="grid" x1="20" x2="220" y1="${y(v)}" y2="${y(v)}"></line>`).join("");
    return `<svg viewBox="0 0 240 112" role="img" aria-label="Power curve: early ${c.S.e}, mid ${c.S.m}, late ${c.S.l} out of 5">
      ${grid}<polygon class="area" points="${area}"></polygon><polyline class="line" points="${line}"></polyline>
      ${pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5"></circle>`).join("")}
      <text x="${xs[0]}" y="106" text-anchor="middle">EARLY</text><text x="${xs[1]}" y="106" text-anchor="middle">MID</text><text x="${xs[2]}" y="106" text-anchor="middle">LATE</text>
      <text x="12" y="${y(5) + 3}" text-anchor="middle">5</text><text x="12" y="${y(1) + 3}" text-anchor="middle">1</text>
    </svg>`;
  }
  const pips = v => `<span class="pips" aria-label="${v} of 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= v ? "on" : ""}"></i>`).join("")}</span>`;

  function buildCard(c) {
    const b = c.b;
    return `
      <div class="panel build">
        <div class="build-label"><h3>Meta build</h3><span class="tag">Standard</span></div>
        <div class="build-meta">
          <div class="kv"><span>Runes</span><b>${esc(b.ru)}</b></div>
          <div class="kv"><span>Summoners</span><b>${esc(b.ss)}</b></div>
          <div class="kv"><span>Start</span><b>${esc(b.st)}</b></div>
          <div class="kv"><span>Boots</span><b>${esc(b.bo)}</b></div>
        </div>
        <div class="kv"><span>Core, in order</span><div class="items">${b.core.map((i, n) => `${n ? '<span class="arrow" aria-hidden="true">→</span>' : ""}${itemChip(i, true)}`).join("")}</div></div>
        <div class="kv"><span>Situational</span><div class="items">${b.sit.map(i => itemChip(i)).join("")}</div></div>
      </div>`;
  }
  const offCard = o => `
      <div class="panel build offmeta">
        <div class="build-label"><h3>${esc(o.n)}</h3><span class="tag">Off-meta</span></div>
        <div class="items">${o.i.map((i, n) => `${n ? '<span class="arrow" aria-hidden="true">→</span>' : ""}${itemChip(i)}`).join("")}</div>
        <p class="muted">${esc(o.w)}</p>
      </div>`;

  function viewChampion(id) {
    const c = byId[id];
    setNav("champions", c.name);
    const ranked = E.rankFor(c);
    const beats = E.countersOf(c);
    // Top up "Good against" with the model's easiest lane matchups when few champions list this one.
    ranked.filter(r => r.x.lane && r.total > 0 && !beats.some(s => s.c.id === r.b.id)).slice(0, Math.max(0, 4 - beats.length))
      .forEach(r => { const f = r.factors.find(ff => ff.side > 0); beats.push({ c: r.b, why: f ? f.why : "The model favors you here." }); });
    const struggles = Object.keys(c.cb).filter(k => byId[k]).map(k => ({ c: byId[k], why: c.cb[k] }));
    const cntRow = s => `<div class="factor cnt">${portrait(s.c, "s")}<div><a href="#${c.id}.vs.${s.c.id}"><b>${esc(s.c.name)}</b></a><small>${esc(s.why)}</small></div></div>`;
    app.innerHTML = `
      <section class="champ-head art" ${artStyle(c)}>
        ${portrait(c, "l")}
        <div>
          <p class="eyebrow">${esc(c.cls)}</p>
          <h1>${esc(c.name)}</h1>
          <p class="title-line" id="riot-title"></p>
          <div class="tags">
            ${c.roles.map(r => {
              const m = E.meta(r).find(x => x.c.id === c.id);
              return `<a class="tag" href="#meta.${r}">${ROLES[r]} · ${m.main ? `${m.tier} tier` : "flex pick"}</a>`;
            }).join("")}
            ${patchTags(c)}
            <span class="tag">${esc(c.dmg)} damage</span>
            <span class="tag">${c.melee ? "Melee" : "Ranged"} · <span class="num">${c.rg}</span></span>
          </div>
        </div>
        <div class="curve">${curve(c)}</div>
      </section>

      <section class="section">
        <div class="stats">${STATS.slice(3).map(([k, label]) => `<div class="stat"><span>${label}</span>${pips(c.S[k])}</div>`).join("")}</div>
      </section>

      <section class="section" id="riot">
        <div class="section-head"><h2>Lore and abilities</h2>${langToggle()}</div>
        <div id="riot-body" class="section"><p class="muted">Loading Riot's champion data…</p></div>
      </section>

      <section class="section">
        <h2>Strengths and weaknesses</h2>
        <div class="grid-2">
          <div class="panel box-go"><div class="box-title"><h3>Strengths</h3></div>${list(c.st, "good")}</div>
          <div class="panel box-no"><div class="box-title"><h3>Weaknesses</h3></div>${list(c.wk, "bad")}</div>
        </div>
      </section>

      <section class="section">
        <h2>Risk limits</h2>
        <div class="grid-2">
          <div class="panel box-go"><div class="box-title"><h3>Take the risk when</h3></div>${list(c.go, "good")}</div>
          <div class="panel box-no"><div class="box-title"><h3>Hard limits</h3></div>${list(c.no, "bad")}</div>
        </div>
        <div class="panel grid-2">
          <div class="respect"><p class="eyebrow">What enemies respect</p><p>${esc(c.th)}</p></div>
          <div class="punish"><p class="eyebrow">How enemies punish ${esc(c.name)}</p><p>${esc(c.pw)}</p></div>
        </div>
      </section>

      <section class="section">
        <h2>Situational decisions</h2>
        <div class="panel sit">${c.sit.map(([k, v]) => `<div class="sit-row"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("")}</div>
      </section>

      <section class="section">
        <h2>Builds</h2>
        ${buildCard(c)}
        <div class="grid-2">${(c.ob || []).map(offCard).join("")}</div>
        <p class="note">Every matchup page adjusts this build for the enemy you're facing.</p>
      </section>

      <section class="section">
        <h2>Counters</h2>
        <div class="grid-2">
          <div class="panel box-no"><div class="box-title"><h3>Struggles against</h3></div>
            <div>${struggles.map(cntRow).join("") || '<p class="muted">No hard counters listed.</p>'}</div>
          </div>
          <div class="panel box-go"><div class="box-title"><h3>Good against</h3></div>
            <div>${beats.map(cntRow).join("") || `<p class="muted">No clear favorable matchups. Check the full list below.</p>`}</div>
          </div>
        </div>
      </section>

      <section class="section" id="mu">
        <div class="section-head"><h2>All ${champs.length - 1} matchups</h2><span class="muted num" id="mucount"></span></div>
        <div class="mu-tools">
          <button type="button" class="chip-btn" id="lane" aria-pressed="true">Same role only</button>
          <input type="search" id="muq" placeholder="Filter opponents" aria-label="Filter opponents">
        </div>
        <div class="grid-2">
          <div class="panel"><p class="eyebrow">Easiest</p><div class="chips" id="easy"></div></div>
          <div class="panel"><p class="eyebrow">Hardest</p><div class="chips" id="hard"></div></div>
        </div>
        <div class="panel mu-table-wrap"><table class="mu-table">
          <thead><tr><th>Opponent</th><th>Where you meet</th><th>Verdict</th><th>Edge</th><th>Difficulty</th></tr></thead>
          <tbody id="mubody"></tbody>
        </table></div>
        <p class="note">Edge is the model's score from ${esc(c.name)}'s side: positive favors ${esc(c.name)}, negative favors the opponent. Difficulty runs 1 (easy) to 10 (very hard).</p>
      </section>`;

    const laneBtn = app.querySelector("#lane");
    const q = app.querySelector("#muq");
    let laneOnly = true;
    const draw = () => {
      const qq = norm(q.value);
      let rows = ranked.filter(r => (!laneOnly || r.x.lane) && (!qq || norm(r.b.name).includes(qq)));
      app.querySelector("#mucount").textContent = `${rows.length} shown`;
      const chip = r => `<a class="mini" href="#${c.id}.vs.${r.b.id}">${portrait(r.b, "s")}${esc(r.b.name)} <span class="num muted">${signed(r.total)}</span></a>`;
      app.querySelector("#easy").innerHTML = rows.slice(0, 6).map(chip).join("") || '<span class="muted">None</span>';
      app.querySelector("#hard").innerHTML = rows.slice(-6).reverse().map(chip).join("") || '<span class="muted">None</span>';
      app.querySelector("#mubody").innerHTML = rows.map(r => `
        <tr>
          <td><a class="who" href="#${c.id}.vs.${r.b.id}">${portrait(r.b, "s")}${esc(r.b.name)}</a></td>
          <td class="muted">${r.x.lane ? r.x.shared.map(s => ROLES[s]).join(", ") : "Skirmishes"}</td>
          <td>${pill(r.verdict)}</td>
          <td class="edgecell">${edgeBar(r.total)}<span class="num muted">${signed(r.total)}</span></td>
          <td class="num">${r.difficulty}/10</td>
        </tr>`).join("");
    };
    laneBtn.addEventListener("click", () => { laneOnly = !laneOnly; laneBtn.setAttribute("aria-pressed", String(laneOnly)); draw(); });
    q.addEventListener("input", draw);
    draw();

    app.querySelector("#riot [data-lang]").addEventListener("change", e => {
      setLang(e.target.value);
      loadRiotChampion(c);
    });
    loadRiotChampion(c);
  }

  // Fills the champion page's title, lore and abilities from Riot's data once it arrives.
  let riotToken = 0;
  async function loadRiotChampion(c) {
    const token = ++riotToken;
    const body = app.querySelector("#riot-body");
    if (!body) return;
    body.dir = riotDir();
    const stale = () => token !== riotToken || !app.contains(body);
    try {
      const d = await ddChampion(c, riot.lang), v = riot.version;
      if (stale()) return;
      const title = app.querySelector("#riot-title");
      if (title) title.textContent = d.title;
      const ability = (key, name, text, icon, meta) => `
        <div class="ability">
          <span class="ic"><img src="${icon}" alt="" loading="lazy"></span>
          <div>
            <h3><span class="key">${key}</span>${esc(name)}</h3>
            <p>${multiline(riotText(text))}</p>
            ${meta.length ? `<p class="meta num">${meta.map(esc).join(" · ")}</p>` : ""}
          </div>
        </div>`;
      const spellMeta = s => {
        const m = [];
        if (s.cooldownBurn && s.cooldownBurn !== "0") m.push(`Cooldown ${s.cooldownBurn} s`);
        if (s.costBurn && s.costBurn !== "0") m.push(`Cost ${s.costBurn}`);
        if (/^[\d/]+$/.test(s.rangeBurn || "") && Math.max(...s.rangeBurn.split("/").map(Number)) < 5000 && s.rangeBurn !== "0") m.push(`Range ${s.rangeBurn}`);
        return m;
      };
      body.innerHTML = `
        <div class="panel lore"><p>${esc(d.lore)}</p></div>
        <div class="panel abilities">
          ${ability("P", d.passive.name, d.passive.description, `${DD}/cdn/${v}/img/passive/${d.passive.image.full}`, [])}
          ${d.spells.map((s, i) => ability("QWER"[i] || "", s.name, s.description, `${DD}/cdn/${v}/img/spell/${s.image.full}`, spellMeta(s))).join("")}
        </div>`;
    } catch (e) {
      if (stale()) return;
      body.innerHTML = `<p class="muted">Riot's champion data couldn't be loaded right now. The rest of this page doesn't depend on it.</p>`;
    }
  }

  /* ---------- Matchup ---------- */
  function viewMatchup(aId, bId) {
    const a = byId[aId], b = byId[bId];
    setNav("matchups", `${a.name} vs ${b.name}`);
    const res = E.score(a, b);
    const p = E.plan(res), r = E.risks(res), bv = E.buildVs(res);
    const ctx = res.x.lane
      ? `Lane matchup · ${res.x.shared.map(s => ROLES[s]).join(", ")}`
      : `${ROLES[a.roles[0]]} vs ${ROLES[b.roles[0]]} · you meet in skirmishes and teamfights`;
    const phaseName = ["Early", "Mid", "Late"];
    const phaseRow = (label, v) => `<div class="phase"><b>${label}</b>${tug(v, 1.4)}<span class="num">${signed(v)}</span></div>`;
    const topFactors = res.factors.slice(0, 7);
    app.innerHTML = `
      <form class="panel picker" id="pick">
        <label class="field-blue">You<input type="text" id="pa" list="champ-names" value="${esc(a.name)}" autocomplete="off"></label>
        <button type="button" class="swap" id="swap" aria-label="Swap sides">⇄ Swap</button>
        <label class="field-red">Enemy<input type="text" id="pb" list="champ-names" value="${esc(b.name)}" autocomplete="off"></label>
        <div class="items"><button type="submit" class="btn-primary">Show</button><button type="button" id="rand">Random</button></div>
      </form>

      <section class="panel section duel" style="--art-a:url('${splash(a)}');--art-b:url('${splash(b)}')">
        <div class="versus">
          <a class="side left" href="#${a.id}">${portrait(a, "m")}<span><span class="who-label">You</span><h2>${esc(a.name)}</h2><span class="muted">${esc(a.cls)} · ${esc(roleText(a))}</span></span></a>
          <span class="vs-badge">VS</span>
          <a class="side right" href="#${b.id}">${portrait(b, "m")}<span><span class="who-label">Enemy</span><h2>${esc(b.name)}</h2><span class="muted">${esc(b.cls)} · ${esc(roleText(b))}</span></span></a>
        </div>
        ${tug(res.total)}
        <div class="verdict">
          <h3>${esc(res.verdict.label)}</h3>
          <span>${pill(res.verdict)} <span class="num">Edge ${signed(res.total)}</span> · <span class="num">Difficulty ${res.difficulty}/10</span></span>
        </div>
        <p class="muted">${esc(ctx)}. One of ${fmt(TOTAL)} matchups.</p>
      </section>

      <div class="grid-2">
        <section class="panel section">
          <h2>By phase</h2>
          <div class="phase-rows">${phaseRow("Early", res.phases.e)}${phaseRow("Mid", res.phases.m)}${phaseRow("Late", res.phases.l)}</div>
          <p class="note">Blue is ${esc(a.name)}'s side of the bar, red is ${esc(b.name)}'s. ${res.x.lane ? "In a lane matchup the early game weighs the most." : "Without a shared lane, mid and late game weigh the most."}</p>
        </section>
        <section class="panel section">
          <h2>What decides it</h2>
          <div>${topFactors.map(f => {
            const peak = phaseName[f.ph.indexOf(Math.max(...f.ph))];
            return `<div class="factor"><span class="mark ${f.side > 0 ? "up" : "down"}" aria-label="${f.side > 0 ? "Favors you" : "Favors the enemy"}">${f.side > 0 ? "▲" : "▼"}</span><div>${esc(f.why)}<small>Matters most in the ${peak.toLowerCase()} game</small></div></div>`;
          }).join("") || '<p class="muted">No single factor stands out. This one comes down to execution.</p>'}</div>
        </section>
      </div>

      <section class="panel section">
        <h2>Game plan</h2>
        <div class="plan">
          <div class="plan-row"><b>Early</b><span>${esc(p.early)}</span></div>
          <div class="plan-row"><b>Mid</b><span>${esc(p.mid)}</span></div>
          <div class="plan-row"><b>Late</b><span>${esc(p.late)}</span></div>
          <div class="plan-row"><b>Ahead</b><span>${esc(p.ahead)}</span></div>
          <div class="plan-row"><b>Behind</b><span>${esc(p.behind)}</span></div>
        </div>
      </section>

      <section class="section">
        <h2>Risk limits in this matchup</h2>
        <div class="grid-2">
          <div class="panel box-go"><div class="box-title"><h3>Risks worth taking</h3></div>${list(r.go, "good")}</div>
          <div class="panel box-no"><div class="box-title"><h3>Don't do this</h3></div>${list(r.no, "bad")}</div>
        </div>
        <div class="panel grid-2">
          <div class="respect"><p class="eyebrow">Respect ${esc(b.name)}</p><p>${esc(b.th)}</p></div>
          <div class="punish"><p class="eyebrow">Punish ${esc(b.name)}</p><p>${esc(b.pw)}</p></div>
        </div>
      </section>

      <section class="section">
        <h2>Build for this matchup</h2>
        <div class="grid-2">
          ${buildCard(a)}
          <div class="panel build">
            <div class="build-label"><h3>Changes against ${esc(b.name)}</h3></div>
            <div class="adj">
              ${bv.items.map(i => `<div class="adj-row"><span>${itemChip(i.item, !i.vision)}</span><span>${esc(i.why)}</span></div>`).join("")}
              ${bv.boots ? `<div class="adj-row"><span>${itemChip(bv.boots.item)}</span><span>${esc(bv.boots.why)}</span></div>` : ""}
              ${bv.runes.map(x => `<div class="adj-row"><span class="item">${esc(x.rune)}</span><span>${esc(x.why)}</span></div>`).join("")}
              ${bv.spells.map(x => `<div class="adj-row"><span class="item">${esc(x.spell)}</span><span>${esc(x.why)}</span></div>`).join("")}
              ${!bv.items.length && !bv.boots && !bv.runes.length && !bv.spells.length ? `<p class="muted">No changes needed. Your standard build already handles ${esc(b.name)}.</p>` : ""}
            </div>
            ${(a.ob || []).length ? `<p class="note">Off-meta options for ${esc(a.name)}: ${a.ob.map(o => esc(o.n)).join(", ")}. See the <a href="#${a.id}">champion page</a>.</p>` : ""}
          </div>
        </div>
      </section>

      <p class="items">
        <a class="btn" href="#${b.id}.vs.${a.id}">See it from ${esc(b.name)}'s side</a>
        <a class="btn" href="#${a.id}">${esc(a.name)} profile</a>
        <a class="btn" href="#${b.id}">${esc(b.name)} profile</a>
      </p>`;

    const form = app.querySelector("#pick");
    wirePair(form, "#pa", "#pb");
    app.querySelector("#swap").addEventListener("click", () => { location.hash = `${b.id}.vs.${a.id}`; });
    app.querySelector("#rand").addEventListener("click", () => {
      const i = Math.floor(Math.random() * champs.length);
      let j = Math.floor(Math.random() * (champs.length - 1));
      if (j >= i) j++;
      location.hash = `${champs[i].id}.vs.${champs[j].id}`;
    });
  }

  /* ---------- Builds index ---------- */
  const bfilt = { role: "all", q: "" };
  function viewBuilds() {
    setNav("builds", "Builds");
    app.innerHTML = `
      <section class="section">
        <p class="eyebrow">Season 2026 item pool · patch ${PATCH}</p>
        <h1>Builds</h1>
        <p class="muted" style="max-width:65ch">The standard build and the off-meta options for every champion. Open any matchup to see how the build changes against a specific enemy.</p>
      </section>
      <section class="section">
        <div class="filters">
          ${["all", ...Object.keys(ROLES)].map(r => `<button type="button" class="chip-btn" data-brole="${r}" aria-pressed="${bfilt.role === r}">${r === "all" ? "All roles" : ROLES[r]}</button>`).join("")}
          <span class="spacer"></span>
          <input type="search" id="bq" placeholder="Filter by champion or item" aria-label="Filter builds" value="${esc(bfilt.q)}">
        </div>
        <div class="panel mu-table-wrap"><table class="mu-table b-table">
          <thead><tr><th>Champion</th><th>Runes</th><th>Core items</th><th>Off-meta</th></tr></thead>
          <tbody id="bbody"></tbody>
        </table></div>
      </section>`;
    const draw = () => {
      const q = bfilt.q.trim().toLowerCase();
      const rows = champs.filter(c => (bfilt.role === "all" || c.roles.includes(bfilt.role)) &&
        (!q || c.name.toLowerCase().includes(q) || [...c.b.core, ...c.b.sit, ...(c.ob || []).flatMap(o => o.i)].some(i => i.toLowerCase().includes(q))));
      app.querySelector("#bbody").innerHTML = rows.map(c => `
        <tr>
          <td><a class="who" href="#${c.id}">${portrait(c, "s")}${esc(c.name)}</a></td>
          <td>${esc(c.b.ru)}<br><span class="muted">${esc(c.b.ss)}</span></td>
          <td><div class="items">${c.b.core.map(i => itemChip(i, true)).join("")}${itemChip(c.b.bo)}</div></td>
          <td>${(c.ob || []).map(o => `<div><b>${esc(o.n)}</b><div class="items">${o.i.map(i => itemChip(i)).join("")}</div></div>`).join("")}</td>
        </tr>`).join("") || `<tr><td colspan="4" class="muted">Nothing matches that filter.</td></tr>`;
    };
    app.querySelectorAll("[data-brole]").forEach(btn => btn.addEventListener("click", () => {
      bfilt.role = btn.dataset.brole;
      app.querySelectorAll("[data-brole]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.brole === bfilt.role)));
      draw();
    }));
    app.querySelector("#bq").addEventListener("input", e => { bfilt.q = e.target.value; draw(); });
    draw();
  }

  /* ---------- Items ---------- */
  const ICATS = { all: "All items", completed: "Completed items", boots: "Boots", component: "Components", starter: "Starter and consumables" };
  const ICAT_TAG = { completed: "Completed", boots: "Boots", component: "Component", starter: "Starter" };
  const ifilt = { cat: "all", q: "", focus: null };
  // Clicking an item name in a build opens the item page filtered to that item.
  document.addEventListener("click", e => {
    const a = e.target.closest ? e.target.closest("a.item[data-item]") : null;
    if (a) { ifilt.focus = a.dataset.item; ifilt.cat = "all"; ifilt.q = ""; }
  });
  let itemsToken = 0;
  function viewItems() {
    setNav("items", "Items");
    app.innerHTML = `
      <section class="section">
        <p class="eyebrow">From Riot's official data · current patch</p>
        <h1>Items</h1>
        <p class="muted" style="max-width:65ch">Every item in the Summoner's Rift shop with its cost, stats and effects. Item names in any build on this site link here.</p>
      </section>
      <section class="section">
        <div class="filters" id="icats">
          ${Object.keys(ICATS).map(k => `<button type="button" class="chip-btn" data-icat="${k}" aria-pressed="${ifilt.cat === k}">${ICATS[k]}</button>`).join("")}
          <span class="spacer"></span>
          ${langToggle()}
        </div>
        <div class="filters">
          <input type="search" id="iq" placeholder="Search items" aria-label="Search items" value="${esc(ifilt.q)}">
          <span class="muted num" id="icount"></span>
        </div>
        <div class="item-grid" id="igrid"><p class="muted">Loading Riot's item data…</p></div>
      </section>`;
    const grid = app.querySelector("#igrid"), input = app.querySelector("#iq");
    const token = ++itemsToken;
    const stale = () => token !== itemsToken || !app.contains(grid);
    const draw = items => {
      const q = ifilt.q.trim().toLowerCase();
      const shown = items.filter(i => (ifilt.cat === "all" || i.cat === ifilt.cat) && (!q || i.name.toLowerCase().includes(q)));
      app.querySelector("#icount").textContent = `${shown.length} of ${items.length}`;
      grid.innerHTML = shown.map(i => `
        <article class="panel item-card">
          <div class="item-head">
            <span class="ic"><img src="${DD}/cdn/${riot.version}/img/item/${i.icon}" alt="" loading="lazy"></span>
            <div><h3>${esc(i.name)}</h3><span class="num gold">${fmt(i.gold)} gold</span> <span class="tag">${ICAT_TAG[i.cat]}</span></div>
          </div>
          ${i.plain ? `<p class="muted">${esc(i.plain)}</p>` : ""}
          ${i.text ? `<p class="item-text">${multiline(i.text)}</p>` : ""}
          ${i.from.length ? `<p class="note">Builds from: ${i.from.map(esc).join(", ")}</p>` : ""}
          ${i.into.length ? `<p class="note">Builds into: ${i.into.map(esc).join(", ")}</p>` : ""}
        </article>`).join("") || `<p class="muted">No item matches that search.</p>`;
    };
    const load = async () => {
      try {
        const items = await ddItems(riot.lang);
        if (ifilt.focus) {
          // Build names are English; find the same item in the chosen language by its id.
          const wanted = norm(ifilt.focus), en = await ddItems("en_US");
          const hit = en.find(i => i.key === wanted) || en.find(i => i.key.includes(wanted));
          const local = hit && items.find(i => i.id === hit.id);
          ifilt.q = local ? local.name : ifilt.focus;
          ifilt.focus = null;
          input.value = ifilt.q;
        }
        if (stale()) return;
        draw(items);
        input.oninput = () => { ifilt.q = input.value; draw(items); };
        app.querySelectorAll("[data-icat]").forEach(b => { b.onclick = () => {
          ifilt.cat = b.dataset.icat;
          app.querySelectorAll("[data-icat]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.icat === ifilt.cat)));
          draw(items);
        }; });
      } catch (e) {
        if (stale()) return;
        grid.innerHTML = `<p class="muted">Riot's item data couldn't be loaded right now. Try again in a moment.</p>`;
      }
    };
    app.querySelector("#icats [data-lang]").addEventListener("change", e => {
      setLang(e.target.value);
      ifilt.q = ""; input.value = "";
      grid.dir = riotDir();
      grid.innerHTML = `<p class="muted">Loading Riot's item data…</p>`;
      load();
    });
    grid.dir = riotDir();
    load();
  }

  /* ---------- Meta ---------- */
  const TIERS = { S: "Strongest picks", A: "Strong picks", B: "Solid picks", C: "Situational picks", D: "Need the right matchup" };
  const LANES = { top: "Top lane", jng: "Jungle", mid: "Mid lane", bot: "Bot lane", sup: "Support" };
  const PHASES = [["e", "early"], ["m", "mid"], ["l", "late"]];
  const mfilt = { role: "top", q: "" };
  function peak(c) {
    const best = Math.max(c.S.e, c.S.m, c.S.l);
    const at = PHASES.filter(([k]) => c.S[k] === best).map(([, name]) => name);
    return at.length === 3 ? "Even all game" : `Peaks ${at.join(" and ")}`;
  }
  function viewMeta(role) {
    mfilt.role = role;
    const rows = E.meta(role), ranked = rows.filter(r => r.main), lane = LANES[role];
    setNav("meta", `${lane} meta`);
    app.innerHTML = `
      <section class="intro art" ${artStyle(ranked[0].c)}>
        <div>
          <p class="eyebrow"><a href="#patches">Patch ${PATCH}</a> · Season 2026</p>
          <h1>Meta</h1>
          <p class="lede">The strongest picks in every lane, the runes and items each of them runs, and the opponents to pick them into or keep them away from. The tiers are this site's own estimate, not win rates.</p>
        </div>
        <div class="panel podium">
          <h3>Best in ${esc(lane)}</h3>
          ${ranked.slice(0, 3).map(r => `<div class="factor cnt">${portrait(r.c, "s")}<div><a href="#${r.c.id}"><b>${esc(r.c.name)}</b></a><small>${esc(r.c.st[0])}</small></div></div>`).join("")}
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>${esc(lane)} tier list</h2><span class="muted num" id="mcount"></span></div>
        <div class="filters">
          ${Object.keys(ROLES).map(r => `<button type="button" class="chip-btn" data-mrole="${r}" aria-pressed="${r === role}">${ROLES[r]}</button>`).join("")}
          <span class="spacer"></span>
          <input type="search" id="mq" placeholder="Filter by name" aria-label="Filter the tier list by champion name" value="${esc(mfilt.q)}">
        </div>
        <div class="panel meta-list" id="mlist"></div>
        <p class="note">A champion's rating is its average edge in this site's matchup ratings: half against the other ${esc(ROLES[role])} picks, half against everyone else in fights. S is the top tenth of the lane's own champions, A the next fifth, B the middle, C the fifth below it and D the bottom tenth. Good into and Hard into show up to three lane matchups the champion is favored in and up to three it is not. Flex picks mainly play another role, so they get a rating but no tier.</p>
      </section>`;

    const face = (r, o) => `<a class="face" href="#${r.c.id}.vs.${o.b.id}" title="${esc(`${o.b.name}: ${o.verdict.short}, edge ${signed(o.total)}`)}" aria-label="${esc(`${r.c.name} vs ${o.b.name}: ${o.verdict.short}`)}">${portrait(o.b, "xs")}</a>`;
    const none = '<span class="muted">None</span>';
    const row = r => {
      const c = r.c, b = c.b, home = ROLES[c.roles[0]];
      return `
        <li class="meta-row">
          <span class="rank num">${r.main ? r.rank : ""}</span>
          <a class="who" href="#${c.id}">${portrait(c, "s")}<span><b>${esc(c.name)}</b><small>${esc(c.cls)}${r.main ? "" : ` · mainly ${home}`}</small></span></a>
          <div class="rate">${edgeBar(r.rating, 0.7)}<span class="num">${signed(r.rating)}</span><small>${peak(c)}</small></div>
          <div class="bld">
            <p>${esc(b.ru)} <span class="muted">· ${r.main ? esc(b.ss) : `${home} build`}</span></p>
            <div class="items">${b.core.map(i => itemChip(i, true)).join("")}${itemChip(b.bo)}</div>
          </div>
          <div class="faces good"><span class="lbl">Good into</span>${r.best.map(o => face(r, o)).join("") || none}</div>
          <div class="faces hard"><span class="lbl">Hard into</span>${r.worst.map(o => face(r, o)).join("") || none}</div>
        </li>`;
    };
    const group = (badge, title, list) => list.length ? `
        <div class="tier-head">${badge}<h3>${title}</h3><span class="muted num">${list.length}</span></div>
        <ol class="meta-rows">${list.map(row).join("")}</ol>` : "";
    const draw = () => {
      const q = norm(mfilt.q);
      const shown = rows.filter(r => !q || norm(r.c.name).includes(q));
      app.querySelector("#mcount").textContent = `${shown.length} of ${rows.length}`;
      app.querySelector("#mlist").innerHTML = shown.length ? `
        <div class="meta-cols" aria-hidden="true"><span>#</span><span>Champion</span><span>Rating</span><span>Runes and core items</span><span>Good into</span><span>Hard into</span></div>
        ${Object.keys(TIERS).map(t => group(`<span class="tier t-${t}" aria-label="${t} tier">${t}</span>`, TIERS[t], shown.filter(r => r.tier === t))).join("")}
        ${group("", "Flex picks", shown.filter(r => !r.main))}`
        : `<p class="muted">No ${esc(ROLES[role])} champion matches that name.</p>`;
    };
    app.querySelectorAll("[data-mrole]").forEach(b => b.addEventListener("click", () => { location.hash = `meta.${b.dataset.mrole}`; }));
    app.querySelector("#mq").addEventListener("input", e => { mfilt.q = e.target.value; draw(); });
    draw();
  }

  /* ---------- Patches ---------- */
  // Summaries of Riot's patch notes, newest first (assets/patches.js).
  const PATCHES = window.RS_PATCHES || [];
  const KINDS = { buff: "Buffed", nerf: "Nerfed", adj: "Adjusted" };
  // Riot's picture server hands out a small copy on request; the link still opens the original.
  const smallPic = url => `${url}?fm=webp&w=1000&q=80`;
  const longDate = iso => new Date(iso + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  // On a champion's page: what the newest patch did to that champion, if anything.
  function patchTags(c) {
    const p = PATCHES[0];
    return p ? p.champs.filter(x => findChamp(x.who) === c).map(x => `<a class="tag k-${x.kind}" href="#patches">${KINDS[x.kind]} in ${esc(p.v)}</a>`).join("") : "";
  }
  function viewPatches() {
    setNav("patches", "Patch notes");
    const change = (x, lead) => `<div class="change">${lead}<span class="pill k-${x.kind}">${KINDS[x.kind]}</span><p>${esc(x.what)}</p></div>`;
    const champRow = x => {
      const c = findChamp(x.who);
      return change(x, c ? `<a class="who" href="#${c.id}">${portrait(c, "s")}<b>${esc(c.name)}</b></a>` : `<b class="who">${esc(x.who)}</b>`);
    };
    const itemRow = x => change(x, `<span class="who">${itemChip(x.who)}</span>`);
    const count = (p, kind, one, many) => { const k = p.champs.filter(x => x.kind === kind).length; return k ? [`${k} ${k === 1 ? one : many}`] : []; };
    const patch = (p, i) => `
      <details class="panel patch"${i ? "" : " open"}>
        <summary>
          <h2>Patch ${esc(p.v)}</h2>
          <span class="muted">${longDate(p.date)}</span>
          ${p.v === PATCH ? '<span class="tag">Current patch</span>' : ""}
          <span class="muted num counts-line">${[...count(p, "buff", "buff", "buffs"), ...count(p, "nerf", "nerf", "nerfs"), ...count(p, "adj", "adjusted", "adjusted")].join(" · ")}</span>
        </summary>
        <div class="patch-body">
          <div class="patch-top">
            <div class="section">
              <p class="patch-sum">${esc(p.sum)}</p>
              ${p.more.length ? `<h3>Also in this patch</h3>${list(p.more)}` : ""}
              <p><a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">Riot's full patch notes</a></p>
            </div>
            <figure class="patch-pic">
              <a href="${esc(p.img)}" target="_blank" rel="noopener"><img src="${esc(smallPic(p.img))}" alt="Riot's Patch Highlights picture for patch ${esc(p.v)}" width="1920" height="1080" loading="lazy" decoding="async"></a>
              <figcaption class="note">Patch Highlights picture by Riot Games. Select it to see it in full size.</figcaption>
            </figure>
          </div>
          ${p.champs.length ? `<h3>Champions</h3><div class="changes">${p.champs.map(champRow).join("")}</div>` : ""}
          ${p.items.length ? `<h3>Items</h3><div class="changes">${p.items.map(itemRow).join("")}</div>` : ""}
        </div>
      </details>`;
    app.innerHTML = `
      <section class="section">
        <p class="eyebrow">From Riot's patch notes, in short</p>
        <h1>Patch notes</h1>
        <p class="muted" style="max-width:65ch">What each patch changed on Summoner's Rift, in this site's own words, with Riot's Patch Highlights picture. For the full numbers, other game modes, skins and bug fixes, open Riot's notes from the button in each patch.</p>
      </section>
      <section class="section">${PATCHES.map(patch).join("") || '<p class="muted">No patch has been written up yet.</p>'}</section>`;
  }

  /* ---------- Router ---------- */
  let lastView = "";
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
    const m = h.match(/^([a-z]+)\.vs\.([a-z]+)$/);
    const lane = h === "meta" ? mfilt.role : (h.match(/^meta\.([a-z]+)$/) || [])[1];
    let view;
    if (m && byId[m[1]] && byId[m[2]] && m[1] !== m[2]) { view = h; viewMatchup(m[1], m[2]); }
    else if (h === "matchups") { view = h; viewMatchup(DEFAULT_PAIR[0], DEFAULT_PAIR[1]); }
    else if (h === "builds") { view = h; viewBuilds(); }
    else if (h === "items") { view = h; viewItems(); }
    else if (ROLES[lane]) { view = "meta"; viewMeta(lane); }
    else if (h === "patches") { view = h; viewPatches(); }
    else if (byId[h]) { view = h; viewChampion(h); }
    else { view = "champions"; viewChampions(); }
    if (view !== lastView) window.scrollTo(0, 0);
    lastView = view;
  }

  chrome();
  window.addEventListener("hashchange", route);
  route();
})();
