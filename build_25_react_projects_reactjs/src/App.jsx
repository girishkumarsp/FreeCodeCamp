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
import FeatureFlags from "./components/feature-flag";
import FeatureFlagsGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutSideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndbottom from "./components/scroll-to-top-and-bottom";

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
      {/* <TicTacToe/> */}

      {/* feature flag implimentation */}
      {/* <FeatureFlagsGlobalState> 
        <FeatureFlags />/
      </FeatureFlagsGlobalState> */}

      {/* useFetch custom hook */}
      {/* <UseFetchHookTest/> */}

      {/* use Onclick outside Hook Test */}
      {/* <UseOnclickOutSideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/>  */}

      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndbottom/>
    </>
  );
}

export default App;
