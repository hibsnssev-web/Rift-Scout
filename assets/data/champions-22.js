/* Champion profiles: Renekton to Riven. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Renekton", r: "top", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [5, 4, 2, 4, 3, 4, 4, 3, 3, 1, 4], f: "dash heal",
  th: "Fury-empowered Ruthless Predator (W) stuns for longer, and empowered Cull the Meek (Q) heals much more. Slice and Dice (E) dashes twice.",
  pw: "Watch his Fury bar. Under 50 Fury his spells are weak, and after about 25 minutes he falls off hard.",
  st: ["One of the strongest early lanes", "Empowered W stun wins every short trade", "Double dash for all-ins and escapes"],
  wk: ["Falls off late", "Needs Fury to be scary", "Kited by ranged champions"],
  go: ["All-in with 50 Fury banked and both dashes ready", "Dive a low target under tower with E-E"],
  no: ["Don't let the game stall past 30 minutes", "Don't trade with an empty Fury bar"],
  sit: [["Ahead", "Snowball, dive and roam with your jungler."], ["Behind", "Tank for your team and engage with E-W."], ["Into ranged", "Wait for 50 Fury, then dash in and stun."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Black Cleaver", "Spirit Visage", "Maw of Malmortius", "Guardian Angel"] },
  ob: [
    { n: "Lethality Renekton", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "One-combo burst on a full Fury bar." },
    { n: "Endless Hunger Renekton", i: ["Endless Hunger", "Sterak's Gage", "Death's Dance"], w: "Tenacity and omnivamp for long lane fights." }
  ],
  cb: { vayne: "She kites him and Condemns him out of his dash.", quinn: "She kites Renekton and vaults away from his E.", illaoi: "Tentacles heal her through his trades.", gragas: "Body Slam and cask interrupt his all-ins." }
},
{
  n: "Rengar", r: "jng top", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 5, 3, 5, 2, 2, 5, 3, 2, 1, 3], f: "dash stealth",
  th: "He leaps from brush for a one-shot. Thrill of the Hunt (R) gives him camouflage and reveals the nearest enemy.",
  pw: "No brush, no leap. In open ground he has to walk up. Ward the brush near your lane.",
  st: ["One-shot leap from brush", "R stalks and reveals targets", "Ferocity-empowered spells"],
  wk: ["Needs brush to leap", "Squishy", "Falls off against tanks"],
  go: ["Leap onto an isolated carry from brush", "R to find isolated targets"],
  no: ["Don't leap into point-and-click CC", "Don't fight tanks head-on"],
  sit: [["Ahead", "Hunt carries in side lanes."], ["Behind", "Farm and look for picks near brush."], ["Into tanks", "Target the squishies."]],
  b: { ru: "Electrocute · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Guardian Angel", "Maw of Malmortius", "Bastionbreaker"] },
  ob: [
    { n: "Bruiser Rengar", i: ["Eclipse", "Black Cleaver", "Death's Dance"], w: "Durable top-lane Rengar who wins long trades." },
    { n: "Crit Rengar", i: ["Infinity Edge", "The Collector", "Lord Dominik's Regards"], w: "Crit leap build for late games." }
  ],
  cb: { rammus: "He tanks the leap and taunts Rengar.", poppy: "Steadfast Presence stops his leap.", malphite: "Armor stacking blunts his burst.", jax: "Counter Strike dodges his burst and stuns him." }
},
{
  n: "Riven", r: "top", c: "skirm", bt: "adb", d: "ad", rg: 125,
  s: [4, 5, 4, 5, 3, 2, 4, 4, 2, 1, 4], f: "dash shield",
  th: "Broken Wings (Q) knocks up on its third cast. Blade of the Exile (R) gives her range and an execute wave.",
  pw: "Her Q cooldown is long once all three casts are used. Trade while Q is down.",
  st: ["Huge mobility with Q", "Strong burst combo", "Snowballs fast"],
  wk: ["Mechanically demanding", "Weak to hard CC", "Needs early leads"],
  go: ["Q3 into a full combo on a squishy", "Finish a low target with the R wave"],
  no: ["Don't trade without Q ready", "Don't dive into point-and-click CC"],
  sit: [["Ahead", "Snowball and dive towers."], ["Behind", "Farm and look for flanks in teamfights."], ["Into tanks", "Buy Black Cleaver."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Eclipse", "Sundered Sky", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Black Cleaver", "Guardian Angel", "Maw of Malmortius"] },
  ob: [
    { n: "Lethality Riven", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "One-shot combo for squishy teams." },
    { n: "Endless Hunger Riven", i: ["Endless Hunger", "Sundered Sky", "Sterak's Gage"], w: "Tenacity and omnivamp against CC." }
  ],
  cb: { renekton: "His empowered W stun and Fury heals out-trade her.", pantheon: "He out-trades Riven early with his point-and-click stun.", poppy: "Steadfast Presence stops her Q dashes.", malphite: "Armor stacking and Unstoppable Force beat her." }
}
);
