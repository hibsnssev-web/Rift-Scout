/* Champion profiles: Sylas to Tahm Kench. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Sylas", r: "mid top jng", c: "skirm", bt: "apf", d: "ap", rg: 175,
  s: [3, 4, 4, 4, 3, 4, 4, 4, 3, 2, 4], f: "dash heal",
  th: "Hijack (R) steals your ultimate and uses it against your team. Kingslayer (W) heals him more the lower his health.",
  pw: "Abscond / Abduct (E) is both his engage and his escape. When it's on cooldown, he can't reach you or leave.",
  st: ["Steals the best ultimate on the enemy team", "Kingslayer heals through burst", "Strong mid-game skirmisher"],
  wk: ["Short range", "Needs to land Abduct (E2)", "Long-range mages poke him down"],
  go: ["Steal a big teamfight ultimate and use it in the next fight", "Dive a low target with E into W"],
  no: ["Don't E in when W is on cooldown", "Don't trade with long-range mages in open lanes"],
  sit: [["Ahead", "Roam and steal ultimates in side-lane fights."], ["Behind", "Farm and look for one strong ult to steal before a big fight."], ["Into tanks", "Build Riftmaker and fight long."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Hextech Rocketbelt", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Banshee's Veil", "Riftmaker", "Shadowflame"] },
  ob: [
    { n: "Tank Sylas", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Durable front-line Sylas who steals tank ultimates." },
    { n: "Jungle Sylas", i: ["Riftmaker", "Zhonya's Hourglass", "Rabadon's Deathcap"], w: "Skirmish jungler with ganks off Abduct." }
  ],
  cb: { xerath: "He out-ranges Sylas and Sylas can't reach him.", syndra: "Her range and burst kill Sylas before he can E in.", velkoz: "His beams out-range Sylas.", cassiopeia: "She out-DPSes Sylas in extended fights." }
},
{
  n: "Syndra", r: "mid", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [4, 5, 4, 1, 4, 1, 5, 3, 1, 4, 4], f: "skill",
  th: "Unleashed Power (R) throws every Dark Sphere at you for a one-shot. Scatter the Weak (E) knocks spheres into you for a stun.",
  pw: "She's immobile. If Scatter the Weak misses, she has no CC and no escape.",
  st: ["One-shot R burst", "Sphere stun from long range", "Strong lane poke"],
  wk: ["No mobility", "Squishy", "Needs E to land for safety"],
  go: ["R a squishy carry who's low", "Stun and burst in one combo"],
  no: ["Don't walk forward without E ready", "Don't fight assassins alone"],
  sit: [["Ahead", "Roam and burst carries."], ["Behind", "Farm and poke from range."], ["Into assassins", "Buy Zhonya's Hourglass."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Actualizer Syndra", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More spheres on the field for a bigger R." },
    { n: "Support Syndra", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Poke and stun support." }
  ],
  cb: { yasuo: "Wind Wall blocks her spheres and her stun.", fizz: "Trickster dodges her R.", kassadin: "Null Sphere eats her burst and he blinks onto her.", zed: "Living Shadow reaches her before the stun lands." }
},
{
  n: "Tahm Kench", r: "top sup", c: "ward", bt: "tank", d: "ap", rg: 175,
  s: [4, 4, 4, 2, 4, 4, 3, 2, 5, 1, 3], f: "heal peel pct",
  th: "Devour (R) swallows you, or saves an ally. Three stacks of An Acquired Taste make Tongue Lash (Q) stun.",
  pw: "He's slow. Stay away from him so he can't stack his passive.",
  st: ["Devour saves allies from certain death", "Very tanky with grey health", "Stun at three stacks"],
  wk: ["Slow", "Kited by ranged champions", "Needs stacks to do much"],
  go: ["Devour a diver off your carry", "Stack three hits and stun"],
  no: ["Don't chase kiting champions", "Don't waste Devour on a minor threat"],
  sit: [["Ahead", "Tank and devour carries into your team."], ["Behind", "Protect your carry with Devour."], ["Into ranged", "Wait for the gank."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Sunfire Aegis", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Thornmail", "Kaenic Rookern", "Warmog's Armor"] },
  ob: [
    { n: "Support Tahm Kench", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Peel support that devours his carry out of danger." },
    { n: "AP Tahm Kench", i: ["Riftmaker", "Liandry's Torment", "Rabadon's Deathcap"], w: "Magic burst from Q and R." }
  ],
  cb: { vayne: "True damage beats his grey health.", gwen: "Max-health damage beats his health stacking.", fiora: "Vitals true damage beats him.", quinn: "She kites him so he never stacks his passive." }
}
);
