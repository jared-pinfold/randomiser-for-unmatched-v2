import { useState } from 'react'
import { Header } from './Header.tsx'
import { Result } from './Result.tsx'
import { Sets } from './Sets.tsx'
import { Battlefield, Character, Randomised } from '../../models/sets.ts'
import { GameType } from './GameType.tsx'

function App() {
  const [page, setPage] = useState('sets')
  // State for building pool of available components based on selevted Unmatched sets
  const [battlefields, setBattlefields] = useState([] as Battlefield[])
  const [coopBattlefields, setCoopBattlefields] = useState([] as Battlefield[])
  const [heroes, setHeroes] = useState([] as Character[])
  const [villains, setVillains] = useState([] as Character[])
  const [minions, setMinions] = useState([] as Character[])
  // State to store randomised results once a game type has been submitted
  const [randomised, setRandomised] = useState({} as Randomised)

  return (
    <>
      <div className="app">
        <Header />
        {page === 'sets' && (
          <Sets
            {...{
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
            }}
          />
        )}
        {page === 'gameType' && (
          <GameType
            {...{
              battlefields,
              coopBattlefields,
              heroes,
              villains,
              minions,
              setRandomised,
              setPage,
            }}
          />
        )}
        {page === 'result' && <Result {...{randomised, setPage}}/>}
      </div>
    </>
  )
}

export default App
