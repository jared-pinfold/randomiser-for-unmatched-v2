import { useState } from 'react'
import { Header } from './Header.tsx'
import { Result } from './Result.tsx'
import { Sets } from './Sets.tsx'


function App() {

  const [page, setPage] = useState('sets')

  return (
    <>
      <div className="app">
        <Header />
        {page === 'sets' && <Sets/>}
        {/* {page === 'gameType' && <GameType/>} */}
        {/* {page === 'result' && <Result />} */}
      </div>
    </>
  )
}

export default App
