
// Global Variables-----------------------------------------------------------------------------
let player1 = null;
let player2 = null;
let p1Text = null;
let p2Text = null;
let compare = document.getElementById('compare');
let topReset = document.getElementById('resetTopBtn');
let bottomReset = document.getElementById('resetBottomBtn');
let compareDiv = document.getElementById('compareDiv');

// Overwatch Character Data --------------------------------------------------------------

(function charCtrl() {

    const ShowCharInfo = function(name, role, abilities, ultimate, difficulty, image, image2, icons, ablText, ultIcon, ultText ) {
        this.name = name;
        this.role = role;
        this.abilities = abilities;
        this.ultimate = ultimate;
        this.difficulty = difficulty;
        this.image = image;
        this.image2 = image2;
        this.icons = icons;
        this.ablText = ablText; 
        this.ultIcon = ultIcon;
        this.ultText = ultText;
    };

    const ana = new ShowCharInfo(
    'Ana', 'Role: Support',
    ['Biotic Rifle', 'Sleep Dart', 'Biotic Grenade'],
    'Nano Boost', 3, 'images/ana.png','images/ana-Icon.png',
    ['images/bioticRifle.svg', 'images/sleepdart.svg', 'images/bioticgrenade.svg'],
    ['Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.',
    'Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).',
    'Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.',
    ],
    'images/nanoboost.svg',
    "After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks."
    );

    const ashe = new ShowCharInfo('Ashe', 'Damage', 
    ['The Viper', 'Dynamite', 'Coach Gun'],
     'B.O.B', 2, 'images/ashe.png', "images/ashe-icon.png",
     ['images/theviper.svg', 'images/dynamite.svg', 'images/coachgun.svg'],
     ['Ashes semi-automatic rifle fires quick shots, or she can use her aim-down sights for a more damaging, precise shot.',
    'Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.',
    'Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.',
    ],
     'images/bob.svg',
    "Ashe summons her trusted omnic sidekick, Bob, who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons."
     );

    const baptiste = new ShowCharInfo('Baptiste', 'Support',
    ['Biotic Launcher', 'Regenerative Burst', 'Immortality Field', 'Passive: Exo Boots'],
    'Amplification Matrix', 3, 'images/baptiste.png', 'images/baptiste-icon.png',
    ['images/bioticlauncher.svg', 'images/regenerativeburst.svg', 'images/immortalityfield.svg', 'images/exoboots.svg'],
    ['Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output. It also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.',
    'Baptiste activates an intense regenerative burst that heals himself and nearby allies over time.',
    'Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.',
    'By first crouching, Baptiste can jump higher.'],
    'images/amplificationmatrix.svg',
    "Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it."
    );

    const bastion = new ShowCharInfo('Bastion', 'Damage',
     ['Configuration: Recon', 'Configuration: Sentry', 'Reconfigure', 'Self-Repair'],
      'Configuration: Tank', 1, 'images/bastion.png','images/bastion-icon.png',
      ['images/recon.svg', 'images/sentry.svg', 'images/reconfigure.svg', 'images/selfrepair.svg'],
    ['In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.',
    'In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The guns aim can be "walked" across multiple targets, dealing devastating damage at short to medium range.',
    'Bastion transforms between its two primary combat modes to adapt to battlefield conditions.',
    'Bastion restores its health; it cannot fire weapons while the repair process is in effect.'],
    'images/tank.svg',
    "In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time."
      );

    const brigitte = new ShowCharInfo('Brigitte', 'Support',
     ['Rocket Flai', 'Repair Pack', 'Whip Shot', 'Barrier Shield', 'Shield Bash'],
      'Rally', 1, 'images/brigitte.png', 'images/brigitte-icon.png',
      ['images/rocketflail.svg', 'images/repairpack.svg', 'images/whipshot.svg', 'images/barriersheild.svg', 'images/shieldbash.svg'],
    ['Brigittes melee weapon has an extended range, enabling her to strike multiple enemies with a single swing.',
    'Brigitte throws a Repair Pack that can heal an ally. Any healing over that ally’s maximum health provides them with armor instead.',
    'Brigitte throws her flail a long distance, dealing damage and knocking an enemy away from her.',
    'Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.',
    'Once her Barrier Shield is deployed, Brigitte can dash forward to stun an enemy.'],
    'images/rally.svg',
    "Brigitte moves faster and provides all nearby allies with armor that lasts until it’s removed by damage."
      );

    const dva = new ShowCharInfo('D.VA', 'Tank', ['Fusion Cannons', 'Light Gun', 'Boosters', 'Defense Matrix', 'Micro Missles', 'Call Mech'],
    'Self-Destruct', 2, 'images/dva.png', 'images/dva-icon.png',
    ['images/fusioncannons.svg', 'images/lightgun.svg', 'images/boosters.svg', 'images/defensematrix.svg', 'images/micromissles.svg', 'images/callmech.svg'],
    ['D.Vas mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.',
    'While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.',
    'D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.',
    'D.Va can maintain this forward-facing targeting array for a short period of time; while active, it will stop incoming projectiles.',
    'D.Va launches a volley of explosive rockets.',
    'If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.'],
    'images/selfdestruct.svg',
    "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents."
    );

    const doomfist = new ShowCharInfo('Doomfist', 'Damage',
     ['Hand Cannon', 'Seismic Slam', 'Rising Uppercut', 'Rocket Punch'],
      'Meteor Strike', 3, 'images/doomfist.png' , 'images/doomfist-icon.png',
      ['images/handcannon.svg', 'images/seismicslam.svg', 'images/risinguppercut.svg', 'images/rocketpunch.svg'],
    ['Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.',
    'Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.',
    'Doomfist uppercuts enemies in front of him into the air.',
    'After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.'],
    'images/meteorstrike.svg',
    "Doomfist leaps into the sky, then crashes to the ground, dealing significant damage."
    );

    const genji = new ShowCharInfo('Genji', 'Damage', ['Shuriken', 'Deflect', 'Swift Strike'],
     'Dragonblade', 3, 'images/genji.png', 'images/genji-icon.png',
     ['images/shuriken.svg', 'images/deflect.svg', 'images/swiftstrike.svg'],
    ['Genji looses three deadly throwing stars in quick succession. Alternatively, he can throw three shuriken in a wider spread.',
    'With lightning-quick swipes of his sword, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.',
    'Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.'],
    'images/dragonblade.svg',
    "Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach."
     );

    const hanzo = new ShowCharInfo('Hanzo', 'Damage', ['Storm Bow', 'Sonic Arrow', 'Storm Arrows', 'Lunge'],
     'Dragonstrike', 3, 'images/hanzo.png', 'images/hanzo-icon.png',
     ['images/stormbow.svg', 'images/sonicarrow.svg', 'images/stormarrows.svg', 'images/lunge.svg'],
    ['Hanzo nocks and fires an arrow at his target.',
    'Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.',
    'Hanzo’s next several arrows fire instantly, but at reduced damage.',
    'Hanzo can double jump, allowing him to change direction mid-jump.'],
    'images/dragonstrike.svg',
    "Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters."
     );

    const junkrat = new ShowCharInfo('Junkrat', 'Damage',
     ['Frag Launcher', 'Concussion Mine', 'Steel Trap', 'Total Mayhem'],
      'Rip-Tire', 2, 'images/junkrat.png', 'images/junkrat-icon.png',
      ['images/fraglauncher.svg', 'images/concussionmine.svg', 'images/steeltrap.svg', 'images/totalmayhem.svg'],
      ['Junkrats Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.',
      'After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air..',
      'Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.',
      'Junkrats deranged sense of humor persists past his death. If killed, he drops several live grenades.'],
      'images/riptire.svg',
      "Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own." 
      
      );

    const lucio = new ShowCharInfo('lucio', 'Support', ['Sonic Amplifier', 'Crossfade', 'Amp it Up'],
     'Sound Barrier', 2, 'images/lucio.png', 'images/lucio-icon.png',
     ['images/sonicamplifier.svg', 'images/crossfade.svg', 'images/ampitup.svg'],
     ['Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.',
     'Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.',
     'Lúcio increases the volume on his speakers, boosting the effects of his songs.'],
     'images/soundbarrier.svg',
     "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields."
     );

    const mccree = new ShowCharInfo('Mccree', 'Damage', ['Peace Keeper', 'Combat Roll', 'Flash Bang'],
     'Dead Eye', 2, 'images/mccree.png', 'images/mccree-icon.png',
     ['images/peacekeeper.svg', 'images/combatroll.svg', 'images/flashbang.svg'],
     ['McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.',
     'McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.',
     'McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.'],
     'images/deadeye.svg',
     "Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot."
     );

    const mei = new ShowCharInfo('Mei', 'Damage', ['Endothermic Blaster', 'Cryo-Freeze', 'Ice Wall'],
     'Blizzard', 3, 'images/mei.png', 'images/mei-icon.png',
     ['images/endothermicblaster.svg', 'images/cryofreeze.svg', 'images/icewall.svg'],
     ['Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.',
     'Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.',
     'Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.'],
     'images/blizzard.svg',
     "Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid."
     );


    const mercy = new ShowCharInfo('Mercy', 'Support', ['Caduceus Staff', 'Caduceus Blaster', 'Guardian Angel', 'Resurrect', 'Angelic Descent'],
     'Valkyrie', 1, 'images/mercy.png', 'images/mercy-icon.png',
     ['images/caduceusstaff.svg', 'images/caduceusblaster.svg', 'images/gaurdianangel.svg', 'images/resurrect.svg', 'images/angelicdescent.svg'],
     ['Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.',
     'Mercy shoots a round from her sidearm.',
     'Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.',
    'Mercy brings a dead ally back into the fight with full health.',
    'Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.'],
     'images/valkyrie.svg',
     "Gain the ability to fly. Mercy’s abilities are enhanced."
     );

    const moira = new ShowCharInfo('Moira', 'Support', ['Biotic Grasp', 'Biotic Orb', 'Fade'],
     'Coalescence', 2, 'images/moira.png', 'images/moira-icon.png',
     ['images/bioticgrasp.svg', 'images/bioticorb.svg', 'images/fade.svg'],
     ['Using her left hand, Moira expends biotic energy to heal allies in front of her. Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.',
     'Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.',
     'Moira quickly teleports a short distance.'],
     'images/coalescence.svg',
     "Moira channels a long-range beam that both heals allies and bypasses barriers to damage her enemies."
     );

    const orisa = new ShowCharInfo('Orisa', 'Tank', ['Fusion Driver', 'Fortify', 'Halt!', 'Protective Barrier'],
     'Super Charger', 2, 'images/orisa.png', 'images/orisa-icon.png',
     ['images/fusiondriver.svg', 'images/fortify.svg', 'images/halt.svg', 'images/protectivebarrier.svg'],
     ['Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.',
     'Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects.',
     'Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.',
    'Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.'],
     'images/supercharger.svg',
     "Orisa deploys a device to increase damage inflicted by allies within her line of sight.."
     );

    const pharah = new ShowCharInfo('Pharah', 'Damage', ['Rocket Launcher', 'Jump Jet', 'Concussive Blast'],
     'Barrage', 1, 'images/pharah.png', 'images/pharah-icon.png',
     ['images/rocketlauncher.svg', 'images/jumpjet.svg', 'images/concussiveblast.svg'],
     ['Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.',
     'Propelled by her suit’s thrusters, Pharah soars high into the air.',
    'Pharah looses a wrist rocket that knocks back any enemies it strikes.'],
     'images/barrage.svg',
     "Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies."
     );

    const reaper = new ShowCharInfo('Reaper', 'Damage', ['Hellfire Shotguns', 'Wraith Form', 'Shadow Step'],
     'Death Blossom', 1, 'images/reaperPortrait.png', 'images/reaper-icon.png',
     ['images/hellfireshotguns.svg', 'images/wraithform.svg', 'images/shadowstep.svg'],
     ['Reaper tears enemies apart with twin shotguns.',
     'Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.',
    'After marking a destination, Reaper disappears and reappears at that location.'],
     'images/deathblossom.svg',
     "In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies."
     );

    const reinhardt = new ShowCharInfo('Reinhardt', 'Tank', ['Rocket Hammer', 'Barrier Field', 'Charge', 'Fire Strike'],
     'Earth Shatter', 1, 'images/reinhardt.png', 'images/reinhardt-icon.png',
     ['images/rockethammer.svg', 'images/barrierfield.svg', 'images/charge.svg', 'images/firestrike.svg'],
     ['Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.',
     'Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.',
    'Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.',
    'By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.'],
     'images/earthshatter.svg',
     "Reinhardt forcefully slams his Rocket Hammer into the ground, knocking down and damaging all enemies in front of him."
     );

    const roadhog = new ShowCharInfo('Roadhog', 'Tank', ['Scrap Gun', 'Take a Breather', 'Chain Hook'],
     'Whole Hog', 1, 'images/roadhog.png', 'images/roadhog-icon.png',
     ['images/scrapgun.svg', 'images/takeabreather.svg', 'images/chainhook.svg'],
     ['Roadhogs Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.',
     'Roadhog restores a chunk of his health over a brief period of time.',
    'Roadhog hurls his chain at a target; if it catches, he yanks them into close range.'],
     'images/wholehog.svg',
     "After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies."
     );

    const soldier76 = new ShowCharInfo('Soldier: 76', 'Damage', ['Heavy Pulse Rifle', 'Helix Rockets', 'Sprint', 'Biotic Field'],
     'Tactical Visor', 1, 'images/soilder76.png', 'images/soilder76-icon.png',
     ['images/heavypulserifle.svg', 'images/helixrockets.svg', 'images/sprint.svg', 'images/bioticfield76.svg'],
     ['Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.',
     'Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.',
    'Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.',
    'Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.'],
     'images/tacticalvisor.svg',
     "Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target."
     );


    const sombra = new ShowCharInfo('Sombra', 'Damage', ['Machine Pistol', 'Hack', 'Stealth', 'Translocator'],
     'Emp', 3, 'images/sombra.png', 'images/sombra-icon.png',
     ['images/machinepistol.svg', 'images/hack.svg', 'images/stealth.svg', 'images/translocator.svg'],
     ['Sombra’s fully-automatic machine pistol fires in a short-range spread.',
     'Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.',
    'Sombra becomes invisible, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage. Sombra cannot capture objectives while invisible.',
    'Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).'],
     'images/emp.svg',
     "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
     );

    const symmetra = new ShowCharInfo('Symmetra', 'Damage', ['Photon Projector', 'Sentry Turret', 'Teleporter'],
     'Photon Barrier', 2, 'images/symmetra.png', 'images/symmetra-icon.png',
     ['images/photonprojector.svg', 'images/sentryturret.svg', 'images/teleporter.svg'],
     ['Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected. The projector can also release an explosive energy ball that deals high damage on contact.',
     'Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Up to three turrets can be built on the battlefield at once.',
    'Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location. Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.'],
     'images/photonbarrier.svg',
     "Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map."
     );

    const torbjorn = new ShowCharInfo('Torbjorn', 'Damage', ['Rivet Gun', 'Forge Hammer', 'Deploy Turret', 'Overload'],
     'Molten Core', 2, 'images/torbjorn.png', 'images/torbjorn-icon.png',
     ['images/rivetgun.svg', 'images/forgehammer.svg', 'images/deployturret.svg', 'images/overload.svg'],
     ['Torbjörn fires rivets at long range or ejects molten metal from his gun in a short, close-range burst.',
     'This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.',
    'Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.',
    'Torbjörn gains additional armor as well as improved attack, movement, and reload speed for a brief period.'],
     'images/moltencore.svg',
     "Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations."
     );

    const tracer = new ShowCharInfo('Tracer', 'Damage', ['Pulse Pistols', 'Blink', 'Recall'],
     'Pulse Bomb', 2, 'images/tracer.png', 'images/tracer-icon.png',
     ['images/pulsepistols.svg', 'images/blink.svg', 'images/recall.svg'],
     ['Tracer rapid-fires both of her pistols.',
     'Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.',
    'Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.'],
     'images/pulsebomb.svg',
     "Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius."
     );

    const widowmaker = new ShowCharInfo('WidowMaker', 'Damage', ['Widow\'s Kiss', 'Grappling Hook', 'Venom Mine'],
     'Infra-Sight', 2, 'images/widowmaker.png', 'images/widowmaker-icon.png',
     ['images/widowskiss.svg', 'images/grapplinghook.svg', 'images/venommine.svg'],
     ['Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets. Should targets close to medium range, the rifle can also be fired in fully-automatic mode..',
     'Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.',
    'Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.'],
     'images/infrasight.svg',
     "Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies."
     );

    const winston = new ShowCharInfo('Winston', 'Tank', ['Tesla Cannon', 'Jump Pack', 'Barrier Projector'],
     'Primal Rage', 2, 'images/winston.png', 'images/winston-icon.png',
     ['images/teslacannon.svg', 'images/jumppack.svg', 'images/barrierprojectorwinston.svg'],
     ['Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.',
     'Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.',
    'Winston’s barrier projector extends a bubble-shaped field that absorbs damage until its destroyed. Allies protected by the barrier can return fire from within it.'],
     'images/primalrage.svg',
     "Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks."
     );

    const wreckingball = new ShowCharInfo('Wrecking Ball', 'Tank', ['Quad Cannons', 'Roll', 'Grappling Claw', 'Adaptive Shield', 'Piledriver'],
     'Minefield', 3, 'images/wreckingball.png', 'images/wreckingball-icon.png',
     ['images/quadcannons.svg', 'images/roll.svg', 'images/grapplingclaw.svg', 'images/adaptiveshield.svg', 'images/piledriver.svg'],
     ['Wrecking Ball’s automatic assault cannons tear apart threats at medium range.',
     'Wrecking Ball transforms into a ball, increasing his maximum movement speed.',
    'Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. If he strikes an enemy with a powered-up swing, they’re damaged and knocked back.',
    'Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby.',
    'Wrecking Ball slams onto the ground below, damaging enemies and launching them upward.'],
     'images/minefield.svg',
     "Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies."
     );

    const zarya = new ShowCharInfo('Zarya', 'Tank', ['Particle Cannon', 'Particle Barrier', 'Projected Barrier'],
     'Graviton Surge', 3, 'images/zarya.png', 'images/zarya-icon.png',
     ['images/particlecannon.svg', 'images/particlebarrier.svg', 'images/projectedbarrierzarya.svg'],
     ['Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy. Alternatively, Zarya can lob an explosive charge to strike multiple opponents.',
     'The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.',
    'Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.'],
     'images/gravitonsurge.svg',
     "Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped."
     );

    const zenyatta = new ShowCharInfo('Zenyatta', 'Support', ['Orb of Destruction', 'Orb of Harmony', 'Orb of Discord'],
     'Transcendence', 3, 'images/zenyatta.png', 'images/zenyatta-icon.png',
     ['images/orbofdestruction.svg', 'images/orbofharmony.svg', 'images/orbofdiscord.svg'],
     ['Zenyatta projects his destructive energy orbs either individually, or in a rapid-fire volley after a few seconds spent gathering power.',
     'Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orbs benefit at a time.',
    'Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orbs effects at a time.'],
     'images/transcendence.svg',
     "Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies." 
     );
    
    return charArr = [ana, ashe, baptiste, bastion, brigitte, dva, doomfist, genji, hanzo, junkrat,
    lucio, mccree, mei, mercy, moira, orisa, pharah, reaper, reinhardt, roadhog,
    soldier76, sombra, symmetra, torbjorn, tracer, widowmaker, winston, wreckingball,
    zarya, zenyatta];
    
})();

//UI Controller ---------------------------------------------------------------------------------\

(function displayDefault() {
  
    p1Text = document.createElement("h3");
    p1Text.innerHTML = "Hero 1";
    p1Text.setAttribute("class", 'playerText');
    document.getElementById('p1').appendChild(p1Text);
const defaultImage1 = document.createElement('img');
    defaultImage1.setAttribute("src", 'images/logo2-resized.png');
    defaultImage1.setAttribute("class", 'selectedPlayers');
    defaultImage1.setAttribute("id", 'logo');
    document.getElementById('p1').appendChild(defaultImage1);

    p2Text = document.createElement("h3");
    p2Text.innerHTML = "Hero 2";
    p2Text.setAttribute("class", 'playerText');
    document.getElementById('p2').appendChild(p2Text);
const defaultImage2 = document.createElement('img');
    defaultImage2.setAttribute("src", 'images/logo2-resized.png');
    defaultImage2.setAttribute("class", 'selectedPlayers');
    defaultImage2.setAttribute("id", 'logo2');
    document.getElementById('p2').appendChild(defaultImage2);

    compare.style.display = 'none';
    topReset.style.display = 'none';
    bottomReset.style.display = 'none';
    compareDiv.style.display = 'none';
    

    // hide character compare display div - later

    document.getElementById("resetBottomBtn").addEventListener('click', function() { 
        resetBtn("bottom");
    });
    document.getElementById("resetTopBtn").addEventListener('click', function() { 
        resetBtn("top");
    });

})();

(function displayThumbNail() {
 
        for(i = 0; i < charArr.length; i++) {
        var figure = document.createElement("figure");
        figure.setAttribute("class", "characterFigure");
        figure.setAttribute("id", "figureId");
        var elem = document.createElement("img");
        var text = document.createElement('figcaption');
        text.innerHTML = charArr[i].name;
        elem.setAttribute("src", charArr[i].image2);
        elem.setAttribute("alt", charArr[i].name);
        elem.setAttribute('class', 'character_Selections');
        elem.setAttribute('id', i);
        // elem.addEventListener('mouseover', function() {
        // mouseOvr(this.id); // this is the img
        // });
        // elem.addEventListener('mouseout', function() {
        // mouseOt(defaultImage1.src);
        // })
        elem.addEventListener('click', function() {
        charClick(this);
        // compareChar(this); per click this is triggering and putting multiple images in the modal
        });

        // document.getElementById('charSelect').appendChild(elem);
        //document.getElementById('charSelect').appendChild(span).appendChild(elem).appendChild(text);

        document.getElementById('charSelect').appendChild(figure).appendChild(elem);
        document.getElementsByClassName('characterFigure')[i].appendChild(text);
       // document.getElementById('charSelect').appendChild(text);
        
    }
})();

    // function mouseOvr(id) {     
    //     document.getElementsByClassName('selectedPlayers')[0].src = charArr[id].image;    
    // }

    // function mouseOt(id) {
        
    //     document.getElementsByClassName('selectedPlayers')[0].src = 'images/logo2.png';
    // }

    function charClick(activeChar) {
        var x = activeChar.id;
        if (player1 === null) {
            document.getElementsByClassName('selectedPlayers')[0].src = charArr[x].image;
            player1 = activeChar;
            p1Text.innerHTML = charArr[x].name;
            activeChar.classList.add('active');
        } else if (player2 === null && activeChar !== player1) {
            document.getElementsByClassName('selectedPlayers')[1].src = charArr[x].image;
            activeChar.classList.add('active');
            player1.classList.replace('active', 'disabled');
            player2 = activeChar;
            p2Text.innerHTML = charArr[x].name;
            //on click of player 2 i need to remove active class from
            // player 1 and add it to player 2
            compare.style.display = 'block';
            topReset.style.display = 'block';
            bottomReset.style.display = 'block';
        } else if( player2 === activeChar){
            player1.classList.replace('active', 'disabled');
            activeChar.classList.add('disabled');
        }
    }

    //button for compaing characters
    document.getElementById('compare').addEventListener('click', function() {
        createComparisonCharBtn();
    });



    function createComparisonCharBtn() {
        var y = player1.id;
        var z = player2.id;
        //player icon, name, type, row
        //player 1 stats
        var p1Logo = document.createElement('img');
            p1Logo.setAttribute('src', charArr[y].image2)
        var p1Name = document.createElement('h3');
            p1Name.innerHTML = charArr[y].name;
        var p1Role = document.createElement('h4');
            p1Role.innerHTML = charArr[y].role;
        // player 2 stats
        var p2Logo = document.createElement('img');
            p2Logo.setAttribute('src', charArr[z].image2)
        var p2Name = document.createElement('h3');
            p2Name.innerHTML = charArr[z].name;
        var p2Role = document.createElement('h4');
            p2Role.innerHTML = charArr[z].role;
        //player 1 stats
            document.getElementById('player1-icon').appendChild(p1Logo);
            document.getElementById('player1-name').appendChild(p1Name);
            document.getElementById('player1-name').appendChild(p1Role);
        // player 2 stats
            document.getElementById('player2-icon').appendChild(p2Logo);
            document.getElementById('player2-name').appendChild(p2Name);
            document.getElementById('player2-name').appendChild(p2Role);
        // player abilities
        //player 1 stats
        for(i = 0; i < charArr[y].abilities.length; i++) {
        //var ability = document.createElement('h3');
        var icon = document.createElement('img');
            icon.setAttribute('src', charArr[y].icons[i]);
        var ablName = document.createElement('h5');
            ablName.innerHTML = charArr[y].abilities[i];
        var ablTxt = document.createElement('p');
            ablTxt.innerHTML = charArr[y].ablText[i];
        
            

            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-2')[0].appendChild(icon);
            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-4')[0].appendChild(ablName);
            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-4')[0].appendChild(ablTxt);
            
            //ability.innerHTML = charArr[y].abilities[i];
            //document.getElementById('player1-abilitiyContainer').appendChild(ability);
        };
        var ultIcon = document.createElement('img');
            ultIcon.setAttribute('src', charArr[y].ultIcon);
        var ultTxt = document.createElement('p');
            ultTxt.innerHTML = charArr[y].ultText;
        var ultName = document.createElement('h5');
            ultName.innerHTML = charArr[y].ultimate;
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-2')[0].appendChild(ultIcon);
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-4')[0].appendChild(ultName);
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-4')[0].appendChild(ultTxt);


        // player 2 stats
        for(i = 0; i < charArr[z].abilities.length; i++) {
            var icon = document.createElement('img');
            icon.setAttribute('src', charArr[z].icons[i]);
        var ablName = document.createElement('h5');
            ablName.innerHTML = charArr[z].abilities[i];
        var ablTxt = document.createElement('p');
            ablTxt.innerHTML = charArr[z].ablText[i];
            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-2')[1].appendChild(icon);
            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-4')[1].appendChild(ablName);
            document.getElementsByClassName('abilities')[i].getElementsByClassName('col-sm-4')[1].appendChild(ablTxt);
        };
        //player ult
        var ultIcon = document.createElement('img');
            ultIcon.setAttribute('src', charArr[z].ultIcon);
        var ultTxt = document.createElement('p');
            ultTxt.innerHTML = charArr[z].ultText;
        var ultName = document.createElement('h5');
            ultName.innerHTML = charArr[z].ultimate;
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-2')[1].appendChild(ultIcon);
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-4')[1].appendChild(ultName);
            document.getElementsByClassName('ultimate')[0].getElementsByClassName('col-sm-4')[1].appendChild(ultTxt);
       
        // show compare div here
        compareDiv.style.display = 'block';

        //scrolling down to div here
        var elmnt = document.getElementById("player1-name");
        elmnt.scrollIntoView();       
    };


//-------------------------------------------------------------------------------------------------




//Global App controller ---------------------------------------------------------------------------
// Initialize application function
// Reset starting data without refreshing

     function resetBtn(buttonType) {
        document.getElementsByClassName('playerText')[0].innerHTML = "Hero 1";
        document.getElementsByClassName('playerText')[1].innerHTML = "Hero 2";
        document.getElementById('logo').src = 'images/logo2-resized.png';
        document.getElementById('logo2').src = 'images/logo2-resized.png';
        player1.classList.remove("disabled");
        player2.classList.remove("active");
        player1 = null;
        player2 = null;
        compare.style.display = 'none';
        topReset.style.display = 'none';
        bottomReset.style.display = 'none';
        compareDiv.style.display = 'none';
        // clear compare section
        // player 1 stats
        document.getElementById('player1-icon').innerHTML = '';
        document.getElementById("player1-name").innerHTML = '';
        var abilityRows = document.getElementsByClassName('abilities');
        for(i = 0; i < abilityRows.length; i++) {
            abilityRows[i].getElementsByClassName('col-sm-2')[0].innerHTML = '';
            abilityRows[i].getElementsByClassName('col-sm-4')[0].innerHTML = '';
            abilityRows[i].getElementsByClassName('col-sm-2')[1].innerHTML = '';
            abilityRows[i].getElementsByClassName('col-sm-4')[1].innerHTML = '';
        }
        document.getElementById('player1-ultIcon').innerHTML = '';
        document.getElementById('player1-ultName').innerHTML = '';
        document.getElementById('player2-ultIcon').innerHTML = '';
        document.getElementById('player2-ultName').innerHTML = '';
        //document.getElementById('player1-ultContainer').innerHTML = '';
        // player 2 stats
        document.getElementById('player2-icon').innerHTML = '';
        document.getElementById("player2-name").innerHTML = '';
        //document.getElementById('player2-ultContainer').innerHTML = '';

        // scolling up to player select
        if(buttonType === 'bottom') {
            var elmnt = document.getElementById('p1');
            elmnt.scrollIntoView();
        }
    };

















