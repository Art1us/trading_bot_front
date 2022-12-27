import React from "react";
import "./ModeSelections.css";
import { RiArrowDropDownLine } from "react-icons/ri";
function ModeSelections() {
  return (
    <div className="modeSelections">
      <div className="modeSelections__container">
        <div className="modeSelections__selection">
          Test Mode <RiArrowDropDownLine fontSize={25} />
        </div>
        <div className="modeSelections__selection">
          22/11/2023 - 22/12/2025 <RiArrowDropDownLine fontSize={25} />
        </div>
        <div className="modeSelections__selection">
          Advanced Strategy <RiArrowDropDownLine fontSize={25} />
        </div>
      </div>
    </div>
  );
}

export default ModeSelections;
