/* Champion profiles: Nocturne to Olaf. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Nocturne", r: "jng", c: "assn", bt: "adb", d: "ad", rg: 125,
  s: [3, 5, 4, 4, 3, 3, 4, 4, 3, 1, 4], f: "dash shield",
  th: "Paranoia (R) cuts everyone's vision and flies him onto a target. Shroud of Darkness (W) blocks a spell, and Unspeakable Horror (E) fears if you stay tethered.",
  pw: "Before level 6 he's an average duelist. Once R is used, he has no way to reach a far target.",
  st: ["R dives from very long range and blinds the enemy team", "Spell shield blocks CC", "Fear punishes anyone who stays close"],
  wk: ["Weak before level 6", "Tethered fear can be broken by walking away", "Committed after R"],
  go: ["Paranoia onto an isolated carry", "Spell shield their key CC, then fear"],
  no: ["Don't R into a grouped team with no follow-up", "Don't waste Shroud on minor spells"],
  sit: [["Ahead", "Dive side lanes with R."], ["Behind", "Farm and look for R picks."], ["Into CC", "Spell shield the key CC."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Nocturne", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot R build." },
    { n: "Tank Nocturne", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line dive." }
  ],
  cb: { rammus: "He tanks Nocturne's burst and taunts him.", poppy: "Her stun catches him mid-dive.", warwick: "Sustain and suppression win the duel.", jax: "Counter Strike dodges his autos." }
},
{
  n: "Nunu & Willump", r: "jng", c: "vang", bt: "apf", d: "ap", rg: 125,
  s: [3, 4, 4, 4, 4, 4, 3, 2, 4, 2, 4], f: "heal engage",
  th: "Biggest Snowball Ever! (W) rolls into a knock-up, and Absolute Zero (R) deals huge damage if he finishes the channel.",
  pw: "His snowball is slow to turn. Absolute Zero is channeled, so hard CC cancels it.",
  st: ["Consume (Q) secures objectives and heals", "Snowball ganks from anywhere", "R zone wins fights in chokes"],
  wk: ["Snowball is easy to dodge in the open", "R can be interrupted", "Low damage without AP"],
  go: ["Snowball a target from fog", "R a choke where enemies can't escape"],
  no: ["Don't R where enemies can walk out", "Don't snowball into CC"],
  sit: [["Ahead", "Roam and snowball lanes."], ["Behind", "Secure objectives with Q."], ["Into poke", "Engage with W."]],
  b: { ru: "Phase Rush · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Kaenic Rookern", "Force of Nature", "Thornmail", "Liandry's Torment"] },
  ob: [
    { n: "AP Nunu", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burst R build." },
    { n: "Support Nunu", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support." }
  ],
  cb: { kindred: "She kites him and invades.", nidalee: "She out-clears and invades him.", graves: "He invades and bursts him.", lillia: "She kites him and puts him to sleep." }
},
{
  n: "Olaf", r: "jng top", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [5, 4, 2, 3, 2, 4, 4, 4, 3, 1, 4], f: "heal true",
  th: "Ragnarok (R) makes him immune to CC. Undertow (Q) axes slow, and Reckless Swing (E) deals true damage.",
  pw: "Ragnarok is his only CC immunity. Once it's down, CC him.",
  st: ["Strongest early duelist", "R makes him immune to CC", "True damage with E"],
  wk: ["Falls off late", "Kited when R is down", "No gap-closer besides axe slows"],
  go: ["Dive a carry with R", "Invade early and duel"],
  no: ["Don't fight without R", "Don't stall to late"],
  sit: [["Ahead", "Invade and snowball."], ["Behind", "Dive carries with R."], ["Into CC", "Save R for their CC."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Guardian Angel", "Maw of Malmortius", "Black Cleaver"] },
  ob: [
    { n: "Top Olaf", i: ["Sundered Sky", "Sterak's Gage", "Death's Dance"], w: "Top-lane duelist." },
    { n: "Endless Hunger Olaf", i: ["Endless Hunger", "Sterak's Gage", "Spirit Visage"], w: "Tenacity and omnivamp." }
  ],
  cb: { rammus: "Armor stacking and Thornmail punish his auto-heavy duels.", graves: "He kites Olaf and bursts him between axe pickups.", kindred: "She kites him and Lamb's Respite outlasts Ragnarok.", vi: "Cease and Desist locks him down the moment Ragnarok ends." }
}
);
