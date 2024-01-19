import { useState } from 'react'
import { Character, Battlefield,} from '../../models/sets.ts'
import {data} from '../data.ts'
import { ButtonAll } from './ButtonAll.tsx'
import { ButtonSet } from './ButtonSet.tsx'

export function Sets() {
  const [battlefields, setBattlefields] = useState([] as Battlefield[])
  const [heroes, setHeroes] = useState([] as Character[])
  const [villains, setVillains] = useState([] as Character[])
  const [minions, setMinions] = useState([] as Character[])

  function handleSelectAll() {
    setBattlefields(
      data.reduce((a, c) => [...a, ...c.battlefields], [] as Battlefield[]),
    )
    setHeroes(data.reduce((a, c) => [...a, ...c.heroes], [] as Character[]))
    setVillains(data.reduce((a, c) => [...a, ...c.villains], [] as Character[]))
    setMinions(data.reduce((a, c) => [...a, ...c.minions], [] as Character[]))
  }

  function handleRemoveAll () {
    setBattlefields([])
    setHeroes([])
    setVillains([])
    setMinions([])
  }

  function handleSelect(setName: string) {
    const selectedBattlefields = data.find(set => set.name === setName)?.battlefields as Battlefield[]
    const selectedHeroes = data.find(set => set.name === setName)?.heroes as Character[]
    const selectedVillains = data.find(set => set.name === setName)?.villains as Character[]
    const selectedMinions = data.find(set => set.name === setName)?.minions as Character[]

    setBattlefields([...battlefields, ...selectedBattlefields])
    setHeroes([...heroes, ...selectedHeroes])
    setVillains([...villains, ...selectedVillains])
    setMinions([...minions, ...selectedMinions])
  }

  function handleRemove(setName: string) {
    setBattlefields(battlefields.filter(battlefield => battlefield.set != setName))
    setHeroes(heroes.filter(hero => hero.set != setName))
    setVillains(villains.filter(villain => villain.set != setName))
    setMinions(minions.filter(minion => minion.set != setName))
  }

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h2>Select the sets you would like to randomise from</h2>
        <ButtonAll {...{handleSelectAll, handleRemoveAll}}/>
      </div>
      {data &&
        data.map((set) => (
          <ButtonSet key={set.name} {...{handleSelect, handleRemove, setName: set.name}}/>
        ))}

      {/* temp */}
      <h3>battlefields</h3>
      {battlefields && battlefields.map((battlefield) => battlefield.name)}
      <h3>characters</h3>
      {heroes && heroes.map((hero) => hero.name)}
      <h3>villains</h3>
      {villains && villains.map((villain) => villain.name)}
      <h3>minions</h3>
      {minions && minions.map((minion) => minion.name)}
      
    </main>
  )
}
