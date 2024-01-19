export interface Set {
  name: string
  battlefields: Battlefield[]
  heroes: Character[]
  villains: Character[]
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

export interface Collection {
  heroes: Character[]
  villains: Character[]
  battlefields: Battlefield[]
}