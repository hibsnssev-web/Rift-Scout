/* Champion profiles: Vayne to Veigar. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Vayne", r: "bot top", c: "mark", bt: "onhit", d: "ad", rg: 550,
  s: [2, 4, 5, 4, 3, 2, 3, 5, 1, 2, 3], f: "dash aa true stealth",
  th: "Silver Bolts (W) deals max-health true damage every third hit. Condemn (E) stuns you against walls, and Final Hour (R) turns her Tumble (Q) invisible.",
  pw: "Her early lane is weak and her range is short. Once Tumble and Condemn are down, all-in her.",
  st: ["True damage melts tanks", "Condemn stops divers against walls", "Tumble stealth during R"],
  wk: ["Weak early", "Short range", "Squishy"],
  go: ["Condemn a diver into a wall", "Tumble around a tank to stack Silver Bolts"],
  no: ["Don't take early all-ins", "Don't Tumble into CC"],
  sit: [["Ahead", "Snowball and 1v1 anyone."], ["Behind", "Farm and scale; two items puts you back in."], ["Into tanks", "Keep hitting them; true damage wins long fights."]],
  b: { ru: "Lethal Tempo · Resolve", ss: "Flash · Heal", st: "Doran's Blade", core: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Kraken Slayer"], bo: "Berserker's Greaves", sit: ["Wit's End", "Guardian Angel", "Mercurial Scimitar", "Death's Dance"] },
  ob: [
    { n: "Top Vayne", i: ["Blade of the Ruined King", "Kraken Slayer", "Death's Dance"], w: "Counter-pick top into immobile melee champions." },
    { n: "Crit Vayne", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Late-game crit when the enemy isn't tanky." }
  ],
  cb: { draven: "He wins the early lane before Vayne scales.", caitlyn: "She out-ranges Vayne early and pushes her under tower.", jhin: "His range and root punish her short range.", ziggs: "His poke and Satchel Charge keep her away." }
},
{
  n: "Veigar", r: "mid sup bot", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [2, 4, 5, 1, 4, 1, 5, 3, 1, 3, 4], f: "stack skill execute",
  th: "Event Horizon (E) cage stuns anyone who touches its edge. Primordial Burst (R) deals more damage the lower your health, and his AP stacks forever.",
  pw: "He's slow and immobile. If his cage misses, he has no CC.",
  st: ["Infinite AP scaling", "R executes low targets", "Cage stuns whole groups"],
  wk: ["No mobility", "Weak early", "Assassins kill him"],
  go: ["Cage grouped enemies in a choke", "R low targets for an execute"],
  no: ["Don't take early all-ins", "Don't walk forward without E ready"],
  sit: [["Ahead", "Stack and burst carries."], ["Behind", "Farm stacks with Baleful Strike (Q)."], ["Into assassins", "Buy Zhonya's Hourglass early."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Mejai's Soulstealer"] },
  ob: [
    { n: "Support Veigar", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Cage support that stacks AP from the support role." },
    { n: "Bot Veigar", i: ["Luden's Echo", "Rabadon's Deathcap", "Void Staff"], w: "AP carry bot lane with a protective support." }
  ],
  cb: { fizz: "Trickster dodges the cage and he dives Veigar.", zed: "Living Shadow reaches him before the cage lands.", yasuo: "Wind Wall blocks Baleful Strike and R.", kassadin: "Null Sphere eats his burst and Riftwalk skips the cage." }
}
);
