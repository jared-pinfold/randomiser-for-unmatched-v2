import { useState } from 'react'

interface ButtonAllProps {
  handleSelectAll: () => void
  handleRemoveAll: () => void
}

export function ButtonAll(props: ButtonAllProps) {
  const [clicked, setClicked] = useState(false)
  const { handleSelectAll, handleRemoveAll } = props

  function handleClick() {
    if (clicked) handleRemoveAll()
    else handleSelectAll()
    setClicked(!clicked)
  }

  return (
    <button onClick={handleClick}>
      {clicked ? 'Remove All' : 'Select all'}
    </button>
  )
}
