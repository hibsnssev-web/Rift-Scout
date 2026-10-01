/* Champion profiles: Neeko to Nilah. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Neeko", r: "mid sup", c: "burst", bt: "apb", d: "ap", rg: 550,
  s: [3, 4, 4, 2, 4, 2, 5, 3, 2, 3, 4], f: "skill engage",
  th: "Pop Blossom (R) leaps in with a shield and stuns everyone around her. Tangle-Barbs (E) roots longer if it passes through a unit first.",
  pw: "If Tangle-Barbs misses, she has no reliable CC. Her disguise tricks you, so check health bars before trading.",
  st: ["R can stun a whole team", "Disguise (passive) baits enemies into bad fights", "Strong burst with Blooming Burst (Q)"],
  wk: ["Squishy", "Needs to land E", "Committed after R"],
  go: ["Flash-R into grouped enemies", "Disguise as an ally to walk up unnoticed"],
  no: ["Don't R without Zhonya's when enemies have burst", "Don't throw E without follow-up"],
  sit: [["Ahead", "Roam and R grouped enemies."], ["Behind", "Farm and look for disguised flanks."], ["Into assassins", "Rush Zhonya's Hourglass."]],
  b: { ru: "Electrocute · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Liandry's Torment"] },
  ob: [
    { n: "Support Neeko", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Zhonya's Hourglass"], w: "Engage support with R and root." },
    { n: "Liandry's Neeko", i: ["Liandry's Torment", "Rylai's Crystal Scepter", "Zhonya's Hourglass"], w: "Burn build for tanky teams." }
  ],
  cb: { kassadin: "Null Sphere eats her burst and he blinks onto her.", fizz: "Trickster dodges her R.", yasuo: "Wind Wall blocks Tangle-Barbs.", galio: "Magic shield eats her burst." }
},
{
  n: "Nidalee", r: "jng", c: "spec", bt: "apa", d: "ap", rg: 525,
  s: [5, 4, 2, 4, 1, 3, 5, 3, 1, 4, 4], f: "dash skill heal",
  th: "Javelin Toss (Q) hits harder the farther it flies. Pounce (W) resets and jumps farther on hunted targets.",
  pw: "If the spear misses, she has little damage. She falls off hard late.",
  st: ["Fastest early clears and strong invades", "Spear poke from long range", "Heals her team with Primal Surge (E)"],
  wk: ["Falls off late", "Needs to land spear", "Squishy"],
  go: ["Invade early and take camps", "Pounce onto a hunted target"],
  no: ["Don't stall to late game", "Don't dive without the spear landing"],
  sit: [["Ahead", "Invade and snowball."], ["Behind", "Look for spear picks."], ["Into tanks", "Build Liandry's Torment."]],
  b: { ru: "Dark Harvest · Sorcery", ss: "Smite · Flash", st: "Scorchclaw Pup", core: ["Lich Bane", "Shadowflame", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Cosmic Drive"] },
  ob: [
    { n: "Tank Nidalee", i: ["Sunfire Aegis", "Riftmaker", "Jak'Sho the Protean"], w: "Durable front-line jungler." },
    { n: "Support Nidalee", i: ["Zaz'Zak's Realmspike", "Imperial Mandate", "Rylai's Crystal Scepter"], w: "Poke and heal support." }
  ],
  cb: { rammus: "He tanks her spear and taunts her.", poppy: "Steadfast Presence stops Pounce.", warwick: "His sustain and suppression win the early duels she needs.", rengar: "He leaps on her from brush and she has only Pounce to escape." }
},
{
  n: "Nilah", r: "bot", c: "skirm", bt: "crit", d: "ad", rg: 225,
  s: [3, 4, 5, 4, 2, 4, 3, 5, 2, 1, 4], f: "dash antiaa heal",
  th: "Jubilant Veil (W) dodges autos and cuts magic damage. Apotheosis (R) pulls everyone in and heals her team.",
  pw: "She's melee. If Jubilant Veil and Slipstream (E) are down, kite her.",
  st: ["Dodges autos with W", "R pulls a whole team", "Scales very well"],
  wk: ["Melee range bot lane", "Poke chips her", "CC stops her dive"],
  go: ["W into auto-attackers", "R into grouped enemies"],
  no: ["Don't engage without W", "Don't fight long-range poke early"],
  sit: [["Ahead", "Dive and snowball."], ["Behind", "Farm and scale."], ["Into poke", "Engage with E dashes."]],
  b: { ru: "Lethal Tempo · Resolve", ss: "Flash · Heal", st: "Doran's Blade", core: ["Kraken Slayer", "Infinity Edge", "Navori Flickerblade"], bo: "Berserker's Greaves", sit: ["Guardian Angel", "Bloodthirster", "Death's Dance", "Mercurial Scimitar"] },
  ob: [
    { n: "Bruiser Nilah", i: ["Trinity Force", "Sterak's Gage", "Death's Dance"], w: "Bruiser items to survive dives while you stack Joy." },
    { n: "Fiendhunter Nilah", i: ["Fiendhunter Bolts", "Infinity Edge", "Lord Dominik's Regards"], w: "Guaranteed crits after Apotheosis pulls the enemy in." }
  ],
  cb: { caitlyn: "She out-ranges Nilah and traps her dashes.", ziggs: "Poke and satchel knock her away.", varus: "Poke and root stop her dive.", draven: "He out-damages Nilah early." }
}
);
