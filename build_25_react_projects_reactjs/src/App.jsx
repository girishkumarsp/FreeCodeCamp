import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}

      {/* LoadMoreData */}
      {/* <LoadMoreData/> */}

      {/* tree view component / menu UI component / recursive navigation menu */}
      <TreeView menus={menus}/>
    </>
  );
}

export default App;
