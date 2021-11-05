import React, {useRef} from "react";
import { useState } from "react/cjs/react.development";
import SearchGif from "./components/giffy/SearchGif";
import ShowGifs from "./components/giffy/ShowGifs";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App = () => {
  const [gifItem, setGifItem] = useState([]);

  const gifSearchHandler = (data) => {
    setGifItem(data);
    console.log("app", data);
  }

  return (
    <div>
      <Header />
      <SearchGif onGifSearch={gifSearchHandler} />
      <ShowGifs gifData={gifItem} />
      <Footer/>
   </div>
  )
}

export default App;