/* Champion profiles: Xayah to Xin Zhao. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Xayah", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 525,
  s: [3, 4, 5, 2, 4, 2, 4, 4, 1, 2, 4], f: "untarg crit skill",
  th: "Bladecaller (E) pulls her feathers back and roots anyone hit by three. Featherstorm (R) makes her untargetable and drops a fan of feathers.",
  pw: "Featherstorm is her only escape. Bait it out, then engage while it's on cooldown.",
  st: ["R untargetability dodges engages and ultimates", "Feather root punishes anyone standing in her line", "Huge teamfight damage when feathers are down"],
  wk: ["No dash", "Needs feathers on the ground to do anything", "Squishy when R is down"],
  go: ["Dodge the enemy engage with R, then recall feathers through them", "Stack feathers under the enemy before pulling them back"],
  no: ["Don't use R to poke or chase", "Don't fight without feathers set up"],
  sit: [["Ahead", "Lane with Rakan or an engage support and snowball the 2v2."], ["Behind", "Farm and play for one good root in teamfights."], ["Into dive", "Save Featherstorm for the dive, then root them on the way out."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Navori Flickerblade"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Xayah", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst feather recalls for pick comps." },
    { n: "Stormrazor Xayah", i: ["Stormrazor", "Infinity Edge", "Navori Flickerblade"], w: "Energized first-hit burst for short trades." }
  ],
  cb: { draven: "He wins the early lane before Xayah has feathers to work with.", caitlyn: "She out-ranges Xayah and pushes her under tower.", jhin: "Deadly Flourish roots her once Featherstorm is spent.", ziggs: "His poke and Satchel Charge zone her feather lines." }
},
{
  n: "Xerath", r: "mid sup", c: "arty", bt: "apb", d: "ap", rg: 525,
  s: [3, 4, 5, 1, 3, 1, 4, 3, 1, 5, 4], f: "skill",
  th: "Arcanopulse (Q) and Rite of the Arcane (R) hit from huge range. Shocking Orb (E) stuns you if it lands.",
  pw: "He's immobile. If Shocking Orb misses, walk straight at him; he has nothing left.",
  st: ["Longest poke range in the game", "R snipes low targets across the screen", "Excellent siege before objectives"],
  wk: ["No mobility", "Very squishy", "Every spell is a skillshot"],
  go: ["Poke from max range before every objective", "R low targets from a safe spot"],
  no: ["Don't walk into fog to poke", "Don't fight divers without Shocking Orb up"],
  sit: [["Ahead", "Poke and siege; force the enemy to engage into you."], ["Behind", "Poke from behind your team and look for R finishes."], ["Into divers", "Buy Zhonya's Hourglass and hold E for the diver."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Horizon Focus"] },
  ob: [
    { n: "Support Xerath", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke support who wins lane by range alone." },
    { n: "Liandry's Xerath", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burning, slowing poke into tanky teams." }
  ],
  cb: { fizz: "Trickster dodges Shocking Orb and he dives Xerath.", zed: "Living Shadow reaches him before the stun lands.", kassadin: "Riftwalk blinks onto him and Null Sphere eats his poke.", yasuo: "Wind Wall blocks Shocking Orb." }
},
{
  n: "Xin Zhao", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 175,
  s: [5, 4, 3, 4, 3, 3, 4, 4, 3, 1, 3], f: "dash engage",
  th: "Audacious Charge (E) dashes to you, and Three Talon Strike (Q) knocks up on the third hit. Crescent Guard (R) knocks back and blocks damage from outside his circle.",
  pw: "He falls off late. Once R is used he has no answer to ranged damage, so kite him.",
  st: ["One of the strongest early ganks", "R blocks ranged damage from outside the circle", "Knock-up combo on a reliable dash"],
  wk: ["Falls off late", "Committed after Audacious Charge", "Kited when R is down"],
  go: ["Charge onto a carry with Q ready for the knock-up", "R to shut out ranged damage while you duel"],
  no: ["Don't let the game stall past 30 minutes", "Don't dive without R to block the backline"],
  sit: [["Ahead", "Gank and invade to snowball the early lead."], ["Behind", "Dive the enemy carry in teamfights."], ["Into tanks", "Buy Black Cleaver and focus the squishies."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Guardian Angel", "Maw of Malmortius", "Spirit Visage"] },
  ob: [
    { n: "Crit Xin Zhao", i: ["Kraken Slayer", "Infinity Edge", "Lord Dominik's Regards"], w: "Fast-attacking crit dive for late games." },
    { n: "Tank Xin Zhao", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line engage when your team has enough damage." }
  ],
  cb: { poppy: "Steadfast Presence stops Audacious Charge.", rammus: "Armor and taunt blunt his auto-attack damage.", lillia: "She kites him and puts him to sleep.", kindred: "She kites him and Lamb's Respite saves his target." }
}
);
