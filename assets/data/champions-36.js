/* Champion profiles: Vel'Koz to Vi. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Vel'Koz", r: "sup mid", c: "arty", bt: "apb", d: "ap", rg: 525,
  s: [3, 4, 4, 1, 3, 1, 5, 3, 1, 5, 4], f: "skill true",
  th: "Organic Deconstruction deals true damage after three spell hits. Life Form Disintegration Ray (R) melts anyone who stays in the beam.",
  pw: "He's immobile. Once Tectonic Disruption (E) knock-up is spent, dive him.",
  st: ["Longest poke range among supports", "True damage from his passive", "R shreds anyone stuck in it"],
  wk: ["No mobility", "Squishy", "Every spell is a skillshot"],
  go: ["Split Plasma Fission (Q) around minions for poke", "Channel R on a target your team has stunned"],
  no: ["Don't walk forward without vision", "Don't channel R when a diver can reach you"],
  sit: [["Ahead", "Poke and siege before objectives."], ["Behind", "Poke from behind your team."], ["Into dive", "Hold E to knock up the diver."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Ignite", st: "World Atlas", core: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], bo: "Sorcerer's Shoes", sit: ["Rabadon's Deathcap", "Zhonya's Hourglass", "Void Staff", "Liandry's Torment"] },
  ob: [
    { n: "Mid Vel'Koz", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Poke mid laner who wins lane by range." },
    { n: "Liandry's Vel'Koz", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Burning beam build into tanky teams." }
  ],
  cb: { blitzcrank: "Rocket Grab catches him and he has no dash to avoid it.", nautilus: "Point-and-click R catches him.", pyke: "He hooks and executes Vel'Koz.", leona: "Zenith Blade reaches him before his poke adds up." }
},
{
  n: "Vex", r: "mid", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 3, 4, 2, 5, 3, 1, 3, 4], f: "dash skill shield",
  th: "Doom and Gloom: her passive fears anyone who dashes near her. Shadow Surge (R) dashes to you and resets on takedowns.",
  pw: "Her passive fear has a cooldown. Wait for it to be used, then dash in.",
  st: ["Automatically punishes dashes with fear", "R dash resets on kills", "Strong burst"],
  wk: ["Squishy", "Loses to immobile long-range mages", "Weak when the passive is on cooldown"],
  go: ["R onto a low target and chain the reset", "Wait for a dasher to come to you"],
  no: ["Don't fight long-range mages in open lanes", "Don't R into five enemies"],
  sit: [["Ahead", "Roam and snowball with R resets."], ["Behind", "Farm and punish dashers in fights."], ["Into assassins", "Keep the passive ready and stand still."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Actualizer Vex", i: ["Actualizer", "Shadowflame", "Rabadon's Deathcap"], w: "Lower cooldowns for faster passive procs." },
    { n: "Support Vex", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Anti-engage support that fears dashing supports." }
  ],
  cb: { xerath: "He out-ranges her and never needs to dash.", velkoz: "His beams out-range her.", ziggs: "His poke out-ranges her.", syndra: "She out-ranges and bursts Vex." }
},
{
  n: "Vi", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [4, 5, 3, 4, 4, 2, 4, 3, 3, 1, 3], f: "dash engage point",
  th: "Cease and Desist (R) is an unstoppable point-and-click knock-up on any target. Vault Breaker (Q) dashes and knocks back.",
  pw: "Vault Breaker is her main gap-closer. When R is down, she can't lock a carry.",
  st: ["Point-and-click R lockdown", "Strong ganks with Vault Breaker", "Blast Shield passive gives a shield"],
  wk: ["Committed after R", "Falls off late", "Kited when R is down"],
  go: ["R the enemy carry once their peel is used", "Q into grouped enemies"],
  no: ["Don't R into five enemies with no follow-up", "Don't let the game stall"],
  sit: [["Ahead", "Gank and dive towers."], ["Behind", "R the carry in teamfights."], ["Into tanks", "Buy Black Cleaver."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Black Cleaver", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Vi", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot R build for squishy carries." },
    { n: "Tank Vi", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line R engage when your team has enough damage." }
  ],
  cb: { poppy: "Steadfast Presence stops Vault Breaker.", rammus: "He tanks Vi and taunts her.", lillia: "She kites Vi and puts her to sleep.", kindred: "Lamb's Respite saves Vi's R target." }
}
);
