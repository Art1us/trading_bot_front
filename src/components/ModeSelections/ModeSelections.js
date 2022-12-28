import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { modesList, dates } from "./data";
import "./ModeSelections.css";
import CustomDropdownSelection from "../CustomDropdownSelection/CustomDropdownSelection";
import CustomDateSelection from "../CustomDateSelection/CustomDateSelection";

function ModeSelections() {
  const { strategiesList } = useContext(Context);
  const [displayedDropdown, setDisplayedDropdown] = useState("0");

  return (
    <div className="modeSelections">
      <div className="modeSelections__container">
        <CustomDropdownSelection
          list={modesList}
          id="mode"
          displayedDropdown={displayedDropdown}
          setDisplayedDropdown={setDisplayedDropdown}
        />
        <CustomDateSelection
          width="250px"
          list={dates}
          id="date"
          displayedDropdown={displayedDropdown}
          setDisplayedDropdown={setDisplayedDropdown}
        />
        <CustomDropdownSelection
          list={strategiesList}
          id="strategy"
          displayedDropdown={displayedDropdown}
          setDisplayedDropdown={setDisplayedDropdown}
        />
      </div>
    </div>
  );
}

export default ModeSelections;
