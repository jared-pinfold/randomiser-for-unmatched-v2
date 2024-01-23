import {
  Character,
  Battlefield,
  Randomised,
  VillainBattlefields,
} from '../../models/sets.ts'
import { data, villainBattlefields } from '../data.ts'
import { ButtonAll } from './ButtonAll.tsx'
import { ButtonSet } from './ButtonSet.tsx'
import { shuffleArray } from '../utils.ts'

interface SetsProps {
  setBattlefields: (arr: Battlefield[]) => void
  setCoopBattlefields: (arr: Battlefield[]) => void
  setHeroes: (arr: Character[]) => void
  setVillains: (arr: Character[]) => void
  setMinions: (arr: Character[]) => void
  setPage: (str: string) => void
  battlefields: Battlefield[]
  coopBattlefields: Battlefield[]
  heroes: Character[]
  villains: Character[]
  minions: Character[]
}

export function Sets(props: SetsProps) {
  const {
    setBattlefields,
    setCoopBattlefields,
    setHeroes,
    setVillains,
    setMinions,
    setPage,
    battlefields,
    coopBattlefields,
    heroes,
    villains,
    minions,
  } = props






  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h2>Select the sets you would like to randomise from</h2>
        <ButtonAll
          {...{
            setBattlefields,
            setCoopBattlefields,
            setHeroes,
            setVillains,
            setMinions,
            setPage
          }}
        />
      </div>
      {data &&
        data.map((set) => (
          <ButtonSet
            key={set.name}
            {...{
              setBattlefields,
              setCoopBattlefields,
              setHeroes,
              setVillains,
              setMinions,
              setName: set.name,
              battlefields,
              coopBattlefields,
              heroes,
              villains,
              minions,
            }}
          />
        ))}
<button onClick={()=>setPage('gameType')}>Submit</button>
      {/* Game type

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
      </button> */}


      {/* Results */}
      {/* {randomised.heroes &&
        randomised.heroes.map((hero: Character, i: number) => (
          <p key={hero.name}>
            Player{i + 1}: {hero.name}
          </p>
        ))}
      {randomised.battlefield && (
        <p>Battlefield: {randomised.battlefield.name}</p>
      )}
      {randomised.villain && <p>Villain: {randomised.villain.name}</p>}
      {randomised.minions && (
        <>
          <p>Minions:</p>
          {randomised.minions.map((minion) => (
            <p key={minion.name}>{minion.name}</p>
          ))}
        </>
      )} */}
    </main>
  )
}
