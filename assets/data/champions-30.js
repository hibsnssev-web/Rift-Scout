/* Champion profiles: Taliyah to Taric. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Taliyah", r: "jng mid", c: "battle", bt: "apb", d: "ap", rg: 525,
  s: [4, 4, 4, 3, 4, 2, 4, 3, 2, 4, 5], f: "skill global",
  th: "Seismic Shove (W) knocks you up and throws you into Unraveled Earth (E). Weaver's Wall (R) cuts off whole teams and lets her surf across the map.",
  pw: "Seismic Shove has a long windup. Walk out of the marked area and she has little CC left.",
  st: ["Weaver's Wall splits teams and blocks escapes", "Knock-up into minefield combo", "Fast clears and cross-map roams with R"],
  wk: ["Squishy", "W is slow and easy to sidestep", "Divers who reach her kill her"],
  go: ["Wall off the enemy carry's escape route", "Shove a diver back into your team with W"],
  no: ["Don't fight without W ready", "Don't wall your own team out of a fight"],
  sit: [["Ahead", "Roam every lane with R and snowball."], ["Behind", "Farm fast and look for W-E picks with your team."], ["Into divers", "Buy Zhonya's Hourglass and throw divers away with W."]],
  b: { ru: "Arcane Comet · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Mid Taliyah", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Roaming mid laner who pushes and surfs to side lanes." },
    { n: "Liandry's Taliyah", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Burn build for tank-heavy teams." }
  ],
  cb: { fizz: "Trickster dodges her knock-up and he dives her.", zed: "Living Shadow reaches her over her own wall.", yasuo: "Wind Wall blocks Threaded Volley.", kassadin: "Null Sphere eats her burst and Riftwalk skips her wall." }
},
{
  n: "Talon", r: "mid jng", c: "assn", bt: "adA", d: "ad", rg: 125,
  s: [4, 5, 3, 5, 1, 2, 5, 3, 1, 2, 4], f: "dash stealth",
  th: "Shadow Assault (R) makes him invisible and returns his blades through you. Assassin's Path (E) jumps over any wall.",
  pw: "After R he's committed and has no escape besides walls. Stand near your team and punish him.",
  st: ["Fastest roams in the game over walls", "Huge burst with Noxian Diplomacy (Q) and R", "Invisible after R"],
  wk: ["Squishy", "Falls off against tanks", "Hard CC catches him"],
  go: ["Roam over walls every time the wave is pushed", "R a squishy carry who walks alone"],
  no: ["Don't fight tanks", "Don't dive into point-and-click CC"],
  sit: [["Ahead", "Roam and snowball side lanes."], ["Behind", "Look for picks on squishies from fog."], ["Into tanks", "Ignore the front line and wait for the carry."]],
  b: { ru: "Electrocute · Domination", ss: "Flash · Ignite", st: "Doran's Blade", core: ["Profane Hydra", "Youmuu's Ghostblade", "Opportunity"], bo: "Ionian Boots of Lucidity", sit: ["Serylda's Grudge", "Edge of Night", "Guardian Angel", "Maw of Malmortius"] },
  ob: [
    { n: "Jungle Talon", i: ["Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"], w: "Wall-hopping ganks from unwarded angles." },
    { n: "Bastionbreaker Talon", i: ["Bastionbreaker", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "True-damage burst on champions and towers." }
  ],
  cb: { malzahar: "His spell shield and suppression stop Talon's all-in.", lissandra: "Frozen Tomb stops him mid-combo.", vex: "Her passive fears Talon the moment he dashes.", pantheon: "He out-trades Talon early and blocks him with Aegis Assault." }
},
{
  n: "Taric", r: "sup", c: "ward", bt: "ench", d: "ap", rg: 150,
  s: [3, 4, 4, 2, 4, 4, 1, 1, 4, 1, 1], f: "heal shield untarg peel",
  th: "Cosmic Radiance (R) makes his team invulnerable after a short delay. Dazzle (E) stuns in a line, and Bastion (W) links him to an ally so both cast it.",
  pw: "Cosmic Radiance has a delay. Burst the target before it lands, or wait out the invulnerability before committing.",
  st: ["R makes his whole team invulnerable", "Double Dazzle through Bastion", "Heals and armor for his carry"],
  wk: ["Very low damage", "Short range", "Useless without a team to follow up"],
  go: ["Cast R the moment the enemy commits all their burst", "Stun a diver with Dazzle through Bastion"],
  no: ["Don't R too early; the enemy just waits it out", "Don't stand far from your carry"],
  sit: [["Ahead", "Roam with your jungler and make dives safe with R."], ["Behind", "Stay with your carry and stun divers."], ["Into poke", "Heal back chip damage and look for Dazzle engages."]],
  b: { ru: "Guardian · Resolve", ss: "Flash · Exhaust", st: "World Atlas", core: ["Celestial Opposition", "Redemption", "Locket of the Iron Solari"], bo: "Plated Steelcaps", sit: ["Knight's Vow", "Mikael's Blessing", "Zeke's Convergence", "Frozen Heart"] },
  ob: [
    { n: "Jungle Taric", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Knight's Vow"], w: "Gank with Bastion-Dazzle and make dives safe with R." },
    { n: "Mid Taric", i: ["Frozen Heart", "Sunfire Aegis", "Jak'Sho the Protean"], w: "Surprise pick to bond with the jungler and dive." }
  ],
  cb: { brand: "Blaze burn chips Taric's team from range.", zyra: "Plants zone him and he can't reach her.", xerath: "He pokes Taric's team from far outside Dazzle range.", velkoz: "His beams out-range Taric's whole kit." }
}
);
