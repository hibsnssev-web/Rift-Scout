/* Champion profiles: Poppy to Qiyana. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Poppy", r: "jng top sup", c: "ward", bt: "tank", d: "ad", rg: 125,
  s: [4, 4, 3, 3, 4, 2, 3, 2, 5, 1, 3], f: "dash engage peel",
  th: "Heroic Charge (E) pins you against a wall for a stun. Steadfast Presence (W) stops every dash around her.",
  pw: "Her E only stuns near walls. In open ground, and once W is down, she can't stop dashes.",
  st: ["W shuts down dash champions", "Wall stun for picks", "Keeper's Verdict (R) knocks carries out of fights"],
  wk: ["Low damage late", "Needs walls for stuns", "Kited by ranged champions"],
  go: ["W when a dasher engages", "E a target into a wall"],
  no: ["Don't R carries toward their own team", "Don't fight in open ground"],
  sit: [["Ahead", "Gank and dive."], ["Behind", "Peel with W and R."], ["Into dashers", "Hold W for their dash."]],
  b: { ru: "Aftershock · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], bo: "Plated Steelcaps", sit: ["Kaenic Rookern", "Force of Nature", "Thornmail", "Randuin's Omen"] },
  ob: [
    { n: "Lethality Poppy", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst-kill Q and passive buckler for squishy teams." },
    { n: "Support Poppy", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Anti-dive support; Steadfast Presence shuts down dashing engages." }
  ],
  cb: { vayne: "She kites Poppy and true damage beats her armor.", teemo: "Blinding Dart and poke wear her down.", quinn: "She kites Poppy.", kennen: "Ranged poke and stun beat her." }
},
{
  n: "Pyke", r: "sup mid", c: "catch", bt: "adA", d: "ad", rg: 150,
  s: [4, 5, 3, 4, 4, 3, 5, 2, 2, 2, 2], f: "dash stealth execute",
  th: "Bone Skewer (Q) hooks you in, Phantom Undertow (E) stuns, and Death from Below (R) executes and resets.",
  pw: "If Bone Skewer misses, he has only his E for engage. He's squishy once caught.",
  st: ["R executes and resets for multiple kills", "Hook and stun for picks", "Shares kill gold with the team"],
  wk: ["Squishy", "Needs to land hook", "Falls off against tanky teams"],
  go: ["R to finish a low team", "Hook the ADC when they step out"],
  no: ["Don't hook with no follow-up", "Don't fight tanky teams"],
  sit: [["Ahead", "Roam and execute."], ["Behind", "Look for picks."], ["Into tanks", "Stay back and wait for executes."]],
  b: { ru: "Hail of Blades · Resolve", ss: "Flash · Ignite", st: "World Atlas", core: ["Solstice Sleigh", "Youmuu's Ghostblade", "Opportunity"], bo: "Ionian Boots of Lucidity", sit: ["Edge of Night", "Serylda's Grudge", "Umbral Glaive", "Axiom Arc"] },
  ob: [
    { n: "Mid Pyke", i: ["Youmuu's Ghostblade", "Opportunity", "Axiom Arc"], w: "Execute roamer from mid lane." },
    { n: "Bastionbreaker Pyke", i: ["Bastionbreaker", "Youmuu's Ghostblade", "Axiom Arc"], w: "True-damage burst that executes through tanky supports." }
  ],
  cb: { braum: "Unbreakable blocks his hook.", morgana: "Black Shield blocks his combo.", janna: "Disengage cancels his dive.", renata: "Bailout punishes his dive." }
},
{
  n: "Qiyana", r: "mid jng", c: "assn", bt: "adA", d: "ad", rg: 150,
  s: [4, 5, 3, 5, 4, 2, 5, 3, 1, 2, 3], f: "dash",
  th: "Supreme Display of Talent (R) knocks back and stuns anyone it pushes into walls. Her elements change her Q: river (root), grass (stealth), terrain (bonus damage).",
  pw: "She needs terrain for her R stun. In open ground she's much weaker.",
  st: ["R can stun a whole team into walls", "Very mobile", "Huge burst"],
  wk: ["Needs terrain for R", "Mechanically hard", "Squishy"],
  go: ["R a team against walls", "Dive with E and Q"],
  no: ["Don't fight in open ground", "Don't dive without R"],
  sit: [["Ahead", "Roam and assassinate."], ["Behind", "Look for flank R stuns."], ["Into tanks", "Target squishies."]],
  b: { ru: "Electrocute · Domination", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Profane Hydra", "Youmuu's Ghostblade", "Opportunity"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Edge of Night", "Guardian Angel", "Maw of Malmortius"] },
  ob: [
    { n: "Bruiser Qiyana", i: ["Eclipse", "Black Cleaver", "Death's Dance"], w: "Bruiser Qiyana for long skirmishes in the jungle." },
    { n: "Bastionbreaker Qiyana", i: ["Bastionbreaker", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "True-damage burst on her R stuns." }
  ],
  cb: { malzahar: "His passive spell shield eats her opener and Nether Grasp stops the dive.", lissandra: "Frozen Tomb stops her mid-combo and she can't burst Lissandra's stasis.", vex: "Her passive fears Qiyana the moment she dashes in.", pantheon: "Point-and-click stun and Aegis Assault win early trades." }
}
);
