/* Champion profiles: Twitch to Urgot. Schema documented in assets/engine.js. */
window.RS_DATA = window.RS_DATA || [];
window.RS_DATA.push(
{
  n: "Twitch", r: "bot jng", c: "mark", bt: "onhit", d: "ad", rg: 550,
  s: [2, 4, 5, 3, 1, 2, 4, 5, 1, 2, 4], f: "stealth aa true",
  th: "Ambush (Q) makes him invisible, and Spray and Pray (R) pierces through your whole team from long range. Contaminate (E) bursts his poison stacks.",
  pw: "He's the squishiest marksman in the game. Once he's revealed and caught, he dies instantly.",
  st: ["Stealth lets him flank from unexpected angles", "Piercing R shreds a whole team lined up", "Poison stacks deal true damage over time"],
  wk: ["Extremely squishy", "Weak early lane", "Oracle Lens and Control Wards reveal his flanks"],
  go: ["Stealth to a flank and R down a line of enemies", "Take a level 3 gank from stealth as a jungler"],
  no: ["Don't fight from the front", "Don't Ambush into areas you know are swept"],
  sit: [["Ahead", "Flank fights from stealth and pick off carries."], ["Behind", "Farm safely and wait for your two-item spike."], ["Into dive", "Stand back and let the dive land before you appear."]],
  b: { ru: "Lethal Tempo · Inspiration", ss: "Flash · Heal", st: "Doran's Blade", core: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"], bo: "Berserker's Greaves", sit: ["Wit's End", "Guardian Angel", "Lord Dominik's Regards", "Mercurial Scimitar"] },
  ob: [
    { n: "AP Twitch", i: ["Nashor's Tooth", "Rabadon's Deathcap", "Shadowflame"], w: "Poison and Contaminate scale with AP for a surprise magic-damage carry." },
    { n: "Crit Twitch", i: ["Infinity Edge", "Runaan's Hurricane", "Lord Dominik's Regards"], w: "Late-game crit that hits several targets through R." }
  ],
  cb: { draven: "He wins the lane before Twitch scales.", caitlyn: "She out-ranges Twitch and traps his stealth landings.", kalista: "Her early aggression punishes his weak lane.", lucian: "His dashes and short trades beat Twitch early." }
},
{
  n: "Udyr", r: "jng top", c: "jugg", bt: "adb", d: "mix", rg: 125,
  s: [4, 4, 3, 4, 3, 4, 3, 4, 4, 1, 5], f: "shield heal",
  th: "Blazing Stampede (E) stuns on his first hit and gives huge move speed. Wilding Claw (Q) and Wingborne Storm (R) awakened stances deal big damage.",
  pw: "His stun needs him to reach you. Slow him or block him and he can't engage.",
  st: ["Strongest early duelist among tank junglers", "Fast clears and move speed", "Flexible AD or AP builds"],
  wk: ["Weak to kiting", "No gap-closer besides move speed", "Low range"],
  go: ["Stun and duel early junglers", "Run down squishies with E"],
  no: ["Don't chase kiting champions", "Don't fight long-range comps"],
  sit: [["Ahead", "Invade and duel."], ["Behind", "Tank and front-line."], ["Into kiting", "Build tank items and move speed."]],
  b: { ru: "Conqueror · Resolve", ss: "Smite · Flash", st: "Mosstomper Seedling", core: ["Trinity Force", "Sterak's Gage", "Dead Man's Plate"], bo: "Plated Steelcaps", sit: ["Death's Dance", "Spirit Visage", "Force of Nature", "Randuin's Omen"] },
  ob: [
    { n: "AP Udyr", i: ["Liandry's Torment", "Riftmaker", "Zhonya's Hourglass"], w: "Awakened Wingborne Storm (R) burst for teams that lack magic damage." },
    { n: "Tank Udyr", i: ["Sunfire Aegis", "Jak'Sho the Protean", "Unending Despair"], w: "Front-line stun engage that runs down backlines." }
  ],
  cb: { lillia: "Her move speed keeps her away from his stun and she sleeps him.", kindred: "She kites him and out-scales him.", graves: "He kites Udyr and out-damages him with shotgun bursts.", nidalee: "She pokes him from range and jumps away before he arrives." }
}
);
