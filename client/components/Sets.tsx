import { useState } from 'react'
import { Character, Battlefield } from '../../models/sets.ts'
import { data } from '../data.ts'
import { ButtonAll } from './ButtonAll.tsx'
import { ButtonSet } from './ButtonSet.tsx'
import { shuffleArray } from '../utils.ts'

export function Sets() {
  const [battlefields, setBattlefields] = useState([] as Battlefield[])
  const [coopBattlefields, setCoopBattlefields] = useState([] as Battlefield[])
  const [heroes, setHeroes] = useState([] as Character[])
  const [villains, setVillains] = useState([] as Character[])
  const [minions, setMinions] = useState([] as Character[])
  const [randomBattlefield, setRandomBattlefield] = useState(
    null as Battlefield | null,
  )
  const [randomHeroes, setRandomHeroes] = useState(null as Character[] | null)
  const [randomVillain, setRandomVillain] = useState(null as Character | null)
  const [randomMinions, setRandomMinions] = useState(null as Character[] | null)
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
    const shuffledHeroes = shuffleArray(heroes)
    const shuffledVillains = shuffleArray(villains)
    const shuffledMinions = shuffleArray(minions)
    const shuffledBattlefields = shuffleArray(battlefields)
    const shuffledCoopBattlefields = shuffleArray(coopBattlefields)

    if (coop) {
      setRandomBattlefield(shuffledCoopBattlefields.at(0) as Battlefield)
      setRandomHeroes(shuffledHeroes.slice(0, players) as Character[])
      setRandomVillain(shuffledVillains.at(0) as Character)
      setRandomMinions(shuffledMinions.slice(0, players) as Character[])
    } else {
      setRandomBattlefield(shuffledBattlefields.at(0) as Battlefield)
      setRandomHeroes(shuffledHeroes.slice(0, players) as Character[])
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

      {randomHeroes &&
        randomHeroes.map((hero: Character, i: number) => (
          <p key={hero.name}>
            Player{i + 1}: {hero.name}
          </p>
        ))}
      {randomBattlefield && <p>Battlefield: {randomBattlefield.name}</p>}
      {randomVillain && <p>Villain: {randomVillain.name}</p>}
      {randomMinions && (
        <>
          <p>Minions:</p>
          {randomMinions.map((minion) => (
            <p key={minion.name}>{minion.name}</p>
          ))}
        </>
      )}
    </main>
  )
}
