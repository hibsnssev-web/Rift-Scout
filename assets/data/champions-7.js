/* Champion profiles: Kennen to Kled. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Kennen", r: "top mid", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [4, 4, 3, 4, 4, 2, 4, 3, 2, 4, 3], f: "skill engage",
  th: "Mark of the Storm stacks to a stun on the third hit, and Slicing Maelstrom (R) stuns everyone around him.",
  pw: "He runs on energy. Lightning Rush (E) is his escape; once it's used, he's slow and easy to catch.",
  st: ["Ranged top laner who pokes melee champions all lane", "R can stun an entire team", "Lightning Rush gives mobility and attack speed"],
  wk: ["Squishy", "Energy runs dry in long trades", "Needs to reach the enemy team to use R"],
  go: ["Flash into grouped enemies with R and Zhonya's ready", "Poke melee laners with Thundering Shuriken (Q) every cooldown"],
  no: ["Don't R into a team without Zhonya's or an exit", "Don't spend E on farming when the enemy jungler is unseen"],
  sit: [["Ahead", "Poke the lane, then Teleport into flanks with R."], ["Behind", "Farm from range and save R for teamfights."], ["Into tanks", "Build Liandry's Torment and poke before fights."]],
  b: { ru: "First Strike · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Banshee's Veil", "Luden's Echo", "Shadowflame"] },
  ob: [
    { n: "On-hit Kennen", i: ["Nashor's Tooth", "Guinsoo's Rageblade", "Blade of the Ruined King"], w: "Auto-attack Kennen who stuns faster with every hit." },
    { n: "Mid burst Kennen", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst mage build for mid lane." }
  ],
  cb: { pantheon: "His point-and-click stun and spear shield beat Kennen's trades.", irelia: "Bladesurge through the wave closes the gap and she out-duels him once she's in.", galio: "His magic shield eats Kennen's burst.", jayce: "Cannon poke out-ranges Kennen's shuriken." }
},
{
  n: "Kha'Zix", r: "jng", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 5, 4, 5, 1, 2, 5, 3, 1, 2, 3], f: "dash stealth execute",
  th: "Taste Their Fear (Q) deals huge bonus damage to isolated targets. Evolved Leap (E) resets on takedowns.",
  pw: "Stay near an ally, minion or monster. His isolated-target bonus disappears.",
  st: ["Massive burst on isolated targets", "Void Assault (R) stealth and three evolves", "Leap resets clean up fights"],
  wk: ["Weak into grouped teams", "Squishy", "Hard CC stops him"],
  go: ["Leap onto an isolated carry from fog", "Evolve Q first for single-target burst"],
  no: ["Don't leap into grouped enemies", "Don't fight tanks head-on"],
  sit: [["Ahead", "Pick off anyone isolated."], ["Behind", "Farm and look for flanks on squishies."], ["Into tanks", "Target squishies and ignore the front line."]],
  b: { ru: "Electrocute · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Guardian Angel", "Maw of Malmortius", "Bastionbreaker"] },
  ob: [
    { n: "Bruiser Kha'Zix", i: ["Eclipse", "Black Cleaver", "Death's Dance"], w: "Durable build when your team needs a second front line." },
    { n: "Crit Kha'Zix", i: ["Infinity Edge", "The Collector", "Lord Dominik's Regards"], w: "Crit-scaling Q damage for long games." }
  ],
  cb: { rammus: "Armor stacking and taunt blunt his burst.", poppy: "Steadfast Presence stops Leap.", shaco: "Jack in the Box fears him out of isolation plays.", nunu: "He tanks Kha'Zix's burst and slows him." }
},
{
  n: "Kindred", r: "jng", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [3, 4, 5, 3, 1, 2, 3, 4, 1, 2, 4], f: "dash stack",
  th: "Lamb's Respite (R) stops everyone inside from dying. Marks grow her range and damage over the game.",
  pw: "She's squishy with one dash (Dance of Arrows, Q). Dive her once Q is down.",
  st: ["Marks give her unlimited range and damage scaling", "Lamb's Respite saves her whole team in a fight", "Ranged jungler who kites divers"],
  wk: ["Squishy with one dash", "Falls behind if she can't collect marks", "Early invades wreck her"],
  go: ["Take marked camps in the enemy jungle when their jungler shows elsewhere", "Cast R when your team is about to lose the fight, not after"],
  no: ["Don't cast R where enemies can wait out the zone and finish you after", "Don't invade without vision of the enemy jungler"],
  sit: [["Ahead", "Invade for marks and deny the enemy jungler's camps."], ["Behind", "Farm your own jungle and take safe marks to keep scaling."], ["Into divers", "Hold Dance of Arrows and R for their dive."]],
  b: { ru: "Lethal Tempo · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Kraken Slayer", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Bloodthirster", "Mercurial Scimitar", "Death's Dance"] },
  ob: [
    { n: "Lethality Kindred", i: ["Youmuu's Ghostblade", "The Collector", "Serylda's Grudge"], w: "Early burst to snowball marks from invades." },
    { n: "On-hit Kindred", i: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Wit's End"], w: "Sustained DPS into tanky teams." }
  ],
  cb: { khazix: "Her lone jungle pathing is exactly what his isolation damage punishes.", rengar: "He leaps onto her from brush before she can dance away.", nocturne: "Paranoia cuts her vision and he dives her through R.", elise: "Her early ganks and invades hit before Kindred has marks." }
}
);
