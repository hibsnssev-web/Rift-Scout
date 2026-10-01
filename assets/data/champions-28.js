/* Champion profiles: Sona to Swain. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Sona", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [2, 4, 5, 2, 3, 3, 2, 2, 1, 4, 2], f: "heal shield stack",
  th: "Crescendo (R) stuns everyone in a wide line. Hymn of Valor (Q) pokes the two nearest enemies with every cast.",
  pw: "She's squishy and immobile. Engage early before her heals and passive stacks pile up.",
  st: ["Scales forever with her passive stacks", "R stuns a whole team", "Heals and speeds up her team"],
  wk: ["Very squishy", "Weak early lane", "Engage supports catch her"],
  go: ["R through grouped enemies", "Poke with Q after every trade"],
  no: ["Don't walk forward without vision", "Don't take extended trades early"],
  sit: [["Ahead", "Poke with Q and scale your stacks."], ["Behind", "Heal your team and stay behind them."], ["Into engage", "Save R for their engage."]],
  b: { ru: "Summon Aery · Sorcery", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Ardent Censer", "Staff of Flowing Water", "Mikael's Blessing", "Locket of the Iron Solari"] },
  ob: [
    { n: "AP Sona", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Poke-heavy Sona for lane dominance." },
    { n: "Diadem Sona", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals for long fights." }
  ],
  cb: { blitzcrank: "Rocket Grab catches her before she can heal.", nautilus: "Point-and-click R catches her.", leona: "Her all-in reaches Sona.", pyke: "He hooks and executes Sona." }
},
{
  n: "Soraka", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [3, 4, 4, 2, 3, 5, 1, 1, 1, 3, 2], f: "heal global",
  th: "Wish (R) heals her whole team from anywhere on the map. Astral Infusion (W) heals one ally for a large amount.",
  pw: "She's squishy with no escape. Grievous Wounds cuts her healing, and engage supports reach her easily.",
  st: ["Huge sustain for her team", "Global Wish heal", "Equinox (E) silences and roots"],
  wk: ["Very squishy", "Grievous Wounds cuts her power", "Engage supports kill her"],
  go: ["Heal your carry through trades", "Wish to save a teammate across the map"],
  no: ["Don't walk forward without vision", "Don't stand in front of your carry"],
  sit: [["Ahead", "Heal your team through trades and push."], ["Behind", "Stay behind your team and heal."], ["Into anti-heal", "Play for Equinox silences and positioning."]],
  b: { ru: "Summon Aery · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Echoes of Helia", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Ardent Censer", "Staff of Flowing Water", "Mikael's Blessing", "Locket of the Iron Solari"] },
  ob: [
    { n: "Top Soraka", i: ["Warmog's Armor", "Redemption", "Spirit Visage"], w: "Heal-tank top who drains poke-less lanes." },
    { n: "Diadem Soraka", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals for long games." }
  ],
  cb: { blitzcrank: "Rocket Grab catches her before she can heal.", pyke: "He hooks and executes her.", nautilus: "Point-and-click R catches her.", leona: "Her all-in reaches Soraka." }
},
{
  n: "Swain", r: "sup mid bot", c: "battle", bt: "apd", d: "ap", rg: 525,
  s: [3, 4, 4, 1, 4, 4, 3, 4, 4, 3, 4], f: "heal skill",
  th: "Nevermove (E) roots, and Ravenous Flock (passive) pulls rooted champions to him. Demonic Ascension (R) drains everyone around him.",
  pw: "He's immobile. If Nevermove misses, he has little CC.",
  st: ["R drains and heals", "Root and pull combo", "Tanky for a mage"],
  wk: ["No mobility", "Needs to land E", "Kited by long-range champions"],
  go: ["Root and pull a target into your team", "R into grouped enemies"],
  no: ["Don't walk forward without E", "Don't fight long-range mages in the open"],
  sit: [["Ahead", "Engage with E and R."], ["Behind", "Farm and peel for your carries."], ["Into dive", "Save E for the diver."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "World Atlas", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], bo: "Mercury's Treads", sit: ["Riftmaker", "Void Staff", "Spirit Visage", "Banshee's Veil"] },
  ob: [
    { n: "Mid Swain", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Drain-tank mid laner." },
    { n: "Bot Swain", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Drain carry bot lane." }
  ],
  cb: { xerath: "He out-ranges Swain and pokes him from safety.", velkoz: "His beams out-range Swain.", ziggs: "His poke out-ranges Swain.", zyra: "Plants chip him from range." }
}
);
