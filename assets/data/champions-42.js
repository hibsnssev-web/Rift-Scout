/* Champion profiles: Zac to Ziggs. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Zac", r: "jng top", c: "vang", bt: "tank", d: "ap", rg: 175,
  s: [3, 4, 4, 5, 5, 4, 3, 2, 5, 1, 3], f: "engage heal revive",
  th: "Elastic Slingshot (E) launches him from a screen away into a knock-up. Cell Division revives him if enough of his blobs survive.",
  pw: "Step on or kill his blobs after he 'dies' to stop the revive. His E charge takes time, so walk away from the landing circle.",
  st: ["Longest engage range of any tank", "Revives from his passive once per long cooldown", "Picks up his own blobs to heal through fights"],
  wk: ["Low damage once his combo is spent", "Revive fails if enemies kill his blobs", "Slingshot is telegraphed and dodgeable"],
  go: ["Slingshot over a wall onto a carry who is standing apart from their team", "Bounce R (Let's Bounce!) into the enemy backline to scatter them"],
  no: ["Don't Slingshot into three enemies with CC ready and no follow-up", "Don't fight where enemies can stand on your blobs"],
  sit: [["Ahead", "Engage every objective fight from fog, starting with the carry."], ["Behind", "Play as a peeling tank and Slingshot only when your team is close."], ["Into poke", "Engage early with E before the poke lands, or go around through the jungle."]],
  b: { ru: "Aftershock · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Kaenic Rookern", "Force of Nature", "Thornmail", "Randuin's Omen"] },
  ob: [
    { n: "AP Zac", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Slingshot and R deal real damage. Good when your team already has a second front liner." },
    { n: "Support Zac", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support for immobile bot lanes you can Slingshot onto." }
  ],
  cb: { lillia: "Her move speed keeps her away from Slingshot and she sleeps him after he lands.", kindred: "She kites him and Lamb's Respite wastes his engage.", graves: "He invades Zac's slow clear and shreds him early.", nidalee: "She steals his camps before he has his tank items." }
},
{
  n: "Zed", r: "mid jng", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 5, 4, 5, 1, 2, 5, 3, 1, 3, 4], f: "dash stealth execute",
  th: "Death Mark (R) pops for a big share of the damage he deals while it's on you. Living Shadow (W) lets him swap places and double up his Razor Shuriken (Q).",
  pw: "Once his W shadow is used, he has no escape for several seconds. Zhonya's Hourglass timed on the Death Mark pop wastes his whole ultimate.",
  st: ["One of the highest single-target bursts in the game", "Shadow swaps make him slippery in lane", "Energy means no mana problems"],
  wk: ["Squishy once he commits", "Zhonya's Hourglass and self-stasis counter his R", "Tanks and bruisers blunt his damage"],
  go: ["R a squishy carry who walked away from their team", "Shadow poke with W-Q when the enemy is out of minion cover"],
  no: ["Don't W in when you need the shadow to get out", "Don't R a tank or a champion holding Zhonya's"],
  sit: [["Ahead", "Roam to side lanes after pushing and kill carries before fights start."], ["Behind", "Farm with shadow Qs and look for picks on isolated squishies."], ["Into tanks", "Skip the front line and wait for the carry to step forward."]],
  b: { ru: "Electrocute · Domination", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Profane Hydra", "Youmuu's Ghostblade", "Opportunity"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Edge of Night", "Guardian Angel", "Bastionbreaker"] },
  ob: [
    { n: "Bruiser Zed", i: ["Eclipse", "Black Cleaver", "Death's Dance"], w: "Durable build for long skirmishes into bruisers." },
    { n: "Crit Zed", i: ["Infinity Edge", "The Collector", "Lord Dominik's Regards"], w: "Crit shuriken for late games against front lines." }
  ],
  cb: { malzahar: "His passive spell shield eats Zed's opener and Nether Grasp suppresses him after Death Mark.", lissandra: "Frozen Tomb on herself dodges the Death Mark pop, then she roots him.", vex: "Her passive fears Zed the moment he dashes in with R.", pantheon: "He wins the early trades and Aegis Assault blocks Zed's shuriken." }
},
{
  n: "Zeri", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [2, 4, 5, 5, 1, 2, 3, 5, 1, 2, 3], f: "dash shield",
  th: "Spark Surge (E) dashes over walls and powers up her Burst Fire (Q). Lightning Crash (R) overcharges her, making her faster and chaining damage.",
  pw: "She's weak before two items and squishy all game. Once Spark Surge is used, she has no way out.",
  st: ["Most mobile marksman, dashing over walls", "R chains damage through grouped enemies", "Shields from her passive when she kills or takes damage"],
  wk: ["Very weak early lane", "Squishy", "Needs items and a good support to shine"],
  go: ["R into a teamfight once the enemy's CC is used", "Wall-dash with E to reposition mid-fight"],
  no: ["Don't take early all-ins against lane bullies", "Don't use E to engage when it's your only escape"],
  sit: [["Ahead", "Kite fights in circles and take long fights."], ["Behind", "Farm with Q and wait for your two-item spike."], ["Into dive", "Keep E for the diver and kite over walls."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Runaan's Hurricane"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Stormrazor Zeri", i: ["Stormrazor", "Infinity Edge", "Runaan's Hurricane"], w: "Energized burst that pays off her constant movement." },
    { n: "Navori Zeri", i: ["Navori Flickerblade", "Infinity Edge", "Lord Dominik's Regards"], w: "Lower cooldowns for more E dashes in long fights." }
  ],
  cb: { draven: "He wins the early lane by a mile before Zeri scales.", caitlyn: "She out-ranges Zeri and traps her dash landing spots.", samira: "Her all-in reaches Zeri before she can kite.", lucian: "His short trades punish Zeri's weak early damage." }
},
{
  n: "Ziggs", r: "bot mid", c: "arty", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 2, 3, 1, 4, 3, 1, 5, 5], f: "skill",
  th: "Bouncing Bomb (Q) pokes constantly, and Mega Inferno Bomb (R) hits from across the map. Satchel Charge (W) knocks you back and executes low towers.",
  pw: "Satchel Charge is his only escape. Once it's used, dive him.",
  st: ["Destroys towers faster than anyone with W", "Long-range poke and siege", "R finishes low enemies anywhere"],
  wk: ["Squishy", "Every damage spell is a skillshot", "Divers and all-in lanes reach him"],
  go: ["Poke from max range before objectives", "Satchel low towers to take them early"],
  no: ["Don't walk forward without W ready", "Don't fight divers in the open"],
  sit: [["Ahead", "Siege and take towers with Satchel Charge."], ["Behind", "Poke from range and farm with Q."], ["Into divers", "Hold W to knock them off you."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Heal", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Horizon Focus"] },
  ob: [
    { n: "Mid Ziggs", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Waveclear and tower pressure from mid lane." },
    { n: "Liandry's Ziggs", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burning, slowing poke against tanky teams." }
  ],
  cb: { samira: "Wild Rush reaches him and Blade Whirl blocks his bombs.", ezreal: "Arcane Shift dodges his bombs and Mystic Shot out-trades him from safety.", kalista: "Her hops dodge his bombs and she wins the all-in.", lucian: "Relentless Pursuit closes the gap before Satchel Charge is back." }
}
);
