import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../Lignt-Dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordain",
      component: <Accordian />,
    },
    {
      key: "shwoTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  function checkEnabledFlags(getCurrentKey){
    return enabledFlags[getCurrentKey]
  }

  if (loading) return <div>Loading Data Please Wait...</div>;



  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem=> checkEnabledFlags(componentItem.key)? componentItem.component :null)
      }
    </div>
  );
}
