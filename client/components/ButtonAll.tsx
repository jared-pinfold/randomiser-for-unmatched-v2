import { useState } from 'react'
import { data } from '../data'
import { Battlefield, Character } from '../../models/sets'

interface ButtonAllProps {
  setBattlefields: (arr: Battlefield[]) => void
  setCoopBattlefields: (arr: Battlefield[]) => void
  setHeroes: (arr: Character[]) => void
  setVillains: (arr: Character[]) => void
  setMinions: (arr: Character[]) => void
  setPage: (str: string) => void
}

export function ButtonAll(props: ButtonAllProps) {
  const [clicked, setClicked] = useState(false)
  const {
    setBattlefields,
    setCoopBattlefields,
    setHeroes,
    setVillains,
    setMinions,
    setPage
  } = props

  function handleClick() {
    if (clicked) handleRemoveAll()
    else handleSelectAll()
    setClicked(!clicked)
    setPage('gameType')
  }

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

  return (
    <button onClick={handleClick}>
      {clicked ? 'Remove All' : 'Select all'}
    </button>
  )
}
