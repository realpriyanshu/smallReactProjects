import { useState } from "react";
import Color from "./components/colorGenerator/Color.jsx";
import ImageSlider from "./components/image-slider/ImageSlider.jsx";
import "./App.css";
import LoadMore from "./components/load-more/LoadMore.jsx";
import Index from "./components/recursive-menu/index.jsx";
import menus from "./components/recursive-menu/data.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Color /> */}

      {/* <ImageSlider  url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} /> */}

      {/* <LoadMore url={"https://dummyjson.com/products?limit=20"} /> */}

      {/* recursive menu */}
      <Index menus={menus} />
    </>
  );
}

export default App;
