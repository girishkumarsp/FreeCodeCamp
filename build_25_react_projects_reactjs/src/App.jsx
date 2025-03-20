import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <>
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color generator */}
      {/* <RandomColor/> */}

      {/* start rating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </>
  );
}

export default App;
