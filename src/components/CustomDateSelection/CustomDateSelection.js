import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../Context";
import "./CustomDateSelection.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomDateDropdown from "../CustomDateDropdown/CustomDateDropdown";

function CustomDateSelection({
  displayedDropdown,
  setDisplayedDropdown,
  width,
  id,
}) {
  const { selectedBotSettings, setSelectedBotSettings } = useContext(Context);
  const [selectedDates, setSelectedDates] = useState(selectedBotSettings.date);
  const dropdownRef = useRef();

  useEffect(() => {
    if (selectedBotSettings.date.to) {
      setSelectedBotSettings((prev) => ({
        ...prev,
        date: { from: selectedDates.from, to: selectedDates.to },
      }));
    }
  }, [selectedDates]);

  useEffect(() => {
    function outsideClickHandler(e) {
      if (e.target !== dropdownRef.current) {
        setDisplayedDropdown("0");
      }
    }

    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  function clickHandler(e) {
    e.stopPropagation();
    if (displayedDropdown === id) {
      setDisplayedDropdown("0");
    } else {
      setDisplayedDropdown(id);
    }
  }

  function converDate(date) {
    const [year, month, day] = date.split("-");
    return [month, day, year].join("/");
  }

  return (
    <div
      className="customDateSelection"
      onClick={clickHandler}
      ref={dropdownRef}
    >
      <div
        className="customDateSelection__selection"
        style={{ width: width ? width : "200px" }}
      >
        <p>
          {converDate(selectedDates.from)} - {converDate(selectedDates.to)}
        </p>
        <RiArrowDropDownLine
          fontSize={25}
          color={displayedDropdown === id ? "gray" : "inherit"}
        />
      </div>
      {displayedDropdown === id && (
        <CustomDateDropdown setSelectedDates={setSelectedDates} />
      )}
    </div>
  );
}

export default CustomDateSelection;
