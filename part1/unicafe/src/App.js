import {useState} from 'react'

function Statistic({good,neutral,bad,total}) {
  function calculatePositive() {
    if (total === 0) {
      return 0;
    }
    else {
      return (good / total) * 100
    }
  }

  function calculateAverage() {
    if (total === 0) {
      return 0;
    } else {
      return ((good * 1) + (neutral * 0) + (bad * -1)) / total;
    }
  }

  if(total === 0) {
    return <p>No feedback given</p>
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={total} />
          <StatisticLine text={"average"} value={calculateAverage()} />
          <StatisticLine text={"positive"} value={calculatePositive() + "%"} />
        </tbody>
      </table>
    )
  }
}

function StatisticLine({text,value}) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = props => <button onClick={props.setValue}>{props.text}</button>

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  function setToGood() {
    setGood(good + 1);
    setTotal(total + 1);
  }

  function setToNeutral() {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  function setToBad() {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  return (
      <div>
          <h1>give feedback</h1>
          <Button text="good" setValue={setToGood}/>
          <Button text="neutral" setValue={setToNeutral}/>
          <Button text="bad" setValue={setToBad}/>
          <h2>statistics</h2>
          <Statistic good={good} neutral={neutral} bad={bad} total={total} />
      </div>
  );
}

export default App;
