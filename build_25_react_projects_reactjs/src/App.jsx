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
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/Lignt-Dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom tabs/tab-test";
import ModalTest from "./components/model popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autoComplete-with-api";
import TicTacToe from "./components/tic-tac-toe";


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
      {/* <TreeView menus={menus}/> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}

      {/* Light and Dark theme switch */}
      {/* <LightDarkMode/> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* custom tabs component */}
      {/* <TabTest/> */}

      {/* custom modal popup */}
      {/* <ModalTest/> */}

      {/* github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* search auto complete  */}
      {/* <SearchAutoComplete/> */}

      {/* tic tac toe game */}
      <TicTacToe/>
    </>
  );
}

export default App;
