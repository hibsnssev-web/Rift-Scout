/* Patch summaries for the Patches page, newest first.
   Written by hand from Riot's patch notes, in this site's own words: only what changes on
   Summoner's Rift, without Riot's commentary, other game modes, skins or bug fixes.
     v      patch number as Riot writes it
     date   the day Riot published the notes (year-month-day)
     url    Riot's full patch notes
     img    Riot's "Patch Highlights" picture, shown from Riot's own server
     sum    the patch in two or three sentences
     champs who: champion name as on this site; kind: "buff", "nerf" or "adj", the group Riot's
            Patch Highlights picture puts the champion in
     items  who: item name as in the shop; kind by the numbers ("adj" when some go up and some down)
     more   other changes worth knowing, one line each */
window.RS_PATCHES = [
{
  v: "26.20", date: "2026-10-06",
  url: "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/",
  img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/5fc73f2f8167c4d67ecea021cfa10a825ecacbd4-1920x1080.png",
  sum: "The Worlds patch. Riot tones down the champions the pros lean on and helps a few that had fallen behind. Sixteen champions and three items change, all by numbers only: no champion works differently after this patch, and no item was added or removed.",
  champs: [
    { who: "Ambessa", kind: "nerf", what: "Drakehound's Step (passive) deals less damage: 5 to 25 (+20% bonus AD), down from 5 to 30 (+25%)." },
    { who: "Ashe", kind: "nerf", what: "Gains 3 attack damage per level instead of 3.5." },
    { who: "Cassiopeia", kind: "nerf", what: "Base health 630 → 610 and base mana 480 → 450." },
    { who: "Diana", kind: "buff", what: "Pale Cascade (W) shield scales with 14% of her bonus health, up from 11%." },
    { who: "Kennen", kind: "buff", what: "Lightning Rush (E) gives 10% more attack speed at every rank, now 50% to 90%." },
    { who: "Kindred", kind: "buff", what: "Wolf's Frenzy (W) hits monsters harder and Mounting Dread (E) slows for 1.5 seconds instead of 1. In return E can no longer be cast on small monsters." },
    { who: "K'Sante", kind: "nerf", what: "Path Maker (W) costs 5 more mana and blocks 5% less damage." },
    { who: "Lillia", kind: "buff", what: "Lilting Lullaby (R) sleep now grows with rank: 2.5 / 2.75 / 3 seconds." },
    { who: "Lucian", kind: "buff", what: "Gains 2.9 attack damage per level instead of 2.5." },
    { who: "Mordekaiser", kind: "buff", what: "Realm of Death (R) cooldown 140 / 120 / 100 → 120 / 110 / 100 seconds, and Obliterate (Q) scales harder from level 10." },
    { who: "Neeko", kind: "buff", what: "Tangle-Barbs (E) deals 10 more damage at every rank, and its empowered root lasts a little longer at early ranks." },
    { who: "Smolder", kind: "buff", what: "His stacks add more bonus damage when he builds crit, and MMOOOMMMM! (R) heals him for more: 100 / 175 / 250, was 100 / 135 / 170." },
    { who: "Swain", kind: "buff", what: "+3 magic resist and −2 armor. Vision of Empire (W) deals more damage at later ranks and comes back 2 seconds sooner." },
    { who: "Tahm Kench", kind: "buff", what: "Tongue Lash (Q) heals more at higher ranks: up to 50, was 25." },
    { who: "Vayne", kind: "buff", what: "More health regeneration in the early levels, and Tumble (Q) costs a flat 30 mana at every rank." },
    { who: "Yunara", kind: "nerf", what: "Cultivation of Spirit (Q) deals 2 less on-hit damage, and the slow of Arc of Judgement (W) no longer stacks with other slows." }
  ],
  items: [
    { who: "Hextech Rocketbelt", kind: "adj", what: "Ability haste 20 → 10. The dash hits harder: 135 (+15% AP), was 100 (+10% AP)." },
    { who: "Experimental Hexplate", kind: "nerf", what: "Ranged champions get half of its bonus instead of 70%." },
    { who: "Runaan's Hurricane", kind: "nerf", what: "Bolts deal 60% of attack damage, down from 65%." }
  ],
  more: [
    "Replays: you can only download replays of matches you played in. Third-party apps and sites lose replay downloads, and Riot restricts how other programs may read the game's memory.",
    "Ranked 5s: the queue stays open two hours longer, until 4am server time.",
    "Classic mode: the old versions of Aatrox, Caitlyn, Irelia, Karma and Quinn return."
  ]
},
{
  v: "26.19", date: "2026-09-22",
  url: "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/",
  img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/0d087ea8b3f39aa77e78c2909e8094f7d3670b51-1920x1080.png",
  sum: "A wide round of buffs before Worlds, mostly for fighters, junglers and marksmen, with nerfs for Nasus, Nocturne and Poppy. Top laners get their free Teleport back sooner. The champion profiles on this site were written on this patch.",
  champs: [
    { who: "Aatrox", kind: "buff", what: "Infernal Chains (W) comes back sooner at early ranks (18 seconds at rank 1, was 20), and Umbral Dash (E) heals more with bonus health." },
    { who: "Aphelios", kind: "buff", what: "A small buff to all five weapons: more Calibrum and Crescendum damage, more Severum healing, a stronger lingering Gravitum slow and a 1 second shorter Infernum Duskwave cooldown." },
    { who: "Aurora", kind: "buff", what: "The Weirding (E) deals 10 more damage at every rank, and the rift of Between Worlds (R) lasts longer at ranks 1 and 2." },
    { who: "Draven", kind: "buff", what: "Base attack damage 62 → 64." },
    { who: "Elise", kind: "buff", what: "Spider Queen (passive) deals 2 more on-hit damage, and Skittering Frenzy (W) gives 10% more attack speed." },
    { who: "Fiora", kind: "buff", what: "More health per level (105, was 99). Grand Challenge (R) heals more and in a wider area." },
    { who: "Kha'Zix", kind: "buff", what: "Unseen Threat (passive) deals 5 more damage, evolved Void Spike (W) slows a little longer and evolved Leap (E) adds 300 range instead of 200." },
    { who: "Lillia", kind: "buff", what: "+2 armor, and Lilting Lullaby (R) sleeps for 2.5 seconds instead of 2." },
    { who: "Lucian", kind: "adj", what: "Vigilance (passive) empowered hits deal less, and Piercing Light (Q) deals more: 90 to 250, was 80 to 220." },
    { who: "Master Yi", kind: "buff", what: "Alpha Strike (Q) gets a flat 1 second back per attack. The refund no longer shrinks with ability haste." },
    { who: "Nasus", kind: "nerf", what: "Siphoning Strike (Q) bonus damage is 10 lower at every rank." },
    { who: "Nocturne", kind: "nerf", what: "Paranoia (R) cooldown 140 / 115 / 90 → 160 / 130 / 100 seconds." },
    { who: "Poppy", kind: "nerf", what: "Hammer Shock (Q) deals less to minions and monsters." },
    { who: "Rumble", kind: "nerf", what: "Overheated attacks are slower (30% to 100% attack speed, was 50% to 130%) but hit monsters harder." },
    { who: "Ryze", kind: "nerf", what: "More armor per level. Overload (Q) gets 10% less bonus damage from Flux, and Spell Flux (E) costs 5 more mana." },
    { who: "Vi", kind: "nerf", what: "Base attack damage 61 (+3.9 per level) instead of 63 (+3.5), and Blast Shield (passive) is 10% of her maximum health, down from 12%." },
    { who: "Volibear", kind: "buff", what: "The Relentless Storm (passive) gets more attack speed from AP, and its lightning now also scales with 20% bonus AD." }
  ],
  items: [
    { who: "World Atlas", kind: "adj", what: "World Atlas and Runic Compass give less health (0 and 60, was 30 and 100) and more health regeneration." }
  ],
  more: [
    "Teleport: the top lane quest's free Teleport comes back 30 seconds sooner, and so does its upgraded version.",
    "Team voice chat for the whole team, announced for North America and Oceania, was postponed."
  ]
}
];
