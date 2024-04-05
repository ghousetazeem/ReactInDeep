import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-rose-600 text-white">Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 text-white">Green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 text-white">blue</button>
          <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-400 text-white">Yellow</button>
          <button onClick={() => setColor('violet')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-violet-400 text-white">Violet</button>
          <button onClick={() => setColor('indigo')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-indigo-500 text-white">Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
