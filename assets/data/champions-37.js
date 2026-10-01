/* Champion profiles: Viego to Vladimir. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Viego", r: "jng", c: "skirm", bt: "onhit", d: "ad", rg: 200,
  s: [3, 5, 4, 4, 2, 4, 4, 4, 2, 1, 4], f: "dash heal untarg",
  th: "Sovereign's Domination: after a takedown he possesses the dead enemy, fully healed, and uses their kit. Heartbreaker (R) blinks and executes.",
  pw: "Before his first takedown in a fight he's an average skirmisher. Focus him first, before he can chain possessions.",
  st: ["Possession resets turn lost fights around", "Heartbreaker blinks and executes low targets", "Strong mid-game skirmisher"],
  wk: ["Needs takedowns to snowball a fight", "Weak before his first items", "Hard CC stops him"],
  go: ["Wait for the first kill in a fight, then possess and keep going", "R low targets to reset into a possession"],
  no: ["Don't engage first; you need someone to die", "Don't fight into heavy CC without Mercury's Treads"],
  sit: [["Ahead", "Clean up every fight with possessions."], ["Behind", "Farm and flank fights late."], ["Into CC", "Buy Mercury's Treads and Wit's End."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Blade of the Ruined King", "Sundered Sky", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Wit's End", "Maw of Malmortius"] },
  ob: [
    { n: "Crit Viego", i: ["Kraken Slayer", "Infinity Edge", "Lord Dominik's Regards"], w: "Higher damage per possession for late games." },
    { n: "Endless Hunger Viego", i: ["Endless Hunger", "Blade of the Ruined King", "Sterak's Gage"], w: "Tenacity and omnivamp against CC-heavy teams." }
  ],
  cb: { rammus: "He tanks Viego and taunts him out of possession.", poppy: "Her stun catches him and W stops his dashes.", warwick: "His sustain and suppression win the duels.", lillia: "She kites Viego and puts him to sleep." }
},
{
  n: "Viktor", r: "mid", c: "battle", bt: "apd", d: "ap", rg: 525,
  s: [2, 4, 5, 2, 3, 2, 4, 4, 2, 4, 5], f: "skill shield",
  th: "Death Ray (E) pokes and clears waves in a long line. Arcane Storm (R) is a moving storm that shreds anyone standing in it, and Gravity Field (W) stuns.",
  pw: "He's immobile and weak early. All-in him before he gets his augments.",
  st: ["Long-range Death Ray poke", "R zones fights", "Very fast waveclear"],
  wk: ["No mobility", "Weak early", "Divers reach him"],
  go: ["Poke with Death Ray from max range", "R into grouped enemies in a choke"],
  no: ["Don't take early all-ins", "Don't walk forward without Gravity Field"],
  sit: [["Ahead", "Poke and siege."], ["Behind", "Farm and scale; you're a late-game mage."], ["Into divers", "Place Gravity Field on yourself when they dive."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Actualizer Viktor", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "More Death Rays in the empowered state." },
    { n: "Liandry's Viktor", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burning, slowing zone control against tanks." }
  ],
  cb: { fizz: "Trickster dodges Gravity Field and he dives Viktor.", zed: "Living Shadow reaches him before the stun.", katarina: "Shunpo resets let her dive past his field.", yasuo: "Dashes through minions reach Viktor before he can stun." }
},
{
  n: "Vladimir", r: "mid top", c: "battle", bt: "apd", d: "ap", rg: 450,
  s: [2, 4, 5, 3, 1, 5, 4, 4, 3, 3, 4], f: "heal untarg",
  th: "Sanguine Pool (W) makes him untargetable. Hemoplague (R) amplifies damage and bursts after a delay, and Transfusion (Q) heals him.",
  pw: "Sanguine Pool has a long cooldown. Once it's used, he has no escape at all.",
  st: ["Huge sustain from Transfusion", "Pool dodges everything", "Hemoplague bursts grouped enemies"],
  wk: ["Weak early", "No CC", "Grievous Wounds cuts his healing"],
  go: ["Pool to dodge key CC or burst", "R into grouped enemies from a flank"],
  no: ["Don't take early all-ins", "Don't waste pool on minor damage"],
  sit: [["Ahead", "Snowball and roam with R."], ["Behind", "Farm and scale; you outscale almost every mid laner."], ["Into anti-heal", "Build more AP and burst instead of sustain."]],
  b: { ru: "Phase Rush · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Riftmaker", "Cosmic Drive", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Spirit Visage"] },
  ob: [
    { n: "Burst Vladimir", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "One-shot Hemoplague build for squishy teams." },
    { n: "Top Vladimir", i: ["Riftmaker", "Spirit Visage", "Zhonya's Hourglass"], w: "Durable top-lane build that out-sustains melee champions." }
  ],
  cb: { talon: "His early physical burst kills Vladimir before he scales.", zed: "His physical burst gets through pool timings.", pantheon: "Point-and-click stun and spear poke bully him early.", malzahar: "Nether Grasp suppresses him before he can pool." }
}
);
