import { useState } from 'react'
import { Character, Battlefield,} from '../../models/sets.ts'
import data from '../data.ts'

export function Sets() {
  const [battlefields, setBattlefields] = useState([] as Battlefield[])
  const [heroes, setHeroes] = useState([] as Character[])
  const [villains, setVillains] = useState([] as Character[])

  function handleSelectAll() {
    setBattlefields(
      data.reduce((a, c) => [...a, ...c.battlefields], [] as Battlefield[]),
    )
    setHeroes(data.reduce((a, c) => [...a, ...c.heroes], [] as Character[]))
    setVillains(data.reduce((a, c) => [...a, ...c.villains], [] as Character[]))
  }

  function handleSelect(setName: string) {
    const selectedBattlefields = data.find(set => set.name === setName)?.battlefields as Battlefield[]
    const selectedHeroes = data.find(set => set.name === setName)?.heroes as Character[]
    const selectedVillains = data.find(set => set.name === setName)?.villains as Character[]
    setBattlefields([...battlefields, ...selectedBattlefields])
    setHeroes([...heroes, ...selectedHeroes])
    setVillains([...villains, ...selectedVillains])
  }

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h2>Select the sets you would like to randomise from</h2>
        <button onClick={handleSelectAll}>Select all</button>
      </div>
      {data &&
        data.map((set) => (
          <button id={set.name} className="setButton" key={set.name} onClick={() => {handleSelect(set.name)}}>
            {set.name}
          </button>
        ))}

      {/* temp */}
      <h3>battlefields</h3>
      {battlefields && battlefields.map((battlefield) => battlefield.name)}
      <h3>characters</h3>
      {heroes && heroes.map((hero) => hero.name)}
      <h3>villains</h3>
      {villains && villains.map((villain) => villain.name)}
    </main>
  )
}
