/* Champion profiles: Trundle to Twisted Fate. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Trundle", r: "jng top", c: "jugg", bt: "adb", d: "ad", rg: 175,
  s: [4, 4, 3, 3, 3, 4, 3, 4, 4, 1, 4], f: "heal pct split",
  th: "Subjugate (R) steals a big chunk of your armor, magic resist and health. Pillar of Ice (E) knocks you back and slows.",
  pw: "Pillar of Ice is his main CC. Once it's down, kite him; without R he struggles against tanks.",
  st: ["R steals tank stats, so he shreds front lines", "Chomp (Q) and Frozen Domain (W) take towers very fast", "Strong split push"],
  wk: ["Kited by ranged champions", "Limited mobility", "Struggles against squishy kiting teams where R has no big target"],
  go: ["Subjugate the enemy's biggest tank before the fight starts", "Pillar a target back into your team"],
  no: ["Don't waste R on a squishy carry", "Don't chase kiting champions without Pillar"],
  sit: [["Ahead", "Split push and take towers with Chomp."], ["Behind", "Front-line and R the enemy tank every fight."], ["Into tanks", "R them first and win the stat swing."]],
  b: { ru: "Conqueror · Resolve", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Trinity Force", "Blade of the Ruined King", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Spirit Visage", "Force of Nature", "Guardian Angel"] },
  ob: [
    { n: "Tank Trundle", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Spirit Visage"], w: "Front-line Trundle who still steals stats with R." },
    { n: "Top Trundle", i: ["Trinity Force", "Blade of the Ruined King", "Death's Dance"], w: "Split-push top laner who counters tanky lanes." }
  ],
  cb: { vayne: "She kites him and her true damage ignores his stolen stats.", quinn: "She kites Trundle and vaults away from Pillar.", lillia: "Her move speed keeps her away from his slows.", kindred: "She kites him and Lamb's Respite stops his all-in." }
},
{
  n: "Tryndamere", r: "top", c: "skirm", bt: "crit", d: "ad", rg: 175,
  s: [3, 4, 5, 4, 1, 4, 3, 5, 2, 1, 4], f: "dash crit aa split heal",
  th: "Undying Rage (R) stops him from dying for five seconds. Crits reduce Spinning Slash (E) cooldown, so he chases and escapes constantly.",
  pw: "Once R is used, he can die. Hold your burst and CC until Undying Rage ends.",
  st: ["Can't die during Undying Rage", "One of the strongest split-pushers", "Spinning Slash resets on crits"],
  wk: ["No CC", "Kited by ranged champions", "Weak in teamfights"],
  go: ["Split push and take 1v1s", "Dive under tower with R ready"],
  no: ["Don't keep fighting after R ends", "Don't take 5v5 teamfights head-on"],
  sit: [["Ahead", "Split push and force two enemies to answer you."], ["Behind", "Farm and split on the side away from their best duelist."], ["Into tanks", "Buy Lord Dominik's Regards."]],
  b: { ru: "Lethal Tempo · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Navori Flickerblade", "Infinity Edge", "Phantom Dancer"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Bruiser Tryndamere", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Durable duelist build that holds up in fights." },
    { n: "Stormrazor Tryndamere", i: ["Stormrazor", "Infinity Edge", "Navori Flickerblade"], w: "Energized first-hit burst for picks." }
  ],
  cb: { malphite: "Armor stacking blunts his crits and R engages on him.", teemo: "Blinding Dart shuts down his autos.", quinn: "She kites him and blinds him.", jax: "Counter Strike dodges his autos and stuns him." }
},
{
  n: "Twisted Fate", r: "mid", c: "burst", bt: "apb", d: "ap", rg: 525,
  s: [3, 4, 4, 2, 4, 2, 4, 3, 1, 3, 5], f: "point global",
  th: "Destiny (R) teleports him anywhere on the map. Pick a Card's Gold Card (W) is a point-and-click stun.",
  pw: "He's squishy. Once Gold Card is used, he has no CC and no escape.",
  st: ["Global R roams create picks everywhere", "Point-and-click stun", "Very fast waveclear with Red Card"],
  wk: ["Squishy", "Little mobility", "Weak to assassins"],
  go: ["Destiny onto a side lane after your jungler engages", "Gold Card a carry who walked out of position"],
  no: ["Don't fight assassins alone", "Don't waste Gold Card on minions"],
  sit: [["Ahead", "Roam with R and push waves with Red Card."], ["Behind", "Farm and push; use R for picks."], ["Into assassins", "Buy Zhonya's Hourglass."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Lich Bane"] },
  ob: [
    { n: "AD Twisted Fate", i: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Kraken Slayer"], w: "On-hit card thrower who deals physical damage." },
    { n: "Support Twisted Fate", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Stun support with global roam pressure." }
  ],
  cb: { fizz: "Trickster dodges Gold Card and he dives TF.", zed: "Living Shadow reaches TF before the card lands.", talon: "He out-roams TF and bursts him.", kassadin: "Riftwalk blinks onto TF and Null Sphere eats his burst." }
}
);
