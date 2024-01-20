export interface Set {
  name: string
  battlefields: Battlefield[]
  coopBattlefields: Battlefield[]
  heroes: Character[]
  villains: Character[]
  minions: Character[]
}

export interface Battlefield {
  name: string
  players: number
  set: string
}

export interface Character {
  name: string
  set: string
}

export interface Randomised {
  heroes: Character[]
  villain: Character | null
  battlefield: Battlefield
  minions: Character[] | null
}