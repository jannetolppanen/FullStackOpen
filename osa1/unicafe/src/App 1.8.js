import { useState } from 'react'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAllVotes] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAllVotes(allVotes.concat(1))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAllVotes(allVotes.concat(0))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAllVotes(allVotes.concat(-1))
  }

  const countAverage = () => {
    if (allVotes.length > 0) {
      let sum = 0
      for (let i = 0; i < allVotes.length; i++) {
        sum = sum + allVotes[i]
      }
      return sum / allVotes.length
    }
    return 'Ääniä nolla'

  }

  const countPositive = () => {
    if(allVotes.length > 0) {
    let positiveNums = 0
    for(let i = 0; i < allVotes.length; i++) {
      if(allVotes[i] == 1) {
        positiveNums ++
      }
    }
    return `${positiveNums / allVotes.length * 100} %`
  }
  return `Ei ääniä` 
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {countAverage()}</p>
      <p>positive {countPositive()}</p>
    </div>
  )
}



export default App
