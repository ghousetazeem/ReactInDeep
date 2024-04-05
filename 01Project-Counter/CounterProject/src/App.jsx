import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if (counter >= 20) {
      counter = counter
    }
    else {
      counter = counter + 1;
    }
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter <= 0) {
      counter = counter
    }
    else {
      counter = counter - 1;
    }
    setCounter(counter)
  }

  return (
    <>
      <h2>This is the simple counter application</h2>
      <p>It will allow you to add and count to 20 and subtract and count to 0</p>

      <button onClick={addValue}>Add count</button>
      <br />
      <button>{counter}</button>
      <br />
      <button onClick={removeValue}>Subtract count</button>
    </>
  )
}

export default App
