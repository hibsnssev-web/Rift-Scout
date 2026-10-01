/* Rift Scout matchup engine.
   Champion profiles live in assets/data/*.js and are pushed onto window.RS_DATA.

   Stat line (each 1-5):
     [early, mid, late, mobility, cc, sustain, burst, dps, durability, poke, waveclear]
   Kit flags:
     heal shield dash blink stealth untarg pct true skill point aa antiaa crit
     stack split engage peel global revive
   cb ("countered by"): { championId: "why that champion beats this one" }

   Each factor measures one side's edge over the other. A matchup score is
   factor(A,B) - factor(B,A), so B's view is always the exact mirror of A's. */
(function () {
  "use strict";

  const KEY = {
    "Wukong": "MonkeyKing", "Nunu & Willump": "Nunu", "Renata Glasc": "Renata",
    "Bel'Veth": "Belveth", "Cho'Gath": "Chogath", "Kai'Sa": "Kaisa", "Kha'Zix": "Khazix",
    "LeBlanc": "Leblanc", "Vel'Koz": "Velkoz", "K'Sante": "KSante", "Dr. Mundo": "DrMundo",
    "Rek'Sai": "RekSai", "Kog'Maw": "KogMaw"
  };
  const SLUG = { "Nunu & Willump": "nunu", "Renata Glasc": "renata" };

  const ROLES = { top: "Top", jng: "Jungle", mid: "Mid", bot: "Bot", sup: "Support" };
  const CLASSES = {
    ench: ["Enchanter", "controller"], catch: ["Catcher", "controller"],
    jugg: ["Juggernaut", "fighter"], diver: ["Diver", "fighter"],
    burst: ["Burst mage", "mage"], battle: ["Battle mage", "mage"], arty: ["Artillery mage", "mage"],
    mark: ["Marksman", "marksman"],
    assn: ["Assassin", "slayer"], skirm: ["Skirmisher", "slayer"],
    vang: ["Vanguard", "tank"], ward: ["Warden", "tank"],
    spec: ["Specialist", "specialist"]
  };
  const STATS = [
    ["e", "Early game"], ["m", "Mid game"], ["l", "Late game"], ["mob", "Mobility"],
    ["cc", "Crowd control"], ["sus", "Sustain"], ["bur", "Burst"], ["dps", "Sustained damage"],
    ["tank", "Durability"], ["poke", "Poke"], ["wave", "Waveclear"]
  ];
  const DAMAGE = { ad: "Physical", ap: "Magic", mix: "Mixed" };

  // How strongly one class's design preys on another in fights (1 = edge, 2 = strong edge).
  const BEATS = {
    assn: { arty: 2, burst: 1, mark: 2, ench: 2, catch: 1, battle: 1 },
    skirm: { jugg: 1, vang: 1, diver: 1, arty: 1, mark: 1 },
    diver: { arty: 2, mark: 1, burst: 1, ench: 1, battle: 1 },
    jugg: { vang: 1, ward: 1, diver: 1, assn: 1 },
    vang: { assn: 1, mark: 1, arty: 1, skirm: 1 },
    ward: { assn: 2, diver: 2, skirm: 1 },
    burst: { skirm: 1, jugg: 1, diver: 1 },
    battle: { jugg: 1, vang: 2, ward: 1, skirm: 1 },
    arty: { jugg: 2, vang: 1, battle: 2, ward: 1 },
    mark: { jugg: 2, vang: 2, ward: 1, battle: 1 },
    ench: { diver: 1, assn: 1 },
    catch: { ench: 2, mark: 1, arty: 1 }
  };
  const lc = c => c.cls.toLowerCase();
  const CLASS_WHY = {
    assn: (a, b) => `${a.name} is an assassin, and ${lc(b)}s like ${b.name} are exactly the targets assassins are built to reach and delete.`,
    skirm: (a, b) => `${a.name} is a skirmisher. ${cap(lc(b))}s like ${b.name} lose drawn-out duels against that kind of sustained damage.`,
    diver: (a, b) => `${a.name} dives the backline, and a ${lc(b)} like ${b.name} is the kind of target divers are designed to catch.`,
    jugg: (a, b) => `${a.name} is a juggernaut. ${b.name} can't kill ${a.name} fast enough to win a front-to-back brawl.`,
    vang: (a, b) => `${a.name} is an engage tank and lands on ${b.name} before ${b.name} gets to act.`,
    ward: (a, b) => `${a.name} is a warden. Peel and body-blocking shut down ${lc(b)}s like ${b.name}.`,
    burst: (a, b) => `${a.name}'s ranged burst punishes ${b.name} for having to walk up to deal damage.`,
    battle: (a, b) => `${a.name} is a battle mage. Sustained area damage melts ${lc(b)}s like ${b.name} who stand in it.`,
    arty: (a, b) => `${a.name} out-ranges ${b.name} by a wide margin and wears ${b.name} down before ${b.name} can reach.`,
    mark: (a, b) => `${a.name} kites ${b.name}. A protected marksman deals steady damage that a ${lc(b)} can't escape.`,
    ench: (a, b) => `${a.name}'s shields and heals undo the damage a ${lc(b)} like ${b.name} relies on.`,
    catch: (a, b) => `${a.name} picks off ${lc(b)}s like ${b.name} who lack escapes.`
  };
  const JOB = {
    ench: "In fights, stay behind your carry and spend shields and heals on whoever gets dived.",
    catch: "In fights, look for the one catch that starts a 5v4 and stay out of range until you land it.",
    jugg: "In fights, walk at the nearest enemy and drain everything around you. Let the enemy come to you.",
    diver: "In fights, wait for the enemy front line to use its CC, then dive the backline.",
    burst: "In fights, stay at max range and delete whoever steps forward first.",
    battle: "In fights, stand where your area damage covers the most enemies and keep casting.",
    arty: "In fights, poke from max range before the fight starts and never be the closest target.",
    mark: "In fights, hit whatever is in range and let your front line hold the space in front of you.",
    assn: "In fights, flank from fog, wait for key cooldowns, then kill the carry.",
    skirm: "In fights, pressure side lanes and join from the flank once the enemy has used its CC.",
    vang: "In fights, find the engage that catches the most enemies, then peel for your carries.",
    ward: "In fights, stay next to your carry and punish anyone who dives them.",
    spec: "In fights, play to your kit's strengths and let your team set the tempo."
  };

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  function prep(raw) {
    const S = {};
    STATS.forEach(([k], i) => { S[k] = raw.s[i]; });
    const F = {};
    (raw.f || "").split(/\s+/).filter(Boolean).forEach(t => { F[t] = true; });
    const id = SLUG[raw.n] || raw.n.toLowerCase().replace(/[^a-z]/g, "");
    const key = KEY[raw.n] || raw.n.replace(/[^A-Za-z]/g, "");
    const roles = raw.r.split(/\s+/);
    const initials = raw.n.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean)
      .map(w => w[0]).join("").slice(0, 2).toUpperCase() || raw.n.slice(0, 2);
    return Object.assign({}, raw, {
      name: raw.n, id, key, S, F, roles, initials,
      melee: raw.rg <= 300,
      cls: CLASSES[raw.c][0], group: CLASSES[raw.c][1],
      dmg: DAMAGE[raw.d], cb: raw.cb || {}
    });
  }

  const champs = (window.RS_DATA || []).map(prep).sort((x, y) => x.name.localeCompare(y.name));
  const byId = {};
  champs.forEach(c => { byId[c.id] = c; });

  function context(a, b) {
    const shared = a.roles.filter(r => b.roles.includes(r));
    return { lane: shared.length > 0, shared };
  }

  // Each factor returns a's edge over b as phase weights (e/m/l) and a reason, or null.
  const FACTORS = [
    (a, b) => {
      const d = a.S.e - b.S.e;
      if (d < 1) return null;
      return { k: "early", e: 0.3 * d, m: 0.08 * d, l: 0, why: `${a.name} has the stronger early game. The first levels and first item are ${a.name}'s window.` };
    },
    (a, b) => {
      const d = a.S.m - b.S.m;
      if (d < 1) return null;
      return { k: "mid", e: 0, m: 0.3 * d, l: 0.05 * d, why: `${a.name} spikes harder at two to three items and wins more of the mid-game skirmishes around objectives.` };
    },
    (a, b) => {
      const d = a.S.l - b.S.l;
      if (d < 1) return null;
      return { k: "late", e: 0, m: 0, l: 0.35 * d, why: `${a.name} outscales ${b.name}. The longer the game goes, the more it tilts toward ${a.name}.` };
    },
    (a, b, x) => {
      if (!x.lane || a.melee || !b.melee) return null;
      let v = 1.0;
      if (b.S.mob >= 4) v *= 0.55;
      if (b.S.sus >= 4) v *= 0.8;
      const note = b.S.mob >= 4 ? ` ${b.name}'s mobility shortens that gap, so the edge is smaller than it looks.` : "";
      return { k: "range", e: v, m: v * 0.3, l: 0, why: `${a.name} is ranged (${a.rg}) and ${b.name} is melee. Every last hit ${b.name} walks up for costs health.${note}` };
    },
    (a, b, x) => {
      if (!x.lane || a.melee || b.melee) return null;
      const d = a.rg - b.rg;
      if (d < 75) return null;
      const v = Math.min(0.5, d / 300);
      return { k: "range2", e: v, m: v * 0.4, l: v * 0.3, why: `${a.name} outranges ${b.name} (${a.rg} vs ${b.rg} attack range), so ${a.name} gets free autos in most trades.` };
    },
    (a, b, x) => {
      if (a.S.poke < 4) return null;
      let v = (a.S.poke - 3) * 0.35 + 0.1 - Math.max(0, b.S.sus - 3) * 0.25;
      if (b.S.mob >= 4 && a.F.skill) v -= 0.1;
      if (v <= 0.05) return null;
      return x.lane
        ? { k: "poke", e: v, m: v * 0.6, l: v * 0.4, why: `${a.name}'s poke chunks ${b.name} before any fight starts, and ${b.name} has ${b.S.sus <= 2 ? "almost no" : "limited"} sustain to undo it.` }
        : { k: "poke", e: v * 0.2, m: v * 0.5, l: v * 0.5, why: `${a.name} can siege and poke ${b.name}'s team down before a fight starts.` };
    },
    (a, b, x) => {
      if (a.S.sus < 4 || b.S.poke < 4) return null;
      return { k: "sustainpoke", e: x.lane ? 0.35 : 0.1, m: 0.15, l: 0, why: `${a.name} heals off ${b.name}'s poke, so ${b.name} can't win just by chipping away.` };
    },
    (a, b) => {
      if (a.S.cc < 4) return null;
      if (!["assn", "diver", "skirm"].includes(b.c)) return null;
      const v = 0.25 + (a.F.point ? 0.15 : 0);
      return { k: "lockdown", e: v * 0.6, m: v, l: v, why: `${a.name} has ${a.F.point ? "point-and-click" : "heavy"} crowd control. ${b.name} has to dive in to deal damage, and one CC mid-dive usually ends the play.` };
    },
    (a, b) => {
      if (a.S.cc - b.S.cc < 3 || ["assn", "diver", "skirm"].includes(b.c)) return null;
      return { k: "ccgap", e: 0.1, m: 0.2, l: 0.2, why: `${a.name} brings far more crowd control. In teamfights ${b.name} has little answer to being locked down.` };
    },
    (a, b) => {
      if (a.S.mob < 4 || !b.F.skill) return null;
      return { k: "dodge", e: 0.2, m: 0.25, l: 0.2, why: `${b.name} relies on skillshots, and ${a.name}'s mobility makes them hard to land. Every miss is a free trade window.` };
    },
    (a, b) => {
      if (!(a.F.dash || a.F.blink) || a.S.mob < 3 || b.melee || b.S.mob > 2) return null;
      return { k: "gapclose", e: 0.15, m: 0.3, l: 0.25, why: `${b.name} is an immobile ranged champion. Once ${a.name} closes the gap, ${b.name} has no dash to get away.` };
    },
    (a, b, x) => {
      if (x.lane || a.melee || !b.melee || b.S.mob > 2) return null;
      return { k: "kite", e: 0, m: 0.25, l: 0.3, why: `${b.name} is melee with little mobility, so ${a.name} can kite ${b.name} in open fights.` };
    },
    (a, b) => {
      if (a.S.bur < 4 || b.S.tank > 2) return null;
      const v = 0.2 + 0.15 * (a.S.bur - 3) + 0.1 * (2 - b.S.tank);
      return { k: "burst", e: v * 0.5, m: v, l: v * 0.8, why: `${a.name}'s burst can kill ${b.name} in one rotation. ${b.name} has little health or defensive tools to survive it.` };
    },
    (a, b) => {
      if (a.S.tank < 4 || b.S.bur < 4 || b.S.dps >= 4) return null;
      return { k: "outlast", e: 0.15, m: 0.35, l: 0.35, why: `${b.name} is built to burst targets down, and ${a.name} is too tanky for that. Once the combo is spent, ${a.name} is still standing.` };
    },
    (a, b) => {
      if (!(a.F.pct || a.F.true) || b.S.tank < 4) return null;
      const kind = a.F.pct && a.F.true ? "max-health and true" : a.F.pct ? "max-health" : "true";
      return { k: "shred", e: 0.1, m: 0.3, l: 0.45, why: `${a.name} deals ${kind} damage, which cuts straight through ${b.name}'s tankiness.` };
    },
    (a, b, x) => {
      if (a.S.sus < 4 || b.S.sus > 2 || !(x.lane || (a.melee && b.melee))) return null;
      return { k: "sustain", e: 0.3, m: 0.25, l: 0.1, why: `${a.name} heals through extended trades and ${b.name} can't. Long fights favor ${a.name}.` };
    },
    (a, b, x) => {
      if (!x.lane || !a.melee || a.S.dps < 4 || b.S.dps > 3 || b.S.tank >= 4) return null;
      return { k: "duel", e: 0.15, m: 0.25, l: 0.1, why: `In a straight 1v1, ${a.name} out-damages ${b.name} over time. The longer a trade lasts, the better it gets for ${a.name}.` };
    },
    (a, b) => {
      if (!a.F.antiaa || !b.F.aa) return null;
      return { k: "antiaa", e: 0.3, m: 0.25, l: 0.2, why: `${a.name}'s kit blocks or dodges auto-attacks, and auto-attacks are most of ${b.name}'s damage.` };
    },
    (a, b) => {
      const w = (BEATS[a.c] || {})[b.c] || 0;
      if (!w) return null;
      return { k: "class", e: 0.05 * w, m: 0.2 * w, l: 0.25 * w, why: CLASS_WHY[a.c](a, b) };
    },
    (a, b) => {
      if (!a.F.stack || b.F.stack) return null;
      return { k: "stack", e: 0, m: 0.05, l: 0.3, why: `${a.name} stacks power without a cap. Every extra minute raises ${a.name}'s ceiling.` };
    },
    (a, b, x) => {
      if (!x.lane || a.S.wave < 4 || b.S.wave > 2) return null;
      return { k: "wave", e: 0.15, m: 0.2, l: 0.05, why: `${a.name} clears waves much faster, so ${a.name} gets to move first to the river, the jungle and the side lanes.` };
    },
    (a, b, x) => {
      if (!a.F.split || b.F.split || !x.lane) return null;
      return { k: "split", e: 0, m: 0.2, l: 0.15, why: `${a.name} is the stronger split-pusher. Once lanes break, ${a.name} can take a side lane and force ${b.name}'s team to answer.` };
    },
    (a, b) => {
      if (!a.F.global || b.F.global) return null;
      return { k: "global", e: 0.05, m: 0.15, l: 0.1, why: `${a.name}'s global pressure means ${a.name} can join fights across the map that ${b.name} can't reach in time.` };
    },
    (a, b) => {
      if (!a.F.revive) return null;
      return { k: "revive", e: 0.1, m: 0.15, l: 0.15, why: `${a.name} can cheat death once. ${b.name} effectively has to win the all-in twice.` };
    },
    (a, b) => {
      if (!a.F.untarg || !(b.F.point || b.S.bur >= 4)) return null;
      return { k: "untarg", e: 0.15, m: 0.2, l: 0.2, why: `${a.name} can go untargetable or invulnerable to dodge ${b.name}'s key damage or CC. Timed well, ${b.name}'s all-in hits nothing.` };
    },
    (a, b) => {
      if (!a.F.stealth || b.F.stealth) return null;
      return { k: "stealth", e: 0.1, m: 0.2, l: 0.1, why: `${a.name} has stealth. Without Control Wards and Oracle Lens, ${b.name} is fighting half-blind.` };
    },
    (a, b) => {
      const r = b.cb[a.id];
      if (!r) return null;
      return { k: "counter", e: 0.7, m: 0.45, l: 0.3, why: `${a.name} is a known counter to ${b.name}. ${r}` };
    }
  ];

  const LANE_W = [0.45, 0.35, 0.2];
  const TEAM_W = [0.2, 0.4, 0.4];
  const T_EVEN = 0.3, T_HARD = 0.85;

  const weigh = (f, W) => f.e * W[0] + f.m * W[1] + f.l * W[2];

  function verdict(total, a, b) {
    if (total >= T_HARD) return { key: "hard", label: `${a.name} hard-counters ${b.name}`, short: "Hard counter" };
    if (total >= T_EVEN) return { key: "fav", label: `${a.name} is favored`, short: "Favored" };
    if (total > -T_EVEN) return { key: "even", label: "Even matchup", short: "Even" };
    if (total > -T_HARD) return { key: "unf", label: `${b.name} is favored`, short: "Unfavored" };
    return { key: "ctr", label: `${b.name} hard-counters ${a.name}`, short: "Countered" };
  }

  const cache = new Map();
  function score(a, b) {
    const ck = a.id + ">" + b.id;
    if (cache.has(ck)) return cache.get(ck);
    const x = context(a, b);
    const W = x.lane ? LANE_W : TEAM_W;
    const factors = [];
    const phases = { e: 0, m: 0, l: 0 };
    FACTORS.forEach(fn => {
      const mine = fn(a, b, x);
      const theirs = fn(b, a, x);
      [[mine, 1], [theirs, -1]].forEach(([f, side]) => {
        if (!f) return;
        phases.e += side * f.e; phases.m += side * f.m; phases.l += side * f.l;
        factors.push({ k: f.k, side, why: f.why, w: weigh(f, W), ph: [f.e, f.m, f.l] });
      });
    });
    factors.sort((p, q) => q.w - p.w);
    const total = weigh(phases, W);
    const res = {
      a, b, x, W, phases, total, factors,
      verdict: verdict(total, a, b),
      difficulty: Math.max(1, Math.min(10, Math.round(5.5 - total * 3.2)))
    };
    cache.set(ck, res);
    return res;
  }

  const T = 0.25;
  const hasF = (res, k, side) => res.factors.some(f => f.k === k && f.side === side);

  function plan(res) {
    const { a, b, x, phases: p } = res;
    let early;
    if (x.lane) {
      early = p.e > T
        ? `You win the early lane. Trade hard from level 1 to 3, deny ${b.name} contested last hits and push for plates. Recall on a lead, not before.`
        : p.e < -T
          ? `${b.name} wins the early lane. Give up contested last hits, farm near your tower if you have to, and ward the river before you trade. ${b.name} will overextend to press the lead, which sets up ganks for your jungler.`
          : `The early lane is even, and trades are decided by cooldowns. Trade when ${b.name}'s key spell is down and back off when yours is.`;
    } else {
      early = p.e > T
        ? `You don't share a lane, so you meet ${b.name} in early skirmishes and river fights. You win those, so contest scuttle, early dragons and Voidgrubs with your team.`
        : p.e < -T
          ? `You don't share a lane. ${b.name} is stronger in early skirmishes, so avoid 1v1s before your first item and fight next to your own laners.`
          : `You don't share a lane. Early skirmishes between you are close; the side with lane priority and vision wins them.`;
    }
    const mid = (p.m > T
      ? `Your mid game is stronger. Force plays around dragon and Baron while your item spikes beat ${b.name}'s.`
      : p.m < -T
        ? `${b.name} spikes first in the mid game. Don't face-check brush, trade objectives on the other side of the map, and fight only with a numbers advantage.`
        : `The mid game is close. Vision and picks decide it.`) + " " + JOB[a.c];
    const late = p.l > T
      ? `You outscale ${b.name}. Stall: clear waves, skip coin-flip fights, and take the big fight once your build is complete.`
      : p.l < -T
        ? `${b.name} outscales you. Your team should end before about 30 minutes: group, siege towers and start Baron the moment it's safe.`
        : `Neither side outscales hard. Late fights come down to who gets caught first.`;
    const ahead = a.S.l < b.S.l
      ? `Snowball now. Your lead fades as ${b.name} scales, so turn kills into towers, dragons and Baron quickly.`
      : `Protect the lead. You also scale at least as well as ${b.name}, so don't throw it on risky dives. Take safe objectives and keep vision.`;
    const behind = a.S.l > b.S.l
      ? `Don't fight ${b.name}. Farm safely, match waves and wait for items. You outscale, so time is on your side.`
      : `Play for your team. Ward, move for assists and don't die to ${b.name} again. Pick up defensive items from the build section below.`;
    return { early, mid, late, ahead, behind };
  }

  function risks(res) {
    const { a, b, x, phases: p } = res;
    const go = [], no = [];
    if (x.lane && p.e > T) go.push(`All-in at levels 2 to 3 when ${b.name}'s key cooldown is down. You win the early exchanges.`);
    if (hasF(res, "burst", 1)) go.push(`Commit when ${b.name} drops below about half health. Your combo finishes the job.`);
    if (hasF(res, "lockdown", 1)) go.push(`Hold your crowd control until ${b.name} dashes in, then punish the dive.`);
    if (hasF(res, "range", 1)) go.push(`Auto ${b.name} every time ${b.name} walks up to last hit.`);
    if (hasF(res, "sustain", 1)) go.push(`Take long trades. You heal back and ${b.name} doesn't.`);
    if (a.go && a.go[0]) go.push(a.go[0]);
    if (x.lane && p.e < -T) no.push(`Don't take extended trades before your first item. ${b.name} wins them.`);
    if (hasF(res, "burst", -1)) no.push(`Don't stand in ${b.name}'s range below 60% health. One combo can kill you.`);
    if (b.S.cc >= 4) no.push(`Don't walk forward without vision. One crowd control from ${b.name} starts a dive on you.`);
    if (hasF(res, "late", -1)) no.push(`Don't let the game drag. Every item ${b.name} completes makes the late game worse for you.`);
    if (a.no && a.no[0]) no.push(a.no[0]);
    return { go: go.slice(0, 4), no: no.slice(0, 4) };
  }

  const ANTIHEAL = { adb: "Chempunk Chainsword", adA: "Chempunk Chainsword", crit: "Mortal Reminder", onhit: "Mortal Reminder", apb: "Morellonomicon", apd: "Morellonomicon", apa: "Morellonomicon", apf: "Morellonomicon", tank: "Thornmail", ench: "Oblivion Orb" };
  const ANTITANK = { adb: "Black Cleaver", adA: "Serylda's Grudge", crit: "Lord Dominik's Regards", onhit: "Blade of the Ruined King", apb: "Void Staff", apd: "Liandry's Torment", apa: "Void Staff", apf: "Liandry's Torment", tank: "Hollow Radiance" };
  const VS_AD_BURST = { adb: "Death's Dance", adA: "Guardian Angel", crit: "Guardian Angel", onhit: "Guardian Angel", apb: "Zhonya's Hourglass", apd: "Zhonya's Hourglass", apa: "Zhonya's Hourglass", apf: "Zhonya's Hourglass", tank: "Frozen Heart", ench: "Locket of the Iron Solari" };
  const VS_AP_BURST = { adb: "Maw of Malmortius", adA: "Maw of Malmortius", crit: "Maw of Malmortius", onhit: "Wit's End", apb: "Banshee's Veil", apd: "Banshee's Veil", apa: "Banshee's Veil", apf: "Banshee's Veil", tank: "Force of Nature", ench: "Locket of the Iron Solari" };
  const VS_CC = { crit: "Mercurial Scimitar", onhit: "Mercurial Scimitar", ench: "Mikael's Blessing", apb: "Banshee's Veil", apa: "Banshee's Veil" };
  const AP = new Set(["apb", "apd", "apa", "apf"]);

  function buildVs(res) {
    const { a, b, x } = res;
    const bt = a.bt;
    const items = [];
    const add = (item, why) => { if (item && !items.some(i => i.item === item)) items.push({ item, why }); };

    if (b.F.heal) add(ANTIHEAL[bt], `${b.name} heals a lot. Grievous Wounds cuts that healing, so buy the component early.`);
    if (b.S.tank >= 4) add(ANTITANK[bt], `${b.name} is tanky. This gives you the armor or magic penetration and shred to actually kill ${b.name}.`);
    if ((b.d === "ad" || b.d === "mix") && b.S.bur >= 4) add(VS_AD_BURST[bt], `${b.name} bursts with physical damage. This keeps you alive through the combo.`);
    if ((b.d === "ap" || b.d === "mix") && b.S.bur >= 4) add(VS_AP_BURST[bt], `${b.name}'s burst is magic damage. This absorbs the combo and buys you time to answer.`);
    if (b.S.cc >= 4) add(VS_CC[bt], `${b.name} has heavy crowd control. This lets you escape or cleanse the lockdown.`);
    if (b.F.aa && b.d === "ad" && b.S.dps >= 4) {
      if (bt === "tank") add(b.F.crit ? "Randuin's Omen" : "Frozen Heart", `${b.name} deals most of their damage with auto-attacks. This cuts that damage down.`);
      if (bt === "adb") add("Frozen Heart", `${b.name} deals most of their damage with auto-attacks. Armor and the attack-speed slow blunt that.`);
      if (AP.has(bt)) add("Zhonya's Hourglass", `Armor and a stasis to wait out ${b.name}'s auto-attack damage.`);
    }
    if (b.F.shield && bt === "adA") add("Serpent's Fang", `${b.name} relies on shields. Serpent's Fang cuts them down so your burst lands in full.`);
    if (b.S.mob >= 4 && (bt === "apd" || bt === "apf" || bt === "apb")) add("Rylai's Crystal Scepter", `${b.name} is very mobile. Rylai's slows make every spell a chase tool.`);
    if (b.S.tank <= 2 && b.S.bur >= 3 && bt === "tank") add("Thornmail", `${b.name} has to hit you to deal damage. Thornmail punishes that and cuts ${b.name}'s healing.`);

    let boots = null;
    if (b.S.cc >= 4) boots = { item: "Mercury's Treads", why: `Tenacity shortens ${b.name}'s crowd control${b.d !== "ad" ? " and the magic resist blunts their damage" : ""}.` };
    else if (b.d === "ad" && (b.F.aa || b.S.dps >= 4)) boots = { item: "Plated Steelcaps", why: `${b.name} deals auto-attack damage. Steelcaps block part of every hit.` };
    else if (b.d === "ap" && b.S.bur >= 4) boots = { item: "Mercury's Treads", why: `Magic resist and tenacity against ${b.name}'s burst.` };

    const runes = [];
    if (x.lane && b.S.poke >= 4) runes.push({ rune: "Second Wind (Resolve)", why: `Heals back ${b.name}'s poke between trades.` });
    if (x.lane && b.S.bur >= 4) runes.push({ rune: "Bone Plating (Resolve)", why: `Soaks the first few hits of ${b.name}'s all-in combo.` });
    if (b.S.cc >= 4) runes.push({ rune: "Unflinching (Resolve)", why: `Extra tenacity and slow resist against ${b.name}'s lockdown.` });
    if (b.S.tank >= 4) runes.push({ rune: "Cut Down (Precision)", why: `More damage against ${b.name}'s bigger health bar.` });
    if (x.lane && b.d === "ap" && b.S.bur >= 4 && AP.has(bt)) runes.push({ rune: "Nullifying Orb (Sorcery)", why: `A magic shield that eats the start of ${b.name}'s burst.` });

    const spells = [];
    const role = x.lane ? x.shared[0] : a.roles[0];
    if ((role === "bot" || role === "sup") && (b.c === "assn" || b.c === "diver")) spells.push({ spell: "Exhaust", why: `${b.name} dives your carry. Exhaust on the dive wins the fight.` });
    if (bt === "crit" && b.F.point && b.S.cc >= 4) spells.push({ spell: "Cleanse", why: `${b.name}'s point-and-click CC is how you die. Cleanse it.` });
    if (x.lane && res.phases.e > T && role !== "jng" && role !== "sup") spells.push({ spell: "Ignite", why: `You win the early lane, so Ignite converts that into kills.` });
    if (x.lane && role === "mid" && b.c === "assn" && AP.has(bt)) spells.push({ spell: "Barrier", why: `Survives ${b.name}'s level 6 all-in.` });
    if (b.F.stealth) items.push({ item: "Oracle Lens + Control Wards", why: `${b.name} uses stealth. Sweep and ward where ${b.name} likes to hide.`, vision: true });

    return { items: items.slice(0, 5), boots, runes: runes.slice(0, 3), spells: spells.slice(0, 2) };
  }

  function rankFor(a) {
    return champs.filter(b => b.id !== a.id).map(b => score(a, b)).sort((p, q) => q.total - p.total);
  }

  function countersOf(a) {
    // Champions that list a in their "countered by" profile: a beats them.
    return champs.filter(b => b.cb[a.id]).map(b => ({ c: b, why: b.cb[a.id] }));
  }

  window.RiftEngine = { champs, byId, ROLES, CLASSES, STATS, score, plan, risks, buildVs, rankFor, countersOf, T_EVEN, T_HARD };
})();
