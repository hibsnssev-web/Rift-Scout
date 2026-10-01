/* Champion profiles: K'Sante to Kennen. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "K'Sante", r: "top", c: "vang", bt: "tank", d: "ad", rg: 150,
  s: [3, 4, 4, 3, 4, 4, 3, 3, 5, 1, 3], f: "dash engage",
  th: "Ntofo Strikes (Q) knocks up on the third cast, Path Maker (W) charges through you, and All Out (R) kicks you through a wall.",
  pw: "During All Out he gives up most of his armor and magic resist. Burst him while it lasts.",
  st: ["Extremely tanky, with damage reduction on W", "R isolates a carry from their team", "Lots of CC for a top laner"],
  wk: ["All Out makes him squishy", "Mechanically demanding", "True and max-health damage cut through him"],
  go: ["All Out a carry through a wall into your team", "Charge W through a line of enemies to start a fight"],
  no: ["Don't use All Out when five enemies can collapse on you", "Don't take long trades into true damage"],
  sit: [["Ahead", "Front-line and isolate carries with R."], ["Behind", "Play pure tank and peel for your carries."], ["Into true damage", "Stack health instead of armor."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Unending Despair", "Jak'Sho the Protean"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Thornmail", "Kaenic Rookern", "Randuin's Omen"] },
  ob: [
    { n: "Bruiser K'Sante", i: ["Black Cleaver", "Sterak's Gage", "Death's Dance"], w: "Damage build that wins duels during All Out." },
    { n: "Support K'Sante", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Engage and peel support with R picks." }
  ],
  cb: { vayne: "Silver Bolts true damage ignores his resistances.", gwen: "Max-health damage and mist beat his tank build.", fiora: "Vitals deal true damage no matter how much armor he buys.", jayce: "Cannon poke wears him down before he can engage." }
},
{
  n: "Kai'Sa", r: "bot", c: "mark", bt: "crit", d: "mix", rg: 525,
  s: [3, 4, 5, 4, 2, 2, 4, 4, 1, 3, 3], f: "dash stealth aa",
  th: "Plasma stacks detonate for missing-health damage. Killer Instinct (R) dashes to any target she's damaged and shields her.",
  pw: "Her R needs a target she's hit recently. With R down she's a squishy marksman with no dash.",
  st: ["R dives past the front line with a shield", "Evolved abilities adapt to any build", "Strong late-game burst"],
  wk: ["Squishy", "Needs item thresholds to evolve", "Weak early lane"],
  go: ["R onto a marked carry once their peel is used", "Use Supercharge (E) camouflage to dodge an engage"],
  no: ["Don't R into five enemies with no follow-up", "Don't fight early all-in lanes"],
  sit: [["Ahead", "Dive the backline with R."], ["Behind", "Farm to your first evolve before fighting."], ["Into poke", "Engage with R when the enemy's poke is on cooldown."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Kraken Slayer", "Guinsoo's Rageblade", "Nashor's Tooth"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Zhonya's Hourglass", "Lord Dominik's Regards", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Kai'Sa", i: ["Nashor's Tooth", "Rabadon's Deathcap", "Shadowflame"], w: "Void Seeker (W) burst from range for pick comps." },
    { n: "Crit Kai'Sa", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Late-game crit DPS for long games." }
  ],
  cb: { caitlyn: "She outranges Kai'Sa and pushes her under tower.", draven: "He wins the early lane before Kai'Sa evolves.", varus: "Long-range poke keeps her out of range.", jhin: "Deadly Flourish roots her before she can dive." }
},
{
  n: "Kalista", r: "bot", c: "mark", bt: "onhit", d: "ad", rg: 525,
  s: [5, 4, 3, 4, 3, 2, 3, 4, 1, 2, 4], f: "dash aa",
  th: "Rend (E) pulls out every spear stacked in you for huge damage. Fate's Call (R) throws her support into your team.",
  pw: "She hops only on attacks. Slow her or block her autos and she can't kite.",
  st: ["One of the strongest early lanes", "R throws her support into perfect engages", "Secures dragons and Baron with Rend"],
  wk: ["Falls off late", "Needs attack speed to hop", "Hard to play"],
  go: ["Rend to finish kills and objectives", "Fate's Call your support into the enemy carry"],
  no: ["Don't let the game stall", "Don't fight into Braum's shield"],
  sit: [["Ahead", "Take objectives with Rend and snowball."], ["Behind", "Farm and look for Fate's Call engages."], ["Into poke", "Hop out of range and trade back."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Wit's End", "Lord Dominik's Regards", "Mercurial Scimitar"] },
  ob: [
    { n: "Crit Kalista", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Late-game crit for long games." },
    { n: "Fiendhunter Kalista", i: ["Fiendhunter Bolts", "Blade of the Ruined King", "Guinsoo's Rageblade"], w: "Attack-speed burst after R engages." }
  ],
  cb: { braum: "Unbreakable blocks her spears.", caitlyn: "She outranges Kalista and pushes her in.", sivir: "Spell Shield blocks Rend.", draven: "He out-damages her in the level 2 and 3 all-ins she relies on." }
},
{
  n: "Karma", r: "sup mid top", c: "ench", bt: "ench", d: "ap", rg: 525,
  s: [4, 4, 3, 3, 3, 2, 3, 2, 2, 4, 4], f: "shield peel",
  th: "Mantra-empowered Inner Flame (RQ) pokes for a big chunk and slows.",
  pw: "Once Mantra is used, her best spell is on cooldown. Trade then.",
  st: ["Strong lane poke", "Shields and move speed for her team", "Flexible: support, mid or top"],
  wk: ["Weak late game", "Low burst", "Squishy"],
  go: ["Poke with Mantra Q", "Shield your carry to win a trade"],
  no: ["Don't take late all-ins", "Don't stand in front of your carry"],
  sit: [["Ahead", "Poke and push for plates."], ["Behind", "Shield and speed up your team."], ["Into engage", "Save E for the engage."]],
  b: { ru: "Summon Aery · Sorcery", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Imperial Mandate", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Mikael's Blessing", "Locket of the Iron Solari", "Ardent Censer", "Staff of Flowing Water"] },
  ob: [
    { n: "AP Karma", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Poke build for mid lane." },
    { n: "Top Karma", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Poke top lane." }
  ],
  cb: { nautilus: "Dredge Line engages on her and she can't stop it.", leona: "Zenith Blade gets on top of her.", velkoz: "He outranges her poke.", xerath: "He outranges her poke." }
},
{
  n: "Karthus", r: "jng mid", c: "battle", bt: "apd", d: "ap", rg: 450,
  s: [2, 4, 5, 1, 3, 2, 4, 5, 1, 4, 5], f: "skill global revive",
  th: "Requiem (R) hits every enemy champion on the map. Defile (E) ticks around him, and his passive lets him keep casting after death.",
  pw: "He's immobile and slow to clear early. Invade him before he gets going.",
  st: ["Global ultimate", "Keeps casting after death", "Huge AoE damage"],
  wk: ["No mobility", "Weak early", "Squishy"],
  go: ["R to finish low enemies across the map", "Fight in chokes where Lay Waste (Q) hits several enemies"],
  no: ["Don't get invaded before your first item", "Don't face-check brush"],
  sit: [["Ahead", "Snowball with R and farm fast."], ["Behind", "Farm; your late game is strong."], ["Into divers", "Rush Zhonya's Hourglass."]],
  b: { ru: "Dark Harvest · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Morellonomicon"] },
  ob: [
    { n: "Mid Karthus", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst from mid lane." },
    { n: "Actualizer Karthus", i: ["Actualizer", "Liandry's Torment", "Rabadon's Deathcap"], w: "More Q spam in the empowered state." }
  ],
  cb: { leesin: "He invades Karthus and kills him before six.", nidalee: "She steals his camps and out-clears him.", kindred: "She marks his jungle and out-scales him.", rengar: "He leaps on Karthus from brush." }
},
{
  n: "Kassadin", r: "mid", c: "assn", bt: "apa", d: "ap", rg: 150,
  s: [1, 4, 5, 5, 2, 3, 4, 4, 2, 1, 3], f: "blink stack",
  th: "Riftwalk (R) blinks him onto you, stacking extra damage each cast. At level 16 he can blink three or four times in a row.",
  pw: "Before level 6 he's one of the weakest laners in the game. Bully him and deny CS.",
  st: ["Unmatched late-game mobility", "Null Sphere (Q) silences and shields against magic", "Strong against AP mages"],
  wk: ["Very weak early", "Low damage without stacks", "Loses to physical-damage lanes"],
  go: ["Riftwalk onto a carry late game", "Poke with Q to farm safely"],
  no: ["Don't fight before level 6", "Don't Riftwalk into a stun"],
  sit: [["Ahead", "Roam with R after level 6 and dive carries at 11 and 16."], ["Behind", "Farm safely and scale. Level 16 still changes the game."], ["Into physical damage", "Rush Zhonya's Hourglass; Null Sphere's shield only blocks magic."]],
  b: { ru: "Fleet Footwork · Sorcery", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Rod of Ages", "Archangel's Staff", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Lich Bane"] },
  ob: [
    { n: "Burst Kassadin", i: ["Lich Bane", "Shadowflame", "Rabadon's Deathcap"], w: "Earlier power spike when you're already ahead and want to end fast." },
    { n: "Actualizer Kassadin", i: ["Actualizer", "Rabadon's Deathcap", "Void Staff"], w: "The empowered mana state fuels back-to-back Riftwalks in long fights." }
  ],
  cb: { talon: "His early physical burst kills Kassadin before level 6.", zed: "Physical damage ignores Null Sphere's magic shield, and he out-trades early.", pantheon: "Point-and-click stun and spear poke bully him out of lane.", tristana: "Mid Tristana out-ranges and bursts him before he scales." }
}
);
