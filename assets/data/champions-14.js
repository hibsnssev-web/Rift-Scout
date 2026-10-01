/* Champion profiles: Mordekaiser to Naafiri. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Mordekaiser", r: "top", c: "jugg", bt: "apf", d: "ap", rg: 175,
  s: [4, 4, 4, 1, 3, 4, 3, 4, 4, 2, 3], f: "shield heal",
  th: "Realm of Death (R) drags you into a 1v1 where he steals part of your stats. Death's Grasp (E) pulls you into his Obliterate (Q) combo.",
  pw: "He's immobile. Dodge Death's Grasp and kite him; he has no dash to follow.",
  st: ["R isolates any carry into a 1v1 he usually wins", "Indestructible (W) shield converts into healing", "Passive aura shreds anyone near him"],
  wk: ["No mobility", "Kited by ranged champions", "Has to land E or walk up to deal damage"],
  go: ["R the enemy carry when their peel is on cooldown", "Pull a target into your passive with E and stand on them"],
  no: ["Don't R a champion who beats you 1v1", "Don't chase kiting champions without E"],
  sit: [["Ahead", "Split push and R carries who come to stop you."], ["Behind", "Tank and R the enemy's best duelist out of the fight."], ["Into ranged", "Farm under tower and wait for R at level 6."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Riftmaker", "Liandry's Torment", "Rylai's Crystal Scepter"], bo: "Plated Steelcaps", sit: ["Zhonya's Hourglass", "Void Staff", "Spirit Visage", "Force of Nature"] },
  ob: [
    { n: "Tank Mordekaiser", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Spirit Visage"], w: "Front-line build when your team has enough damage." },
    { n: "Jungle Mordekaiser", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Gank with Death's Grasp and R picks." }
  ],
  cb: { vayne: "She kites him forever and her true damage ignores his shield.", fiora: "Riposte parries Death's Grasp and she wins the Realm of Death 1v1.", gwen: "Hallowed Mist blocks his E-Q combo.", quinn: "She kites him and he can't reach her." }
},
{
  n: "Morgana", r: "sup mid jng", c: "catch", bt: "apb", d: "ap", rg: 450,
  s: [3, 4, 4, 1, 4, 2, 3, 3, 2, 3, 4], f: "skill shield",
  th: "Dark Binding (Q) roots for a long time. Soul Shackles (R) stuns everyone who stays tethered. Black Shield (E) blocks CC on her ally.",
  pw: "If Dark Binding misses, her main CC is on a long cooldown.",
  st: ["Black Shield counters engage supports", "Long root for picks", "Strong zone with Tormented Shadow (W)"],
  wk: ["Immobile", "Relies on landing Dark Binding", "Weak into long-range poke"],
  go: ["Root a target and follow with the full combo", "Black Shield your carry before the enemy engages"],
  no: ["Don't throw Binding without follow-up", "Don't walk forward without Flash"],
  sit: [["Ahead", "Pick off with Binding."], ["Behind", "Black Shield your carry."], ["Into engage", "Hold E for their engage."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Ignite", st: "World Atlas", core: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Liandry's Torment", "Rylai's Crystal Scepter", "Void Staff", "Banshee's Veil"] },
  ob: [
    { n: "Jungle Morgana", i: ["Liandry's Torment", "Zhonya's Hourglass", "Rabadon's Deathcap"], w: "AoE clears and picks." },
    { n: "Mid Morgana", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst mid." }
  ],
  cb: { xerath: "He out-ranges her and pokes from safety.", velkoz: "His beams out-range her binding.", zyra: "Plants and poke chip her from range.", karma: "Mantra poke out-trades her in lane." }
},
{
  n: "Naafiri", r: "mid", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 5, 3, 4, 1, 2, 5, 3, 2, 2, 4], f: "dash",
  th: "Hounds' Pursuit (W) sends her pack after a target and she dashes to them. The Call of the Pack (R) gives her a shield and speed.",
  pw: "Kill or block her packmates. Once W is spent she can't reach you.",
  st: ["Hounds give huge burst", "Very simple and reliable to play", "Strong roams"],
  wk: ["Squishy", "Dies to hard CC", "Falls off against tanks"],
  go: ["Dash onto a squishy carry", "Roam with R speed"],
  no: ["Don't W into five enemies", "Don't fight tanks"],
  sit: [["Ahead", "Roam and snowball."], ["Behind", "Farm and look for picks."], ["Into tanks", "Target squishies only."]],
  b: { ru: "Electrocute · Domination", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Profane Hydra", "Youmuu's Ghostblade", "Opportunity"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Edge of Night", "Guardian Angel", "Maw of Malmortius"] },
  ob: [
    { n: "Bruiser Naafiri", i: ["Eclipse", "Black Cleaver", "Death's Dance"], w: "Durable build." },
    { n: "Bastionbreaker Naafiri", i: ["Bastionbreaker", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "True damage burst." }
  ],
  cb: { malzahar: "Suppression and passive shield stop her dive.", lissandra: "Frozen Tomb stops her.", vex: "Her passive fears Naafiri when she dashes.", pantheon: "Point-and-click stun catches her." }
}
);
