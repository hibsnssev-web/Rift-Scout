/* Champion profiles: Nami to Nautilus. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Nami", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [4, 4, 4, 2, 4, 3, 2, 2, 1, 3, 2], f: "skill peel heal",
  th: "Aqua Prison (Q) bubbles you in place, and Tidal Wave (R) knocks up everyone in a long line.",
  pw: "Aqua Prison is slow. Dodge it and she has only her W bounce for pressure.",
  st: ["Strong lane with Tidecaller's Blessing (E) empowered autos", "Bubble plus wave gives lots of CC", "Heals her whole bot lane"],
  wk: ["Squishy with no escape", "Bubble is easy to dodge at range", "Engage supports catch her"],
  go: ["Bubble a target who steps out of the minion wave", "Wave a grouped team to start a fight"],
  no: ["Don't throw bubble into the wave", "Don't stand in front of your carry"],
  sit: [["Ahead", "Trade with E-empowered autos and push for plates."], ["Behind", "Peel with bubble and heal."], ["Into engage", "Hold bubble for the engager."]],
  b: { ru: "Summon Aery · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Ardent Censer", "Mikael's Blessing", "Staff of Flowing Water", "Imperial Mandate"] },
  ob: [
    { n: "AP Nami", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke-heavy bubble burst." },
    { n: "Diadem Nami", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals." }
  ],
  cb: { blitzcrank: "Rocket Grab pulls her before she can bubble.", nautilus: "Point-and-click R catches her.", pyke: "He hooks and executes her.", leona: "Her all-in reaches Nami through the heals." }
},
{
  n: "Nasus", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 125,
  s: [1, 4, 5, 1, 3, 4, 3, 4, 4, 1, 3], f: "heal stack",
  th: "Siphoning Strike (Q) stacks forever; by 25 minutes one Q can take half your health. Wither (W) slows you to a crawl.",
  pw: "Before level 6 he's weak. Deny his Q stacks and zone him from the wave.",
  st: ["Infinite scaling with Q stacks", "Wither shuts down any carry", "Fury of the Sands (R) makes him huge"],
  wk: ["Very weak early lane", "No mobility", "Kited by ranged champions"],
  go: ["Split push and take towers with stacked Q", "Wither the enemy carry in teamfights"],
  no: ["Don't trade early; farm stacks", "Don't chase kiting champions"],
  sit: [["Ahead", "Split push and force responses."], ["Behind", "Farm stacks. Every minion makes you stronger."], ["Into ranged", "Farm under tower and buy Sheen early."]],
  b: { ru: "Fleet Footwork · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Trinity Force", "Sterak's Gage", "Frozen Heart"], bo: "Ionian Boots of Lucidity", sit: ["Spirit Visage", "Randuin's Omen", "Death's Dance", "Force of Nature"] },
  ob: [
    { n: "Tank Nasus", i: ["Iceborn Gauntlet", "Heartsteel", "Unending Despair"], w: "Front line that still hits hard with Q." },
    { n: "Jungle Nasus", i: ["Trinity Force", "Sterak's Gage", "Dead Man's Plate"], w: "Stack on camps and scale." }
  ],
  cb: { vayne: "She kites him and her true damage ignores his tankiness.", teemo: "Blinding Dart stops his Q and poke denies his stacks.", quinn: "She kites him and zones him from stacks.", kennen: "Ranged poke and stuns deny his farm." }
},
{
  n: "Nautilus", r: "sup", c: "vang", bt: "tank", d: "ap", rg: 175,
  s: [4, 4, 4, 2, 5, 2, 2, 1, 5, 1, 2], f: "engage point",
  th: "Dredge Line (Q) hooks you, Staggering Blow roots on his first attack, and Depth Charge (R) knocks you up with a point-and-click missile.",
  pw: "If his hook misses, he has no gap-closer for about 10 seconds.",
  st: ["Lots of CC for engage and peel", "Point-and-click R", "Very tanky"],
  wk: ["Low damage alone", "Needs to land Q", "Disengage supports punish him"],
  go: ["Hook the enemy ADC when they step out of the wave", "R the carry to start the fight"],
  no: ["Don't hook with no follow-up", "Don't engage into Janna or Morgana"],
  sit: [["Ahead", "Roam and engage."], ["Behind", "Peel with root and R."], ["Into poke", "Engage early."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Jungle Nautilus", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Gank-heavy engage jungler." },
    { n: "Top Nautilus", i: ["Sunfire Aegis", "Heartsteel", "Thornmail"], w: "Counter-pick into melee champions." }
  ],
  cb: { morgana: "Black Shield blocks his whole combo.", janna: "Howling Gale and Monsoon cancel his engage.", renata: "Bailout and Hostile Takeover punish his dive.", braum: "Unbreakable blocks the hook." }
}
);
