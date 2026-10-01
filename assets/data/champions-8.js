/* Champion profiles: Kled to LeBlanc. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Kled", r: "top", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [5, 4, 3, 4, 3, 3, 4, 4, 3, 1, 3], f: "dash engage",
  th: "Beartrap on a Rope (Q) hooks you and yanks you toward him. Chaaaaaaaarge!!! (R) gallops across the map and knocks back.",
  pw: "When Skaarl's health runs out he's dismounted and much weaker. Fight him before he remounts.",
  st: ["Huge early all-in power", "Skaarl gives him a second health bar", "R starts fights from a screen away"],
  wk: ["Weak while dismounted", "Kited by ranged top laners", "Falls off if he doesn't snowball"],
  go: ["All-in at level 2 or 3 when the rope lands", "Charge into a fight with your team right behind"],
  no: ["Don't fight dismounted unless the enemy is almost dead", "Don't charge in alone"],
  sit: [["Ahead", "Dive the enemy laner and roam with R."], ["Behind", "Farm and look for R engages with your team."], ["Into ranged", "Wait for the pull and all-in at close range."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Eclipse", "Sterak's Gage", "Black Cleaver"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Spirit Visage"] },
  ob: [
    { n: "Lethality Kled", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst build that one-shots squishies at the end of R." },
    { n: "Jungle Kled", i: ["Eclipse", "Sterak's Gage", "Black Cleaver"], w: "Early ganks with Beartrap on a Rope." }
  ],
  cb: { quinn: "She kites Kled and Vault knocks him away from his rope.", vayne: "Condemn stops his charge and she kites him forever.", kennen: "Ranged poke chips Skaarl and his stun stops the all-in.", teemo: "Blinding Dart shuts down his early trades." }
},
{
  n: "Kog'Maw", r: "bot", c: "mark", bt: "onhit", d: "mix", rg: 500,
  s: [2, 4, 5, 1, 1, 1, 2, 5, 1, 4, 3], f: "aa pct",
  th: "Bio-Arcane Barrage (W) extends his range and adds max-health damage. Living Artillery (R) pokes from long range.",
  pw: "He has no escape. Any dive or engage reaches him.",
  st: ["Massive late-game DPS, even against tanks", "Long-range poke with R", "W makes him outrange most marksmen"],
  wk: ["No mobility", "Weak early", "Dive kills him instantly"],
  go: ["Stand behind your front line and hit whatever is in range", "Poke with R before fights start"],
  no: ["Don't face-check brush", "Don't fight when your support is dead"],
  sit: [["Ahead", "Group with your team and siege."], ["Behind", "Farm safely; two items puts you back in."], ["Into dive", "Stand behind your front line and peelers."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"], bo: "Berserker's Greaves", sit: ["Wit's End", "Guardian Angel", "Lord Dominik's Regards", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Kog'Maw", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Living Artillery poke build for siege comps." },
    { n: "Crit Kog'Maw", i: ["Infinity Edge", "Runaan's Hurricane", "Lord Dominik's Regards"], w: "Late crit when the enemy isn't tanky." }
  ],
  cb: { draven: "He wins the early lane before Kog'Maw scales.", samira: "She dashes on him and he can't escape.", nilah: "Her all-in reaches him and Jubilant Veil dodges his autos.", lucian: "Short dash trades punish his weak early game." }
},
{
  n: "LeBlanc", r: "mid", c: "assn", bt: "apa", d: "ap", rg: 525,
  s: [4, 5, 3, 5, 3, 1, 5, 2, 1, 3, 3], f: "dash skill",
  th: "Distortion (W) dashes in for Sigil of Malice (Q) and Mimic (R) burst. Ethereal Chains (E) roots if you don't break the tether.",
  pw: "Her W return pad is her escape. Once she's used it, she's immobile.",
  st: ["One of the fastest bursts in the game", "Two-dash mobility with W and RW", "Strong roams and picks"],
  wk: ["Squishy", "Falls off late", "Magic resist and tanks blunt her"],
  go: ["Dash in, burst, and return to the pad before they react", "Roam to side lanes after pushing the wave"],
  no: ["Don't W in when your return pad isn't safe", "Don't fight tanks head-on"],
  sit: [["Ahead", "Roam and pick off carries."], ["Behind", "Farm and look for picks with E."], ["Into tanks", "Target the squishiest enemy and skip the front line."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Actualizer LeBlanc", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More spells in the empowered state for extended fights." },
    { n: "AD LeBlanc", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Physical burst when the enemy stacks magic resist." }
  ],
  cb: { galio: "Magic shield and taunt stop her burst.", kassadin: "Null Sphere shields him from her magic burst.", lissandra: "Frozen Tomb stops her dive.", malzahar: "His spell shield eats her first spell." }
}
);
