/* Champion profiles: Quinn to Rammus. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Quinn", r: "top", c: "mark", bt: "adA", d: "ad", rg: 525,
  s: [4, 4, 3, 5, 3, 1, 4, 4, 1, 3, 3], f: "dash aa skill split",
  th: "Blinding Assault (Q) blinds you so your autos miss. Vault (E) knocks you back and slows, and Behind Enemy Lines (R) gives huge roaming speed.",
  pw: "She's squishy. If Vault is on cooldown and you close the gap, she has no escape.",
  st: ["Ranged top laner who bullies melee champions", "Huge roaming speed with R", "Strong split push"],
  wk: ["Squishy", "Falls off in teamfights", "Tanks and point-and-click CC shut her down"],
  go: ["Kite melee champions all lane", "Roam with R to side lanes"],
  no: ["Don't fight a tank with Flash and E down", "Don't teamfight head-on"],
  sit: [["Ahead", "Roam and snowball side lanes."], ["Behind", "Split push and farm."], ["Into tanks", "Buy Lord Dominik's Regards and split instead of fighting."]],
  b: { ru: "Press the Attack · Domination", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Kraken Slayer", "Youmuu's Ghostblade", "The Collector"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Guardian Angel", "Death's Dance", "Maw of Malmortius"] },
  ob: [
    { n: "Lethality Quinn", i: ["Youmuu's Ghostblade", "The Collector", "Serylda's Grudge"], w: "One-shot roam build for fast snowballs." },
    { n: "Crit Quinn", i: ["Infinity Edge", "Navori Flickerblade", "Lord Dominik's Regards"], w: "Late-game crit for split-push comps." }
  ],
  cb: { malphite: "Armor stacking blunts her damage and R engages on her.", pantheon: "Aegis Assault blocks her and his stun beats her in close.", rammus: "Armor and taunt shut down her autos.", ksante: "He tanks her poke and grabs her out of Vault range." }
},
{
  n: "Rakan", r: "sup", c: "catch", bt: "ench", d: "ap", rg: 300,
  s: [3, 4, 4, 5, 4, 2, 2, 1, 2, 1, 1], f: "dash engage peel shield",
  th: "Grand Entrance (W) knocks up on arrival. The Quickness (R) charms everyone he touches.",
  pw: "His engage is on long cooldowns. Once W and R are down, he can't start or stop fights.",
  st: ["Fastest engage in the game", "Battle Dance (E) dashes to allies and shields", "R charms a whole team"],
  wk: ["Squishy", "Low damage", "Punished when he misses his engage"],
  go: ["W-R into grouped enemies", "E to an ally, then W to engage from a new angle"],
  no: ["Don't engage without your team following", "Don't use E to farm"],
  sit: [["Ahead", "Roam and engage."], ["Behind", "Peel with E and W."], ["Into poke", "Engage early."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Ionian Boots of Lucidity", sit: ["Redemption", "Zeke's Convergence", "Mikael's Blessing", "Imperial Mandate"] },
  ob: [
    { n: "AP Rakan", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Burst engage that kills squishies on arrival." },
    { n: "Enchanter Rakan", i: ["Dream Maker", "Imperial Mandate", "Redemption"], w: "Shield-heavy Rakan for protect-the-carry comps." }
  ],
  cb: { thresh: "Flay knocks him out of his engage.", nautilus: "Point-and-click R catches him.", morgana: "Black Shield blocks his charm.", janna: "Howling Gale cancels his dash." }
},
{
  n: "Rammus", r: "jng", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [3, 4, 4, 5, 4, 2, 3, 2, 5, 1, 3], f: "engage point antiaa",
  th: "Powerball (Q) knocks up on arrival, Puncturing Taunt (E) taunts point-and-click, and Defensive Ball Curl (W) reflects auto-attack damage.",
  pw: "He's weak to magic damage and %HP damage. Once W is down, he's much less tanky.",
  st: ["Fast ganks with Powerball", "Point-and-click taunt", "Huge armor punishes auto-attackers"],
  wk: ["Weak to magic damage", "Low damage", "Slow early clears"],
  go: ["Powerball into a carry and taunt", "Taunt an auto-attacker with W up"],
  no: ["Don't fight AP teams alone", "Don't taunt without follow-up"],
  sit: [["Ahead", "Gank and tank."], ["Behind", "Tank for your carries."], ["Into AP", "Buy Force of Nature."]],
  b: { ru: "Phase Rush · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Thornmail", "Randuin's Omen", "Frozen Heart"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Jak'Sho the Protean", "Dead Man's Plate"] },
  ob: [
    { n: "AP Rammus", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burst Powerball." },
    { n: "Support Rammus", i: ["Celestial Opposition", "Thornmail", "Knight's Vow"], w: "Taunt support into auto-attack bot lanes." }
  ],
  cb: { lillia: "She kites him and deals magic damage.", karthus: "Magic damage ignores his armor.", brand: "Blaze burns through his armor.", gwen: "Max-health magic damage ignores his armor stacking." }
}
);
