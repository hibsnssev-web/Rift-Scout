/* Champion profiles: Sivir to Smolder. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Sivir", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [3, 4, 4, 3, 1, 2, 2, 4, 1, 2, 5], f: "shield",
  th: "Ricochet (W) bounces between enemies, and On The Hunt (R) speeds up her whole team for engages or escapes.",
  pw: "Spell Shield (E) is her only defense. Bait it with a small spell, then land your real CC.",
  st: ["Fastest waveclear of any marksman", "Spell Shield blocks key CC", "R speeds up the whole team"],
  wk: ["Low single-target burst", "No dash", "Weak to all-in lanes"],
  go: ["Shove waves and take plates with Ricochet", "R to engage or escape with your team"],
  no: ["Don't waste Spell Shield on poke", "Don't take early all-ins"],
  sit: [["Ahead", "Push and siege with Ricochet."], ["Behind", "Farm fast and play for teamfights."], ["Into engage", "Save Spell Shield for their engage spell."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Essence Reaver", "Navori Flickerblade", "Infinity Edge"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Stormrazor Sivir", i: ["Stormrazor", "Infinity Edge", "Lord Dominik's Regards"], w: "Burst from Energized first hits." },
    { n: "Runaan's Sivir", i: ["Runaan's Hurricane", "Infinity Edge", "Lord Dominik's Regards"], w: "Bolts bounce between enemies for AoE damage in grouped fights." }
  ],
  cb: { draven: "His early damage out-trades her in every all-in.", lucian: "His short trades beat her low burst.", caitlyn: "She out-ranges Sivir and pushes her in.", samira: "Her all-in beats Sivir once Spell Shield is used." }
},
{
  n: "Skarner", r: "jng top", c: "vang", bt: "tank", d: "ad", rg: 125,
  s: [4, 4, 4, 4, 5, 3, 2, 2, 5, 2, 3], f: "engage dash point",
  th: "Ixtal's Impact (E) carries you into a wall for a stun, and Impale (R) suppresses up to three champions and drags them.",
  pw: "Ixtal's Impact is his only dash. Once R is used, he's just a tank.",
  st: ["Impale drags up to three champions into his team", "Wall stun for picks", "Very tanky"],
  wk: ["Low damage", "Needs walls for E stun", "Kited by long-range comps"],
  go: ["R a carry into your team", "E a target into a wall"],
  no: ["Don't R one enemy when three are in range", "Don't fight in open ground"],
  sit: [["Ahead", "Engage every fight."], ["Behind", "Tank and peel with R."], ["Into ranged", "Engage with E through walls."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Heartsteel", "Jak'Sho the Protean", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Thornmail", "Randuin's Omen"] },
  ob: [
    { n: "Top Skarner", i: ["Sunfire Aegis", "Heartsteel", "Thornmail"], w: "Top-lane tank who drags carries into his team with R." },
    { n: "Support Skarner", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Engage support with a three-champion suppression." }
  ],
  cb: { lillia: "She kites Skarner with move speed.", kindred: "She kites and out-scales him.", graves: "He out-clears and invades him.", nidalee: "She invades Skarner early." }
},
{
  n: "Smolder", r: "bot mid", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [2, 4, 5, 2, 2, 2, 3, 4, 1, 4, 4], f: "stack skill execute",
  th: "Super Scorcher Breath (Q) stacks forever; at 225 stacks it executes low targets. MMOOOMMMM! (R) is a long-range breath that heals Smolder.",
  pw: "His early is weak. Flap, Flap, Flap (E) is his only escape.",
  st: ["Unlimited scaling from Q stacks", "Execute threshold at 225 stacks", "Long-range R that also heals him"],
  wk: ["Very weak early lane", "Needs stacks before he matters", "Squishy with one slow dash"],
  go: ["Last-hit with Q on every minion and champion to stack faster", "Fire R from long range to finish low targets"],
  no: ["Don't take early all-ins against lane bullies", "Don't waste Flap, Flap, Flap on farming"],
  sit: [["Ahead", "Keep stacking and take fights once you pass 125 stacks."], ["Behind", "Farm stacks safely; you still scale."], ["Into dive", "Save E to hop walls away from the diver."]],
  b: { ru: "Fleet Footwork · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Essence Reaver", "Navori Flickerblade", "Infinity Edge"], bo: "Ionian Boots of Lucidity", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Mid Smolder", i: ["Essence Reaver", "Navori Flickerblade", "Infinity Edge"], w: "Mid-lane stacker who farms safely and scales." },
    { n: "Stormrazor Smolder", i: ["Stormrazor", "Infinity Edge", "Lord Dominik's Regards"], w: "First-hit burst for earlier fights." }
  ],
  cb: { draven: "He wins the lane before Smolder stacks.", caitlyn: "She out-ranges him early and denies stacks.", samira: "Her all-in reaches him before he can hop away.", lucian: "His early trades punish Smolder's weak lane." }
}
);
