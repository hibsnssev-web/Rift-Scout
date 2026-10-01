/* Champion profiles: Katarina to Kayn. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Katarina", r: "mid", c: "assn", bt: "apa", d: "ap", rg: 125,
  s: [3, 5, 4, 5, 1, 2, 5, 4, 1, 1, 4], f: "blink execute",
  th: "Death Lotus (R) shreds everyone near her, and every takedown resets Shunpo (E). One kill can become a pentakill.",
  pw: "Death Lotus is channeled, so any hard CC cancels it. Before 6, Shunpo is her only escape.",
  st: ["Takedown resets clean up whole teamfights", "Very mobile with daggers and Shunpo", "Strong roams after level 6"],
  wk: ["Weak into point-and-click CC", "Short range; ranged mages bully her early", "Can't do much when the enemy team is healthy and grouped"],
  go: ["Shunpo into a fight once two enemies are below half", "Roam bot or top when the wave is pushed"],
  no: ["Don't Death Lotus next to someone who still has a stun", "Don't engage first; clean up after your team"],
  sit: [["Ahead", "Roam every time the wave is pushed and snowball side lanes."], ["Behind", "Farm, then flank late fights for resets."], ["Into CC", "Buy Zhonya's Hourglass and wait for the CC to be spent."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Hextech Gunblade", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Stormsurge"] },
  ob: [
    { n: "On-hit Katarina", i: ["Nashor's Tooth", "Blade of the Ruined King", "Guinsoo's Rageblade"], w: "Dagger procs apply on-hit. Strong into tanky teams where burst fails." },
    { n: "AD Katarina", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Physical burst when the enemy stacks magic resist." }
  ],
  cb: { galio: "His magic shield eats her burst and his taunt stops Death Lotus.", lissandra: "Frozen Tomb cancels Death Lotus and she can't burst Lissandra.", malzahar: "Nether Grasp stops her mid-spin, and his voidlings soak daggers.", annie: "A point-and-click stun cancels her R instantly." }
},
{
  n: "Kayle", r: "top", c: "spec", bt: "apf", d: "ap", rg: 175,
  s: [1, 3, 5, 2, 1, 3, 3, 5, 2, 2, 4], f: "untarg aa",
  th: "From level 11 her attacks splash; from 16 she's a long-range hyper-carry. Divine Judgment (R) makes her or an ally invulnerable.",
  pw: "Before level 6 she's melee and one of the weakest laners in the game. Bully her and deny CS.",
  st: ["One of the strongest late-game champions", "R makes an ally invulnerable at the key moment", "Ranged splash damage from level 16"],
  wk: ["Weakest early game in the game", "Melee with no gap-closer until level 6", "Squishy and easy to dive"],
  go: ["R an ally who's about to die in a big fight", "Take every fight once you hit level 16"],
  no: ["Don't trade before level 6; just last-hit", "Don't burn R early just to survive a small trade"],
  sit: [["Ahead", "Keep farming and hit level 16 fast; don't over-extend chasing kills."], ["Behind", "Farm safely under tower. You still scale harder than almost anyone."], ["Into dive", "Save R for yourself and stand behind your front line."]],
  b: { ru: "Lethal Tempo · Sorcery", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Nashor's Tooth", "Rabadon's Deathcap", "Guinsoo's Rageblade"], bo: "Berserker's Greaves", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Wit's End"] },
  ob: [
    { n: "Dusk and Dawn Kayle", i: ["Dusk and Dawn", "Nashor's Tooth", "Rabadon's Deathcap"], w: "Spellblade bursts on top of her splash damage." },
    { n: "Crit Kayle", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Physical Kayle for teams that already have enough magic damage." }
  ],
  cb: { renekton: "He bullies her from level 1 before she can scale.", pantheon: "Point-and-click stun and spear poke deny her farm.", jayce: "Cannon poke denies her early CS.", sett: "He wins every early all-in and zones her from the wave." }
},
{
  n: "Kayn", r: "jng", c: "skirm", bt: "adb", d: "ad", rg: 175,
  s: [2, 4, 5, 4, 2, 4, 4, 4, 3, 1, 4], f: "dash heal untarg",
  th: "Umbral Trespass (R) hides him inside a target he recently damaged. Rhaast (red form) heals massively; Shadow Assassin (blue form) one-shots squishies.",
  pw: "Before he transforms he's weak. Invade him early and deny his camps.",
  st: ["Walks through walls with Shadow Step (E)", "Two forms fit almost any game", "R dodges damage in fights"],
  wk: ["Weak before transforming", "Needs champion damage to earn his form", "Punished hard by early invades"],
  go: ["Walk through walls to gank from angles nobody warded", "R into a target to dodge key damage mid-fight"],
  no: ["Don't take early duels before your form", "Don't wall-walk into unwarded fog"],
  sit: [["Ahead", "Pick the form your team needs and snowball."], ["Behind", "Farm orbs from skirmishes and transform before fighting."], ["Into squishy teams", "Take Shadow Assassin and play for flanks."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Guardian Angel", "Maw of Malmortius", "Spirit Visage"] },
  ob: [
    { n: "Shadow Assassin Kayn", i: ["Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot build for blue form into squishy carries." },
    { n: "Tank Rhaast", i: ["Black Cleaver", "Sunfire Aegis", "Spirit Visage"], w: "Durable red form that heals through whole fights." }
  ],
  cb: { leesin: "He invades early and denies Kayn's camps.", graves: "He invades and out-clears him before the transform.", nidalee: "She takes his camps before he transforms.", poppy: "Steadfast Presence stops his dashes and she kills him early." }
}
);
