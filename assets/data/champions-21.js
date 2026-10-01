/* Champion profiles: Rek'Sai to Renata Glasc. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Rek'Sai", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 175,
  s: [5, 4, 3, 5, 3, 3, 4, 3, 3, 1, 3], f: "dash engage true",
  th: "Unburrow (W) knocks you up from underground, and Void Rush (R) dashes to a target she's damaged for execute damage.",
  pw: "Her early game is strong, but she falls off late. Tunnels (E) are her escape, so ward and destroy them.",
  st: ["Tremor Sense shows enemies near her tunnels", "One of the strongest early ganks", "Tunnels give her map-wide mobility"],
  wk: ["Falls off late", "Needs to snowball", "Relies on the knock-up landing"],
  go: ["Gank from a tunnel with Unburrow knock-up", "Void Rush low targets to finish them"],
  no: ["Don't let the game stall", "Don't fight far from your tunnels"],
  sit: [["Ahead", "Snowball lanes with tunnel ganks."], ["Behind", "Look for picks around your tunnels."], ["Into tanks", "Build Black Cleaver."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Black Cleaver", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Rek'Sai", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot Void Rush for squishy carries." },
    { n: "Tank Rek'Sai", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line knock-up engage." }
  ],
  cb: { rammus: "He tanks her burst and taunts her.", poppy: "Steadfast Presence stops her tunnel dash.", udyr: "He out-duels her in early skirmishes.", lillia: "She kites Rek'Sai and sleeps her." }
},
{
  n: "Rell", r: "sup", c: "vang", bt: "tank", d: "ap", rg: 175,
  s: [4, 4, 4, 3, 5, 2, 2, 1, 5, 1, 1], f: "engage dash",
  th: "Ferromancy: Crash Down (W) dismounts her into a knock-up. Magnet Storm (R) pulls every enemy nearby into her.",
  pw: "After Crash Down she's dismounted and slow. Kite her before she remounts.",
  st: ["Magnet Storm pulls a whole team together", "Very tanky", "Chains stuns with Attune (E)"],
  wk: ["Slow when dismounted", "Low damage", "Disengage supports punish her"],
  go: ["Crash Down into Magnet Storm on grouped enemies", "Attune to an ally for a stun chain"],
  no: ["Don't engage without follow-up", "Don't engage into Janna with Monsoon up"],
  sit: [["Ahead", "Engage every fight with W and R."], ["Behind", "Peel your carry with R pulls."], ["Into poke", "Engage early before the poke adds up."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Jungle Rell", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Engage jungler with Magnet Storm ganks." },
    { n: "Buff Rell", i: ["Bandlepipes", "Zeke's Convergence", "Knight's Vow"], w: "Attack-speed aura support for hyper-carries." }
  ],
  cb: { janna: "Monsoon cancels her engage.", renata: "Bailout and Hostile Takeover punish her engage.", morgana: "Black Shield blocks her CC.", taric: "Cosmic Radiance makes her engage useless." }
},
{
  n: "Renata Glasc", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [3, 4, 4, 2, 4, 2, 2, 1, 2, 3, 2], f: "peel shield revive",
  th: "Bailout (W) lets her ally keep fighting after death and revives them on a takedown. Hostile Takeover (R) makes enemies attack each other.",
  pw: "Hostile Takeover is her main tool. Once it's down, her team is vulnerable.",
  st: ["R turns enemy teams against themselves", "Bailout saves allies", "Handcuffs (Q) pulls or throws"],
  wk: ["Squishy", "Low damage", "Needs a good R"],
  go: ["R into grouped enemies", "Bailout a diving ally"],
  no: ["Don't R a single enemy", "Don't stand in front of your team"],
  sit: [["Ahead", "Play for R fights around objectives."], ["Behind", "Peel for your carry with Handcuffs and Bailout."], ["Into dive", "Hold R for the enemy dive."]],
  b: { ru: "Guardian · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Imperial Mandate", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Mikael's Blessing", "Locket of the Iron Solari", "Ardent Censer", "Staff of Flowing Water"] },
  ob: [
    { n: "Tank Renata", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Durable support who can walk up for R." },
    { n: "AP Renata", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke-focused Renata for lane pressure." }
  ],
  cb: { zyra: "Plants chip her down in lane.", xerath: "He pokes her from range.", velkoz: "He out-ranges her.", brand: "Blaze chips her from range." }
}
);
