import { Set } from '../models/sets'

export const data = [
  {
    name: 'Battle of Legends Volume 1',
    battlefields: [
      { name: 'Marmoreal', players: 4, set: 'Battle of Legends Volume 1' },
      { name: 'Sarpedon', players: 4, set: 'Battle of Legends Volume 1' },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Medusa', set: 'Battle of Legends Volume 1' },
      { name: 'King Arthur', set: 'Battle of Legends Volume 1' },
      { name: 'Alice', set: 'Battle of Legends Volume 1' },
      { name: 'Sinbad', set: 'Battle of Legends Volume 1' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Bruce Lee',
    battlefields: [],
    coopBattlefields: [],
    heroes: [{ name: 'Bruce Lee', set: 'Bruce Lee' }],
    villains: [],
    minions: []
  },
  {
    name: 'Robin Hood vs. Bigfoot',
    battlefields: [
      { name: 'Sherwood Forest', players: 2, set: 'Robin Hood vs. Bigfoot' },
      { name: 'Yukon', players: 2, set: 'Robin Hood vs. Bigfoot' },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Robin Hood', set: 'Robin Hood vs. Bigfoot' },
      { name: 'Bigfoot', set: 'Robin Hood vs. Bigfoot' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'InGen vs. Raptors',
    battlefields: [{ name: 'Raptor Paddock', players: 2, set: 'InGen vs. Raptors' }],
    coopBattlefields: [],
    heroes: [
      { name: 'Robert Muldoon', set: 'InGen vs. Raptors' },
      { name: 'Raptors', set: 'InGen vs. Raptors' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Cobble & Fog',
    battlefields: [
      { name: 'SoHo', players: 4, set: 'Cobble & Fog' },
      { name: 'Baskerville Manor', players: 4, set: 'Cobble & Fog' },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Sherlock Holmes', set: 'Cobble & Fog' },
      { name: 'Dracula', set: 'Cobble & Fog' },
      { name: 'Jeckyll & Hyde', set: 'Cobble & Fog' },
      { name: 'Invisible Man', set: 'Cobble & Fog' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Buffy the Vampire Slayer',
    battlefields: [
      { name: 'Sunnydale High', players: 4, set: 'Buffy the Vampire Slayer' },
      { name: 'The Bronze', players: 4, set: 'Buffy the Vampire Slayer' },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Buffy Summers', set: 'Buffy the Vampire Slayer' },
      { name: 'Angel', set: 'Buffy the Vampire Slayer' },
      { name: 'Spike', set: 'Buffy the Vampire Slayer' },
      { name: 'Willow', set: 'Buffy the Vampire Slayer' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Little Red riding Hood vs. Beowulf',
    battlefields: [
      { name: 'Heorot', players: 4, set: 'Little Red riding Hood vs. Beowulf' },
    ],
    coopBattlefields: [],
    heroes: [
      {
        name: 'Little Red Riding Hood',
        set: 'Little Red riding Hood vs. Beowulf',
      },
      { name: 'Beowulf', set: 'Little Red riding Hood vs. Beowulf' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Deadpool',
    battlefields: [],
    coopBattlefields: [],
    heroes: [{ name: 'Deadpool', set: 'Deadpool' }],
    villains: [],
    minions: []
  },
  {
    name: 'Battle of Legends Volume 2',
    battlefields: [
      {
        name: 'Hanging Gardens',
        players: 4,
        set: 'Battle of Legends Volume 2',
      },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Achilles', set: 'Battle of Legends Volume 2' },
      { name: 'Bloody Mary', set: 'Battle of Legends Volume 2' },
      { name: 'Sun Wukong', set: 'Battle of Legends Volume 2' },
      { name: 'Yennenga', set: 'Battle of Legends Volume 2' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Redemption Row',
    battlefields: [{ name: 'The Raft', players: 4, set: 'Redemption Row' }],
    coopBattlefields: [],
    heroes: [
      { name: 'Luke Cage', set: 'Redemption Row' },
      { name: 'Ghost Rider', set: 'Redemption Row' },
      { name: 'Moon Knight', set: 'Redemption Row' },
    ],
    villains: [],
    minions: []
  },
  {
    name: "Hell's Kitchen",
    battlefields: [{ name: "Hell's Kitchen", players: 4, set: "Hell's Kitchen" }],
    coopBattlefields: [],
    heroes: [
      { name: 'Daredevil', set: "Hell's Kitchen" },
      { name: 'Bullseye', set: "Hell's Kitchen" },
      { name: 'Elektra', set: "Hell's Kitchen" },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Sattler vs. T-Rex',
    battlefields: [{ name: 'T-Rex Paddock', players: 2, set: 'Sattler vs. T-Rex' }],
    coopBattlefields: [],
    heroes: [
      { name: 'Dr. Ellie Sattler', set: 'Sattler vs. T-Rex' },
      { name: 'T-Rex', set: 'Sattler vs. T-Rex' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Houdini vs. The Genie',
    battlefields: [
      { name: "King Solomon's Mine", players: 2, set: 'Houdini vs. The Genie' },
    ],
    coopBattlefields: [],
    heroes: [
      { name: 'Harry Houdini', set: 'Houdini vs. The Genie' },
      { name: 'The Genie', set: 'Houdini vs. The Genie' },
    ],
    villains: [],
    minions: []
  },
  
  {
    name: 'Teen Spirit',
    battlefields: [{ name: 'Navy Pier', players: 4, set: 'Teen Spirit' }],
    coopBattlefields: [],
    heroes: [
      { name: 'Ms. Marvel', set: 'Teen Spirit' },
      { name: 'Squirrel Girl', set: 'Teen Spirit' },
      { name: 'Cloak and Dagger', set: 'Teen Spirit' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'For King and Country',
    battlefields: [{ name: 'Helicarrier', players: 4, set: 'For King and Country' }],
    coopBattlefields: [],
    heroes: [
      { name: 'Winter Soldier', set: 'For King and Country' },
      { name: 'Black Widow', set: 'For King and Country' },
      { name: 'Black Panther', set: 'For King and Country' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Brains and Brawn',
    battlefields: [{ name: 'Sanctum Sanctorum', players: 4, set: 'Brains and Brawn' }],
    coopBattlefields: [],
    heroes: [
      { name: 'She-Hulk', set: 'Brains and Brawn' },
      { name: 'Spider-Man', set: 'Brains and Brawn' },
      { name: 'Doctor Strange', set: 'Brains and Brawn' },
    ],
    villains: [],
    minions: []
  },
  {
    name: 'Tales to Amaze',
    battlefields: [
      { name: 'McMinnville', players: 4, set: 'Tales to Amaze' },
      { name: 'Point Pleasant', players: 4, set: 'Tales to Amaze' },
    ],
    coopBattlefields: [
      { name: 'McMinnville', players: 4, set: 'Tales to Amaze' },
      { name: 'Point Pleasant', players: 4, set: 'Tales to Amaze' },
    ],
    heroes: [
      { name: 'Nikola Tesla', set: 'Tales to Amaze' },
      { name: 'Dr. Jill Trent', set: 'Tales to Amaze' },
      { name: 'Golden Bat', set: 'Tales to Amaze' },
      { name: 'Annie Christmas', set: 'Tales to Amaze' },
    ],
    villains: [
      { name: 'Mothman', set: 'Tales to Amaze' },
      { name: 'Alien Invaders', set: 'Tales to Amaze' },
    ],
    minions: [
      { name: 'Loveland Frog', set: 'Tales to Amaze' },
      { name: 'Ant Queen', set: 'Tales to Amaze' },
      { name: 'Skunk Ape', set: 'Tales to Amaze' },
      { name: 'The Blob', set: 'Tales to Amaze' },
      { name: 'Tarantula', set: 'Tales to Amaze' },
      { name: 'Jersey Devil', set: 'Tales to Amaze' },
    ]
  },
  {
    name: "Sun's Origin",
    battlefields: [{ name: 'Azuchi Castle', players: 2, set: "Sun's Origin" }],
    coopBattlefields: [],
    heroes: [
      { name: 'Oda Nobunaga', set: "Sun's Origin" },
      { name: 'Tomoe Gozen', set: "Sun's Origin" },
    ],
    villains: [],
    minions: []
  },
] as Set[]

