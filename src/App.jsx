import { useState } from 'react'
import Color from './components/colorGenerator/Color.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color />
    </>
  )
}

export default App
