/* Champion profiles: Teemo to Tristana. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Teemo", r: "top", c: "spec", bt: "apf", d: "ap", rg: 500,
  s: [4, 4, 4, 3, 2, 2, 3, 4, 1, 4, 3], f: "stealth antiaa aa",
  th: "Blinding Dart (Q) makes your autos miss. Noxious Traps (R) are invisible mushrooms that slow and poison.",
  pw: "He's squishy. If you close the gap after Blinding Dart is used, he dies fast.",
  st: ["Blind shuts down auto-attack champions", "Mushrooms control the map", "Ranged poke and move speed"],
  wk: ["Squishy", "Weak in teamfights", "Loses to spell-based champions"],
  go: ["Blind a melee auto-attacker and kite", "Place mushrooms in objective paths"],
  no: ["Don't let spell-based champions reach you", "Don't teamfight head-on"],
  sit: [["Ahead", "Split push and shroom the map."], ["Behind", "Shroom objectives and poke."], ["Into tanks", "Build Liandry's Torment."]],
  b: { ru: "Press the Attack · Sorcery", ss: "Flash · Ignite", st: "Doran's Ring", core: ["Nashor's Tooth", "Liandry's Torment", "Rabadon's Deathcap"], bo: "Sorcerer's Shoes", sit: ["Zhonya's Hourglass", "Void Staff", "Rylai's Crystal Scepter", "Banshee's Veil"] },
  ob: [
    { n: "AD on-hit Teemo", i: ["Blade of the Ruined King", "Wit's End", "Guinsoo's Rageblade"], w: "On-hit Teemo for magic-heavy teams." },
    { n: "Support Teemo", i: ["Zaz'Zak's Realmspike", "Liandry's Torment", "Rylai's Crystal Scepter"], w: "Blind and shroom support." }
  ],
  cb: { kennen: "Magic poke and a stun that Blinding Dart can't stop.", pantheon: "Shield Vault stun is point-and-click and his spear poke ignores the blind.", sion: "His spells don't care about the blind, and he out-stacks Teemo's poke.", jayce: "Cannon poke out-trades him without auto-attacking." }
},
{
  n: "Thresh", r: "sup", c: "catch", bt: "tank", d: "ap", rg: 450,
  s: [3, 4, 4, 3, 5, 2, 2, 1, 4, 2, 2], f: "engage peel skill",
  th: "Death Sentence (Q) hooks you, and The Box (R) slows everyone who walks through its walls. Flay (E) knocks you back or pulls you in.",
  pw: "If Death Sentence misses, he has only Flay for engage. His lantern is his team's escape.",
  st: ["Hook and Flay engage from long range", "Dark Passage (W) lantern pulls allies to safety", "The Box zones fights and slows everyone who walks out"],
  wk: ["Low damage", "Needs to land Death Sentence", "Punished for 20 seconds when the hook misses"],
  go: ["Hook the enemy carry into your team", "Lantern your jungler in for a dive"],
  no: ["Don't hook with no follow-up", "Don't waste Flay; it's your peel"],
  sit: [["Ahead", "Roam mid and set up hooks with your jungler."], ["Behind", "Peel with Flay and lantern your carry out."], ["Into dive", "Save Flay for the diver and Box around your carry."]],
  b: { ru: "Aftershock · Inspiration", ss: "Flash · Ignite", st: "World Atlas", core: ["Celestial Opposition", "Locket of the Iron Solari", "Knight's Vow"], bo: "Plated Steelcaps", sit: ["Zeke's Convergence", "Bandlepipes", "Redemption", "Mikael's Blessing"] },
  ob: [
    { n: "AP Thresh", i: ["Zaz'Zak's Realmspike", "Luden's Echo", "Shadowflame"], w: "Every hook turns into a big chunk of damage." },
    { n: "Buff Thresh", i: ["Bandlepipes", "Zeke's Convergence", "Knight's Vow"], w: "Attack-speed aura support for hyper-carries." }
  ],
  cb: { morgana: "Black Shield blocks his hook.", janna: "Howling Gale cancels his engage.", braum: "Unbreakable blocks his hook.", renata: "Bailout and Hostile Takeover punish his dive." }
},
{
  n: "Tristana", r: "bot mid", c: "mark", bt: "crit", d: "ad", rg: 550,
  s: [4, 4, 5, 4, 2, 2, 4, 4, 1, 3, 4], f: "dash crit aa",
  th: "Explosive Charge (E) bomb explodes on stacks, Rocket Jump (W) resets on takedowns, and Buster Shot (R) knocks you away.",
  pw: "Rocket Jump is her only escape. When it's down, she's immobile.",
  st: ["Attack range grows with every level", "Rocket Jump resets on takedowns and full bomb stacks", "Explosive Charge takes towers very fast"],
  wk: ["Short range early", "Needs resets to keep jumping", "Squishy when Rocket Jump is down"],
  go: ["Rocket Jump onto a target with full bomb stacks to reset it", "Place Explosive Charge on towers to take plates"],
  no: ["Don't jump in when you can't get a reset", "Don't take early all-ins against lane bullies"],
  sit: [["Ahead", "Push towers with bombs and snowball."], ["Behind", "Farm and scale; your range keeps growing."], ["Into dive", "Buster Shot divers away from you."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Kraken Slayer", "Infinity Edge", "Lord Dominik's Regards"], bo: "Berserker's Greaves", sit: ["Bloodthirster", "Guardian Angel", "Mercurial Scimitar", "Immortal Shieldbow"] },
  ob: [
    { n: "Lethality Tristana", i: ["The Collector", "Youmuu's Ghostblade", "Serylda's Grudge"], w: "Mid-lane burst Tristana." },
    { n: "AP Tristana", i: ["Luden's Echo", "Shadowflame", "Rabadon's Deathcap"], w: "Magic-damage burst." }
  ],
  cb: { draven: "He out-damages her early, before her range grows.", caitlyn: "She out-ranges Tristana early and pushes her under tower.", samira: "Blade Whirl blocks her bomb and she wins the all-in.", jhin: "His fourth shot out-trades her while her range is short." }
}
);
