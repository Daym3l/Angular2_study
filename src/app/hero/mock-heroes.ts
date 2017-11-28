import {Hero} from "./Hero";

export const HEROES: Hero[] = [
  {
    id: 1,
    name: 'death knight',
    roles: 'Tank, Melee Physical/Magic Damage Dealer',
    img:"../../assets/img/26px-ClassIcon_deathknight.png",
    desc: "The death knight combines martial prowess with dark, necromantic energies. Blood DKs are able tanks using disease DoTs, and AoE attacks to keep the attention of their enemies. Frost and Unholy death knights are melee dps classes, using unholy power to destroy their foes. Although death knights can raise undead minions, the Unholy specialization gives this feature particular focus, becoming a true pet class. Death Knights use a unique two-part resource system called the Rune system in which primary abilities are powered by Runes which periodically regenerate; using these abilities generates Runic Power which in turn can be used to power other abilities.\n" +
    "Death Knights are the first hero class and consequently start at level 55 in Ebon Hold in the Eastern Plaguelands. In order to create a Death Knight, a player needed to have at least one level 55 or higher character associated with his or her account, even if that character was on a different realm. However that requirement has been removed in Warlords of Draenor."
  },
  {
    id: 2,
    name: 'demon hunter',
    roles: 'Melee Physical Damage Dealer, Tank',
    img:"../../assets/img/26px-ClassIcon_demon_hunter.png",
    desc: "Roles: Melee Physical Damage Dealer, Tank\n" +
    "Demon hunters, disciples of Illidan Stormrage, uphold a dark legacy, one that frightens their allies and enemies alike. The Illidari embrace fel and chaotic magics—energies that have long threatened the world of Azeroth—believing them necessary to challenge the Burning Legion. Wielding the powers of demons they’ve slain, they develop demonic features that incite revulsion and dread in fellow elves.\n" +
    "Demon Hunters are the second hero class and starts at level 98 in Mardum, the Shattered Abyss. In order to create a Demon Hunter, a player must have at least one level 100 or higher character on the same realms as the Demon hunter is created on. Demon Hunter is limited one per realm."
  },
  {
    id: 3,
    name: 'druid',
    roles: 'Ranged Spell-Casting Damage Dealer, Melee Physical Damage Dealer, Tank, Healer',
    img:"../../assets/img/26px-ClassIcon_druid.png",
    desc: "Druids are the most versatile hybrid class, using the power of shape-shifting to take different forms and perform different roles within their party. Guardian Druids transform into  [Bear Form], becoming powerful tanks with high armor and use the Rage resource system similar to Warriors. Feral Druids transform into  [Cat Form], becoming powerful sources of melee damage and use the Energy resource system similar to Rogues. Balance Druids transform into  [Moonkin Form] to become strong offensive spellcasters relying on the powers of the sun and moon. Restoration Druids remain in humanoid form, channeling the renewing power of nature to the mend wounds of their allies. While each specialization focuses on a different form, all specializations are able to use Bear and Cat Form, and each gain the additional forms  [Travel Form],  [Aquatic Form] and  [Flight Form] as they level up. Druids also have the ability to resurrect slain allies in battle with  [Rebirth], restore mana of allies with  [Innervate], strengthen their allies with  [Mark of the Wild] and actually perform a different role in battle for a limited amount of time with  [Heart of the Wild]."
  },
  {
    id: 4,
    name: 'Hunter',
    roles: 'Ranged Spell-Casting Damage Dealer, Melee Physical Damage Dealer, Tank, Healer',
    img:"../../assets/img/26px-ClassIcon_hunter.png",
    desc: "Hunters use focus to deliver ranged weapon damage (bows, guns, and crossbows) as the primary source of damage. Hunters tame many varieties of beasts to serve as combat pets causing damage and giving raid buffs. Very adept at kiting, they have plenty of tools to allow them to avoid melee combat, which is a weakness. The Hunter's array of scouting, tracking, and survival abilities along with mail armor make them excellent solo characters. Hunter talent specializations are Marksmanship, Beast Mastery, and Survival."
  },
  {
    id: 5,
    name: 'Mage',
    roles: 'Ranged Spell-Casting Damage Dealer',
    img:"../../assets/img/26px-ClassIcon_mage.png",
    desc: "Mages are ranged magic damage dealers with very powerful direct and area effect damage spells. Mages feature a variety of utility spells, including crowd control ( [Polymorph]), raid buff of mana and spell power, teleportation and group portals to capital cities, and ability to conjure food and water. Because of spells with good burst damage and snare abilities, they are often effective at PvP even with their relatively low armor and health. Mage talent trees are Fire, Frost, and Arcane, each specializing in different spells and abilities."
  },
  {
    id: 6,
    name: 'Monk',
    roles: 'Melee Physical Damage Dealer, Tank, Healer',
    img:"../../assets/img/26px-ClassIcon_monk.png",
    desc: "The latest class to be added to World of Warcraft, monks have a unique combat system, combining energy or mana with the combo point-like chi, and a range of stances to define their current role. Students of ancient pandaren martial arts techniques, monks embody the skill, focus, meditativeness and deadly effectiveness of a skilled Kung Fu master, battering enemies with a flurry of punches or flying kicks, incapacitating enemies with an intimate knowledge of nerve centers and acupressure points, and using their inner calm and connection to the universe to heal and restore balance to their allies. A true hybrid class, monks can perform a melee DPS, tank or healing role, have a number of hybrid abilities that combine damage and healing, and also make use of stationary statues and a range of herbal brews to empower their abilities. Monks are a uniquely mobile class, and are capable of generate Health and Chi Spheres, special objects which must be passed into in order to gain their benefits. This creates a mobile battlefield, with monks quickly rolling and soaring across the arena to restore health before leaping back into the fray. Brewmaster monks are unusual tanks, employing drunken brawling tactics to stagger incoming damage; Mistweaver monks are healers with a sideline in damage-dealing, channeling healing mists and often working within melee range; while Windwalker monks are the classic martial artists, melee DPS who eschew weapons to pummel foes with fist and foot."
  },
  {
    id: 7,
    name: 'Paladin',
    roles: 'Melee Physical/Magic Damage Dealer, Tank, Healer',
    img:"../../assets/img/26px-ClassIcon_paladin.png",
    desc: "Paladins are plate-wearing holy knights. With the soul of a priest and the brawn of a warrior, paladins combine Holy magic with powerful weapons and stout armor. Like the knights of legend, paladins fight the good fight, smiting enemies with divine wrath and bringing allies back from the brink of death with the power of the Holy Light. A true hybrid class, paladins can fulfil any role, and can usually do a little of all three, thanks to their combination of damaging, healing and protective abilities. Paladins are especially well-known for their supreme survivability, with abilities like  [Hand of Protection],  [Divine Shield] and  [Lay on Hands] enabling them to render a player all but invulnerable, or instantly heal them back up to full health just when defeat seems inevitable. Paladins are also well-known for their range of buffs and support spells, and are arguably the strongest support class in the game. Paladins can grant a number of different hands and blessings to fit any occasion, and use a range seals to grant them specific benefits each time they attack. Paladins tend to combine self-heals with damage dealing, effortlessly maintaing their health bar while focusing on bringing their targets down. Paladins and execute their abilities through a combination of mana and Holy Power, a kind of combo point system which allows them to build to a powerful burst of healing or damage. Holy paladins are sturdy healers specializing in single-target healing and protection; Protection are indomitable tanks with strong AoE and multi-target abilities; while Retribution are punishing melee DPS, combining Holy magic attacks and warrior-like melee attacks to burst opponents down."
  },
  {
    id: 8,
    name: 'Priest',
    roles: 'Healer, Ranged Spell-Casting Damage Dealer',
    img:"../../assets/img/26px-ClassIcon_priest.png",
    desc: "Devout followers of the Holy Light, priests are a cloth-wearing caster class. Traditionally masters of healing, the priest's knowledge of the Light also grants them control of the darker powers of the Shadow. Discipline priests are powerful healers specializing in damage mitigation, using a range of powerful shields to magically protect their charges. Excelling at single-target healing, Discipline priests can keep a single target alive for a long time, and can also heal through dealing damage, using their attacks to take care of their allies' needs during quiet periods or gaps in their rotation. Holy priests are the archetypal pure healer, using an extensive combination of direct heals, heal over time (HoT) effects, and AoE and multi-target heals to respond to any situation. Holy priests exchange the Discipline priest's damage absorption effects for good old fashioned healing power, boasting sheer healing output which is hard to beat. Often compared to Affliction warlocks, Shadow priests focus on plague enemies with an assortment of sinister DoTs, while silencing and striking horror into the hearts of attackers. However, these masters of darkness can still provide a good amount of healing, adding to this class's versatility. Priests are also known for their great dispelling capabilities, especially Discipline and Holy. Whether calling upon the powers of the Holy Light, or spreading plague and death among the enemy, priests are cloth-wearing powerhouses who are underestimated at their opponent's peril."
  },
  {
    id: 9,
    name: 'Rogue',
    roles: 'Melee Physical Damage Dealer',
    img:"../../assets/img/26px-ClassIcon_rogue.png",
    desc: "Sinister masters of the night, rogues are a lightly-armored class which uses  [Stealth], poisons and sharp blades to dispatch enemies without a sound. Focusing exclusively on DPS, the rogue represents a counterpoint to the warrior's brash guts and glory approach to battle, preferring to strike from the shadows and  [Vanish] without a sound, their only code of honor the contract on their target's life. Valuing dexterity over muscle, rogues wear leather armor that leaves them free to move swiftly through the night, and usually wield light weapons in each hand. Assassination rogues use poisons and finishing moves to deal bursts of damage to their targets; Subtlety rogues are dark stalkers, leaping from the shadows to ambush foes before slipping back into the night; while Combat rogues are the exception, cunning swashbucklers who use agility and dirty tricks to stand toe-to-toe with enemies. Rogues rely on their rapidly-regenerating pool of energy to deal damage, granting combo points to build toward devastating finishing moves. Rogues are one of the most infamous classes in PvP, capable of incapacitating opponents for extended periods with a variety of poisons, bleeds, stuns and other disabling effects, while they slice and dice their helpless target. Rogues have excellent access to  [Stealth], able to sneak around undetected by enemies and pounce upon their prey with special opening attacks, and have a range of evasive abilities for escaping combat when the odds turn against them. Rogues can also pick pockets and pick locks. With the ability to incapacitate foes, high burst damage, many spell interrupts, and strong evasion abilities, rogues are formidable opponents."
  },
  {
    id: 10,
    name: 'shaman',
    roles: 'Ranged Spell-Casting Damage Dealer, Melee Physical/Magic Damage Dealer, Healer',
    img:"../../assets/img/26px-ClassIcon_shaman.png",
    desc: "Shamans are spiritual leaders, masters of the elements, using spells and totems to heal and enhance raid members. These powerful practitioners commune with the ancestors and seek to balance the raging elemental forces, and can call upon them in battle to scorch and blast their enemies, or to strengthen and heal their allies. Shamans can enhance their weapons with elemental effects, smite enemies with lightning strikes and bursts of lava, and summon powerful elementals to do their bidding. Shamans can also grant themselves and their allies powerful elemental boons, and call upon the ancestors to assist them, transforming into a  [Ghost Wolf] or using  [Reincarnation] to return from the dead. This versatile mail wearing class can fill the roles of caster, healer, and melee damage. Elemental shamans are powerful spellcasters, fulfilling a caster DPS role to blast and scorch enemies from afar; Enhancement shamans are melee damage dealers, smiting opponents with elementally-empowered weapons; while Restoration shamans are versatile healers well suited for any situation. Shamans provide excellent raid buffs through totems and abilities such as  [Bloodlust], wreak havoc in PvP with their burst damage, and can provide wipe recovery for the group through  [Reincarnation]."
  },
  {
    id: 11,
    name: 'warlock',
    roles: 'Ranged Spell-Casting Damage Dealer',
    img:"../../assets/img/26px-ClassIcon_warlock.png",
    desc: "Enslaving demons and calling upon dark magic and curses to dominate and destroy their foes, warlocks are a cloth-wearing DPS caster class, known for their wide range of debuffs and damage over time effects. Locks are primarily ranged magic damage dealers and can employ a range of fully-controllable demons to tank, incapacitate and devour enemies, including the seductive succubus, the hulking voidwalker, the fireball-hurling Imp and the horrific Felhunter. Warlocks can also summon temporary demons like the mighty Infernal and Doomguard for powerful bursts of damage, and at higher levels can choose the  [Grimoire of Supremacy] to make these demons permanent. Warlocks also have access to a range of debuffs and curses, as well as utility abilities such as Healthstones and Soulstones. Affliction warlocks are the masters of damage over time, draining their targets' health with an array of powerful debuffs and DoTs; Demonology warlocks summon improved demons to do their bidding, drawing power from their minions and even transforming into demons themselves; while Destruction warlocks sear and incinerate enemies, specializing in potent burst damage and Fire spells."
  },
  {
    id: 12,
    name: 'warrior',
    roles: 'Melee Physical Damage Dealer, Tank',
    img:"../../assets/img/26px-ClassIcon_warrior.png",
    desc: "Warriors are plate-clad close-combat fighters able to fill the role of tank or melee DPS. Warrior abilities use rage which is generated by dealing and taking damage, but decays over time while not in combat. Warriors can use stances to focus on a particular type of combat, and abilities like  [Charge] and  [Heroic Leap] to get up close with their opponents. Arms warriors are bursty damage-dealers, using mighty two-handed weapons to deal ponderous but devastating blows to their foes; Fury warriors are dual-wielding berserkers, dealing a rapid succession of wild attacks with each weapon; while Protection warriors are stout defenders, using sturdy shields both to soak up foes' attacks and to dish out damage of their own. DPS warriors have a lot of powerful damage-increasing cooldowns, and often focus around combining these to provide devastating bursts of damage, while snaring and running down their enemies. Warriors also have a natural immunity to fear effects and can use War Banners to inspire their allies or terrify their foes. Warriors love the thrill of close-combat and are usually found in the thick of battle, battling crowds of enemies in a  [Whirlwind] of steel."
  },
]
