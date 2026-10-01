/* Champion profiles: Sett to Shen. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Sett", r: "top sup", c: "jugg", bt: "adb", d: "ad", rg: 125,
  s: [5, 4, 3, 2, 3, 4, 4, 4, 4, 1, 3], f: "shield true engage",
  th: "Haymaker (W) deals true damage in its center, scaling with the damage he's taken. The Show Stopper (R) suplexes you into your own team.",
  pw: "Haymaker's true damage only hits the center strip. Step to the side. He has no dash besides R.",
  st: ["Wins early all-ins", "Haymaker true damage scales with damage taken", "R engages on carries and damages everyone nearby"],
  wk: ["No dash", "Kited by ranged champions", "Falls off late"],
  go: ["All-in with a full Grit bar and Haymaker ready", "Suplex a carry into your team"],
  no: ["Don't chase kiting champions", "Don't Haymaker without Grit built up"],
  sit: [["Ahead", "Split push and dive the enemy laner."], ["Behind", "Tank and R carries in teamfights."], ["Into ranged", "Wait for the wave to crash, then all-in."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Stridebreaker", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Spirit Visage", "Force of Nature", "Guardian Angel"] },
  ob: [
    { n: "Tank Sett", i: ["Heartsteel", "Sunfire Aegis", "Force of Nature"], w: "Big Haymakers from a huge health bar." },
    { n: "Support Sett", i: ["Celestial Opposition", "Black Cleaver", "Sterak's Gage"], w: "Engage support with R suplex." }
  ],
  cb: { vayne: "She kites him and Condemns him out of Haymaker range.", quinn: "She kites Sett and vaults away from his all-in.", kennen: "Ranged poke and a stun that stops his all-in.", teemo: "Blinding Dart and poke wear him down." }
},
{
  n: "Shaco", r: "jng sup", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 4, 3, 5, 3, 2, 5, 3, 1, 2, 3], f: "stealth blink",
  th: "Deceive (Q) blinks him invisible for a backstab crit. Jack in the Box (W) fears you, and Hallucinate (R) makes a clone that explodes.",
  pw: "Once Deceive is used, he has no escape. Oracle Lens and Control Wards reveal him.",
  st: ["Stealth ganks and invades from nowhere", "Boxes fear for picks and protect his jungle", "Clone confuses and deals damage"],
  wk: ["Squishy", "Oracle Lens reveals him", "Falls off against tanky teams"],
  go: ["Gank from stealth when the enemy laner is pushed up", "Box your jungle entrances before invaders arrive"],
  no: ["Don't fight tanks head-on", "Don't Deceive into Oracle Lens sweeps"],
  sit: [["Ahead", "Invade and pick off isolated targets."], ["Behind", "Box objectives and play for picks."], ["Into tanks", "Target squishies and ignore the front line."]],
  b: { ru: "Electrocute · Domination", ss: "Smite · Ignite", st: "Scorchclaw Pup", core: ["Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Guardian Angel", "Hubris", "Bastionbreaker"] },
  ob: [
    { n: "AP Shaco", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Box-focused build for support or jungle." },
    { n: "Crit Shaco", i: ["Infinity Edge", "The Collector", "Lord Dominik's Regards"], w: "Crit backstab build for late games." }
  ],
  cb: { rammus: "He tanks Shaco's burst and taunts him.", warwick: "Sustain and suppression win the duel.", nunu: "He tanks Shaco and out-clears him.", sejuani: "She tanks the burst and freezes him." }
},
{
  n: "Shen", r: "top sup", c: "ward", bt: "tank", d: "ad", rg: 125,
  s: [4, 4, 3, 3, 4, 3, 3, 2, 4, 1, 3], f: "dash engage peel global antiaa",
  th: "Stand United (R) teleports him to an ally with a shield. Shadow Dash (E) taunts, and Spirit's Refuge (W) blocks autos.",
  pw: "Once R is used, he can't join the fight. His E is his only CC.",
  st: ["Stand United shields an ally anywhere on the map and brings him to the fight", "Shadow Dash taunts several enemies at once", "Spirit's Refuge blocks auto-attacks for his whole team"],
  wk: ["Low damage", "Weak into magic-damage lanes", "Much of his impact sits on one long-cooldown R"],
  go: ["R into a side-lane fight the moment your ally is engaged", "Flash-taunt the enemy carry when your team can follow"],
  no: ["Don't cast R after your ally is already dead", "Don't trade with AP laners while Ki Barrier is down"],
  sit: [["Ahead", "Split push and R into fights so the enemy fights 4v5 twice."], ["Behind", "Hold R to save your carry instead of splitting."], ["Into AP", "Buy Force of Nature or Kaenic Rookern early."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Hollow Radiance", "Heartsteel", "Thornmail"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Jak'Sho the Protean", "Randuin's Omen"] },
  ob: [
    { n: "Support Shen", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Taunt engage and a global shield from the support role." },
    { n: "Bruiser Shen", i: ["Titanic Hydra", "Sterak's Gage", "Death's Dance"], w: "Damage build that makes his split push a real threat." }
  ],
  cb: { gwen: "Max-health magic damage ignores his armor and W.", mordekaiser: "Magic damage and Realm of Death pull him out of the fight he wants to join.", vayne: "True damage cuts through his durability.", kennen: "Magic poke and a stun that Spirit's Refuge doesn't block." }
}
);
