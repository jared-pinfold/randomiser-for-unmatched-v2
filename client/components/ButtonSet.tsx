import { useState } from 'react'
import { Battlefield, Character } from '../../models/sets'
import { data } from '../data'

interface ButtonSetProps {
  setBattlefields: (arr: Battlefield[]) => void
  setCoopBattlefields: (arr: Battlefield[]) => void
  setHeroes: (arr: Character[]) => void
  setVillains: (arr: Character[]) => void
  setMinions: (arr: Character[]) => void
  battlefields: Battlefield[]
  coopBattlefields: Battlefield[]
  heroes: Character[]
  villains: Character[]
  minions: Character[]
  setName: string
}

export function ButtonSet(props: ButtonSetProps) {
  const [clicked, setClicked] = useState(false)
  const {
    setBattlefields,
    setCoopBattlefields,
    setHeroes,
    setVillains,
    setMinions,
    setName,
    battlefields,
    coopBattlefields,
    heroes,
    villains,
    minions,
  } = props

  function handleClick() {
    if (clicked) handleRemove(setName)
    else handleSelect(setName)
    setClicked(!clicked)
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

  if (clicked)
    return (
      <button className="setButtonSelected" onClick={handleClick}>
        {setName}
      </button>
    )
  else
    return (
      <button className="setButton" onClick={handleClick}>
        {setName}
      </button>
    )
}
