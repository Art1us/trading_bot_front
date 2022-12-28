import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../Context";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomDateDropdown from "../CustomDateDropdown/CustomDateDropdown";

function CustomDateSelection({
  list,
  displayedDropdown,
  setDisplayedDropdown,
  width,
  id,
}) {
  const [dropdownList, setDropdownList] = useState(list);
  const dropdownRef = useRef();
  const { setSelectedBotSettings } = useContext(Context);
  
  useEffect(() => {
    setSelectedBotSettings((prev) => ({ ...prev, [id]: dropdownList[0] }));
  }, [dropdownList]);

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
      className="customDropDownSelection"
      onClick={clickHandler}
      ref={dropdownRef}
    >
      <div
        className="customDropDownSelection__selection"
        style={{ width: width ? width : "200px" }}
      >
        <p className="customDropDownSelection__text">
          {converDate(dropdownList.dateFrom)} -{" "}
          {converDate(dropdownList.dateTo)}
        </p>
        <RiArrowDropDownLine
          fontSize={25}
          color={displayedDropdown === id ? "gray" : "inherit"}
        />
      </div>
      {displayedDropdown === id && (
        <CustomDateDropdown
          dropdownList={dropdownList}
          setDropdownList={setDropdownList}
        />
      )}
    </div>
  );
}

export default CustomDateSelection;
