/* Champion profiles: Rumble to Samira. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Rumble", r: "top mid jng", c: "battle", bt: "apf", d: "ap", rg: 125,
  s: [4, 5, 3, 2, 3, 2, 4, 4, 3, 3, 4], f: "shield",
  th: "Flamespitter (Q) in the Danger Zone (50+ heat) deals huge damage. The Equalizer (R) carpets a line with fire that slows and burns.",
  pw: "If he overheats, he's silenced for a few seconds. Trade when his heat bar maxes out.",
  st: ["The Equalizer zones whole teams in chokes", "Strong lane burst in the Danger Zone", "Scrap Shield (W) gives a shield and speed"],
  wk: ["Heat management punishes mistakes", "Short range", "Squishy in the late game"],
  go: ["R a choke during an objective fight", "Trade when you're in the Danger Zone and they aren't"],
  no: ["Don't overheat in the middle of a trade", "Don't fight long-range mages in the open"],
  sit: [["Ahead", "Zone every objective fight with R."], ["Behind", "Farm and wait for teamfights where R hits several enemies."], ["Into tanks", "Build Liandry's Torment."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Rabadon's Deathcap", "Banshee's Veil", "Rylai's Crystal Scepter"] },
  ob: [
    { n: "Jungle Rumble", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "AoE clear and zone control from the jungle." },
    { n: "Burst Rumble", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst mid laner for squishy teams." }
  ],
  cb: { vayne: "She kites him and outscales him.", jayce: "Cannon poke keeps him out of Flamespitter range.", kennen: "He out-ranges Rumble and stuns him.", gnar: "Mini Gnar kites him and Mega Gnar tanks his burst." }
},
{
  n: "Ryze", r: "mid top", c: "battle", bt: "apd", d: "ap", rg: 550,
  s: [2, 4, 5, 3, 3, 3, 3, 5, 3, 3, 4], f: "point",
  th: "Overload (Q) spam with Spell Flux (E) and Rune Prison (W) root. Realm Warp (R) teleports his team across the map.",
  pw: "He's weak early. Rune Prison is short-range and point-and-click, so stay just outside it.",
  st: ["Realm Warp teleports his whole team", "Point-and-click root", "High late-game DPS"],
  wk: ["Weak early", "Short range for his root", "Mana-hungry"],
  go: ["Realm Warp your team behind the enemy", "Root and spam Q"],
  no: ["Don't take early all-ins", "Don't fight long-range mages in the open"],
  sit: [["Ahead", "Roam with R and bring your team with you."], ["Behind", "Farm and scale; he's a late-game mage."], ["Into assassins", "Buy Zhonya's Hourglass."]],
  b: { ru: "Phase Rush · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Rod of Ages", "Archangel's Staff", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Actualizer Ryze", i: ["Actualizer", "Archangel's Staff", "Rabadon's Deathcap"], w: "More Overloads in the empowered state." },
    { n: "Top Ryze", i: ["Rod of Ages", "Riftmaker", "Zhonya's Hourglass"], w: "Durable top-lane Ryze." }
  ],
  cb: { zed: "He bursts Ryze before he has items.", talon: "He roams faster and bursts Ryze.", syndra: "She out-ranges and out-bursts Ryze early.", xerath: "He out-ranges Ryze and pokes him from safety." }
},
{
  n: "Samira", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [4, 4, 4, 4, 2, 4, 5, 4, 1, 1, 3], f: "dash crit",
  th: "Blade Whirl (W) blocks projectiles, and Inferno Trigger (R) shreds everyone around her once she hits S-rank style.",
  pw: "She needs combos to build style for R. Hard CC stops her and she's squishy.",
  st: ["Blocks projectiles with W", "R shreds grouped enemies", "Very high burst"],
  wk: ["Needs combos for R", "Hard CC stops her", "Squishy"],
  go: ["Dive with Wild Rush (E) after your support lands CC", "W the enemy's key projectile"],
  no: ["Don't dive into point-and-click CC", "Don't R before you have S rank"],
  sit: [["Ahead", "Dive and snowball with an engage support."], ["Behind", "Farm and wait for teamfights."], ["Into poke", "W to block the poke, then engage."]],
  b: { ru: "Conqueror · Domination", ss: "Flash · Heal", st: "Doran's Blade", core: ["Bloodthirster", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Death's Dance", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Lethality Samira", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst Samira who deletes squishies in one R." },
    { n: "Fiendhunter Samira", i: ["Fiendhunter Bolts", "Infinity Edge", "Bloodthirster"], w: "Guaranteed crits after R for more damage." }
  ],
  cb: { leona: "Her CC stops Samira's R.", nautilus: "Point-and-click R stops her.", alistar: "His combo stops her dive.", rell: "Magnet Storm pulls her before she can R." }
}
);
