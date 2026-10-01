/* Champion profiles: Zilean to Zyra. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Zilean", r: "sup mid", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [3, 4, 5, 3, 4, 2, 3, 2, 1, 4, 4], f: "revive skill",
  th: "Chronoshift (R) revives an ally who dies with it active. Two Time Bombs (Q) on the same target stun everyone nearby.",
  pw: "Chronoshift has a long cooldown. Once it's used, focus the carry again.",
  st: ["R revives his carry", "Double Time Bomb stuns", "Time Warp (E) speeds allies or slows enemies"],
  wk: ["Squishy", "Needs to land both bombs", "Low damage early"],
  go: ["Chronoshift your carry when they dive", "Double bomb a target who stands in the wave"],
  no: ["Don't use R early in the fight", "Don't walk forward without vision"],
  sit: [["Ahead", "Poke with bombs and speed your team into fights."], ["Behind", "Protect your carry and save R for their dive."], ["Into dive", "Slow the diver with E and hold R."]],
  b: { ru: "Summon Aery · Sorcery", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Imperial Mandate", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Mikael's Blessing", "Locket of the Iron Solari", "Ardent Censer", "Staff of Flowing Water"] },
  ob: [
    { n: "Mid Zilean", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Bomb poke and a revive from mid lane." },
    { n: "Tank Zilean", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Durable peel support into heavy dive." }
  ],
  cb: { blitzcrank: "Rocket Grab catches him before he can bomb.", pyke: "He hooks Zilean and executes him.", nautilus: "Point-and-click R catches Zilean.", leona: "Zenith Blade engages on him before he can double bomb." }
},
{
  n: "Zoe", r: "mid sup", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 3, 3, 1, 5, 2, 1, 5, 3], f: "skill",
  th: "Paddle Star (Q) deals more damage the farther it travels, and Sleepy Trouble Bubble (E) puts you to sleep for double damage.",
  pw: "If the bubble misses, she has no CC. Portal Jump (R) returns her to where she cast it, so she's committed for a moment.",
  st: ["Long-range burst", "Sleep sets up a one-shot", "Picks up summoner spells and items with Spell Thief (W)"],
  wk: ["Squishy", "Needs skillshots", "Divers reach her"],
  go: ["Bubble through a wall, then Paddle Star from max range", "Poke low targets before objectives"],
  no: ["Don't walk forward without the bubble ready", "Don't fight a diver in the open"],
  sit: [["Ahead", "Poke from fog and pick off carries."], ["Behind", "Farm and look for bubble picks."], ["Into divers", "Buy Zhonya's Hourglass."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Horizon Focus"] },
  ob: [
    { n: "Support Zoe", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke support with long-range sleep." },
    { n: "Actualizer Zoe", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More Paddle Stars in the empowered state." }
  ],
  cb: { fizz: "Trickster dodges her bubble and Paddle Star.", kassadin: "Riftwalk blinks onto her and Null Sphere eats her burst.", yasuo: "Wind Wall blocks Paddle Star and the bubble.", zed: "Living Shadow reaches her." }
},
{
  n: "Zyra", r: "sup mid", c: "catch", bt: "apb", d: "ap", rg: 575,
  s: [4, 4, 4, 1, 4, 1, 4, 4, 1, 5, 4], f: "skill",
  th: "Grasping Roots (E) roots you and her plants attack. Stranglethorns (R) knocks up everyone inside.",
  pw: "She's immobile. If Grasping Roots misses, dive her.",
  st: ["Plants zone fights and chip enemies", "Root plus knock-up", "Strong lane poke"],
  wk: ["No mobility", "Squishy", "Divers and engage supports reach her"],
  go: ["Root and plant a target", "R grouped enemies"],
  no: ["Don't walk forward without vision", "Don't fight divers without Zhonya's"],
  sit: [["Ahead", "Poke and zone objectives with plants."], ["Behind", "Zone with plants from behind your team."], ["Into divers", "Buy Zhonya's Hourglass."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Ignite", st: "World Atlas", core: ["Zaz'Zak's Realmspike", "Liandry's Torment", "Rylai's Crystal Scepter"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Morellonomicon"] },
  ob: [
    { n: "Mid Zyra", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Poke mid laner with plant zone control." },
    { n: "Jungle Zyra", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Plants clear camps fast and zone objectives." }
  ],
  cb: { blitzcrank: "Rocket Grab pulls her out of her plant zone.", nautilus: "Point-and-click R catches her.", leona: "Zenith Blade reaches her before plants matter.", pyke: "He hooks and executes Zyra." }
}
);
