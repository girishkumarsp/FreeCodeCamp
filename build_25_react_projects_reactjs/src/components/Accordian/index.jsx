import { useState } from "react";
import data from "./data";
import "./index.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [toggleSelection, setToggleSelection] = useState(false);

  function handleSelecetion(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const cpyMultiSelectoin = [...multiSelection];
    const findIndex = cpyMultiSelectoin.indexOf(getCurrentId);
    if (findIndex === -1) {
      cpyMultiSelectoin.push(getCurrentId);
    } else {
      cpyMultiSelectoin.splice(findIndex, 1);
    }
    setMultiSelection(cpyMultiSelectoin);
  }

  function handleToggle() {
    setToggleSelection(!toggleSelection);
  }

  return (
    <div className="accordion-container">
      <button
        onClick={handleToggle}
        className={toggleSelection ? "active" : "inactive"}
      >
        Enable Mulit Selection{" "}
      </button>
      <div className="cards">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="question-symbol">
              <h3
                onClick={
                  toggleSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSelecetion(item.id)
                }
                className="question"
              >
                {item.question}
              </h3>
              <span>+</span>
            </div>
            {toggleSelection ? (
              multiSelection.indexOf(item.id) !== -1 ? (
                <div className="answer">{item.answer}</div>
              ) : null
            ) : selected === item.id ? (
              <div className="answer">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
