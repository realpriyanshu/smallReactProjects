import { useState } from 'react'
import Color from './components/colorGenerator/Color.jsx'
import ImageSlider from './components/image-slider/ImageSlider.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Color /> */}
    <ImageSlider  url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} />

    </>
  )
}

export default App
