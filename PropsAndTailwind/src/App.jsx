import Card from '../Components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-300 p-3 rounded-xl mb-4'>Tailwind</h1>
      <Card name="Isabela" btnText="Know More" />
      <Card name="Marie" btnText="Click Me" />
      <Card name="Lisa" />
    </>
  )
}

export default App
