import { Character, Randomised } from "../../models/sets";

interface ResultProps {
  randomised: Randomised
  setPage: (str: string) => void
}

export function Result (props: ResultProps) {
  const { randomised, setPage } = props

  function playAgain() {}

function chooseSets () {}

function chooseGameType () {}

  return <>
        {randomised.heroes &&
        randomised.heroes.map((hero: Character, i: number) => (
          <p key={hero.name}>
            Player{i + 1}: {hero.name}
          </p>
        ))}
      {randomised.battlefield && (
        <p>Battlefield: {randomised.battlefield.name}</p>
      )}
      {randomised.villain && <p>Villain: {randomised.villain.name}</p>}
      {randomised.minions && (
        <>
          <p>Minions:</p>
          {randomised.minions.map((minion) => (
            <p key={minion.name}>{minion.name}</p>
          ))}
        </>
      )}
      <button onClick={() => setPage('')}>Play again</button>
      <button onClick={() => setPage('')}>Choose new game type</button>
      <button onClick={() => setPage('')}>Choose new sets</button>
  </>
}