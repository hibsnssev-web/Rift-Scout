/* Champion profiles: Lee Sin to Lillia. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Lee Sin", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [5, 4, 2, 5, 3, 3, 4, 3, 2, 1, 3], f: "dash engage",
  th: "Sonic Wave (Q) marks you and Resonating Strike dashes to you. Dragon's Rage (R) kicks you into his team (the Insec).",
  pw: "If Sonic Wave misses, he has no gap-closer for several seconds. He also falls off hard late.",
  st: ["Strongest early skirmisher among junglers", "R Insec picks carries out of their team", "Safeguard (W) wards and shields for mobility"],
  wk: ["Falls off late", "Everything relies on landing Q", "Punished hard when he misses"],
  go: ["Invade at level 2 or 3 when you know where the enemy jungler is", "Ward-hop behind a carry and kick them into your team"],
  no: ["Don't gank without Q ready", "Don't let the game stall past 30 minutes"],
  sit: [["Ahead", "Invade and snowball lanes before the enemy scales."], ["Behind", "Look for Insec picks with your team nearby."], ["Into tanks", "Build Black Cleaver and play for picks on squishies."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Eclipse", "Black Cleaver", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Lee Sin", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot Insec build into squishy teams." },
    { n: "Tank Lee Sin", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line Insec machine for carry-heavy teams." }
  ],
  cb: { rammus: "Armor and taunt shut down his early aggression.", poppy: "Steadfast Presence stops Resonating Strike.", udyr: "He out-duels Lee in early skirmishes.", warwick: "His sustain wins the early duels Lee depends on." }
},
{
  n: "Leona", r: "sup", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [5, 4, 3, 3, 5, 2, 3, 1, 5, 1, 1], f: "dash engage point",
  th: "Zenith Blade (E) dashes her onto you, Shield of Daybreak (Q) stuns, and Solar Flare (R) stuns an area.",
  pw: "If Zenith Blade misses, she has no way in for about 10 seconds.",
  st: ["Strongest all-in support", "Chain CC locks a target down", "Eclipse (W) makes her very tanky"],
  wk: ["No disengage", "Engage gets punished by disengage supports", "Low damage alone"],
  go: ["Zenith Blade the enemy ADC when your ADC can follow", "Solar Flare grouped enemies"],
  no: ["Don't E in with no follow-up", "Don't engage into Janna or Morgana with their key spells up"],
  sit: [["Ahead", "Roam with your jungler and dive."], ["Behind", "Peel with CC instead of engaging."], ["Into poke", "Engage early before the poke adds up."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Jungle Leona", i: ["Trailblazer", "Jak'Sho the Protean", "Unending Despair"], w: "Gank-heavy engage jungler." },
    { n: "AP Leona", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Burst-kill lane with a hyper-aggressive ADC." }
  ],
  cb: { morgana: "Black Shield makes her ally immune to Leona's CC.", janna: "Howling Gale knocks her out of Zenith Blade and Monsoon undoes her engage.", braum: "Unbreakable blocks Zenith Blade.", taric: "Cosmic Radiance makes her engage useless." }
},
{
  n: "Lillia", r: "jng top", c: "skirm", bt: "apf", d: "ap", rg: 325,
  s: [3, 4, 5, 5, 3, 3, 3, 4, 2, 2, 4], f: "skill pct",
  th: "Lilting Lullaby (R) puts everyone marked by her passive to sleep. Blooming Blows (Q) outer edge deals true damage.",
  pw: "She's squishy. If Swirlseed (E) misses, she can't slow you, and hard CC catches her.",
  st: ["Constant move speed from Q hits", "R sleeps whole teams", "Max-health damage from her passive"],
  wk: ["Squishy", "Needs to keep hitting Q to stay fast", "Weak early 1v1 duels"],
  go: ["Sleep a whole team in a fight", "Kite melee champions with move speed"],
  no: ["Don't duel early", "Don't let divers get on top of you"],
  sit: [["Ahead", "Kite fights and sleep teams."], ["Behind", "Farm and scale; her clear is fast."], ["Into divers", "Kite backward with Q hits."]],
  b: { ru: "Conqueror · Sorcery", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Liandry's Torment", "Riftmaker", "Rylai's Crystal Scepter"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Banshee's Veil"] },
  ob: [
    { n: "Top Lillia", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Kiting top laner against melee champions." },
    { n: "Burst Lillia", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Big Q burst for pick comps." }
  ],
  cb: { olaf: "Ragnarok makes him immune to her sleep and he runs her down.", khazix: "He isolates and bursts her in the jungle.", rengar: "He leaps onto her from brush.", nocturne: "Paranoia dives her before she can kite." }
}
);
