/* Champion profiles: Volibear to Wukong. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Volibear", r: "top jng", c: "jugg", bt: "adb", d: "mix", rg: 150,
  s: [5, 4, 3, 3, 3, 4, 3, 4, 4, 1, 3], f: "heal pct engage",
  th: "Thundering Smash (Q) runs you down for a stun, Frenzied Maul (W) heals him on a marked target, and Stormbringer (R) leaps in and disables towers.",
  pw: "His only gap-closer is R. With R down, kite him and keep the distance; his Q speed is easy to slow.",
  st: ["One of the strongest early all-ins", "Stormbringer turns off towers for dives", "Heals through extended trades with W"],
  wk: ["Kited by ranged champions", "No dash outside of R", "Falls off against scaling tanks and kiting comps"],
  go: ["All-in at level 3 with Q stun and double W", "R under the enemy tower to dive a low laner"],
  no: ["Don't chase kiting champions without R", "Don't let the game drag past 30 minutes"],
  sit: [["Ahead", "Dive towers with R and snowball the side lane."], ["Behind", "Tank for your team and R into the backline."], ["Into ranged", "Wait for your jungler or R, then all-in."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Riftmaker", "Sunfire Aegis", "Spirit Visage"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Thornmail", "Jak'Sho the Protean", "Death's Dance"] },
  ob: [
    { n: "AD Volibear", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Physical bruiser build for heavy auto-attack damage." },
    { n: "Jungle Volibear", i: ["Riftmaker", "Sunfire Aegis", "Jak'Sho the Protean"], w: "Tanky jungler with tower-disabling dives." }
  ],
  cb: { vayne: "She kites him and Condemn stops his charge.", quinn: "She kites him and vaults away from Q.", kennen: "Ranged poke and a stun he can't run through.", teemo: "Blinding Dart shuts down his auto-heavy trades." }
},
{
  n: "Warwick", r: "jng top", c: "diver", bt: "adb", d: "mix", rg: 125,
  s: [5, 4, 3, 4, 4, 5, 3, 4, 3, 1, 3], f: "heal point engage",
  th: "Infinite Duress (R) leaps and suppresses. Blood Hunt (W) tracks low-health enemies across the map, and his passive heals him more when he's low.",
  pw: "R is his main CC. With it down, kite him; he can't reach you without it.",
  st: ["Strongest early duels among junglers", "Suppression R locks a carry", "Blood Hunt makes low enemies easy to find"],
  wk: ["Falls off late", "Kited when R is down", "Grievous Wounds cuts his healing"],
  go: ["R a carry the moment their Flash is down", "Follow Blood Hunt trails to finish low enemies"],
  no: ["Don't let the game stall", "Don't fight into Grievous Wounds without tank items"],
  sit: [["Ahead", "Invade early and snowball lanes."], ["Behind", "Play for R picks on the enemy carry."], ["Into anti-heal", "Build tank items instead of damage."]],
  b: { ru: "Conqueror · Resolve", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Blade of the Ruined King", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Guardian Angel", "Maw of Malmortius", "Force of Nature"] },
  ob: [
    { n: "Top Warwick", i: ["Blade of the Ruined King", "Sterak's Gage", "Spirit Visage"], w: "Top-lane duelist who wins early trades and roams with W." },
    { n: "Tank Warwick", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Spirit Visage"], w: "Durable engage for teams that need a front line." }
  ],
  cb: { lillia: "She kites Warwick and sleeps him out of R.", kindred: "She kites him and out-scales him.", graves: "He kites Warwick and bursts him before the heal kicks in.", rammus: "Armor stacking and taunt blunt his duels." }
},
{
  n: "Wukong", r: "top jng", c: "diver", bt: "adb", d: "ad", rg: 175,
  s: [4, 4, 3, 4, 4, 3, 4, 3, 3, 1, 3], f: "dash engage stealth",
  th: "Cyclone (R) knocks up everyone around him, twice. Warrior Trickster (W) leaves a decoy clone while he goes invisible.",
  pw: "Nimbus Strike (E) is his gap-closer. When R is down, he has no CC.",
  st: ["Double knock-up R wins teamfights", "Decoy clone baits spells", "Strong dive with E"],
  wk: ["Falls off late", "Kited when E is down", "Needs R to have teamfight impact"],
  go: ["R into grouped enemies after E", "Decoy to dodge a key skillshot, then engage"],
  no: ["Don't R a single enemy when a teamfight is coming", "Don't let the game stall"],
  sit: [["Ahead", "Dive side lanes and snowball."], ["Behind", "Engage teamfights with R."], ["Into tanks", "Buy Black Cleaver."]],
  b: { ru: "Conqueror · Resolve", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Black Cleaver", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Wukong", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst dive for squishy teams." },
    { n: "Tank Wukong", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line double knock-up." }
  ],
  cb: { rammus: "He tanks Wukong's burst and taunts him.", poppy: "Steadfast Presence stops Nimbus Strike.", lillia: "She kites him and sleeps him.", kindred: "She kites him and saves allies from his R." }
}
);
