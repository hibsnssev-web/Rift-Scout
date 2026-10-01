/* Champion profiles: Yuumi to Zaahen. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Yuumi", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 500,
  s: [2, 4, 4, 2, 3, 4, 2, 1, 1, 3, 1], f: "heal shield untarg",
  th: "She attaches to an ally with You and Me! (W) and becomes untargetable. Final Chapter (R) roots anyone hit by three waves.",
  pw: "She can't be targeted while attached, so kill the champion she's on. Her lane pressure is low early.",
  st: ["Untargetable while attached", "Heals and speeds up her carry", "R roots multiple enemies"],
  wk: ["Very weak lane pressure", "Useless if her carry dies", "Grievous Wounds cuts her heals"],
  go: ["Attach to a fed carry and heal", "R through grouped enemies"],
  no: ["Don't detach near enemies", "Don't stay on a dying ally"],
  sit: [["Ahead", "Attach to your fed carry and roam with them."], ["Behind", "Attach to your tank or bruiser."], ["Into anti-heal", "Build shields and move speed items."]],
  b: { ru: "Summon Aery · Resolve", ss: "Heal · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Ardent Censer", "Staff of Flowing Water", "Mikael's Blessing", "Locket of the Iron Solari"] },
  ob: [
    { n: "AP Yuumi", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke-heavy Yuumi with Prowling Projectile damage." },
    { n: "Diadem Yuumi", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals." }
  ],
  cb: { nautilus: "He engages on her carry and she can't stop it.", leona: "Her all-in kills Yuumi's carry.", blitzcrank: "Rocket Grab pulls her carry away.", pyke: "He executes Yuumi's carry." }
},
{
  n: "Yunara", r: "bot", c: "mark", bt: "crit", d: "mix", rg: 575,
  s: [3, 4, 5, 3, 3, 2, 3, 5, 1, 2, 4], f: "aa crit skill",
  th: "Cultivation of Spirit (Q) turns her autos into AoE bursts of attack speed. Transcend One's Self (R) empowers her other spells, turning W into a laser and E into a dash.",
  pw: "Before R, her E is only a speed boost and she has no dash. Catch her while R is on cooldown.",
  st: ["Very high sustained DPS with AoE autos", "R empowers every spell", "W slow and laser for peel"],
  wk: ["Weak early", "Squishy", "No dash outside of R"],
  go: ["Activate Q in teamfights for AoE autos", "R to dash through walls in a chase"],
  no: ["Don't fight early all-in lanes", "Don't walk forward with R down"],
  sit: [["Ahead", "Siege and fight with Q active."], ["Behind", "Farm and scale."], ["Into dive", "Save W and R for the diver."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Bloodthirster", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "On-hit Yunara", i: ["Kraken Slayer", "Blade of the Ruined King", "Guinsoo's Rageblade"], w: "Q on-hits splash, so on-hit spreads across the whole fight." },
    { n: "Hexoptics Yunara", i: ["Hexoptics C44", "Infinity Edge", "Lord Dominik's Regards"], w: "Long-range crits." }
  ],
  cb: { draven: "His early damage wins the lane before she scales.", caitlyn: "She out-ranges Yunara early.", samira: "Her all-in beats Yunara.", lucian: "His short trades beat her early." }
},
{
  n: "Zaahen", r: "top jng", c: "skirm", bt: "adb", d: "ad", rg: 175,
  s: [4, 4, 4, 4, 4, 4, 3, 4, 3, 1, 3], f: "revive dash heal",
  th: "Cultivation of War: at full Determination stacks he cheats death once and returns with invulnerability and health. Grim Deliverance (R) is a CC-immune slam that ignores armor.",
  pw: "Watch his Determination stacks. Before they're full he can die normally; burst him then.",
  st: ["Revives once per fight at full stacks", "Pull-and-stun combo with Dreaded Return (W)", "CC-immune R"],
  wk: ["New champion; builds are still settling", "Needs stacks to revive", "Kited by ranged champions"],
  go: ["Fight long when your stacks are full", "Pull and stun a target with W"],
  no: ["Don't fight without stacks", "Don't chase kiting champions"],
  sit: [["Ahead", "Split push and duel."], ["Behind", "Tank and use revive in teamfights."], ["Into burst", "Fight only with stacks."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Guardian Angel", "Maw of Malmortius", "Black Cleaver"] },
  ob: [
    { n: "Endless Hunger Zaahen", i: ["Endless Hunger", "Sterak's Gage", "Death's Dance"], w: "Tenacity and omnivamp to reach full stacks in CC-heavy fights." },
    { n: "Jungle Zaahen", i: ["Eclipse", "Sterak's Gage", "Black Cleaver"], w: "Skirmish jungler who uses the revive to win early fights." }
  ],
  cb: { vayne: "She kites Zaahen and her true damage gets through both lives.", quinn: "She kites him so he can't stack Determination.", kennen: "Ranged poke and stuns keep him from stacking.", teemo: "Blinding Dart stops his auto-attack stacking." }
}
);
