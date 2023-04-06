import { useState } from 'react'


const Button = ({ clickHandler, text }) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.statisticType}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.good + props.bad + props.neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text="good" statisticType={props.good} />
      <StatisticLine text="neutral" statisticType={props.neutral} />
      <StatisticLine text="bad" statisticType={props.bad} />
      <StatisticLine text="average" statisticType={props.avg} />
      <StatisticLine text="positive" statisticType={props.positive} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAllVotes] = useState([])

  const countPositive = () => {
    if (allVotes.length > 0) {
      let positiveNums = 0
      for (let i = 0; i < allVotes.length; i++) {
        if (allVotes[i] == 1) {
          positiveNums++
        }
      }
      let totalPositive = positiveNums / allVotes.length * 100
      let roundedTotalPositive = totalPositive.toFixed(1)
      return roundedTotalPositive + " %"
    }
    return `Ei ääniä`
  }

  const countAverage = () => {
    if (allVotes.length > 0) {
      let sum = 0
      for (let i = 0; i < allVotes.length; i++) {
        sum = sum + allVotes[i]
      }
      let average = sum / allVotes.length
      let roundedNum = average.toFixed(1);
      return roundedNum
    }
    return 'Ääniä nolla'

  }

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


  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={handleGoodClick} text="Good" />
      <Button clickHandler={handleNeutralClick} text="Neutral" />
      <Button clickHandler={handleBadClick} text="Bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} avg={countAverage()} positive={countPositive()} />
    </div>
  )
}



export default App
