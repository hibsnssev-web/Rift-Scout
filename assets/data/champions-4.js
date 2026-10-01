/* Champion profiles: Ivern to Karthus. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Ivern", r: "jng", c: "ench", bt: "ench", d: "ap", rg: 475,
  s: [2, 4, 4, 2, 3, 2, 1, 2, 2, 1, 3], f: "shield peel",
  th: "Rootcaller (Q) roots and lets his allies dash to the target. Daisy (R) knocks up on every third hit.",
  pw: "He can't duel anyone. Invade him and fight him in his own jungle.",
  st: ["Frees camps without killing them, so he can share them with laners", "Strong shields and peel for carries", "Rootcaller sets up every gank"],
  wk: ["Loses almost every 1v1", "Very low damage", "Relies on his team to convert"],
  go: ["Root a target and let your whole team dash in", "Shield your carry and send Daisy at the diver"],
  no: ["Don't duel anyone, even at full health", "Don't leave your jungle unwarded against invaders"],
  sit: [["Ahead", "Roam lanes and share camps with your carries."], ["Behind", "Stay next to your carry and shield."], ["Into invaders", "Ward your entrances and ping your laners to move with you."]],
  b: { ru: "Summon Aery · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Imperial Mandate", "Staff of Flowing Water", "Redemption"], bo: "Ionian Boots of Lucidity", sit: ["Mikael's Blessing", "Ardent Censer", "Locket of the Iron Solari", "Knight's Vow"] },
  ob: [
    { n: "AP Ivern", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst Ivern for a team that lacks magic damage." },
    { n: "Tank Ivern", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Knight's Vow"], w: "Front line that still roots and shields." }
  ],
  cb: { leesin: "He invades early and Ivern can't fight back.", kindred: "She marks his camps and takes them.", graves: "He invades and bursts Ivern in one reload.", nidalee: "Pounce clears fast and she steals his camps." }
},
{
  n: "Janna", r: "sup", c: "ench", bt: "ench", d: "ap", rg: 550,
  s: [3, 4, 4, 3, 4, 3, 1, 1, 1, 3, 2], f: "peel shield",
  th: "Howling Gale (Q) knocks up in a line, and Monsoon (R) knocks everyone away from her team while healing.",
  pw: "Once Monsoon is down, her team has no disengage. Dive her carry then.",
  st: ["Best disengage in the game", "Shields and move speed for her carry", "Strong poke with Zephyr (W) and passive"],
  wk: ["Very low damage", "Squishy", "Poke lanes out-range her"],
  go: ["Monsoon divers off your carry", "Tornado an engage support mid-dash"],
  no: ["Don't use Monsoon to start fights", "Don't stand in front of your carry"],
  sit: [["Ahead", "Speed up your carry and push for plates."], ["Behind", "Play pure peel and save Monsoon."], ["Into engage", "Hold Q and R for their engage."]],
  b: { ru: "Summon Aery · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Dream Maker", "Imperial Mandate", "Staff of Flowing Water"], bo: "Ionian Boots of Lucidity", sit: ["Redemption", "Mikael's Blessing", "Locket of the Iron Solari", "Ardent Censer"] },
  ob: [
    { n: "Tank Janna", i: ["Celestial Opposition", "Knight's Vow", "Locket of the Iron Solari"], w: "Tankier peel against heavy dive." },
    { n: "Diadem Janna", i: ["Whispering Circlet", "Diadem of Songs", "Staff of Flowing Water"], w: "Mana-scaling heals for long fights." }
  ],
  cb: { brand: "Blaze burn chips her down and she can't stop the poke.", xerath: "He pokes her from out of range.", zyra: "Plants zone her and she has nothing to disengage.", lux: "Light Binding and poke catch her from range." }
},
{
  n: "Jarvan IV", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 175,
  s: [5, 4, 3, 4, 4, 2, 4, 3, 3, 1, 3], f: "dash engage",
  th: "Dragon Strike through Demacian Standard (E-Q) knocks up. Cataclysm (R) walls you in with him.",
  pw: "The E-Q combo is his only reliable gap-closer. Once used, he's committed.",
  st: ["Strong early ganks", "R traps a carry or a whole team", "Reliable engage combo"],
  wk: ["Falls off late", "Committed once he engages", "Mana-hungry"],
  go: ["E-Q into grouped enemies", "R to trap a carry away from peel"],
  no: ["Don't E-Q without follow-up", "Don't let the game stall"],
  sit: [["Ahead", "Gank and snowball lanes."], ["Behind", "Engage for your team instead of dueling."], ["Into tanks", "Build Black Cleaver."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Sterak's Gage", "Black Cleaver"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Jarvan", i: ["Profane Hydra", "Voltaic Cyclosword", "Serylda's Grudge"], w: "One-shot E-Q into squishy teams." },
    { n: "Tank Jarvan", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line engage for carry-heavy teams." }
  ],
  cb: { poppy: "Steadfast Presence stops the E-Q dash.", rammus: "He tanks Jarvan's burst and taunts him.", lillia: "She kites Jarvan and puts him to sleep.", sejuani: "She absorbs the burst and freezes him." }
},
{
  n: "Jax", r: "top jng", c: "skirm", bt: "adb", d: "ad", rg: 125,
  s: [3, 4, 5, 4, 3, 3, 3, 5, 3, 1, 3], f: "dash antiaa split",
  th: "Counter Strike (E) dodges autos and stuns. Grandmaster's Might (R) empowers every third hit.",
  pw: "When Counter Strike is down, his dodge and stun are gone. Trade then.",
  st: ["Late-game split pusher", "Counter Strike beats auto-attackers", "Leap Strike (Q) gap-closer onto any unit"],
  wk: ["Weaker early than most top laners", "CC chains stop him", "Mages burst him"],
  go: ["Counter Strike to dodge and stun", "Split push late"],
  no: ["Don't fight without Counter Strike", "Don't fight long-range mages"],
  sit: [["Ahead", "Split push and take duels."], ["Behind", "Farm to Trinity Force."], ["Into mages", "Buy Wit's End."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Trinity Force", "Blade of the Ruined King", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Guardian Angel", "Wit's End", "Maw of Malmortius"] },
  ob: [
    { n: "AP Jax", i: ["Nashor's Tooth", "Dusk and Dawn", "Rabadon's Deathcap"], w: "Magic-damage Jax for AD-heavy teams." },
    { n: "Jungle Jax", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Dive jungle." }
  ],
  cb: { malphite: "Armor stacking blunts his autos.", pantheon: "He out-trades Jax early.", renekton: "His early damage beats Jax.", poppy: "Steadfast Presence stops Leap Strike." }
},
{
  n: "Jayce", r: "top mid", c: "arty", bt: "adA", d: "ad", rg: 500,
  s: [5, 4, 3, 3, 3, 2, 4, 3, 2, 5, 4], f: "skill",
  th: "Shock Blast through Acceleration Gate (gated Q) pokes for a huge chunk from long range.",
  pw: "If his gated Q misses, he has little damage for several seconds.",
  st: ["Long-range poke with gated Q", "One of the strongest early lanes", "Swaps between ranged and melee forms"],
  wk: ["Falls off late", "Needs to land Q", "Squishy"],
  go: ["Poke with gated Q until they're low, then switch to hammer", "All-in melee after two good pokes"],
  no: ["Don't all-in without poke first", "Don't let the game stall"],
  sit: [["Ahead", "Poke and siege towers."], ["Behind", "Farm with cannon and poke."], ["Into tanks", "Build Serylda's Grudge."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Youmuu's Ghostblade", "The Collector", "Serylda's Grudge"], bo: "Ionian Boots of Lucidity", sit: ["Lord Dominik's Regards", "Guardian Angel", "Death's Dance", "Maw of Malmortius"] },
  ob: [
    { n: "Muramana Jayce", i: ["Muramana", "Serylda's Grudge", "Black Cleaver"], w: "Bruiser poke build that holds up in long fights." },
    { n: "Bastionbreaker Jayce", i: ["Bastionbreaker", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "True-damage burst on champions and objectives." }
  ],
  cb: { malphite: "Armor blunts his poke and R engages on him.", pantheon: "He out-trades Jayce up close.", vayne: "True damage beats him and she kites hammer form.", irelia: "She dashes past his poke through the wave." }
},
{
  n: "Jhin", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [4, 4, 4, 2, 3, 1, 5, 2, 1, 4, 3], f: "skill crit",
  th: "His fourth shot always crits and executes. Deadly Flourish (W) roots anyone his team recently hit.",
  pw: "After the fourth shot he reloads. Engage during the reload.",
  st: ["Long-range burst", "W root from far away", "Curtain Call (R) executes from across the screen"],
  wk: ["Low attack speed", "No escape", "Reload windows"],
  go: ["Fourth shot burst on a trade", "W root for picks"],
  no: ["Don't fight during reload", "Don't stand in front"],
  sit: [["Ahead", "Pick off with W and R."], ["Behind", "Poke and play safe."], ["Into dive", "Save W for the diver."]],
  b: { ru: "Fleet Footwork · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["The Collector", "Infinity Edge", "Rapid Firecannon"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Jhin", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst from range for pick comps." },
    { n: "Hexoptics Jhin", i: ["Hexoptics C44", "Infinity Edge", "Rapid Firecannon"], w: "Longer-range crits." }
  ],
  cb: { samira: "Blade Whirl blocks his fourth shot and Curtain Call.", nilah: "Jubilant Veil dodges his autos.", lucian: "His dashes reach Jhin during the reload.", kalista: "She hops onto Jhin and he can't kite her." }
},
{
  n: "Jinx", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 525,
  s: [2, 4, 5, 1, 3, 1, 3, 5, 1, 3, 4], f: "aa crit skill",
  th: "Get Excited! gives her huge move and attack speed on every takedown. Fishbones rockets hit in an area, and Super Mega Death Rocket (R) executes from anywhere.",
  pw: "She has no dash. Dive her before the first takedown, and never let her reset in a fight.",
  st: ["Takedown resets let one kill turn into a pentakill", "Among the highest late-game DPS in the game", "Flame Chompers (E) and Zap! (W) give her self-peel"],
  wk: ["No mobility at all", "Weak early lane", "Divers and assassins kill her before she gets going"],
  go: ["Walk forward in teamfights once you get the first takedown", "Place Chompers under a diver, then kite back"],
  no: ["Don't take extended early trades against all-in lanes", "Don't face-check brush; you have no escape"],
  sit: [["Ahead", "Siege towers with rockets and force fights around objectives."], ["Behind", "Farm safely; two items puts you back in the game."], ["Into dive", "Stand behind your front line and Chomper the entrance they dive through."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Runaan's Hurricane"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Fiendhunter Jinx", i: ["Fiendhunter Bolts", "Infinity Edge", "Lord Dominik's Regards"], w: "Guaranteed crits after R turn her ultimate into a fight starter." },
    { n: "Hexoptics Jinx", i: ["Hexoptics C44", "Infinity Edge", "Rapid Firecannon"], w: "Rocket-range crits for poke and siege comps." }
  ],
  cb: { draven: "He wins the early lane by a mile before Jinx scales.", samira: "Wild Rush reaches her and Blade Whirl blocks her rockets.", lucian: "Short, bursty trades punish her low early damage.", nilah: "Jubilant Veil dodges her autos and she wins the all-in." }
}
);
