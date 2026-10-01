/* Champion profiles: Urgot to Varus. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Urgot", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 350,
  s: [4, 4, 4, 1, 4, 3, 3, 4, 4, 2, 4], f: "pct execute",
  th: "Echoing Flames: each leg's shotgun deals max-health damage. Disdain (E) flips you behind him, and Fear Beyond Death (R) executes below 25% health and fears nearby enemies.",
  pw: "He's slow and has no dash apart from E. Once Disdain is used, kite him and stay out of his legs' cone.",
  st: ["Max-health leg shotguns shred tanks", "R execute and team-wide fear", "Purge (W) auto-fires at everything nearby"],
  wk: ["Very little mobility", "Kited by ranged champions", "Only one engage spell"],
  go: ["Flip a target into your team with E", "Execute a low carry with R"],
  no: ["Don't use E without follow-up", "Don't chase kiting champions"],
  sit: [["Ahead", "Split push and duel anyone who comes to stop you."], ["Behind", "Front-line in teamfights and look for R executes."], ["Into tanks", "Stay on them; your leg shotguns shred max health."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Black Cleaver", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Force of Nature", "Titanic Hydra", "Guardian Angel"] },
  ob: [
    { n: "Tank Urgot", i: ["Heartsteel", "Sunfire Aegis", "Thornmail"], w: "Front-line Urgot who still shreds with legs." },
    { n: "Lethality Urgot", i: ["Profane Hydra", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst flip combo." }
  ],
  cb: { vayne: "She kites him and her true damage ignores his armor.", quinn: "She kites Urgot.", fiora: "Riposte parries his flip and Vitals beat him.", gwen: "Hallowed Mist blocks his legs." }
},
{
  n: "Varus", r: "bot mid", c: "mark", bt: "onhit", d: "ad", rg: 575,
  s: [4, 4, 4, 1, 3, 1, 4, 4, 1, 5, 4], f: "skill pct",
  th: "Piercing Arrow (Q) charges up for long-range poke, and Chain of Corruption (R) roots you and spreads to nearby allies.",
  pw: "He has no dash. If his R misses, dive him.",
  st: ["Long-range poke with charged Piercing Arrow", "Chain of Corruption spreads a root through a whole team", "Blight stacks deal max-health damage to tanks"],
  wk: ["No dash or escape", "Squishy", "Poke and R are both skillshots"],
  go: ["Poke with a fully charged Q whenever the enemy steps up to last hit", "Fire R into a group so the root spreads to several enemies"],
  no: ["Don't walk forward when R is on cooldown", "Don't fight a dive without your support nearby"],
  sit: [["Ahead", "Poke and siege; force fights where your team can follow a spread R."], ["Behind", "Farm with Q from range and wait for R picks."], ["Into dive", "Save R for the diver and root them as they land."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Terminus"], bo: "Berserker's Greaves", sit: ["Wit's End", "Guardian Angel", "Lord Dominik's Regards", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Varus", i: ["Youmuu's Ghostblade", "The Collector", "Serylda's Grudge"], w: "Burst poke that chunks squishies with every charged Q." },
    { n: "Muramana Varus", i: ["Muramana", "Essence Reaver", "Serylda's Grudge"], w: "Spell-focused poke build with lower cooldowns." }
  ],
  cb: { samira: "Blade Whirl blocks his charged Q and his R.", sivir: "Spell Shield eats Chain of Corruption and she out-clears his waves.", kalista: "Her hops dodge his charged Q and she wins the all-in.", xayah: "Featherstorm makes her untargetable through his R, and her root punishes his lack of a dash." }
}
);
