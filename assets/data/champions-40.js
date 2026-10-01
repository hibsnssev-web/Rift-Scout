/* Champion profiles: Yasuo to Yorick. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Yasuo", r: "mid top bot", c: "skirm", bt: "crit", d: "ad", rg: 175,
  s: [3, 5, 4, 5, 3, 2, 4, 4, 2, 2, 4], f: "dash shield antiaa crit",
  th: "Last Breath (R) follows up any knock-up, including his own tornado. Wind Wall (W) blocks every projectile, and Steel Tempest's third cast (Q3) knocks up in a line.",
  pw: "Without minions to Sweeping Blade (E) through, he's slow. Tornado is his only knock-up, so dodge it and trade back.",
  st: ["Wind Wall blocks projectile ultimates and poke", "R turns any team knock-up into a teamfight", "Double crit chance scales hard"],
  wk: ["Needs minions or champions to dash through", "Squishy once his passive shield is down", "Point-and-click CC stops him cold"],
  go: ["Tornado through the enemy team and R immediately", "Wind Wall a key projectile, then all-in"],
  no: ["Don't E into a wave with no way back", "Don't fight point-and-click CC champions head-on"],
  sit: [["Ahead", "Snowball side lanes and dive with R off your team's knock-ups."], ["Behind", "Farm to Infinity Edge and wait for teamfights with knock-up allies."], ["Into CC", "Save Wind Wall for their projectile CC and fight after it's used."]],
  b: { ru: "Lethal Tempo · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Navori Flickerblade", "Infinity Edge", "Blade of the Ruined King"], bo: "Berserker's Greaves", sit: ["Death's Dance", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Endless Hunger Yasuo", i: ["Endless Hunger", "Infinity Edge", "Navori Flickerblade"], w: "Tenacity and omnivamp when the enemy team has a lot of CC." },
    { n: "Bot Yasuo", i: ["Navori Flickerblade", "Infinity Edge", "Immortal Shieldbow"], w: "Bot lane with a knock-up support who feeds your R." }
  ],
  cb: { renekton: "His early damage and empowered stun beat Yasuo before items.", pantheon: "Shield Vault is point-and-click and Aegis Assault blocks Yasuo's trades.", annie: "A point-and-click stun lands through Wind Wall.", malphite: "Armor stacking blunts his crits and Unstoppable Force stops his dives." }
},
{
  n: "Yone", r: "mid top", c: "skirm", bt: "crit", d: "mix", rg: 175,
  s: [3, 5, 4, 5, 3, 3, 4, 4, 2, 2, 4], f: "dash shield crit",
  th: "Fate Sealed (R) dashes through a line of enemies and pulls them into a knock-up. Spirit Cleave (E) sends his spirit out, then snaps him back and repeats part of the damage.",
  pw: "When Spirit Cleave ends he snaps back to his starting point. Don't chase his spirit; wait for the snap-back and punish where he lands.",
  st: ["R engages several enemies at once", "Spirit Cleave stores damage and gives a safe return", "Mixed physical and magic damage"],
  wk: ["Squishy", "Needs items before he spikes", "Point-and-click CC catches his spirit form"],
  go: ["R through two or more enemies in a choke", "Spirit Cleave dive a low target, then snap back"],
  no: ["Don't Spirit Cleave into point-and-click CC", "Don't take extended trades before your first item"],
  sit: [["Ahead", "Snowball side lanes and dive the backline with R."], ["Behind", "Farm and wait for teamfights to R several enemies."], ["Into CC", "Save E so you can snap back out of their CC."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Blade of the Ruined King", "Infinity Edge", "Navori Flickerblade"], bo: "Berserker's Greaves", sit: ["Death's Dance", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Bruiser Yone", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Durable top-lane Yone for long fights." },
    { n: "Endless Hunger Yone", i: ["Endless Hunger", "Infinity Edge", "Navori Flickerblade"], w: "Tenacity and omnivamp against CC-heavy teams." }
  ],
  cb: { renekton: "He out-trades Yone early with empowered W and E dashes.", pantheon: "Point-and-click stun and spear shield beat his trades.", malphite: "Armor stacking blunts his crits and Unstoppable Force punishes his R.", lissandra: "Frozen Tomb stops him mid-dive." }
},
{
  n: "Yorick", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 175,
  s: [3, 4, 4, 2, 3, 3, 3, 4, 3, 2, 4], f: "split",
  th: "Eulogy of the Isles (R) summons the Maiden, who marks targets and walks lanes. Dark Procession (W) walls you in, and ghouls swarm from graves.",
  pw: "Kill his ghouls and the Maiden. Without them, he's a slow melee champion who can't win the side lane.",
  st: ["Maiden and ghouls split-push like a second champion", "Dark Procession traps targets", "Ghouls take towers fast"],
  wk: ["Weak in teamfights", "AoE waveclear wipes his ghouls", "Slow and easy to kite"],
  go: ["Split push with Maiden when your team is grouping elsewhere", "Wall a target with W and let ghouls finish"],
  no: ["Don't join 5v5 teamfights head-on", "Don't fight champions with AoE clear near their tower"],
  sit: [["Ahead", "Split push the side lane and force two enemies to answer."], ["Behind", "Split in a different lane from the enemy's best duelist."], ["Into AoE", "Send the Maiden to another lane and farm safely."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Trinity Force", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Spirit Visage", "Force of Nature", "Guardian Angel"] },
  ob: [
    { n: "Tank Yorick", i: ["Heartsteel", "Sunfire Aegis", "Thornmail"], w: "Tanky split-pusher whose ghouls still take towers." },
    { n: "Lethality Yorick", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst build when the enemy lacks a duelist." }
  ],
  cb: { vayne: "She kites Yorick and his ghouls can't catch her.", gwen: "Hallowed Mist blocks the ghouls and she out-duels him.", jax: "Counter Strike clears ghouls and stuns Yorick.", fiora: "She out-duels Yorick and Riposte stuns him out of W." }
}
);
