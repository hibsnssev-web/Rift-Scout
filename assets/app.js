/* Rift Scout: views and routing. Routes are plain hash tokens:
   #champions, #matchups, #builds, #<championId>, #<championId>.vs.<championId> */
(function () {
  "use strict";
  const E = window.RiftEngine;
  const { champs, byId, ROLES, STATS } = E;
  const app = document.getElementById("app");
  const TOTAL = champs.length * (champs.length - 1);
  const BUILDS = champs.reduce((n, c) => n + 1 + (c.ob || []).length, 0);
  const GROUPS = { controller: "Controller", fighter: "Fighter", mage: "Mage", marksman: "Marksman", slayer: "Slayer", tank: "Tank", specialist: "Specialist" };
  const DEFAULT_PAIR = ["ahri", "zed"];

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
    if (e.target.tagName === "IMG" && e.target.parentElement && e.target.parentElement.classList.contains("pt")) e.target.remove();
  }, true);
  const pill = v => `<span class="pill v-${v.key}">${esc(v.short)}</span>`;
  function edgeBar(total) {
    const w = Math.min(50, Math.abs(total) / 1.6 * 50);
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
    footer.innerHTML = `<p>Matchup ratings come from the champion profiles on this site and a rules-based model. They are not win-rate statistics. Builds use the Season 2026 item pool as of patch 26.19. Rift Scout isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.</p>`;
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
      <section class="intro">
        <div>
          <p class="eyebrow">Patch 26.19 · Season 2026</p>
          <h1>Every champion. Every matchup.</h1>
          <p class="lede">Strengths, weaknesses, risk limits and builds for all ${champs.length} champions, plus a breakdown of each of the ${fmt(TOTAL)} ranked matchups. Mirror matchups are left out because Ranked doesn't allow them.</p>
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
        <div class="kv"><span>Core, in order</span><div class="items">${b.core.map((i, n) => `${n ? '<span class="arrow" aria-hidden="true">→</span>' : ""}<span class="item core">${esc(i)}</span>`).join("")}</div></div>
        <div class="kv"><span>Situational</span><div class="items">${b.sit.map(i => `<span class="item">${esc(i)}</span>`).join("")}</div></div>
      </div>`;
  }
  const offCard = o => `
      <div class="panel build offmeta">
        <div class="build-label"><h3>${esc(o.n)}</h3><span class="tag">Off-meta</span></div>
        <div class="items">${o.i.map((i, n) => `${n ? '<span class="arrow" aria-hidden="true">→</span>' : ""}<span class="item">${esc(i)}</span>`).join("")}</div>
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
      <section class="champ-head">
        ${portrait(c, "l")}
        <div>
          <p class="eyebrow">${esc(c.cls)}</p>
          <h1>${esc(c.name)}</h1>
          <div class="tags">
            ${c.roles.map(r => `<span class="tag">${ROLES[r]}</span>`).join("")}
            <span class="tag">${esc(c.dmg)} damage</span>
            <span class="tag">${c.melee ? "Melee" : "Ranged"} · <span class="num">${c.rg}</span></span>
          </div>
        </div>
        <div class="curve">${curve(c)}</div>
      </section>

      <section class="section">
        <div class="stats">${STATS.slice(3).map(([k, label]) => `<div class="stat"><span>${label}</span>${pips(c.S[k])}</div>`).join("")}</div>
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

      <section class="panel section">
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
              ${bv.items.map(i => `<div class="adj-row"><span class="item ${i.vision ? "" : "core"}">${esc(i.item)}</span><span>${esc(i.why)}</span></div>`).join("")}
              ${bv.boots ? `<div class="adj-row"><span class="item">${esc(bv.boots.item)}</span><span>${esc(bv.boots.why)}</span></div>` : ""}
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
        <p class="eyebrow">Season 2026 item pool · patch 26.19</p>
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
          <td><div class="items">${c.b.core.map(i => `<span class="item core">${esc(i)}</span>`).join("")}<span class="item">${esc(c.b.bo)}</span></div></td>
          <td>${(c.ob || []).map(o => `<div><b>${esc(o.n)}</b><div class="items">${o.i.map(i => `<span class="item">${esc(i)}</span>`).join("")}</div></div>`).join("")}</td>
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

  /* ---------- Router ---------- */
  let lastView = "";
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
    const m = h.match(/^([a-z]+)\.vs\.([a-z]+)$/);
    let view;
    if (m && byId[m[1]] && byId[m[2]] && m[1] !== m[2]) { view = h; viewMatchup(m[1], m[2]); }
    else if (h === "matchups") { view = h; viewMatchup(DEFAULT_PAIR[0], DEFAULT_PAIR[1]); }
    else if (h === "builds") { view = h; viewBuilds(); }
    else if (byId[h]) { view = h; viewChampion(h); }
    else { view = "champions"; viewChampions(); }
    if (view !== lastView) window.scrollTo(0, 0);
    lastView = view;
  }

  chrome();
  window.addEventListener("hashchange", route);
  route();
})();
