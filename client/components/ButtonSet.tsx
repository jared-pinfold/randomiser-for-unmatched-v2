import { useState } from 'react'

interface ButtonSetProps {
  handleSelect: (setName: string) => void
  handleRemove: (setName: string) => void
  setName: string
}

export function ButtonSet(props: ButtonSetProps) {
  const [clicked, setClicked] = useState(false)
  const { handleSelect, handleRemove, setName } = props

  function handleClick() {
    if (clicked) handleRemove(setName)
    else handleSelect(setName)
    setClicked(!clicked)
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
