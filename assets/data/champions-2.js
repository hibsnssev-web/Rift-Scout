/* Champion profiles: Caitlyn to Gnar. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Caitlyn", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 650,
  s: [5, 4, 4, 2, 2, 1, 3, 4, 1, 4, 3], f: "aa crit skill",
  th: "650 range plus headshots. A Yordle Snap Trap (W) under you means a free headshot and usually a Piltover Peacemaker (Q) on top.",
  pw: "90 Caliber Net (E) is her only escape. Once it's spent, any engage or dive reaches her.",
  st: ["Longest base attack range of any marksman", "Traps control the lane, chokes and objectives", "Takes plates and towers faster than almost anyone"],
  wk: ["Falls apart once a diver reaches her", "Only one dash, on a long cooldown", "Hyper-carries outscale her in long games"],
  go: ["Push the wave and hit the tower whenever the enemy steps back to farm", "Walk up for a headshot when the enemy is standing on your trap"],
  no: ["Don't use E to engage; it's your only escape", "Don't stand next to brush against hook supports"],
  sit: [["Ahead", "Siege towers and pre-trap objectives before the fight starts."], ["Behind", "Farm at max range and keep poking; your range still matters."], ["Into dive", "Save E, put traps under yourself, and stand behind your front line."]],
  b: { ru: "Fleet Footwork · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Rapid Firecannon"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Caitlyn", i: ["The Collector", "Hexoptics C44", "Serylda's Grudge"], w: "Burst headshots for poke and siege comps. You give up late-game DPS." },
    { n: "Hexoptics Caitlyn", i: ["Hexoptics C44", "Infinity Edge", "Lord Dominik's Regards"], w: "Her range already keeps her far away, so the distance bonus is almost always active." }
  ],
  cb: { samira: "Wild Rush closes the gap and Blade Whirl blocks Peacemaker and Ace in the Hole.", blitzcrank: "Rocket Grab punishes her for standing at max range with only one dash.", nautilus: "Dredge Line and a point-and-click Depth Charge reach her through the range advantage." }
},
{
  n: "Camille", r: "top", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [3, 5, 4, 5, 3, 3, 4, 4, 3, 1, 3], f: "dash true split",
  th: "Hookshot (E) off a wall into a stun, then Precision Protocol Q2 for true damage. Hextech Ultimatum (R) locks a target in with her.",
  pw: "Hookshot has a long cooldown early. Once she's used it, she can't chase or escape.",
  st: ["True damage from Q2 and adaptive shields from her passive", "One of the strongest split-pushers in the game", "R isolates a carry in the middle of a fight"],
  wk: ["Weak early lane against ranged champions", "Needs Trinity Force to spike", "Point-and-click CC stops her mid-dive"],
  go: ["Hookshot onto the enemy carry once their peel is used", "Dive under tower with E into R when the target is below half"],
  no: ["Don't Hookshot in while the enemy has a stun ready", "Don't fight 1v2 before Trinity Force"],
  sit: [["Ahead", "Split push and force two enemies to answer you."], ["Behind", "Farm to Trinity Force and look for flank picks with R."], ["Into ranged tops", "Take short Q2 trades and keep E to dodge their ganks."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Trinity Force", "Ravenous Hydra", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Maw of Malmortius", "Guardian Angel", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Camille", i: ["Profane Hydra", "Voltaic Cyclosword", "Serylda's Grudge"], w: "One-shots a carry out of Hookshot. Great when the enemy has one fed squishy." },
    { n: "Support Camille", i: ["Celestial Opposition", "Trinity Force", "Sterak's Gage"], w: "Hookshot engage and R picks from the support role." }
  ],
  cb: { jax: "Counter Strike dodges her Q2 and stuns her as she lands.", renekton: "He out-damages her before Trinity Force and his stun cancels her E.", fiora: "Riposte parries the Hookshot stun and turns it back on her.", poppy: "Steadfast Presence stops Hookshot mid-dash." }
},
{
  n: "Cassiopeia", r: "mid top", c: "battle", bt: "apd", d: "ap", rg: 550,
  s: [3, 4, 5, 2, 4, 3, 3, 5, 2, 3, 4], f: "heal skill",
  th: "Twin Fang (E) spam on poisoned targets. Petrifying Gaze (R) stuns everyone facing her and slows the rest.",
  pw: "She has no dash. Before level 6, all-in her right after she spends Miasma (W).",
  st: ["Constant high DPS with Twin Fang", "R stun stops divers and flips fights", "Passive move speed instead of boots"],
  wk: ["Short range and no escape", "Can't buy boots", "Deals little damage until her poison lands"],
  go: ["Turn on divers with R as they face you", "Fight in chokes where Miasma covers the whole path"],
  no: ["Don't fight long-range mages in open lanes", "Don't R targets who are looking away; they only get slowed"],
  sit: [["Ahead", "Group and zone objectives with Miasma and R."], ["Behind", "Farm and scale. She's one of the best late-game mages."], ["Into assassins", "Face them when they dive so R stuns."]],
  b: { ru: "Conqueror · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Rod of Ages", "Rylai's Crystal Scepter"], bo: "No boots (passive)", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Banshee's Veil"] },
  ob: [
    { n: "Top-lane Cassiopeia", i: ["Liandry's Torment", "Rod of Ages", "Riftmaker"], w: "Sustained magic damage that shreds melee top laners." },
    { n: "Actualizer Cassiopeia", i: ["Actualizer", "Rod of Ages", "Rabadon's Deathcap"], w: "Her E spam turns the empowered mana state into huge DPS." }
  ],
  cb: { xerath: "He out-ranges her by hundreds of units and she has no dash to reach him.", syndra: "Her range and burst kill Cassiopeia before the poison stacks.", zoe: "Sleep and Paddle Star from far out of Cassiopeia's range.", jayce: "Cannon poke top wears her down before she can walk up." }
},
{
  n: "Cho'Gath", r: "top mid", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [3, 4, 5, 1, 4, 3, 3, 3, 5, 2, 3], f: "stack true skill",
  th: "Rupture (Q) knocks up and Feral Scream (W) silences. Feast (R) executes with true damage and grows him.",
  pw: "He's immobile and Rupture is slow. Dodge it and he has almost nothing left.",
  st: ["Feast stacks give unlimited health scaling", "True-damage execute on a short cooldown late", "Knock-up and silence for teamfights"],
  wk: ["No mobility at all", "Easily kited by ranged champions", "Needs Feast stacks to be a real threat"],
  go: ["Feast a low champion for a double stack", "Rupture the enemy backline when they group in a choke"],
  no: ["Don't spend R on minions when a champion kill is close", "Don't walk at a fed marksman without your team"],
  sit: [["Ahead", "Stack Feast on champions and play front line."], ["Behind", "Feast epic monsters and minions to keep scaling."], ["Into ranged", "Buy tank items early and farm with Q."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Sunfire Aegis", "Thornmail"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Kaenic Rookern", "Jak'Sho the Protean", "Warmog's Armor"] },
  ob: [
    { n: "AP Cho'Gath", i: ["Riftmaker", "Liandry's Torment", "Rabadon's Deathcap"], w: "Q-W burst and a scary Feast from mid lane." },
    { n: "Heartsteel stacking Cho'Gath", i: ["Heartsteel", "Warmog's Armor", "Unending Despair"], w: "Maximum health scaling for games that go long." }
  ],
  cb: { vayne: "She kites him forever and true damage melts his health.", fiora: "Vitals true damage ignores his size.", gwen: "Her max-health damage grows with his health and Hallowed Mist blocks him.", quinn: "She kites him and he can't catch her." }
},
{
  n: "Corki", r: "mid", c: "mark", bt: "crit", d: "mix", rg: 550,
  s: [3, 4, 4, 3, 1, 2, 4, 4, 2, 5, 3], f: "skill dash",
  th: "Missile Barrage (R) pokes from long range, and the Package turns his W into a big dive with a knock-up.",
  pw: "Valkyrie (W) is his only escape. When it's down, dive him.",
  st: ["Long-range poke with R missiles", "The Package gives a huge engage every few minutes", "Good waveclear with Gatling Gun"],
  wk: ["Weak to all-ins when W is down", "Needs items to spike", "Squishy"],
  go: ["Use the Package to dive the enemy carry mid-fight", "Poke with R before objectives start"],
  no: ["Don't Valkyrie in without Flash to get out", "Don't fight melee champions up close"],
  sit: [["Ahead", "Poke towers and dive with the Package."], ["Behind", "Farm with R and play for the Package."], ["Into assassins", "Hold W to escape."]],
  b: { ru: "Fleet Footwork · Sorcery", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Trinity Force", "Navori Flickerblade", "Infinity Edge"], bo: "Berserker's Greaves", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Corki", i: ["Lich Bane", "Luden's Echo", "Rabadon's Deathcap"], w: "Magic-damage burst Corki for AD-heavy teams." },
    { n: "Stormrazor Corki", i: ["Stormrazor", "Infinity Edge", "Lord Dominik's Regards"], w: "First-hit burst for pick-heavy comps." }
  ],
  cb: { fizz: "He jumps on Corki before Valkyrie can get him out.", zed: "Living Shadow reaches him through the missiles.", kassadin: "Null Sphere and his magic shield ignore Corki's poke.", talon: "He roams faster and bursts Corki from walls." }
},
{
  n: "Darius", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 175,
  s: [5, 4, 3, 1, 3, 4, 4, 4, 3, 1, 3], f: "heal true",
  th: "Hemorrhage bleeds to 5 stacks for Noxian Might. Noxian Guillotine (R) deals true damage and resets on kill.",
  pw: "Apprehend (E) is his only way to reach you. When it's on cooldown, kite him.",
  st: ["Wins nearly every early 1v1", "R resets make him a teamfight monster", "Decimate (Q) heals him on champion hits"],
  wk: ["No mobility", "Ranged champions kite him", "Point-and-click CC shuts him down"],
  go: ["All-in once you reach 5 bleed stacks", "Chain R resets when two enemies are low"],
  no: ["Don't E without a follow-up plan", "Don't fight ranged champions without Flash"],
  sit: [["Ahead", "Split push and force enemies to answer you."], ["Behind", "Front-line and look for R resets in teamfights."], ["Into ranged", "Farm under tower and wait for ganks."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ghost", st: "Doran's Blade", core: ["Trinity Force", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Maw of Malmortius", "Force of Nature", "Guardian Angel"] },
  ob: [
    { n: "Dead Man's Plate Darius", i: ["Dead Man's Plate", "Sterak's Gage", "Force of Nature"], w: "Move speed and durability to catch kiting comps." },
    { n: "Jungle Darius", i: ["Trinity Force", "Sterak's Gage", "Dead Man's Plate"], w: "Early gank pressure with Ghost." }
  ],
  cb: { vayne: "She kites him and Condemn stuns him out of E range.", quinn: "She kites him and Blinding Assault cancels his auto-resets.", gnar: "Mini Gnar kites him and Mega Gnar stuns him when he closes in.", kayle: "Once she's ranged, he can't reach her." }
},
{
  n: "Diana", r: "jng mid", c: "diver", bt: "apa", d: "ap", rg: 150,
  s: [3, 5, 4, 4, 3, 3, 5, 3, 3, 1, 4], f: "dash skill shield",
  th: "Crescent Strike (Q) into Lunar Rush (E), then Moonfall (R) pulls a whole team into her burst.",
  pw: "Lunar Rush resets only on Moonlight-marked targets. If Q misses, her dash sits on a long cooldown.",
  st: ["Huge AoE burst when R hits several enemies", "Shields from Pale Cascade", "Strong mid-game dives"],
  wk: ["Fully committed once she dives", "Hard CC stops her", "Falls off when behind"],
  go: ["Moonfall into three or more grouped enemies", "Dive a low carry with the Q-E combo"],
  no: ["Don't dive without Moonlight on the target", "Don't engage into a team with all its CC up"],
  sit: [["Ahead", "Dive the backline in every fight."], ["Behind", "Farm and flank; wait for the enemy to group."], ["Into tanks", "Buy Riftmaker or Liandry's Torment."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Nashor's Tooth", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Riftmaker", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Tank Diana", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line AoE engage for teams without one." },
    { n: "Burst Diana", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "One-shot build from mid lane." }
  ],
  cb: { rammus: "Defensive Ball Curl and taunt blunt her burst.", poppy: "Steadfast Presence stops Lunar Rush.", malzahar: "Nether Grasp suppresses her through the shield.", lillia: "She kites Diana and puts her to sleep." }
},
{
  n: "Dr. Mundo", r: "top jng", c: "jugg", bt: "tank", d: "ad", rg: 125,
  s: [2, 4, 5, 1, 1, 5, 2, 3, 5, 2, 3], f: "heal pct",
  th: "Maximum Dosage (R) heals a huge chunk. Infected Bonesaw (Q) deals current-health damage from range.",
  pw: "Before level 6 and his first item he has low damage. Grievous Wounds guts his R.",
  st: ["Nearly unkillable with R active", "Bonesaw poke deals current-health damage", "Scales hard with health items"],
  wk: ["No reliable CC", "Kited easily", "Grievous Wounds shuts him down"],
  go: ["Tank tower shots with R active", "Walk straight into the enemy team as front line"],
  no: ["Don't fight into Grievous Wounds without R", "Don't expect to catch mobile champions"],
  sit: [["Ahead", "Tank the enemy team in fights."], ["Behind", "Farm health items and scale."], ["Into anti-heal", "Stack health and armor instead of regen."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Heartsteel", "Spirit Visage", "Thornmail"], bo: "Plated Steelcaps", sit: ["Force of Nature", "Warmog's Armor", "Kaenic Rookern", "Jak'Sho the Protean"] },
  ob: [
    { n: "Jungle Mundo", i: ["Sunfire Aegis", "Heartsteel", "Spirit Visage"], w: "Tank jungler with strong full-clear sustain." },
    { n: "Warmog's Mundo", i: ["Heartsteel", "Warmog's Armor", "Spirit Visage"], w: "Maximum regeneration for long fights." }
  ],
  cb: { vayne: "True damage melts his giant health bar.", fiora: "Vitals true damage and heals beat his regen.", gwen: "Max-health damage grows with his health.", kayle: "She outranges and outscales him." }
},
{
  n: "Draven", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [5, 4, 3, 2, 2, 2, 5, 4, 1, 2, 3], f: "aa crit skill",
  th: "Spinning Axes (Q) deal massive auto-attack damage. Every kill pays out his Adoration stacks as bonus gold.",
  pw: "Catching axes limits where he can move. CC him when he walks to an axe.",
  st: ["Highest early damage of any marksman", "Adoration gold snowballs his lead", "Whirling Death (R) executes from long range"],
  wk: ["Has to catch axes to keep his damage", "Loses a lot of power when behind", "Little mobility"],
  go: ["All-in at level 2 with two axes spinning", "Chase kills to cash in Adoration"],
  no: ["Don't drop axes to chase", "Don't die with high Adoration stacks"],
  sit: [["Ahead", "Snowball with kills and cash in Adoration."], ["Behind", "Farm and play for your team."], ["Into poke", "Engage with Stand Aside (E)."]],
  b: { ru: "Lethal Tempo · Domination", ss: "Flash · Heal", st: "Doran's Blade", core: ["The Collector", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Bloodthirster", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Lethality Draven", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Pure burst for pick comps." },
    { n: "Fiendhunter Draven", i: ["Fiendhunter Bolts", "Infinity Edge", "Bloodthirster"], w: "Guaranteed crits after R for all-in fights." }
  ],
  cb: { caitlyn: "She outranges him and traps where his axes land.", varus: "Long-range poke keeps Draven off his axes.", ziggs: "His poke and minefield zone Draven's axe drops.", jhin: "Deadly Flourish roots him while he walks to an axe." }
},
{
  n: "Ekko", r: "mid jng", c: "assn", bt: "apa", d: "ap", rg: 125,
  s: [3, 5, 4, 4, 3, 3, 5, 3, 2, 2, 4], f: "dash skill untarg",
  th: "Chronobreak (R) rewinds him with a heal and an explosion. Parallel Convergence (W) stuns anyone inside it.",
  pw: "R has a long cooldown. When it's down, commit fully; he can't undo the fight.",
  st: ["R undoes a bad fight", "High burst and mobility", "W stun traps whole fights"],
  wk: ["Weak before level 6", "Needs to land Q and W", "Falls off against tanks"],
  go: ["Dive a carry with R ready as your escape", "Stun a grouped team with W"],
  no: ["Don't fight without R when behind", "Don't throw W with no follow-up"],
  sit: [["Ahead", "Roam and dive carries with R up."], ["Behind", "Farm and look for flank picks."], ["Into tanks", "Build Riftmaker or Void Staff."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Hextech Rocketbelt", "Lich Bane", "Shadowflame"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap", "Banshee's Veil"] },
  ob: [
    { n: "Tank Ekko", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Durable front-line jungler with W engages." },
    { n: "Dusk and Dawn Ekko", i: ["Dusk and Dawn", "Lich Bane", "Zhonya's Hourglass"], w: "Spellblade burst for jungle Ekko." }
  ],
  cb: { galio: "He tanks Ekko's magic burst and taunts him.", malzahar: "Suppression lands before Ekko can rewind.", pantheon: "Point-and-click stun catches him pre-6.", lissandra: "Frozen Tomb stops his dive and she's hard to burst." }
},
{
  n: "Elise", r: "jng sup", c: "diver", bt: "apa", d: "ap", rg: 550,
  s: [5, 4, 2, 3, 3, 2, 5, 3, 2, 2, 3], f: "skill pct untarg",
  th: "Cocoon (E) stuns you, then the spider combo deals current-health damage. Rappel (Spider E) dodges everything.",
  pw: "If Cocoon misses, she has no hard CC for over 10 seconds.",
  st: ["One of the strongest early gankers", "Rappel dodges spells and tower shots", "Big burst on stunned targets"],
  wk: ["Falls off late", "Needs Cocoon to hit", "Squishy"],
  go: ["Tower-dive early with Rappel to drop aggro", "Gank lanes with Cocoon from fog"],
  no: ["Don't dive when Cocoon is on cooldown", "Don't let the game stall to late"],
  sit: [["Ahead", "Gank and snowball lanes early."], ["Behind", "Look for Cocoon picks with your team."], ["Into tanks", "Build Liandry's Torment."]],
  b: { ru: "Dark Harvest · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Liandry's Torment", "Shadowflame", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Rabadon's Deathcap", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Support Elise", i: ["Zaz'Zak's Realmspike", "Liandry's Torment", "Zhonya's Hourglass"], w: "Cocoon-engage support." },
    { n: "Tank Elise", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Durable diver when your team needs a front line." }
  ],
  cb: { rammus: "Powerball knock-up and tankiness ruin her early dives.", poppy: "Heroic Charge pins her and W blocks her dashes.", warwick: "His sustain and suppression win the early skirmishes.", sejuani: "She absorbs the burst and freezes Elise." }
},
{
  n: "Evelynn", r: "jng", c: "assn", bt: "apa", d: "ap", rg: 125,
  s: [2, 5, 4, 4, 2, 2, 5, 3, 1, 1, 3], f: "stealth dash execute",
  th: "Camouflage from level 6, Allure (W) charm, then Last Caress (R) executes and blinks her away.",
  pw: "Before level 6 she has no stealth and a slow clear. Invade her early.",
  st: ["Permanent camouflage from level 6", "Massive burst on isolated targets", "R doubles as an escape"],
  wk: ["Weak before level 6", "Oracle Lens and Control Wards expose her", "Squishy"],
  go: ["Gank from stealth when a target walks alone", "Execute with R and blink out"],
  no: ["Don't gank without charm ready", "Don't fight 5v5 head-on"],
  sit: [["Ahead", "Pick off anyone who walks alone."], ["Behind", "Farm and look for flanks."], ["Into tanks", "Target squishies only."]],
  b: { ru: "Electrocute · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Lich Bane", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Dusk and Dawn Evelynn", i: ["Dusk and Dawn", "Lich Bane", "Rabadon's Deathcap"], w: "Spellblade burst for faster kills." },
    { n: "Riftmaker Evelynn", i: ["Riftmaker", "Zhonya's Hourglass", "Void Staff"], w: "Extended fights into tanky teams." }
  ],
  cb: { rammus: "He tanks her burst and taunts her out of stealth.", nunu: "He invades her pre-6 and out-clears her.", leesin: "He invades early and kills her before 6.", kindred: "She invades Evelynn's slow clear and marks her camps." }
},
{
  n: "Ezreal", r: "bot", c: "mark", bt: "crit", d: "mix", rg: 550,
  s: [3, 4, 4, 5, 1, 2, 3, 3, 2, 5, 3], f: "blink skill",
  th: "Mystic Shot (Q) pokes constantly and Arcane Shift (E) blinks him out of all-ins.",
  pw: "When E is down, he has no escape at all.",
  st: ["Safe laning with E blink", "Constant Q poke", "Strong late-game damage with items"],
  wk: ["Low damage without landed Qs", "Every damage spell is a skillshot", "Weak against all-in lanes"],
  go: ["Poke with Q until the enemy has to recall", "Blink forward to finish a kill"],
  no: ["Don't blink into the enemy team", "Don't take an all-in without Q stacks"],
  sit: [["Ahead", "Poke towers and objectives."], ["Behind", "Farm with Q and play safe."], ["Into dive", "Save E to escape."]],
  b: { ru: "Conqueror · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Trinity Force", "Muramana", "Serylda's Grudge"], bo: "Ionian Boots of Lucidity", sit: ["Lord Dominik's Regards", "Guardian Angel", "Bloodthirster", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Ezreal", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Magic-damage poke for AD-heavy teams." },
    { n: "On-hit Ezreal", i: ["Blade of the Ruined King", "Wit's End", "Guinsoo's Rageblade"], w: "Q applies on-hit effects." }
  ],
  cb: { draven: "He out-trades Ezreal early and punishes missed Qs.", samira: "Her all-in catches him and blocks Q.", nilah: "Jubilant Veil dodges his autos and she wins all-ins.", caitlyn: "She outranges him and traps his E landing spot." }
},
{
  n: "Fiddlesticks", r: "jng sup", c: "spec", bt: "apb", d: "ap", rg: 480,
  s: [2, 4, 4, 2, 4, 3, 5, 3, 2, 2, 4], f: "heal blink",
  th: "Crowstorm (R) blinks in after a channel and deals huge AoE damage. Terrify (Q) fears.",
  pw: "He's immobile after R. Hard CC interrupts his channel.",
  st: ["R into a grouped team wins games", "Fear locks a target for ganks", "Effigies give vision and fake him"],
  wk: ["Weak early", "Committed after R", "Hard CC interrupts the channel"],
  go: ["Channel R from fog into grouped enemies", "Fear a target for a gank"],
  no: ["Don't R without Zhonya's when enemies have CC", "Don't face-check brush"],
  sit: [["Ahead", "Flash-R into big fights."], ["Behind", "Farm and look for ambushes."], ["Into CC", "Rush Zhonya's Hourglass."]],
  b: { ru: "Dark Harvest · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Liandry's Torment", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Banshee's Veil", "Cosmic Drive", "Morellonomicon"] },
  ob: [
    { n: "Support Fiddlesticks", i: ["Zaz'Zak's Realmspike", "Liandry's Torment", "Zhonya's Hourglass"], w: "Fear support with game-winning R fights." },
    { n: "Actualizer Fiddlesticks", i: ["Actualizer", "Zhonya's Hourglass", "Rabadon's Deathcap"], w: "More damage and lower cooldowns during R." }
  ],
  cb: { kindred: "She invades his slow early clear.", leesin: "He invades and kills him before his level 6 spike.", nidalee: "She takes his camps and punishes his clear.", rengar: "He pounces on Fiddlesticks from brush before he can channel." }
},
{
  n: "Fiora", r: "top", c: "skirm", bt: "adb", d: "ad", rg: 150,
  s: [4, 4, 5, 4, 2, 4, 4, 5, 2, 1, 3], f: "heal true dash split antiaa",
  th: "Vital hits deal true damage and heal her. Riposte (W) parries damage and stuns if it blocks CC.",
  pw: "Riposte has a long cooldown. After it's used, she has no answer to CC.",
  st: ["Arguably the best duelist in the game", "Riposte parries key CC and stuns back", "Huge split-push pressure"],
  wk: ["Teamfight CC chains kill her", "Needs to hit Vitals for damage", "Squishy"],
  go: ["Parry the key CC with Riposte, then all-in", "Split push and force 1v1s"],
  no: ["Don't use Riposte to farm or poke", "Don't take 5v5 teamfights head-on"],
  sit: [["Ahead", "Split push and duel whoever comes."], ["Behind", "Farm and wait for items."], ["Into tanks", "Vitals shred tanks, so keep fighting them."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Ravenous Hydra", "Trinity Force", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Sterak's Gage", "Guardian Angel", "Maw of Malmortius", "Spirit Visage"] },
  ob: [
    { n: "Lethality Fiora", i: ["Profane Hydra", "Voltaic Cyclosword", "Serylda's Grudge"], w: "One-shot build into squishy teams." },
    { n: "Endless Hunger Fiora", i: ["Endless Hunger", "Trinity Force", "Sterak's Gage"], w: "Tenacity and omnivamp against CC." }
  ],
  cb: { poppy: "Steadfast Presence stops Lunge and her stun ignores Riposte timing.", malphite: "Armor stacking and Unstoppable Force punish her.", pantheon: "He out-trades her early and blocks her with Aegis.", quinn: "She kites Fiora and vaults away from Lunge." }
},
{
  n: "Fizz", r: "mid", c: "assn", bt: "apa", d: "ap", rg: 175,
  s: [3, 5, 4, 5, 2, 2, 5, 3, 1, 1, 3], f: "dash untarg skill",
  th: "Playful/Trickster (E) makes him untargetable, and Chum the Waters (R) is a shark knock-up that explodes.",
  pw: "Once E is used, he has no escape.",
  st: ["E dodges almost everything", "Huge burst with R", "High mobility"],
  wk: ["Short range", "Weak before level 6", "Hard CC catches him"],
  go: ["Dodge key spells with E, then all-in", "Dive with R and E"],
  no: ["Don't use E to engage", "Don't take long trades"],
  sit: [["Ahead", "Roam and assassinate carries."], ["Behind", "Farm and flank."], ["Into tanks", "Burst the squishy targets only."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Lich Bane", "Shadowflame", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Void Staff", "Rabadon's Deathcap", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "On-hit Fizz", i: ["Nashor's Tooth", "Dusk and Dawn", "Rabadon's Deathcap"], w: "On-hit DPS that stays strong in long fights." },
    { n: "Tank Fizz", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Durable top-lane Fizz." }
  ],
  cb: { galio: "He tanks Fizz's burst and taunts him out of Trickster.", malzahar: "Suppression stops his dive.", lissandra: "Frozen Tomb freezes him as he lands.", vex: "Her fear punishes his dashes." }
},
{
  n: "Galio", r: "mid sup", c: "ward", bt: "apf", d: "ap", rg: 150,
  s: [3, 4, 4, 3, 5, 2, 3, 2, 5, 2, 4], f: "engage peel global",
  th: "Shield of Durand (W) taunts, and Hero's Entrance (R) flies across the map and knocks up.",
  pw: "When R is down, he can't join fights across the map.",
  st: ["Passive magic-damage shield", "Global engage with R", "Strong teamfight CC"],
  wk: ["Weak against physical damage", "Low damage", "Needs his team to follow up"],
  go: ["R to join a lane fight", "Taunt a grouped enemy team"],
  no: ["Don't R into a full team alone", "Don't fight physical champions alone"],
  sit: [["Ahead", "Roam and engage."], ["Behind", "Tank and peel for your carries."], ["Into AP", "Buy magic resist and front-line."]],
  b: { ru: "Aftershock · Resolve", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Hollow Radiance", "Zhonya's Hourglass", "Rabadon's Deathcap"], bo: "Mercury's Treads", sit: ["Kaenic Rookern", "Force of Nature", "Jak'Sho the Protean", "Void Staff"] },
  ob: [
    { n: "Support Galio", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support with global R." },
    { n: "Full AP Galio", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst build when your team has enough front line." }
  ],
  cb: { zed: "His physical burst ignores Galio's magic shield.", talon: "Physical burst and wall hops outpace him.", naafiri: "Her physical burst and dog pack beat his shield.", qiyana: "She bursts him with physical damage and roams first." }
},
{
  n: "Gangplank", r: "top", c: "spec", bt: "crit", d: "ad", rg: 125,
  s: [2, 4, 5, 2, 2, 3, 5, 3, 2, 4, 5], f: "skill global",
  th: "Powder Keg (E) chains deal massive AoE crit damage. Cannon Barrage (R) is global.",
  pw: "His early game is weak. All-in before barrels stack.",
  st: ["Barrel chains deal big AoE crits", "Global R pressure", "Remove Scurvy (W) cleanses CC"],
  wk: ["Weak early", "Barrels are hard to use", "No mobility"],
  go: ["Chain barrels in grouped fights", "Use R to join fights across the map"],
  no: ["Don't fight early against strong laners", "Don't waste barrels you can't chain"],
  sit: [["Ahead", "Siege and zone objectives with barrels."], ["Behind", "Farm and scale."], ["Into divers", "Place barrels defensively."]],
  b: { ru: "Grasp of the Undying · Inspiration", ss: "Flash · Teleport", st: "Doran's Shield", core: ["Trinity Force", "Infinity Edge", "Navori Flickerblade"], bo: "Ionian Boots of Lucidity", sit: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "The Collector"] },
  ob: [
    { n: "Lethality Gangplank", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Burst barrels for pick comps." },
    { n: "Tank Gangplank", i: ["Sunfire Aegis", "Heartsteel", "Thornmail"], w: "Front-line build with barrel utility." }
  ],
  cb: { renekton: "He out-damages Gangplank before barrels matter.", darius: "He wins the early 1v1s and bleeds him.", camille: "Hookshot dives past barrels.", kled: "His early aggression beats Gangplank." }
},
{
  n: "Garen", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 175,
  s: [4, 4, 3, 2, 2, 5, 4, 3, 4, 1, 3], f: "true execute",
  th: "Decisive Strike (Q) silences, and Demacian Justice (R) executes with true damage.",
  pw: "He's melee with no range. Poke him and trade before he reaches you.",
  st: ["Passive regeneration out of combat", "True-damage execute R", "Tanky and simple"],
  wk: ["No gap-closer beyond Q's speed", "Kited by ranged champions", "Low utility"],
  go: ["Silence and spin into squishies", "Execute low targets with R"],
  no: ["Don't chase kiting ranged champions", "Don't take long fights without your regen"],
  sit: [["Ahead", "Split push and execute."], ["Behind", "Tank for your team."], ["Into ranged", "Farm near your tower."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ghost", st: "Doran's Blade", core: ["Trinity Force", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Spirit Visage", "Force of Nature", "Maw of Malmortius", "Guardian Angel"] },
  ob: [
    { n: "Lethality Garen", i: ["The Collector", "Serylda's Grudge", "Youmuu's Ghostblade"], w: "Burst build for squishy teams." },
    { n: "Tank Garen", i: ["Heartsteel", "Force of Nature", "Unending Despair"], w: "Front-line build for teams that need one." }
  ],
  cb: { vayne: "She kites him and her true damage beats his durability.", teemo: "Blinding Dart cancels his Q and poke keeps him from regen.", quinn: "She kites him and vaults away.", kayle: "Late she outranges him." }
},
{
  n: "Gnar", r: "top", c: "spec", bt: "adb", d: "ad", rg: 400,
  s: [3, 4, 4, 4, 5, 2, 3, 3, 4, 3, 3], f: "dash skill",
  th: "Mega Gnar's R (GNAR!) throws enemies into walls for a stun. Mini Gnar kites with Boomerang (Q).",
  pw: "His rage bar decides when he transforms. Fight him when Mini Gnar is low on rage.",
  st: ["Ranged top laner who kites melee", "Mega Gnar R wins teamfights", "Tanky in Mega form"],
  wk: ["Rage is hard to manage", "Mini Gnar is squishy", "Can transform at bad times"],
  go: ["Mega Gnar R into a wall", "Kite melee champions with Q"],
  no: ["Don't fight melee in Mega at low HP", "Don't waste transforms"],
  sit: [["Ahead", "Zone objectives with Mega."], ["Behind", "Farm and kite."], ["Into ranged", "Use Mega form for fights."]],
  b: { ru: "Grasp of the Undying · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Trinity Force", "Sterak's Gage", "Dead Man's Plate"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Force of Nature", "Spirit Visage", "Randuin's Omen"] },
  ob: [
    { n: "Lethality Gnar", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Mini Gnar burst from range." },
    { n: "Tank Gnar", i: ["Heartsteel", "Sunfire Aegis", "Jak'Sho the Protean"], w: "Tanky Mega Gnar who front-lines and throws carries into walls." }
  ],
  cb: { jayce: "Cannon poke outranges Mini Gnar.", kennen: "He kites Gnar and his stun beats Mega's engage.", fiora: "Riposte parries Mega Gnar's stun.", irelia: "Bladesurge dashes past Mini Gnar's kiting." }
}
);
