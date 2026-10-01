/* Champion profiles: Orianna to Pantheon. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Orianna", r: "mid", c: "burst", bt: "apb", d: "ap", rg: 525,
  s: [3, 4, 5, 2, 4, 2, 4, 4, 2, 4, 5], f: "shield skill engage",
  th: "Command: Shockwave (R) pulls everyone near the Ball together. The Ball on an engaging ally turns their dive into a team-wide pull.",
  pw: "The Ball is her only tool. When it's far from her, she has no defense. Catch her while it's on the other side of the fight.",
  st: ["R can pull a whole team together", "Strong zone and poke with the Ball", "Shields and speeds up allies with Command: Protect (E)"],
  wk: ["Immobile", "Ball positioning is hard", "Divers reach her"],
  go: ["Put the Ball on an engaging ally, then R when they land", "Poke with Command: Attack (Q) from max range"],
  no: ["Don't leave the Ball far from you when assassins are alive", "Don't R one champion"],
  sit: [["Ahead", "Control fights with Ball and R."], ["Behind", "Farm and shield your carries."], ["Into divers", "Keep the Ball on yourself."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Actualizer Orianna", i: ["Actualizer", "Rabadon's Deathcap", "Void Staff"], w: "More Ball commands in the empowered state." },
    { n: "Support Orianna", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Poke and shield support with R." }
  ],
  cb: { fizz: "He dives Orianna while the Ball is away.", zed: "Living Shadow reaches her.", kassadin: "Null Sphere eats her poke and he blinks on her.", yasuo: "Wind Wall blocks her Ball commands." }
},
{
  n: "Ornn", r: "top", c: "vang", bt: "tank", d: "ad", rg: 175,
  s: [3, 4, 5, 2, 5, 3, 3, 2, 5, 2, 3], f: "engage",
  th: "Call of the Forge God (R) summons a ram that knocks up everyone it hits. Searing Charge (E) into terrain knocks up too.",
  pw: "He's slow and immobile. Kite him and avoid being near walls he can charge.",
  st: ["Upgrades his whole team's items for free", "R and Searing Charge give lots of CC", "Extremely tanky and can shop in lane"],
  wk: ["Low damage", "Needs walls for his E knock-up", "Kited by ranged champions"],
  go: ["Recast R to headbutt the ram into the enemy team", "Charge a target who's standing next to a wall"],
  no: ["Don't fight without R up", "Don't chase kiting champions across open ground"],
  sit: [["Ahead", "Engage every fight and tank for your team."], ["Behind", "Tank and keep upgrading your team's items."], ["Into ranged", "Farm near tower and scale; your late game is stronger."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Jak'Sho the Protean", "Thornmail"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Unending Despair", "Randuin's Omen"] },
  ob: [
    { n: "Support Ornn", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support who still upgrades his team's items." },
    { n: "Bruiser Ornn", i: ["Black Cleaver", "Sterak's Gage", "Death's Dance"], w: "Bruiser Ornn who wins duels when the enemy lacks true damage." }
  ],
  cb: { vayne: "True damage ignores his tankiness.", gwen: "Max-health damage beats him.", fiora: "Vitals true damage beats him.", jayce: "Cannon poke keeps him away." }
},
{
  n: "Pantheon", r: "top mid sup jng", c: "diver", bt: "adA", d: "ad", rg: 175,
  s: [5, 4, 2, 4, 3, 2, 4, 3, 2, 3, 3], f: "dash point antiaa",
  th: "Shield Vault (W) stuns on a point-and-click leap. Aegis Assault (E) blocks all damage from the front.",
  pw: "Before level 6 he's very strong; after 25 minutes he falls off. Stall and scale.",
  st: ["One of the strongest early games in the game", "Point-and-click stun on Shield Vault", "Grand Starfall (R) joins fights across the map"],
  wk: ["Falls off hard after about 25 minutes", "Needs early kills to stay relevant", "Squishy once the enemy has items"],
  go: ["All-in at level 2 or 3 with an empowered Comet Spear (Q)", "Grand Starfall onto a side-lane fight your team can win"],
  no: ["Don't let the game stall; your damage fades", "Don't dive a tower without W up to lock the target"],
  sit: [["Ahead", "Roam with R and snowball the other lanes."], ["Behind", "Play for picks with W and join fights with R."], ["Into tanks", "Build Serylda's Grudge and focus the squishies."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Eclipse", "Black Cleaver", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Pantheon", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "One-shot spear burst for mid lane and roams." },
    { n: "Support Pantheon", i: ["Celestial Opposition", "Black Cleaver", "Sterak's Gage"], w: "Point-and-click engage support that wins early 2v2s." }
  ],
  cb: { malphite: "Armor stacking blunts his burst and Malphite outscales him.", poppy: "Steadfast Presence stops Shield Vault.", sion: "He tanks Pantheon's burst and outscales him.", gragas: "Body Slam and cask interrupt his dives." }
}
);
