export interface Set {
  name: string
  maps: Map[]
  characters: Character[]
  villains: Character[]
}

export interface Map {
  name: string
  players: number
  set: string
}

export interface Character {
  name: string
  set: string
}