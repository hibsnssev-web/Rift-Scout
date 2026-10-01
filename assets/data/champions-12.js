/* Champion profiles: Malzahar to Master Yi. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Malzahar", r: "mid", c: "battle", bt: "apd", d: "ap", rg: 500,
  s: [3, 4, 4, 1, 4, 2, 4, 4, 2, 3, 5], f: "point shield",
  th: "Nether Grasp (R) suppresses you from range. Void Shift passive gives him a spell shield that blocks the first hit.",
  pw: "Break his passive spell shield before you engage. Once R is down he has no reliable CC.",
  st: ["Point-and-click suppression stops any carry or diver", "Voidlings push waves and deal damage", "Passive spell shield makes him safe in lane"],
  wk: ["No mobility", "QSS and Mercurial cleanse his R", "Weak to physical burst"],
  go: ["R a carry in a fight so your team can collapse", "Push waves and roam with R ready"],
  no: ["Don't R into a Quicksilver user", "Don't fight without the passive shield"],
  sit: [["Ahead", "Roam and suppress carries."], ["Behind", "Push waves and play for R picks."], ["Into assassins", "Keep R to stop their dive."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Luden's Echo"] },
  ob: [
    { n: "Burst Malzahar", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Suppress-and-burst build that kills a carry inside Nether Grasp." },
    { n: "Support Malzahar", i: ["Zaz'Zak's Realmspike", "Liandry's Torment", "Zhonya's Hourglass"], w: "Point-and-click suppression support that locks down divers." }
  ],
  cb: { yasuo: "Wind Wall blocks Call of the Void and he dashes through the voidlings.", kassadin: "Null Sphere and Riftwalk ignore Malzahar's poke once Kassadin scales.", xerath: "He out-ranges Malzahar and pops the spell shield from safety." }
},
{
  n: "Maokai", r: "sup jng top", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [4, 4, 4, 2, 5, 4, 2, 2, 5, 2, 3], f: "heal engage point",
  th: "Twisted Advance (W) roots on arrival, Bramble Smash (Q) knocks back, and Nature's Grasp (R) roots a whole team.",
  pw: "His W is his only gap-closer. When it's down, he has no way in.",
  st: ["Point-and-click root with Twisted Advance", "R roots a whole team", "Sapling bush control and vision"],
  wk: ["Low damage", "Needs to reach the enemy", "Kited by long-range comps"],
  go: ["R into grouped enemies", "W the carry who stands too close"],
  no: ["Don't W into a team with no follow-up", "Don't waste R on one enemy"],
  sit: [["Ahead", "Engage with R and W."], ["Behind", "Tank and peel."], ["Into poke", "Engage early before the poke adds up."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Jungle Maokai", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Tank jungle with early ganks." },
    { n: "AP Maokai", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Saplings and Nature's Grasp deal real damage in poke-heavy fights." }
  ],
  cb: { morgana: "Black Shield blocks his root.", janna: "She disengages his engage.", zyra: "Plants chip him before he engages.", renata: "Bailout and Hostile Takeover turn his engage around." }
},
{
  n: "Master Yi", r: "jng", c: "skirm", bt: "onhit", d: "ad", rg: 125,
  s: [2, 4, 5, 4, 1, 3, 3, 5, 2, 1, 4], f: "untarg aa true",
  th: "Alpha Strike (Q) makes him untargetable. Highlander (R) resets on kills, and Wuju Style (E) adds true damage.",
  pw: "He has no CC and can't cleanse by himself. Save hard CC for when he uses Alpha Strike.",
  st: ["Takedown resets clean up teamfights", "Alpha Strike dodges spells", "Huge late-game DPS"],
  wk: ["No CC", "Hard CC stops him", "Weak early game"],
  go: ["Clean up fights after your team engages", "Alpha Strike to dodge key spells"],
  no: ["Don't engage first", "Don't fight into heavy CC"],
  sit: [["Ahead", "Clean up fights with resets."], ["Behind", "Farm and scale; you're a late-game monster."], ["Into CC", "Buy Mercury's Treads and Wit's End."]],
  b: { ru: "Lethal Tempo · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Kraken Slayer", "Blade of the Ruined King", "Guinsoo's Rageblade"], bo: "Berserker's Greaves", sit: ["Wit's End", "Guardian Angel", "Death's Dance", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Master Yi", i: ["Nashor's Tooth", "Guinsoo's Rageblade", "Rabadon's Deathcap"], w: "Magic on-hit damage for when the enemy stacks armor against you." },
    { n: "Crit Master Yi", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Crit Alpha Strike burst for squishy teams." }
  ],
  cb: { rammus: "Taunt and armor stop his autos.", poppy: "Her stun catches him.", jax: "Counter Strike dodges his autos.", warwick: "Suppression and sustain beat Yi." }
}
);
