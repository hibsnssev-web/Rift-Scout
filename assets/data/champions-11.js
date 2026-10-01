/* Champion profiles: Lulu to Malphite. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Lulu", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [4, 4, 4, 2, 4, 2, 2, 2, 2, 3, 2], f: "shield peel point",
  th: "Whimsy (W) polymorphs a target so they can't attack or cast. Wild Growth (R) knocks up everyone around her ally and gives huge health.",
  pw: "Whimsy is her main peel. Once it's on cooldown, dive her carry.",
  st: ["Polymorph stops divers and assassins instantly", "R saves a carry and knocks up the divers", "Strong lane poke with Pix"],
  wk: ["Squishy with no escape", "Weak once her cooldowns are down", "Engage supports catch her"],
  go: ["Polymorph the diver the moment they jump on your carry", "R your carry when two or more enemies dive them"],
  no: ["Don't waste Whimsy on poke", "Don't stand in front of your carry"],
  sit: [["Ahead", "Speed up your carry and poke with Pix."], ["Behind", "Play pure peel for your best carry."], ["Into dive", "Hold Whimsy and R for the dive."]],
  b: { ru: "Summon Aery · Sorcery", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Imperial Mandate", "Ardent Censer"], bo: "Ionian Boots of Lucidity", sit: ["Redemption", "Mikael's Blessing", "Staff of Flowing Water", "Locket of the Iron Solari"] },
  ob: [
    { n: "AP Lulu", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke-heavy lane Lulu." },
    { n: "Mid Lulu", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Utility mid laner for protect-the-carry comps." }
  ],
  cb: { blitzcrank: "Rocket Grab pulls her away from her carry.", nautilus: "His point-and-click R catches her.", pyke: "He hooks and executes her.", leona: "Her all-in reaches her through the shield." }
},
{
  n: "Lux", r: "sup mid", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 1, 4, 1, 5, 3, 1, 5, 4], f: "skill shield",
  th: "Light Binding (Q) roots two targets. Final Spark (R) deals huge damage from very long range.",
  pw: "She's immobile. If Light Binding misses, she has no CC for about 10 seconds.",
  st: ["Long-range burst with R", "Double-target root", "Shields her team with Prismatic Barrier (W)"],
  wk: ["No mobility", "Every spell is a skillshot", "Assassins kill her"],
  go: ["Root a target and follow with the full combo", "Final Spark low enemies from max range"],
  no: ["Don't walk forward when Q is on cooldown", "Don't fight an assassin alone"],
  sit: [["Ahead", "Poke and pick with R."], ["Behind", "Farm and poke from range."], ["Into assassins", "Rush Zhonya's Hourglass."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Horizon Focus"] },
  ob: [
    { n: "Support Lux", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Rabadon's Deathcap"], w: "Poke support with double root." },
    { n: "Enchanter Lux", i: ["Dream Maker", "Staff of Flowing Water", "Redemption"], w: "Shield-focused support." }
  ],
  cb: { fizz: "Trickster dodges her Binding and he dives her.", zed: "Living Shadow reaches her.", yasuo: "Wind Wall blocks Light Binding.", kassadin: "Null Sphere eats her burst." }
},
{
  n: "Malphite", r: "top sup", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [3, 4, 4, 3, 4, 3, 4, 2, 5, 3, 3], f: "engage point",
  th: "Unstoppable Force (R) knocks up a whole team, and Seismic Shard (Q) steals move speed.",
  pw: "His R is his only gap-closer. Once it's down, he can't reach you.",
  st: ["R engages a whole team", "Very tanky against physical damage", "Seismic Shard pokes from range"],
  wk: ["Weak against magic damage", "Low damage without AP", "Needs R to engage"],
  go: ["R into three or more grouped enemies", "Poke with Q to farm safely"],
  no: ["Don't R into one enemy when a fight could follow", "Don't fight AP champions alone"],
  sit: [["Ahead", "Engage with R in every fight."], ["Behind", "Tank and play for R."], ["Into AD", "Stack armor."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Sunfire Aegis", "Thornmail", "Frozen Heart"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Jak'Sho the Protean", "Randuin's Omen"] },
  ob: [
    { n: "AP Malphite", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Unstoppable Force deletes squishies. Pick it when your team already has a tank." },
    { n: "Support Malphite", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Team-wide R engage from the support role into grouped bot lanes." }
  ],
  cb: { gwen: "Her max-health magic damage ignores his armor.", mordekaiser: "His magic damage and R steal fights.", teemo: "Blinding Dart and poke wear him down.", kennen: "His magic poke and stun beat Malphite's engage." }
}
);
