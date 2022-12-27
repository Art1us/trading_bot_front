import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../Context";
import "./CustomDropDownSelection.css";
import CustomDropdownList from "../CustomDropdownList/CustomDropdownList";
import { RiArrowDropDownLine } from "react-icons/ri";

function CustomDropdownSelection({
  list,
  displayedDropdown,
  setDisplayedDropdown,
  id,
}) {
  const [dropdownList, setDropdownList] = useState(list);
  const dropdownRef = useRef();
  const { setSelectedBotSettings } = useContext(Context);

  const maxLength = Math.max(...dropdownList.map((el) => el.name.length)); //returns the length of the longest name in array

  useEffect(() => {
    setSelectedBotSettings((prev) => ({ ...prev, [id]: dropdownList[0].name }));
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

  return (
    <div
      className="customDropDownSelection"
      onClick={clickHandler}
      ref={dropdownRef}
    >
      <div
        className="customDropDownSelection__selection"
        style={{ width: `${maxLength * 14.3}px` }}
      >
        <p className="customDropDownSelection__text">{dropdownList[0].name}</p>
        <RiArrowDropDownLine
          fontSize={25}
          color={displayedDropdown === id ? "gray" : "inherit"}
        />
      </div>
      {displayedDropdown === id && (
        <CustomDropdownList
          dropdownList={dropdownList}
          setDropdownList={setDropdownList}
        />
      )}
    </div>
  );
}

export default CustomDropdownSelection;
