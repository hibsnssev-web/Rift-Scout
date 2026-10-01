/* Champion profiles: Sejuani to Seraphine. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Sejuani", r: "jng", c: "vang", bt: "tank", d: "ap", rg: 150,
  s: [3, 4, 4, 3, 5, 3, 2, 2, 5, 1, 3], f: "dash engage",
  th: "Glacial Prison (R) stuns a target and everyone near it. Arctic Assault (Q) knocks up, and Permafrost (E) stuns after four frost stacks.",
  pw: "Arctic Assault is her main gap-closer. If it misses or is blocked, she can't engage for several seconds.",
  st: ["Huge CC chain for engages", "Passive Fury of the North makes her tanky in fights", "Great teamfight front line"],
  wk: ["Low damage", "Slow early clears", "Kited by long-range comps"],
  go: ["R a carry from long range to start the fight", "Q into grouped enemies after R lands"],
  no: ["Don't engage without your team close enough to follow", "Don't duel early junglers 1v1"],
  sit: [["Ahead", "Engage every objective fight."], ["Behind", "Tank and peel with R."], ["Into poke", "Engage early before the poke lands."]],
  b: { ru: "Aftershock · Inspiration", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Kaenic Rookern", "Force of Nature", "Thornmail", "Randuin's Omen"] },
  ob: [
    { n: "Support Sejuani", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support with long-range R." },
    { n: "Top Sejuani", i: ["Sunfire Aegis", "Heartsteel", "Thornmail"], w: "Front-line counter-pick into melee top laners." }
  ],
  cb: { lillia: "She kites Sejuani with move speed and sleeps her team.", nidalee: "She invades Sejuani's slow early jungle.", kindred: "She kites and out-scales her.", graves: "He invades and out-clears her early." }
},
{
  n: "Senna", r: "sup bot", c: "mark", bt: "crit", d: "ad", rg: 600,
  s: [3, 4, 5, 2, 3, 3, 3, 3, 1, 4, 2], f: "skill stack heal",
  th: "Last Embrace (W) roots in an area after a delay. Dawning Shadow (R) is a global beam that shields allies and damages enemies.",
  pw: "She has no dash. Her W root is slow, so step away when the mist grows.",
  st: ["Infinite scaling from Mist souls", "Global R shields allies", "Long range poke and heals with Piercing Darkness (Q)"],
  wk: ["No mobility", "Squishy", "Weak to hard engage"],
  go: ["Poke with Q and collect Mist souls", "Global R to save a teammate or finish a kill"],
  no: ["Don't walk forward without vision", "Don't fight melee engage alone"],
  sit: [["Ahead", "Collect souls and poke."], ["Behind", "Stay back and collect souls; you still scale."], ["Into engage", "Hold W for the engager."]],
  b: { ru: "Fleet Footwork · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Solstice Sleigh", "Youmuu's Ghostblade", "Umbral Glaive"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Edge of Night", "Black Cleaver", "Guardian Angel"] },
  ob: [
    { n: "Bot-lane Senna", i: ["Infinity Edge", "The Collector", "Lord Dominik's Regards"], w: "ADC Senna with a funnel support." },
    { n: "Enchanter Senna", i: ["Dream Maker", "Staff of Flowing Water", "Redemption"], w: "Heal-heavy Senna for a protect-the-carry comp." }
  ],
  cb: { blitzcrank: "Rocket Grab pulls her away from her ADC.", nautilus: "Point-and-click R catches her.", pyke: "He hooks and executes her.", leona: "Zenith Blade gets on top of her." }
},
{
  n: "Seraphine", r: "sup bot mid", c: "burst", bt: "apb", d: "ap", rg: 525,
  s: [3, 4, 5, 1, 4, 3, 3, 3, 1, 4, 5], f: "skill shield heal",
  th: "Encore (R) charms everyone in a long line, and it extends through every champion it hits. Beat Drop (E) roots slowed targets.",
  pw: "She's immobile. Dodge Encore and she has little else.",
  st: ["Encore charms whole teams", "Shields and heals allies with Surround Sound (W)", "Long-range poke"],
  wk: ["Immobile", "Squishy", "Needs to land Encore"],
  go: ["R through two or more enemies", "Poke with Q from max range"],
  no: ["Don't walk forward without vision", "Don't waste R on one enemy"],
  sit: [["Ahead", "Poke and R teams."], ["Behind", "Shield your team."], ["Into assassins", "Zhonya's Hourglass."]],
  b: { ru: "Summon Aery · Sorcery", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Staff of Flowing Water", "Mikael's Blessing", "Locket of the Iron Solari", "Zhonya's Hourglass"] },
  ob: [
    { n: "Mid Seraphine", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst mage with a team-wide charm." },
    { n: "Bot Seraphine", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Poke carry bot lane." }
  ],
  cb: { blitzcrank: "Rocket Grab catches her.", nautilus: "Point-and-click R catches her.", pyke: "He hooks and executes her.", zed: "Living Shadow reaches her." }
}
);
