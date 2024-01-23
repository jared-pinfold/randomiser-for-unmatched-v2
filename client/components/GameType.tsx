import { Battlefield, Character, Randomised, VillainBattlefields } from '../../models/sets'
import { villainBattlefields } from '../data'
import { shuffleArray } from '../utils'

interface GameTypeProps {
  battlefields: Battlefield[]
  coopBattlefields: Battlefield[]
  heroes: Character[]
  villains: Character[]
  minions: Character[]
  setRandomised: (obj: {
    battlefield: Battlefield,
    heroes: Character[],
    villain: Character | null,
    minions: Character[] | null,
  }) => void
  setPage: (str: string) => void
}

export function GameType(props: GameTypeProps) {
  const { battlefields, coopBattlefields, heroes, villains, minions, setRandomised, setPage } = props

  // // Tracks the number of players the current set selections can accomodate
  const maxPlayers = Math.max(
    ...battlefields.map((battlefield) => battlefield.players),
  )

  function randomise(coop: boolean, players: 1 | 2 | 3 | 4) {
    const shuffledHeroes = shuffleArray(heroes).slice(0, players) as Character[]
    const shuffledVillain = shuffleArray(villains).at(0) as Character
    const shuffledMinions = shuffleArray(minions).slice(
      0,
      players,
    ) as Character[]
    const shuffledBattlefield = shuffleArray(battlefields).at(0) as Battlefield
    type Attribute = keyof VillainBattlefields
    const attribute = shuffledVillain?.name as Attribute
    const villainBattlefield = villainBattlefields[attribute]

    if (coop) {
      setRandomised({
        battlefield: villainBattlefield,
        heroes: shuffledHeroes,
        villain: shuffledVillain,
        minions: shuffledMinions,
      })
    } else {
      setRandomised({
        battlefield: shuffledBattlefield,
        heroes: shuffledHeroes,
        villain: null,
        minions: null,
      })
    }
    setPage('result')
  }

  return (
    <>
      <h3>Competitive</h3>
      <button
        disabled={heroes.length >= 2 && maxPlayers >= 2 ? false : true}
        onClick={() => randomise(false, 2)}
      >
        2 Player
      </button>
      <button
        disabled={heroes.length >= 3 && maxPlayers >= 4 ? false : true}
        onClick={() => randomise(false, 3)}
      >
        3 Player
      </button>
      <button
        disabled={heroes.length >= 4 && maxPlayers >= 4 ? false : true}
        onClick={() => randomise(false, 4)}
      >
        4 Player
      </button>

      <h3>Co-Op / Solo</h3>
      <button
        disabled={heroes.length >= 1 && coopBattlefields.length ? false : true}
        onClick={() => randomise(true, 1)}
      >
        1 Player
      </button>
      <button
        disabled={heroes.length >= 2 && coopBattlefields.length ? false : true}
        onClick={() => randomise(true, 2)}
      >
        2 Player
      </button>
      <button
        disabled={heroes.length >= 3 && coopBattlefields.length ? false : true}
        onClick={() => randomise(true, 3)}
      >
        3 Player
      </button>
      <button
        disabled={heroes.length >= 4 && coopBattlefields.length ? false : true}
        onClick={() => randomise(true, 4)}
      >
        4 Player
      </button>
    </>
  )
}
