/* Champion profiles: Lissandra to Lucian. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Lissandra", r: "mid top", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 3, 5, 2, 4, 2, 3, 3, 4], f: "engage point untarg",
  th: "Frozen Tomb (R) stuns a target, or she casts it on herself for stasis and slows everyone around. Glacial Path (E) dashes her into fights.",
  pw: "Glacial Path is her only mobility. After she's used R on an enemy, she has no stasis and is easy to burst.",
  st: ["Point-and-click R engage or self-stasis", "Stops assassins and divers cold", "Chains CC with Ring of Frost (W)"],
  wk: ["Low damage against tanks", "Short range for her key spells", "Needs to walk up to engage"],
  go: ["E into a group, then R the carry", "Self-R when a diver lands on you"],
  no: ["Don't E in without R ready", "Don't fight long-range mages in open lanes"],
  sit: [["Ahead", "Roam and engage picks with E-R."], ["Behind", "Play defensively with self-R."], ["Into assassins", "Save R for yourself."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Banshee's Veil", "Shadowflame", "Liandry's Torment"] },
  ob: [
    { n: "Tank Lissandra", i: ["Hollow Radiance", "Zhonya's Hourglass", "Jak'Sho the Protean"], w: "Top-lane or support engage tank." },
    { n: "Support Lissandra", i: ["Zaz'Zak's Realmspike", "Zhonya's Hourglass", "Knight's Vow"], w: "Engage support with self-stasis." }
  ],
  cb: { xerath: "He out-ranges her and she can't reach him.", syndra: "Her range and burst kill Lissandra before E-R lands.", cassiopeia: "She out-DPSes Lissandra in extended fights.", kassadin: "Null Sphere and his blink ignore her CC late." }
},
{
  n: "Locke", r: "mid", c: "assn", bt: "apa", d: "ap", rg: 175,
  s: [3, 5, 4, 5, 2, 3, 5, 3, 2, 2, 3], f: "blink dash execute heal",
  th: "Purgatory (R) fires chained Soul Nails over an area and executes marked champions below a health threshold. Ritual Nails (Q) marks you for his attacks to consume.",
  pw: "Soul Ignition (W) burns his own health for speed. If he overextends with it he's low and killable, and after Ashen Pursuit (E) his blink is down.",
  st: ["Strong execute with R on marked targets", "Blink plus an attack dash for mobility", "Heals back part of the health he burns with W"],
  wk: ["New champion; builds and counters are still settling", "Squishy when W's self-damage runs too long", "Hard CC catches him before he blinks"],
  go: ["Cast R when marked enemies are close to the execute threshold", "Blink in with E, then dash with the empowered auto to finish"],
  no: ["Don't keep W active longer than the fight needs", "Don't dive into CC without E ready"],
  sit: [["Ahead", "Roam and execute low targets in side lanes."], ["Behind", "Farm and look for R executes in teamfights."], ["Into tanks", "Focus squishies; R won't execute tanks at high health."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Hextech Rocketbelt", "Shadowflame", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Lich Bane"] },
  ob: [
    { n: "On-hit Locke", i: ["Nashor's Tooth", "Dusk and Dawn", "Lich Bane"], w: "Leans on his on-hit passive for longer fights." },
    { n: "Riftmaker Locke", i: ["Riftmaker", "Zhonya's Hourglass", "Void Staff"], w: "Extended fights into tanky teams." }
  ],
  cb: { galio: "His magic shield eats Locke's burst.", malzahar: "Suppression stops him before he blinks.", lissandra: "Frozen Tomb stops his dive.", vex: "Her passive fears him when he dashes." }
},
{
  n: "Lucian", r: "bot mid", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [5, 4, 3, 4, 1, 2, 4, 4, 1, 3, 3], f: "dash aa",
  th: "Lightslinger double-shots after every spell, and Relentless Pursuit (E) resets on passive hits.",
  pw: "Short range. Once E is down he can't escape, and he falls off late.",
  st: ["Strong early trades", "E dash resets", "Good with enchanter supports"],
  wk: ["Short range", "Falls off late", "Mana-hungry"],
  go: ["Trade every time your spells are up", "Dash in on a squishy target"],
  no: ["Don't fight late against hyper-carries", "Don't E in without a way out"],
  sit: [["Ahead", "Snowball and roam mid with your support."], ["Behind", "Play safe and poke with Piercing Light (Q)."], ["Into poke", "Engage with E after their key spell."]],
  b: { ru: "Press the Attack · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Essence Reaver", "Navori Flickerblade", "Infinity Edge"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Lucian", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst for mid-lane Lucian." },
    { n: "Stormrazor Lucian", i: ["Stormrazor", "Navori Flickerblade", "Infinity Edge"], w: "Energized first-hit burst." }
  ],
  cb: { caitlyn: "She out-ranges him and traps where he dashes.", draven: "He wins the early lane damage race.", varus: "His poke and root punish Lucian's short range.", tristana: "Her range grows and she jumps out of his all-in." }
}
);
