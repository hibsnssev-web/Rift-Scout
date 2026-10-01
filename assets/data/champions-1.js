/* Champion profiles: Aatrox to Briar. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Aatrox", r: "top", c: "jugg", bt: "adb", d: "ad", rg: 175,
  s: [4, 4, 3, 3, 3, 5, 3, 4, 3, 2, 3], f: "heal dash skill",
  th: "Q's outer edge (sweet spot) knocks up and hits hardest. With R active he heals far more and gains move speed.",
  pw: "Q has a long cooldown early. Once all three casts are spent, walk in and trade before it comes back.",
  st: ["Wins extended trades with passive healing and omnivamp", "Q sweet spots zone enemies and knock up whole teams", "R lets him turn 1v2s once he has items"],
  wk: ["Grievous Wounds removes most of his sustain", "Every Q can be dodged; missed sweet spots lose him the trade", "Ranged champions and point-and-click CC kite him"],
  go: ["All-in at level 3+ when your first Q sweet spot lands and the enemy is under 70%", "Take a 1v2 with R up and full health if both enemies are melee"],
  no: ["Don't fight into Grievous Wounds without R", "Don't commit before your first Q sweet spot connects"],
  sit: [["Ahead", "Take the side lane and force 1v1s; Teleport into fights with R up."], ["Behind", "Group with your team and front-line around Q knock-ups instead of dueling."], ["Enemy buys anti-heal", "Swap to durability (Sterak's Gage, Death's Dance) and take short Q-only trades."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Maw of Malmortius", "Guardian Angel", "Spirit Visage", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Aatrox", i: ["Profane Hydra", "Serylda's Grudge", "Edge of Night"], w: "Into squishy, low-armor lanes. Q sweet spots hit much harder but you give up sustain." },
    { n: "Endless Hunger Aatrox", i: ["Endless Hunger", "Sundered Sky", "Sterak's Gage"], w: "Tenacity and omnivamp for long fights against CC-heavy teams." }
  ],
  cb: { fiora: "Riposte parries a Q knock-up and her true damage outduels him.", irelia: "She dashes out of Q sweet spots and wins extended trades.", poppy: "Steadfast Presence stops his E dashes between Q casts.", vayne: "She kites him and her true damage ignores his durability." }
},
{
  n: "Ahri", r: "mid", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 5, 3, 3, 4, 3, 2, 3, 4], f: "dash skill",
  th: "Charm (E) into the full combo. A landed Charm at level 6 is usually a kill.",
  pw: "Once R's three dashes are spent she has no escape. Charm is her only CC, so after it misses, all-in.",
  st: ["Three-dash ultimate makes her one of the safest mages", "Charm picks off anyone who walks into it", "Fast waveclear lets her roam first"],
  wk: ["Short range for a mage; melee champions can reach her", "Without Charm she loses most all-ins", "Low burst against tanks"],
  go: ["Roam as soon as the wave is shoved and R is up", "Flash-Charm a target who is out of position"],
  no: ["Don't burn R dashes to farm or chase if an enemy assassin is alive", "Don't walk into fog without Charm ready"],
  sit: [["Ahead", "Roam to side lanes after every shove and pick off whoever face-checks."], ["Behind", "Hold R for defense, farm with Q, and play for picks around vision."], ["Into assassins", "Keep R for escapes and buy Zhonya's Hourglass second."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Malignance", "Stormsurge", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Banshee's Veil", "Void Staff", "Shadowflame"] },
  ob: [
    { n: "Lethality burst Ahri", i: ["Luden's Echo", "Shadowflame", "Cosmic Drive"], w: "More poke and burst on a pick comp that plays around Charm." },
    { n: "Support Ahri", i: ["Zaz'Zak's Realmspike", "Malignance", "Zhonya's Hourglass"], w: "Charm picks from the support role alongside a lane-bully ADC." }
  ],
  cb: { kassadin: "Null Sphere absorbs her burst and his blink matches her dashes late.", fizz: "Playful/Trickster dodges Charm and he out-bursts her.", yasuo: "Wind Wall blocks Charm and Orb of Deception.", galio: "He tanks her burst and punishes her with Shield of Durand." }
},
{
  n: "Akali", r: "mid top", c: "assn", bt: "apa", d: "ap", rg: 125,
  s: [3, 5, 3, 5, 1, 3, 5, 3, 2, 2, 3], f: "dash stealth skill",
  th: "Twilight Shroud (W) makes her invisible, and R has a two-part execute. At 6 she can kill from 70%.",
  pw: "Her energy runs dry after a full combo. When Shroud is down she has no defensive tool; burst her then.",
  st: ["Shroud makes her untargetable to turrets and hard to hit", "R into R2 executes low targets from far away", "Huge mobility once she hits level 6"],
  wk: ["Very weak before level 6", "True-sight and point-and-click CC shut her down", "Loses to tanky front lines if she can't reach the carry"],
  go: ["Dive under tower at 6 when the target is below 60% and you have Shroud", "Flank through Shroud to reach the backline in fights"],
  no: ["Don't trade before level 3 against ranged lanes", "Don't Shroud near a Control Ward or Oracle Lens user"],
  sit: [["Ahead", "Roam to side lanes after 6 and look for picks with R."], ["Behind", "Farm to Hextech Rocketbelt or Gunblade and play for flanks, not front-to-back fights."], ["Into tanks", "Buy Riftmaker or Void Staff and focus on the squishiest target you can reach."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Ignite", st: "Doran's Shield", core: ["Hextech Gunblade", "Stormsurge", "Zhonya's Hourglass"], bo: "Sorcerer's Shoes", sit: ["Shadowflame", "Void Staff", "Banshee's Veil", "Rabadon's Deathcap"] },
  ob: [
    { n: "Electrocute burst Akali", i: ["Hextech Rocketbelt", "Lich Bane", "Shadowflame"], w: "Pure one-shot build for games where the enemy carries are squishy." },
    { n: "Top-lane Riftmaker Akali", i: ["Riftmaker", "Zhonya's Hourglass", "Rabadon's Deathcap"], w: "Extended-fight build that holds up against bruisers top." }
  ],
  cb: { galio: "His taunt and magic-damage shield ruin her all-in.", malzahar: "Nether Grasp suppresses her through Shroud and his spell shield blocks her poke.", pantheon: "He out-trades her pre-6 and his stun is point-and-click.", ksante: "He grabs her out of Shroud and outlasts her burst." }
},
{
  n: "Akshan", r: "mid top", c: "mark", bt: "crit", d: "ad", rg: 500,
  s: [4, 4, 3, 4, 1, 2, 4, 4, 2, 3, 3], f: "dash stealth aa",
  th: "His double-shot passive and E swing make short trades strong. Killing a scoundrel revives his allies.",
  pw: "E (Heroic Swing) is his only escape. Once it's down, he's a squishy ranged champion with no mobility.",
  st: ["Revives teammates when he kills the champion that killed them", "Strong short trades and roams with camouflage", "Ranged pressure in melee lanes"],
  wk: ["Short range for a marksman", "Low durability; point-and-click CC kills him", "Falls off if he doesn't snowball"],
  go: ["Swing into an extended fight when a teammate's killer is low: the revive can swing it", "Roam through camouflage when the wave is shoved"],
  no: ["Don't use E to engage if it's your only escape from an assassin", "Don't stand in a long fight against tanks"],
  sit: [["Ahead", "Roam and look for scoundrel kills to revive allies in skirmishes."], ["Behind", "Farm side lanes and buy Guardian Angel; wait for teamfights to clean up."], ["Into melee", "Short trades with passive double shot, then walk out of range."]],
  b: { ru: "Press the Attack · Domination", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Kraken Slayer", "Navori Flickerblade", "Infinity Edge"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Lord Dominik's Regards", "Bloodthirster", "Mercurial Scimitar"] },
  ob: [
    { n: "Lethality Akshan", i: ["Profane Hydra", "Youmuu's Ghostblade", "The Collector"], w: "Roam-heavy pick build for a fast snowball." },
    { n: "Stormrazor Akshan", i: ["Stormrazor", "Navori Flickerblade", "Infinity Edge"], w: "Movement-based burst for chasing down squishies." }
  ],
  cb: { galio: "He tanks the damage and taunts Akshan out of his swing.", malzahar: "Suppression and his minions shut down short trades.", fizz: "He jumps on Akshan and dodges the double shot with E.", pantheon: "Point-and-click stun and a spear shield beat Akshan's short trades." }
},
{
  n: "Alistar", r: "sup", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [4, 4, 3, 2, 5, 3, 2, 1, 5, 1, 2], f: "dash engage peel point",
  th: "W-Q combo: Headbutt into Pulverize knocks the target into his team. R makes him nearly unkillable.",
  pw: "His combo costs lots of mana and has long cooldowns. After W-Q misses or is used, he can't engage for about 15 seconds.",
  st: ["W-Q combo is one of the most reliable engages in the game", "R Unbreakable Will cuts incoming damage massively", "Heals the whole bot lane"],
  wk: ["Mana-hungry early", "Disengage supports and range walk away from his combo", "Low damage; needs a follow-up"],
  go: ["Flash-W-Q when an enemy walks into a 2v2 with no escape", "Dive under tower with R up to tank the tower shots"],
  no: ["Don't engage without your ADC in range to follow", "Don't use Headbutt to farm or poke"],
  sit: [["Ahead", "Roam mid with your jungler and look for dives."], ["Behind", "Play peel: use W to knock divers off your carry."], ["Into poke", "Engage early before the poke adds up."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Top-lane Alistar", i: ["Sunfire Aegis", "Unending Despair", "Thornmail"], w: "Counter-pick into melee champions who can't escape his combo." },
    { n: "Jungle Alistar", i: ["Dead Man's Plate", "Jak'Sho the Protean", "Unending Despair"], w: "Gank-heavy jungle for a lane-strong team." }
  ],
  cb: { janna: "Her tornado and Monsoon cancel his engage.", renata: "Bailout and Hostile Takeover punish his dive.", morgana: "Black Shield blocks his combo and Dark Binding catches him first.", zyra: "Plants and poke burn him down before he gets in." }
},
{
  n: "Ambessa", r: "top", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [4, 5, 3, 4, 3, 3, 4, 4, 3, 2, 3], f: "dash skill",
  th: "Every ability grants a dash, and R (Public Execution) grabs and suppresses a target from range.",
  pw: "She's energy-limited in long fights and has no reliable escape after spending her dashes; the W block is her only defense.",
  st: ["Constant dashes make her hard to pin down", "R picks off a carry from a distance", "Strong mid-game skirmisher"],
  wk: ["Hard-countered by point-and-click CC and exhaust", "Falls off against scaling tanks", "Mechanically demanding; misplays are costly"],
  go: ["R onto the enemy carry when their key CC is down", "Chain dashes under tower at 6 against a squishy laner"],
  no: ["Don't burn every dash to engage; keep one to leave", "Don't fight long trades into Grievous Wounds"],
  sit: [["Ahead", "Split push and dive the backline with R when teams group."], ["Behind", "Buy Sterak's and Death's Dance and play front line."], ["Into ranged tops", "Use W to block poke and look for dash-in trades."]],
  b: { ru: "Conqueror · Resolve", ss: "Flash · Teleport", st: "Doran's Blade", core: ["Eclipse", "Sundered Sky", "Sterak's Gage"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Maw of Malmortius", "Guardian Angel", "Serylda's Grudge"] },
  ob: [
    { n: "Jungle Ambessa", i: ["Eclipse", "Endless Hunger", "Death's Dance"], w: "Fast clears and dashing ganks with R picks." },
    { n: "Lethality Ambessa", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "One-shot carry build into squishy comps." }
  ],
  cb: { poppy: "Steadfast Presence stops her dashes cold.", renekton: "He out-damages her early and his stun lands through her dashes.", malphite: "He tanks her physical damage and engages back.", jax: "Counter Strike dodges her burst and stuns her." }
},
{
  n: "Amumu", r: "jng sup", c: "vang", bt: "tank", d: "ap", rg: 125,
  s: [3, 4, 4, 3, 5, 2, 3, 3, 5, 1, 3], f: "dash engage skill pct",
  th: "Bandage Toss (Q) into Curse of the Sad Mummy (R) stuns an entire team.",
  pw: "Q is his only gap-closer. If both charges are spent, he can't reach anyone.",
  st: ["R is one of the best teamfight ultimates in the game", "Two Q charges for engage and follow-up", "Good magic-damage tank DPS with Despair"],
  wk: ["Slow early clear and weak duels", "Q is a skillshot; minions block it", "Mobile teams play around his R"],
  go: ["Flash-R into three or more grouped enemies", "Q a target who walked out of minion cover"],
  no: ["Don't invade 1v1 into early duelists", "Don't R one champion when the fight hasn't started"],
  sit: [["Ahead", "Group for dragons and force 5v5s around R."], ["Behind", "Farm, stack tank items and wait for teamfights. You still scale well."], ["Into mobile teams", "Hold R for when they dash in."]],
  b: { ru: "Aftershock · Inspiration", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Liandry's Torment", "Sunfire Aegis", "Jak'Sho the Protean"], bo: "Plated Steelcaps", sit: ["Unending Despair", "Force of Nature", "Kaenic Rookern", "Thornmail"] },
  ob: [
    { n: "Support Amumu", i: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], w: "Engage support into immobile bot lanes." },
    { n: "AP Amumu", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Damage build when your team has enough front line." }
  ],
  cb: { leesin: "He counter-jungles Amumu's slow clear.", nidalee: "Pounce outpaces his early game and she invades freely.", morgana: "Black Shield blocks Bandage Toss and Curse's stun.", olaf: "Ragnarok makes him CC-immune through Curse." }
},
{
  n: "Anivia", r: "mid sup", c: "battle", bt: "apd", d: "ap", rg: 600,
  s: [2, 4, 5, 1, 4, 2, 3, 4, 2, 3, 5], f: "skill revive",
  th: "Flash Frost (Q) stuns, Crystallize (W) walls you in, and Glacial Storm (R) shreds anyone stuck inside.",
  pw: "She's immobile. Before Tear stacks her mana runs out; once her egg is down (long cooldown), dive her.",
  st: ["Egg passive revives her once per long cooldown", "Wall cuts off escapes and splits teams", "R clears waves and controls huge areas"],
  wk: ["No mobility; very weak to divers and assassins", "Mana-hungry early", "Slow early game"],
  go: ["Wall an enemy into your team during a chase", "Fight in chokes where R and the wall cover everything"],
  no: ["Don't walk forward when your egg is on cooldown", "Don't fight a dive without Flash or Zhonya's"],
  sit: [["Ahead", "Siege towers with R and play around the wall."], ["Behind", "Farm with R and hold the wall to protect yourself."], ["Into assassins", "Rush Zhonya's Hourglass and stand behind your team."]],
  b: { ru: "Arcane Comet · Inspiration", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Archangel's Staff", "Liandry's Torment", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rylai's Crystal Scepter", "Banshee's Veil"] },
  ob: [
    { n: "Support Anivia", i: ["Zaz'Zak's Realmspike", "Rylai's Crystal Scepter", "Liandry's Torment"], w: "Wall and stun support that shuts down engage lanes." },
    { n: "Actualizer Anivia", i: ["Actualizer", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], w: "Heavy mana scaling for long sieges." }
  ],
  cb: { fizz: "He jumps over the wall and dives her early.", kassadin: "His blink skips her wall and he outscales her.", zed: "He shadow-swaps past the wall and bursts through her egg.", yasuo: "Wind Wall blocks Flash Frost and he dashes past her control." }
},
{
  n: "Annie", r: "mid sup", c: "burst", bt: "apb", d: "ap", rg: 625,
  s: [4, 4, 3, 1, 4, 1, 5, 2, 2, 2, 3], f: "point",
  th: "Pyromania stun at 4 stacks, then Tibbers. A stun + R is an instant kill threat at 6.",
  pw: "Watch her passive counter: at 3 stacks she can't stun until she casts again. She has no mobility, so any gap-closer punishes her.",
  st: ["Point-and-click burst with a stun", "Flash-Tibbers is one of the scariest engages at level 6", "Easy last-hitting with Q refund"],
  wk: ["Short range and no mobility", "Stun stacks are visible; opponents play around them", "Falls off late against tanks"],
  go: ["Flash-R with stun ready onto 2+ grouped enemies", "Hold stun for when an assassin dives you"],
  no: ["Don't walk forward without the stun ready", "Don't waste R on a single tank"],
  sit: [["Ahead", "Roam with stun up and play around Flash-R picks."], ["Behind", "Play defensively with stun and peel for your carries."], ["Into long range", "Get pushed to tower, farm with Q, and look to all-in at 6."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Support Annie", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Stun-engage support with lane burst." },
    { n: "Tank-buster Annie", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Void Staff"], w: "Burn and slow build against front-line-heavy teams." }
  ],
  cb: { xerath: "He out-ranges her and she can't reach him.", syndra: "She outranges Annie and bursts first.", kassadin: "He ignores her burst and blinks onto her.", fizz: "Playful/Trickster dodges her stun and Tibbers, then he dives her." }
},
{
  n: "Aphelios", r: "bot", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [2, 4, 5, 1, 3, 3, 3, 5, 1, 3, 4], f: "aa crit skill",
  th: "Weapon rotation: Crescendum (chakram) and Infernum (flamethrower) with R hit hardest; Gravitum roots.",
  pw: "He has no dash. Weak weapon combos early (Calibrum + Severum) leave him open to all-ins.",
  st: ["Massive teamfight damage late", "Five weapons give answers to many situations", "R can win fights by itself"],
  wk: ["No mobility at all", "Hard to play; weapon order dictates strength", "Weak early game"],
  go: ["R into grouped enemies with Infernum or Crescendum active", "Fight when you hold Crescendum + Gravitum against divers"],
  no: ["Don't fight with Calibrum/Severum against an all-in lane", "Don't face-check: you have no escape"],
  sit: [["Ahead", "Group mid and siege with Calibrum poke."], ["Behind", "Farm safely; your late game is still top-tier."], ["Into divers", "Keep Gravitum's root ready and stay behind your front line."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Yun Tal Wildarrows", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Bloodthirster", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Lethality Aphelios", i: ["The Collector", "Hexoptics C44", "Serylda's Grudge"], w: "Burst from range with Calibrum; good in poke comps." },
    { n: "Hexoptics Aphelios", i: ["Hexoptics C44", "Infinity Edge", "Lord Dominik's Regards"], w: "Rewards Calibrum's long range with bigger crits." }
  ],
  cb: { draven: "He wins the early lane and snowballs before Aphelios scales.", kalista: "Her early aggression punishes his weak starting weapons.", samira: "She dashes on him and Wind Wall blocks his R.", lucian: "He out-trades him early and dashes around his root." }
},
{
  n: "Ashe", r: "bot sup", c: "mark", bt: "crit", d: "ad", rg: 600,
  s: [3, 4, 4, 1, 4, 1, 2, 4, 1, 3, 3], f: "aa crit skill engage",
  th: "Enchanted Crystal Arrow (R) stuns from across the map, and every auto slows.",
  pw: "She has no dash. A good gap-closer or a missed R leaves her helpless.",
  st: ["Global R arrow starts fights", "Every auto slows, so she kites anyone", "Volley gives strong lane pressure"],
  wk: ["No mobility", "Low burst", "Divers and assassins walk through her slows"],
  go: ["Fire R at an out-of-position carry from long range", "Kite melee champions with slowing autos"],
  no: ["Don't fire R when your team can't follow up", "Don't stand in front of your support against engage"],
  sit: [["Ahead", "Scout with Hawkshot and start fights with R."], ["Behind", "Play utility: slows, vision, and R for picks."], ["Into divers", "Hold R to peel for yourself."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Kraken Slayer", "Blade of the Ruined King", "Guinsoo's Rageblade"], bo: "Berserker's Greaves", sit: ["Infinity Edge", "Lord Dominik's Regards", "Guardian Angel", "Mercurial Scimitar"] },
  ob: [
    { n: "Support Ashe", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Rylai's Crystal Scepter"], w: "Utility support with R engages and permanent slows." },
    { n: "Crit Ashe", i: ["Yun Tal Wildarrows", "Infinity Edge", "Hexoptics C44"], w: "Longer-range crit build for kiting comps." }
  ],
  cb: { draven: "He out-trades her early and she can't escape his all-in.", samira: "She dashes on Ashe and blocks the arrow with Wind Wall.", lucian: "His dashes dodge her slows and he wins short trades.", nilah: "She blocks autos with Jubilant Veil and dashes in." }
},
{
  n: "Aurelion Sol", r: "mid", c: "battle", bt: "apd", d: "ap", rg: 550,
  s: [2, 4, 5, 3, 3, 2, 3, 4, 2, 4, 5], f: "stack skill",
  th: "Breath of Light (Q) channels heavy damage, and his stacking R stars grow into a huge area knock-up.",
  pw: "He's immobile when not flying. Early he has low damage and can be all-inned before he stacks stardust.",
  st: ["Infinite scaling through stardust stacks", "Massive area damage late", "W flight lets him roam across the map"],
  wk: ["Very weak early", "Relies on stacking; losing lane cripples him", "Vulnerable to divers once W is used"],
  go: ["Fly across the map to join fights once Astral Flight is available", "R into grouped enemies late game"],
  no: ["Don't trade into strong early lanes before your first item", "Don't fly into fog without vision"],
  sit: [["Ahead", "Roam and stack; your damage grows every minute."], ["Behind", "Farm and collect stardust. You still scale."], ["Into assassins", "Buy Zhonya's Hourglass early and hold W to escape."]],
  b: { ru: "Arcane Comet · Inspiration", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Burst Aurelion Sol", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Front-loaded Q burst for pick-heavy teams." },
    { n: "Actualizer Aurelion Sol", i: ["Actualizer", "Liandry's Torment", "Rabadon's Deathcap"], w: "Mana-heavy scaling for long games." }
  ],
  cb: { fizz: "He jumps on Sol before stars matter.", katarina: "Her resets clean up his stars and she dives him.", zed: "He bursts Sol before stacks and dodges Q.", talon: "Talon out-roams and out-bursts him early." }
},
{
  n: "Aurora", r: "mid top", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [4, 4, 3, 5, 3, 3, 4, 3, 2, 3, 4], f: "dash skill untarg",
  th: "Between Two Worlds (R) traps enemies in a zone she can bounce around. Her E blasts back and slows.",
  pw: "Her W (Across the Veil) is her escape and invisibility. When it's down, she can be caught.",
  st: ["Very mobile; W makes her invisible and repositions", "R zone locks enemies in for her combo", "Strong lane pressure against melee"],
  wk: ["Squishy; hard CC ruins her", "Short-ish range for her burst", "Needs precise positioning inside her R"],
  go: ["R onto two or more enemies in a choke", "Use W to dodge key skillshots, then trade back"],
  no: ["Don't use W to engage when enemy assassins are alive", "Don't fight outside your R zone against divers"],
  sit: [["Ahead", "Roam and look for R picks in tight jungle paths."], ["Behind", "Farm and use W defensively."], ["Top lane", "Poke melee champions and kite them with E's slow."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Top-lane Liandry's Aurora", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Sustained magic damage into tanky top laners." },
    { n: "Support Aurora", i: ["Zaz'Zak's Realmspike", "Malignance", "Zhonya's Hourglass"], w: "Zone-control support with R traps." }
  ],
  cb: { galio: "He tanks her burst and taunts her in her own R.", malzahar: "Suppression lands through her mobility.", kassadin: "He blinks into her and absorbs her magic damage.", pantheon: "Point-and-click stun catches her before W." }
},
{
  n: "Azir", r: "mid", c: "spec", bt: "apd", d: "ap", rg: 525,
  s: [2, 4, 5, 3, 4, 2, 3, 5, 2, 4, 4], f: "dash skill",
  th: "Emperor's Divide (R) pushes his whole team's enemies away, and his Shuffle can drag a carry into his team.",
  pw: "Soldiers cost charges. When E (Shifting Sands) is down, he has no escape and is immobile.",
  st: ["Constant zone damage from long range", "Shuffle (E-Q-R) flips fights by throwing carries into his team", "Excellent siege and tower shoving"],
  wk: ["Weak early game", "Very hard to play well", "Divers who get past the soldiers kill him"],
  go: ["Shuffle a carry who is standing near your tower or team", "Fight around objectives where soldiers cover the choke"],
  no: ["Don't use E to farm or poke when an assassin is nearby", "Don't Shuffle without Flash"],
  sit: [["Ahead", "Siege towers with soldiers and control objectives."], ["Behind", "Farm safely, you scale."], ["Into divers", "Keep R to wall them off."]],
  b: { ru: "Lethal Tempo · Sorcery", ss: "Flash · Teleport", st: "Doran's Ring", core: ["Nashor's Tooth", "Liandry's Torment", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Lich Bane"] },
  ob: [
    { n: "Dusk and Dawn Azir", i: ["Dusk and Dawn", "Nashor's Tooth", "Rabadon's Deathcap"], w: "On-hit soldier build with Spellblade bursts." },
    { n: "Burst Azir", i: ["Luden's Echo", "Shadowflame", "Void Staff"], w: "Short-trade burst for pick comps." }
  ],
  cb: { fizz: "He dives Azir through soldiers.", zed: "He shadows past soldiers and Azir can't Shuffle away in time.", akali: "Shroud dodges soldiers and she dives him.", syndra: "She out-bursts him early before soldiers stack damage." }
},
{
  n: "Bard", r: "sup", c: "catch", bt: "ench", d: "ap", rg: 500,
  s: [3, 4, 4, 3, 4, 2, 2, 2, 2, 3, 1], f: "skill peel global",
  th: "Cosmic Binding (Q) stuns you if it hits a wall or unit behind you. Tempered Fate (R) puts everything in stasis.",
  pw: "He roams a lot. When he leaves lane, his ADC is alone and can be dived.",
  st: ["Magical Journey portals create surprise roams", "R stasis sets up or saves fights", "Chimes let him scale all game"],
  wk: ["Bot lane is weak while he roams", "Q needs a wall or unit to stun", "Low peel for immobile ADCs"],
  go: ["Roam mid through a portal when your ADC is safe", "R the enemy team when your team is ready to follow"],
  no: ["Don't leave your ADC 1v2 against an all-in lane", "Don't R your own team's engage by mistake"],
  sit: [["Ahead", "Roam the map and set up picks."], ["Behind", "Stay with your carry and play peel."], ["Into poke", "Collect chimes to heal and roam."]],
  b: { ru: "Guardian · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Celestial Opposition", "Imperial Mandate", "Redemption"], bo: "Boots of Swiftness", sit: ["Locket of the Iron Solari", "Mikael's Blessing", "Knight's Vow", "Zeke's Convergence"] },
  ob: [
    { n: "AP Bard", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Damage roamer build for picks." },
    { n: "On-hit Bard", i: ["Dusk and Dawn", "Nashor's Tooth", "Rylai's Crystal Scepter"], w: "Meep damage on each auto." }
  ],
  cb: { leona: "Her all-in beats him in lane.", nautilus: "Hook engages punish his roaming.", pyke: "He hooks and executes Bard's lane partner.", rakan: "He out-engages Bard and dodges Q." }
},
{
  n: "Bel'Veth", r: "jng", c: "skirm", bt: "onhit", d: "ad", rg: 150,
  s: [3, 4, 5, 4, 2, 4, 3, 5, 2, 1, 4], f: "dash aa stack true",
  th: "Her attack speed stacks without cap, and her R true form turns her into a raid boss that wins long fights.",
  pw: "Dashes (Q) have per-direction cooldowns. Once the direction she needs is on cooldown, she can't escape.",
  st: ["Infinite attack-speed scaling from champion takedowns", "Void Coral from epic monsters gives a powerful R form", "Huge dueling power"],
  wk: ["Low burst and weak early ganks", "Hard CC stops her dashes", "Squishy before true form"],
  go: ["Invade after winning a duel; she snowballs with takedowns", "Fight in the jungle where her dashes work"],
  no: ["Don't fight into heavy CC teams without Mercury's Treads", "Don't gank lanes with no setup"],
  sit: [["Ahead", "Take void monsters and force skirmishes."], ["Behind", "Farm and stack; she scales."], ["Into CC", "Buy Mercury's Treads and wait for key CC before diving."]],
  b: { ru: "Lethal Tempo · Domination", ss: "Smite · Flash", st: "Gustwalker Hatchling", core: ["Kraken Slayer", "Blade of the Ruined King", "Sterak's Gage"], bo: "Berserker's Greaves", sit: ["Death's Dance", "Guardian Angel", "Wit's End", "Mercurial Scimitar"] },
  ob: [
    { n: "Bruiser Bel'Veth", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Tankier dive build for team comps." },
    { n: "Endless Hunger Bel'Veth", i: ["Endless Hunger", "Blade of the Ruined King", "Kraken Slayer"], w: "Tenacity and omnivamp against heavy CC." }
  ],
  cb: { rammus: "He taunts her and punishes her on-hit autos.", poppy: "She stops Bel'Veth's dashes and stuns her.", jax: "Counter Strike dodges her autos.", lillia: "She kites Bel'Veth and puts her to sleep." }
},
{
  n: "Blitzcrank", r: "sup", c: "catch", bt: "tank", d: "ap", rg: 125,
  s: [4, 4, 3, 2, 5, 2, 3, 1, 4, 1, 1], f: "engage skill",
  th: "Rocket Grab (Q) pulls you into his team. Power Fist knocks up, and R silences.",
  pw: "Q has a long cooldown. When it misses, walk up and trade for about 20 seconds.",
  st: ["One hook can win the lane", "Knock-up and silence give strong follow-up", "Pressures picks across the map"],
  wk: ["Useless when Q misses", "Minions block hooks", "Weak against disengage"],
  go: ["Hook the enemy ADC when they step out from minions", "Grab someone into your team late game"],
  no: ["Don't throw hooks without follow-up damage", "Don't stand in front when hook is on cooldown"],
  sit: [["Ahead", "Roam with hooks and catch mid."], ["Behind", "Zone with the threat of Q; stay out of range until they misposition."], ["Into poke", "Engage early before the poke adds up."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Mercury's Treads", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "AP Blitzcrank", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Hook and burst for a kill-lane." },
    { n: "Mid Blitzcrank", i: ["Sunfire Aegis", "Hollow Radiance", "Jak'Sho the Protean"], w: "Surprise pick mid to hook the carry." }
  ],
  cb: { morgana: "Black Shield blocks the hook.", janna: "She disengages and knocks back.", thresh: "His lantern saves the hooked ally.", taric: "Taric's stun and invulnerability undo hook plays." }
},
{
  n: "Brand", r: "sup mid jng", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [4, 4, 3, 1, 3, 1, 4, 5, 2, 4, 5], f: "skill pct",
  th: "Blaze stacks set you on fire and explode for % max health. Pyroclasm (R) bounces between grouped enemies.",
  pw: "He's immobile. Dodge Sear (Q) and his stun is gone; dive him when E is on cooldown.",
  st: ["Massive area damage", "Max-health burn shreds tanks", "Strong poke in lane"],
  wk: ["No mobility", "Needs to land skillshots", "Squishy against divers"],
  go: ["R into grouped enemies late game", "Poke with W (Pillar of Flame) until they're low, then commit"],
  no: ["Don't walk forward when your Q is on cooldown", "Don't fight a diver without Flash"],
  sit: [["Ahead", "Roam and look for grouped fights."], ["Behind", "Poke from range and play around R teamfights."], ["Into divers", "Buy Zhonya's Hourglass early."]],
  b: { ru: "Dark Harvest · Sorcery", ss: "Flash · Ignite", st: "World Atlas", core: ["Liandry's Torment", "Rylai's Crystal Scepter", "Blackfire Torch"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Morellonomicon", "Rabadon's Deathcap"] },
  ob: [
    { n: "Jungle Brand", i: ["Liandry's Torment", "Blackfire Torch", "Rylai's Crystal Scepter"], w: "Fast AoE clear into strong teamfights." },
    { n: "Mid Burst Brand", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Burst build for quick picks." }
  ],
  cb: { sivir: "Spell Shield blocks Blaze stacks and she outscales him.", nautilus: "Point-and-click R dives him.", leona: "She engages under his poke.", morgana: "Black Shield blocks his stun." }
},
{
  n: "Braum", r: "sup", c: "ward", bt: "tank", d: "ad", rg: 125,
  s: [4, 4, 3, 2, 5, 2, 2, 1, 5, 2, 1], f: "antiaa peel engage",
  th: "Concussive Blows stack to a stun, and his shield (E) blocks projectiles.",
  pw: "His shield is directional. When it's down, fight him head-on.",
  st: ["Unbreakable (E) blocks projectiles for his team", "Passive stun punishes melee ADCs", "Strong peel and engage"],
  wk: ["Short range and low damage", "Poke outranges him", "Falls behind if the lane goes badly"],
  go: ["Hop to your ADC with W and E to block the enemy's burst", "Chain passive stun with your ADC's autos"],
  no: ["Don't shield the wrong way", "Don't face-check brushes without vision"],
  sit: [["Ahead", "Roam and engage with R."], ["Behind", "Peel and block projectiles for your carry."], ["Into poke", "Block with E and trade back."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Thornmail", "Redemption"] },
  ob: [
    { n: "Tank Braum", i: ["Heartsteel", "Unending Despair", "Jak'Sho the Protean"], w: "Durable front line for ranged teams." },
    { n: "Buff Braum", i: ["Bandlepipes", "Zeke's Convergence", "Knight's Vow"], w: "Attack-speed aura support for hyper-carries." }
  ],
  cb: { zyra: "Her plants chip him through his shield.", xerath: "He pokes Braum from out of range.", velkoz: "His beams chip him from range.", brand: "Blaze burns through the shield and ignores his directional block." }
},
{
  n: "Briar", r: "jng", c: "diver", bt: "adb", d: "ad", rg: 125,
  s: [4, 4, 3, 4, 3, 5, 4, 4, 2, 1, 4], f: "heal dash",
  th: "Blood Frenzy (W) makes her attack nonstop at high speed, and Certain Death (R) dives the whole map.",
  pw: "While frenzied she can't control herself. Any hard CC or a well-timed tank engage wins the fight.",
  st: ["Huge healing and attack speed during frenzy", "Global-range R for dives", "Strong early clears"],
  wk: ["Frenzy can drag her into bad fights", "Hard CC stops her completely", "Grievous Wounds removes her sustain"],
  go: ["R onto an isolated carry when their CC is down", "Frenzy onto a low target under tower"],
  no: ["Don't frenzy into a tank with CC ready", "Don't R without vision of the enemy team"],
  sit: [["Ahead", "Invade and pick off isolated targets."], ["Behind", "Play with your team and use R to join fights."], ["Into CC", "Buy tenacity and wait for CC to be used."]],
  b: { ru: "Conqueror · Domination", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Eclipse", "Sterak's Gage", "Death's Dance"], bo: "Plated Steelcaps", sit: ["Maw of Malmortius", "Guardian Angel", "Spirit Visage", "Serylda's Grudge"] },
  ob: [
    { n: "Lethality Briar", i: ["Profane Hydra", "Voltaic Cyclosword", "Edge of Night"], w: "Burst one-shot build into squishy comps." },
    { n: "Endless Hunger Briar", i: ["Endless Hunger", "Sterak's Gage", "Spirit Visage"], w: "Tenacity for frenzy fights into CC." }
  ],
  cb: { rammus: "Taunt punishes her frenzied autos.", poppy: "Steadfast Presence stops her dives.", jax: "Counter Strike dodges frenzy attacks.", warwick: "He out-sustains her and suppresses her." }
}
);
