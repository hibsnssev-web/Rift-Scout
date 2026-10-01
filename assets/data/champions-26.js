/* Champion profiles: Shyvana to Sion. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Shyvana", r: "jng top", c: "jugg", bt: "adb", d: "mix", rg: 125,
  s: [3, 4, 4, 4, 2, 3, 3, 4, 4, 2, 5], f: "dash engage",
  th: "Dragon's Descent (R) transforms her and knocks enemies toward her landing spot. In dragon form, Flame Breath (E) hits a wide cone.",
  pw: "She needs Fury for dragon form. Before R she's a basic melee duelist with little CC.",
  st: ["Fastest clears with Burnout (W)", "Dragon form brings AoE damage and tankiness", "R knocks enemies into her team"],
  wk: ["Little CC", "Kited by ranged comps", "Needs Fury for her best form"],
  go: ["R into grouped enemies to knock them toward your team", "Take dragons early to stack her passive"],
  no: ["Don't fight without Fury for R", "Don't chase kiting champions"],
  sit: [["Ahead", "Take dragons and dive with R."], ["Behind", "Farm fast and join fights in dragon form."], ["Into tanks", "Go AP with Liandry's Torment."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Nashor's Tooth", "Riftmaker", "Liandry's Torment"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Banshee's Veil"] },
  ob: [
    { n: "AD Shyvana", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Duelist build with more durability." },
    { n: "Top Shyvana", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Tanky AP top laner." }
  ],
  cb: { lillia: "She kites Shyvana with move speed.", kindred: "She kites and out-scales her.", nidalee: "She invades Shyvana early.", graves: "He out-clears and invades." }
},
{
  n: "Singed", r: "top", c: "spec", bt: "tank", d: "ap", rg: 125,
  s: [3, 4, 4, 3, 3, 3, 2, 3, 4, 1, 4], f: "split",
  th: "Poison Trail (Q) burns anyone chasing him, and Fling (E) throws you over his shoulder into Mega Adhesive (W) for a root.",
  pw: "Don't chase Singed. He wants you to follow him through the poison.",
  st: ["Proxy farming pulls the enemy out of position", "Fling into Mega Adhesive picks off carries", "Very fast with Insanity Potion (R)"],
  wk: ["Low burst", "Needs to be chased to deal damage", "Kited by ranged champions"],
  go: ["Proxy farm behind the enemy tower", "Fling a carry into your team"],
  no: ["Don't chase ranged champions through fog", "Don't fling carries toward their team"],
  sit: [["Ahead", "Proxy farm and split push."], ["Behind", "Tank and fling carries."], ["Into ranged", "Proxy farm and ignore them."]],
  b: { ru: "Phase Rush · Resolve", ss: "Flash · Ghost", st: "Doran's Ring", core: ["Rod of Ages", "Rylai's Crystal Scepter", "Liandry's Torment"], bo: "Mercury's Treads", sit: ["Sunfire Aegis", "Force of Nature", "Jak'Sho the Protean", "Heartsteel"] },
  ob: [
    { n: "Full tank Singed", i: ["Sunfire Aegis", "Heartsteel", "Jak'Sho the Protean"], w: "Unkillable proxy farmer." },
    { n: "Support Singed", i: ["Celestial Opposition", "Rylai's Crystal Scepter", "Knight's Vow"], w: "Fling-engage support." }
  ],
  cb: { vayne: "She kites him and true damage beats his tankiness.", teemo: "Blinding Dart and poke wear him down.", quinn: "She kites him.", jayce: "Cannon poke keeps him away." }
},
{
  n: "Sion", r: "top sup", c: "jugg", bt: "tank", d: "ad", rg: 175,
  s: [3, 4, 5, 3, 5, 3, 3, 2, 5, 1, 4], f: "engage stack",
  th: "Decimating Smash (Q) knocks up when fully charged, Unstoppable Onslaught (R) charges across the map into a knock-up, and his passive keeps him fighting after death.",
  pw: "His charged Q is slow. Walk to the side and he can't reach you.",
  st: ["Infinite health stacking", "R engages from far away", "Passive keeps him fighting after death"],
  wk: ["Slow and predictable", "Low damage", "Kited by ranged champions"],
  go: ["R into grouped enemies", "Charge Q into a stunned target"],
  no: ["Don't charge Q in the open", "Don't R into a full team alone"],
  sit: [["Ahead", "Tank and engage."], ["Behind", "Farm stacks with W."], ["Into ranged", "Farm under tower."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Sunfire Aegis", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Thornmail", "Kaenic Rookern", "Warmog's Armor"] },
  ob: [
    { n: "Lethality Sion", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst Q build." },
    { n: "Support Sion", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support." }
  ],
  cb: { vayne: "True damage beats his health.", fiora: "Vitals true damage beats him.", gwen: "Max-health damage beats him.", kayle: "She out-ranges and outscales him." }
}
);
