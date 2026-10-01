/* Champion profiles: Gragas to Irelia. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Gragas", r: "jng top sup mid", c: "vang", bt: "apf", d: "ap", rg: 125,
  s: [3, 4, 4, 4, 4, 3, 4, 2, 4, 2, 4], f: "dash engage skill",
  th: "Body Slam (E) knocks up, and Explosive Cask (R) knocks you straight into his team.",
  pw: "Body Slam stops on the first unit it hits. If a minion or teammate blocks it, he has no engage for several seconds.",
  st: ["R cask can split or displace a whole team", "Drunken Rage (W) cuts damage taken", "Flexible: jungle, top, mid or support"],
  wk: ["Needs to land E and R precisely", "Mana-limited early", "A bad cask pushes enemies to safety"],
  go: ["Flash-Body Slam a carry, then cask them into your team", "Cask an enemy away from a contested objective"],
  no: ["Don't cask enemies toward their own team", "Don't Body Slam through a wall of minions"],
  sit: [["Ahead", "Look for picks with E and R and split the enemy team."], ["Behind", "Play tank-support and peel with cask."], ["Into dive", "Save cask to knock divers off your carry."]],
  b: { ru: "Phase Rush · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Sunfire Aegis", "Zhonya's Hourglass", "Jak'Sho the Protean"], bo: "Plated Steelcaps", sit: ["Kaenic Rookern", "Unending Despair", "Force of Nature", "Rylai's Crystal Scepter"] },
  ob: [
    { n: "Full AP Gragas", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "One-combo burst: Q-E-R deletes squishies." },
    { n: "Support Gragas", i: ["Celestial Opposition", "Locket of the Iron Solari", "Zeke's Convergence"], w: "Engage and disengage support for protect-the-carry comps." }
  ],
  cb: { olaf: "Ragnarok makes him immune to the Body Slam and cask combo.", fiora: "Vitals shred him in lane and Riposte parries Body Slam.", kindred: "She invades his camps and kites his engage.", udyr: "He out-duels Gragas early and runs him down." }
},
{
  n: "Graves", r: "jng", c: "spec", bt: "adA", d: "ad", rg: 425,
  s: [4, 5, 3, 3, 1, 3, 5, 4, 3, 2, 4], f: "dash aa crit",
  th: "Point-blank shotgun blasts hit with every pellet. Collateral Damage (R) bursts and knocks him back out.",
  pw: "He carries two shells. Once both are fired he has to reload, so engage during the reload.",
  st: ["Fastest clears in the game and very strong invades", "Huge burst at point-blank range", "Quickdraw (E) stacks armor in fights"],
  wk: ["Short range for a ranged champion", "Almost no CC", "Tanks and auto-blockers blunt his damage"],
  go: ["Invade when your laners have priority", "Dash into point-blank range for the full burst"],
  no: ["Don't fight into Counter Strike or Unbreakable", "Don't invade without vision"],
  sit: [["Ahead", "Invade and take camps to starve the enemy jungler."], ["Behind", "Farm fast and look for skirmishes with your laners."], ["Into tanks", "Build Lord Dominik's Regards and fight in long trades."]],
  b: { ru: "Fleet Footwork · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Youmuu's Ghostblade", "The Collector", "Serylda's Grudge"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Guardian Angel", "Death's Dance", "Maw of Malmortius"] },
  ob: [
    { n: "Crit Graves", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Late-game DPS build for games that will go long." },
    { n: "Top-lane Graves", i: ["The Collector", "Serylda's Grudge", "Death's Dance"], w: "Ranged bully into melee-heavy top lanes." }
  ],
  cb: { rammus: "Armor stacking and taunt blunt his shotgun.", jax: "Counter Strike dodges the whole burst and stuns him.", poppy: "Steadfast Presence stops Quickdraw mid-dash.", kindred: "She out-scales him and dodges his burst with Lamb's Respite." }
},
{
  n: "Gwen", r: "top jng", c: "skirm", bt: "apf", d: "ap", rg: 150,
  s: [3, 4, 5, 3, 2, 4, 4, 5, 3, 1, 3], f: "heal pct true dash untarg split",
  th: "Snip Snip! (Q) center hits deal true damage. Hallowed Mist (W) blocks all damage from outside the mist.",
  pw: "The mist only blocks damage from outside it. Step inside and she has no protection. W has a long cooldown early.",
  st: ["Max-health damage melts tanks", "Hallowed Mist blocks ranged damage and turret shots", "Strong late-game duelist"],
  wk: ["Weak early game", "Hard CC catches her", "Short range"],
  go: ["Take long trades against tanks and bruisers", "Use the mist to dodge a key engage or burst"],
  no: ["Don't trade with ranged champions at level 1", "Don't stand in mist when enemies can walk into it"],
  sit: [["Ahead", "Split push and duel the enemy tanks."], ["Behind", "Farm and scale; she's much stronger at three items."], ["Into ranged", "Mist to block poke and all-in from inside it."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Riftmaker", "Nashor's Tooth", "Liandry's Torment"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Banshee's Veil"] },
  ob: [
    { n: "Dusk and Dawn Gwen", i: ["Dusk and Dawn", "Nashor's Tooth", "Rabadon's Deathcap"], w: "Spellblade and on-hit burst for faster kills on squishies." },
    { n: "Jungle Gwen", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Clear and skirmish build for the jungle." }
  ],
  cb: { pantheon: "He wins the early lane before her items come online.", kennen: "Ranged poke and a stun she can't dodge with W.", jayce: "Cannon poke stops her from walking in.", quinn: "She kites Gwen and vaults away when Gwen closes in." }
},
{
  n: "Hecarim", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 175,
  s: [3, 5, 3, 5, 4, 3, 4, 3, 3, 1, 4], f: "dash engage heal",
  th: "Devastating Charge (E) knocks back after building speed. Onslaught of Shadows (R) fears everyone he rides through.",
  pw: "Early he's mana-hungry and E is his only CC before 6. Slows and hard CC stop his charge.",
  st: ["Huge move speed turns into bonus damage", "R fear wins teamfights", "Fast clears with Rampage (Q)"],
  wk: ["Slows and CC stop him cold", "Has to reach the backline to matter", "Mana-hungry early"],
  go: ["R into grouped enemies from a flank", "Charge a carry back into your team"],
  no: ["Don't charge into a slow-heavy team", "Don't dive without your team following"],
  sit: [["Ahead", "Dive the backline with R from a flank."], ["Behind", "Farm and wait for fights where you can flank."], ["Into CC", "Buy Mercury's Treads and wait for the key CC to be used."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Trinity Force", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Maw of Malmortius", "Guardian Angel", "Spirit Visage", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Hecarim", i: ["Profane Hydra", "Voltaic Cyclosword", "Serylda's Grudge"], w: "One-shot charge build for squishy teams." },
    { n: "Tank Hecarim", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line engage when your team has enough damage." }
  ],
  cb: { poppy: "Steadfast Presence stops his charge and R dash.", rammus: "Armor and taunt blunt his charge.", nunu: "Slows kill his move speed and he out-clears Hecarim.", jax: "Counter Strike dodges his autos and stuns him mid-charge." }
},
{
  n: "Heimerdinger", r: "mid top sup", c: "spec", bt: "apb", d: "ap", rg: 550,
  s: [4, 4, 3, 1, 4, 2, 4, 4, 2, 4, 4], f: "skill",
  th: "Turrets zone the lane. CH-2 Electron Storm Grenade (E) stuns, and upgraded R spells can one-shot waves and champions.",
  pw: "He's immobile. Kill his turrets or catch him away from them and he has almost nothing.",
  st: ["Turrets zone lanes and objectives", "Grenade stun sets up his combo", "Upgraded R spells win big fights"],
  wk: ["No mobility", "Turrets die fast to AoE", "Divers who reach him kill him"],
  go: ["Set up turrets before objectives spawn", "Stun and follow with an upgraded rocket barrage"],
  no: ["Don't fight away from your turrets", "Don't face-check brush"],
  sit: [["Ahead", "Siege towers with turrets and zone objectives."], ["Behind", "Farm under your turrets and wait for the enemy to walk in."], ["Into divers", "Put turrets next to yourself, not in front."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Luden's Echo"] },
  ob: [
    { n: "Support Heimerdinger", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Rylai's Crystal Scepter"], w: "Turret poke and zone support that wins 2v2s." },
    { n: "Top Heimerdinger", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Zone-top counter-pick into immobile melee champions." }
  ],
  cb: { fizz: "He jumps over turrets and dives Heimer.", zed: "Living Shadow reaches Heimer behind his turrets.", yasuo: "Wind Wall blocks turret shots and rockets.", kassadin: "Riftwalk blinks straight onto him." }
},
{
  n: "Hwei", r: "mid sup", c: "arty", bt: "apb", d: "ap", rg: 550,
  s: [2, 4, 5, 1, 4, 1, 4, 3, 1, 5, 4], f: "skill",
  th: "Subject: Disaster pokes from long range. Torment's Grim Visage (EQ) fears, and Spiraling Despair (R) chains slows into an explosion.",
  pw: "He's immobile. Subject: Serenity shields and speeds him up; once it's used, dive him.",
  st: ["Ten spells cover almost any situation", "Long-range poke and zone control", "Strong AoE teamfight R"],
  wk: ["No mobility", "Very hard to play well", "Assassins and divers kill him"],
  go: ["Poke from max range before objectives", "Fear a diver with EQ and punish"],
  no: ["Don't walk forward without Serenity", "Don't fight an assassin alone"],
  sit: [["Ahead", "Poke and siege; control objectives with zone spells."], ["Behind", "Farm with waveclear spells and play defensively."], ["Into assassins", "Rush Zhonya's Hourglass and hold the fear."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Support Hwei", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Liandry's Torment"], w: "Poke and utility support with fear and slows." },
    { n: "Actualizer Hwei", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More spells cast in the empowered state for long fights." }
  ],
  cb: { fizz: "Trickster dodges his skillshots and he dives Hwei.", zed: "Living Shadow reaches Hwei before his fear lands.", kassadin: "Riftwalk blinks onto him and Null Sphere eats his poke.", akali: "Shroud hides her from his skillshots." }
},
{
  n: "Illaoi", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 125,
  s: [3, 4, 4, 1, 2, 5, 3, 4, 4, 2, 4], f: "heal skill",
  th: "Test of Spirit (E) pulls out your spirit; every tentacle slam that hits it heals her. Leap of Faith (R) spawns a tentacle per enemy hit.",
  pw: "E is a skillshot with a long cooldown. Dodge it and she can't reach you. Fight outside tentacle range.",
  st: ["Heals massively from tentacle slams", "R wins 1v2 and 1v3 fights", "Strong push and zone control"],
  wk: ["No mobility", "Needs to land E", "Kited by ranged champions"],
  go: ["Fight next to your tentacles", "R when three enemies are close"],
  no: ["Don't chase outside tentacle range", "Don't all-in when E is on cooldown"],
  sit: [["Ahead", "Split push and duel near your tentacles."], ["Behind", "Push waves with tentacles and farm."], ["Into ranged", "Hit them with tentacles from behind the wave."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Sundered Sky", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Maw of Malmortius", "Force of Nature", "Guardian Angel"] },
  ob: [
    { n: "Tank Illaoi", i: ["Heartsteel", "Sunfire Aegis", "Spirit Visage"], w: "Front line that still heals from tentacles." },
    { n: "Lethality Illaoi", i: ["Profane Hydra", "Serylda's Grudge", "Youmuu's Ghostblade"], w: "Burst tentacles for squishy teams." }
  ],
  cb: { vayne: "She kites Illaoi and Condemns her out of R.", quinn: "She kites her and vaults out of E.", gwen: "Hallowed Mist blocks the tentacles.", jayce: "Cannon poke keeps her out of tentacle range." }
},
{
  n: "Irelia", r: "top mid", c: "diver", bt: "adb", d: "ad", rg: 200,
  s: [4, 5, 4, 5, 3, 4, 4, 5, 3, 1, 4], f: "dash heal",
  th: "Bladesurge (Q) resets on marked or low units. With full passive stacks she wins almost any duel.",
  pw: "Without minions to reset Q on, she's stuck. Flawless Duet (E) is her only CC; if it misses, all-in.",
  st: ["Q resets give huge mobility", "Full passive stacks win duels", "Vanguard's Edge (R) marks several enemies at once"],
  wk: ["Needs minions or marks to reset Q", "Hard CC stops her dives", "Snowball-dependent"],
  go: ["Dive with full stacks when enemies are marked", "Chain Q through minions to reach a carry"],
  no: ["Don't fight without passive stacks", "Don't dive into point-and-click CC"],
  sit: [["Ahead", "Snowball and dive towers."], ["Behind", "Farm to Blade of the Ruined King and look for flanks."], ["Into tanks", "Build on-hit and fight long trades."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Blade of the Ruined King", "Sundered Sky", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Wit's End"] },
  ob: [
    { n: "Endless Hunger Irelia", i: ["Endless Hunger", "Blade of the Ruined King", "Sterak's Gage"], w: "Tenacity and omnivamp against CC-heavy teams." },
    { n: "Trinity Force Irelia", i: ["Trinity Force", "Blade of the Ruined King", "Death's Dance"], w: "More burst on Q resets." }
  ],
  cb: { poppy: "Steadfast Presence stops Bladesurge.", malphite: "Armor stacking and Unstoppable Force beat her dives.", jax: "Counter Strike dodges her autos and stuns her.", vex: "Her passive fears Irelia the moment she dashes." }
}
);
