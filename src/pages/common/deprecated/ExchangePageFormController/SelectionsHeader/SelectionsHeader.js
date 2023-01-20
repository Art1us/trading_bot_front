import React, { useState } from "react"
import "./SelectionsHeader.css"
import CustomDropdownSelection from "../CustomDropdownSelection/CustomDropdownSelection"
import CustomDateSelection from "../CustomDateSelection/CustomDateSelection"
import CustomExchangeDropdownSelection from "../CustomExchangeDropdownSelection/CustomExchangeDropdownSelection"

function ModeSelections({ formStep }) {
  const [displayedDropdown, setDisplayedDropdown] = useState("0")
  return (
    <div className="selectionsHeader">
      <div className="selectionsHeader__container">
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
            id="pair"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
        {formStep > 3 && (
          <CustomDropdownSelection
            id="strategy"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
      </div>
      <div className="selectionsHeader__ExchangeSelectionContainer">
        {formStep > 0 && (
          <CustomExchangeDropdownSelection
            id="exchange"
            displayedDropdown={displayedDropdown}
            setDisplayedDropdown={setDisplayedDropdown}
          />
        )}
      </div>
    </div>
  )
}

export default ModeSelections
