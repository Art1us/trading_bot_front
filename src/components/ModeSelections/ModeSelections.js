import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { modesList, dates } from "./data";
import "./ModeSelections.css";
import CustomDropdownSelection from "../CustomDropdownSelection/CustomDropdownSelection";
import CustomDateSelection from "../CustomDateSelection/CustomDateSelection";

function ModeSelections({ formStep }) {
  const { strategiesList, BOT_OPTIONS, selectedBotSettings } =
    useContext(Context);
  const [displayedDropdown, setDisplayedDropdown] = useState("0");

  return (
    <div className="modeSelections">
      <div className="modeSelections__container">
        {formStep > 0 && (
          <CustomDropdownSelection
            id="mode"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
        {formStep > 1 && (
          <CustomDateSelection
            width="250px"
            id="date"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
        {formStep > 2 && (
          <CustomDropdownSelection
            id="strategy"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
      </div>
    </div>
  );
}

export default ModeSelections;
