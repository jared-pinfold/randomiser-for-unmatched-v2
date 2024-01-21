import { useState } from 'react'
import { Character, Battlefield, Randomised, VillainBattlefields} from '../../models/sets.ts'
import { data, villainBattlefields } from '../data.ts'
import { ButtonAll } from './ButtonAll.tsx'
import { ButtonSet } from './ButtonSet.tsx'
import { shuffleArray } from '../utils.ts'

export function Sets() {
  // State for building pool of available components based on selevted Unmatched sets
  const [battlefields, setBattlefields] = useState([] as Battlefield[])
  const [coopBattlefields, setCoopBattlefields] = useState([] as Battlefield[])
  const [heroes, setHeroes] = useState([] as Character[])
  const [villains, setVillains] = useState([] as Character[])
  const [minions, setMinions] = useState([] as Character[])
  // State to store randomised results once a game type has been submitted
  const [randomised, setRandomised] = useState({} as Randomised)
  // Tracks the number of players the current set selections can accomodate
  const maxPlayers = Math.max(
    ...battlefields.map((battlefield) => battlefield.players),
  )

  function handleSelectAll() {
    setBattlefields(
      data.reduce((a, c) => [...a, ...c.battlefields], [] as Battlefield[]),
    )
    setCoopBattlefields(
      data.reduce((a, c) => [...a, ...c.coopBattlefields], [] as Battlefield[]),
    )
    setHeroes(data.reduce((a, c) => [...a, ...c.heroes], [] as Character[]))
    setVillains(data.reduce((a, c) => [...a, ...c.villains], [] as Character[]))
    setMinions(data.reduce((a, c) => [...a, ...c.minions], [] as Character[]))
  }

  function handleRemoveAll() {
    setBattlefields([])
    setCoopBattlefields([])
    setHeroes([])
    setVillains([])
    setMinions([])
  }

  function handleSelect(setName: string) {
    const selectedBattlefields = data.find((set) => set.name === setName)
      ?.battlefields as Battlefield[]
    const selectedCoopBattlefields = data.find((set) => set.name === setName)
      ?.coopBattlefields as Battlefield[]
    const selectedHeroes = data.find((set) => set.name === setName)
      ?.heroes as Character[]
    const selectedVillains = data.find((set) => set.name === setName)
      ?.villains as Character[]
    const selectedMinions = data.find((set) => set.name === setName)
      ?.minions as Character[]

    setBattlefields([...battlefields, ...selectedBattlefields])
    setCoopBattlefields([...coopBattlefields, ...selectedCoopBattlefields])
    setHeroes([...heroes, ...selectedHeroes])
    setVillains([...villains, ...selectedVillains])
    setMinions([...minions, ...selectedMinions])
  }

  function handleRemove(setName: string) {
    setBattlefields(
      battlefields.filter((battlefield) => battlefield.set != setName),
    )
    setCoopBattlefields(
      coopBattlefields.filter((battlefield) => battlefield.set != setName),
    )
    setHeroes(heroes.filter((hero) => hero.set != setName))
    setVillains(villains.filter((villain) => villain.set != setName))
    setMinions(minions.filter((minion) => minion.set != setName))
  }

  function randomise(coop: boolean, players: 1 | 2 | 3 | 4) {
    const shuffledHeroes = shuffleArray(heroes).slice(0, players) as Character[]
    const shuffledVillain = shuffleArray(villains).at(0) as Character
    const shuffledMinions = shuffleArray(minions).slice(0, players) as Character[]
    const shuffledBattlefield = shuffleArray(battlefields).at(0) as Battlefield
    type Attribute = keyof VillainBattlefields
    const attribute = shuffledVillain?.name as Attribute
    const villainBattlefield = villainBattlefields[attribute]

    if (coop) {
      console.log(randomised)
      setRandomised({
        battlefield: villainBattlefield,
        heroes: shuffledHeroes,
        villain: shuffledVillain,
        minions: shuffledMinions
      })
    } else {
      console.log(randomised)
      setRandomised({
        battlefield: shuffledBattlefield,
        heroes: shuffledHeroes,
        villain: null,
        minions: null
      })
    }
  }

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h2>Select the sets you would like to randomise from</h2>
        <ButtonAll {...{ handleSelectAll, handleRemoveAll }} />
      </div>
      {data &&
        data.map((set) => (
          <ButtonSet
            key={set.name}
            {...{ handleSelect, handleRemove, setName: set.name }}
          />
        ))}

{/* Game type */}

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

{/* Results */}
      {randomised.heroes &&
        randomised.heroes.map((hero: Character, i: number) => (
          <p key={hero.name}>
            Player{i + 1}: {hero.name}
          </p>
        ))}
      {randomised.battlefield && <p>Battlefield: {randomised.battlefield.name}</p>}
      {randomised.villain && <p>Villain: {randomised.villain.name}</p>}
      {randomised.minions && (
        <>
          <p>Minions:</p>
          {randomised.minions.map((minion) => (
            <p key={minion.name}>{minion.name}</p>
          ))}
        </>
      )}
    </main>
  )
}
