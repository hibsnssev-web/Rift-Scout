/* Champion profiles: Mel to Miss Fortune. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Mel", r: "mid sup", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 2, 3, 1, 5, 3, 1, 4, 4], f: "skill execute antiaa",
  th: "Overwhelm stacks from her spells execute you at a threshold, and Golden Eclipse (R) hits every champion carrying stacks. Rebuttal (W) reflects projectiles back at you.",
  pw: "Rebuttal is her only defense. Once it's down she's immobile and squishy, and melee champions ignore it entirely.",
  st: ["Reflects projectile poke and ultimates with Rebuttal", "Execute threshold from Overwhelm", "R pressure on anyone she's marked"],
  wk: ["No real mobility", "Melee assassins ignore Rebuttal", "Squishy"],
  go: ["Reflect a key skillshot or ultimate with Rebuttal, then trade", "Cast R when several enemies are close to the execute threshold"],
  no: ["Don't spend Rebuttal early against projectile champions", "Don't walk into melee range"],
  sit: [["Ahead", "Poke and execute with R."], ["Behind", "Farm and save Rebuttal for their key spell."], ["Into melee assassins", "Rush Zhonya's Hourglass; Rebuttal won't save you."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Horizon Focus"] },
  ob: [
    { n: "Support Mel", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Rabadon's Deathcap"], w: "Poke support that reflects enemy engage spells." },
    { n: "Actualizer Mel", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More spells for faster Overwhelm stacks." }
  ],
  cb: { zed: "His physical melee burst ignores Rebuttal.", fizz: "Trickster dodges her spells and he isn't a projectile.", talon: "Melee burst from walls reaches her.", kassadin: "Riftwalk blinks onto her and Null Sphere eats her poke." }
},
{
  n: "Milio", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 525,
  s: [3, 4, 4, 2, 2, 4, 1, 1, 1, 3, 2], f: "shield peel heal",
  th: "Breath of Life (R) cleanses CC off his whole team and heals them. Ultra Mega Fire Kick (Q) knocks back.",
  pw: "Once R is used, his team has no cleanse. Chain CC then.",
  st: ["Team-wide cleanse and heal with R", "Range boost and shields for his carry", "Strong lane sustain"],
  wk: ["Low damage", "Squishy", "Engage supports punish him"],
  go: ["Cleanse the enemy's key CC with R", "Kick divers off your carry"],
  no: ["Don't use R early in the fight", "Don't stand in front of your carry"],
  sit: [["Ahead", "Boost your carry's range and push for plates."], ["Behind", "Play pure peel."], ["Into CC", "Hold R for their engage."]],
  b: { ru: "Summon Aery · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Ardent Censer", "Mikael's Blessing", "Staff of Flowing Water", "Locket of the Iron Solari"] },
  ob: [
    { n: "Diadem Milio", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals for long fights." },
    { n: "Tank Milio", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Durable support into heavy dive." }
  ],
  cb: { blitzcrank: "Rocket Grab pulls him out of his team.", pyke: "He hooks and executes Milio.", nautilus: "Point-and-click R catches him.", zyra: "Plants and poke chip him down." }
},
{
  n: "Miss Fortune", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [4, 4, 3, 2, 2, 1, 4, 4, 1, 4, 3], f: "crit skill",
  th: "Bullet Time (R) channels waves of bullets in a cone and deals huge damage to grouped teams. Double Up (Q) bounces for a big crit.",
  pw: "Any CC cancels Bullet Time. Beyond Strut's move speed, she's immobile.",
  st: ["Bullet Time can win a teamfight alone", "Strong lane poke with Double Up", "Simple, reliable damage"],
  wk: ["No escape", "Bullet Time is interruptible", "Weak to dive"],
  go: ["Channel R when the enemy team is grouped and their CC is spent", "Bounce Q off a low minion to the carry"],
  no: ["Don't channel R when a stun is available", "Don't face-check brush"],
  sit: [["Ahead", "Snowball with Bullet Time in fights."], ["Behind", "Farm and poke."], ["Into dive", "Save R for when they group on your team."]],
  b: { ru: "Press the Attack · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Bloodthirster", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Lethality Miss Fortune", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst Bullet Time for poke comps." },
    { n: "Fiendhunter Miss Fortune", i: ["Fiendhunter Bolts", "Infinity Edge", "Lord Dominik's Regards"], w: "Guaranteed crits after Bullet Time for a bigger follow-up." }
  ],
  cb: { samira: "Blade Whirl blocks Bullet Time.", draven: "He wins the early lane damage race.", caitlyn: "She out-ranges MF.", kalista: "Her hops ignore MF's poke." }
}
);
