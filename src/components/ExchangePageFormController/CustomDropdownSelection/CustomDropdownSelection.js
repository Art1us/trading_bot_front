import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../../Context";
import "./CustomDropDownSelection.css";
import CustomDropdownList from "./CustomDropdownList/CustomDropdownList";
import { RiArrowDropDownLine } from "react-icons/ri";

function CustomDropdownSelection({
  displayedDropdown,
  setDisplayedDropdown,
  width,
  id,
}) {
  const { selectedBotSettings, setSelectedBotSettings, BOT_OPTIONS } =
    useContext(Context);

  const first = BOT_OPTIONS[id].filter(
    (item) => item === selectedBotSettings[id]
  );
  const second = BOT_OPTIONS[id].filter(
    (item) => item !== selectedBotSettings[id]
  );
  const final = [...first,...second]
  /* const [pass, fail] = a.reduce(([p, f], e) => (e > 5 ? [[...p, e], f] : [p, [...f, e]]), [[], []]); */



  const [list, setList] = useState(final);
  const dropdownRef = useRef();

  useEffect(() => {
    if (selectedBotSettings[id]) {
      setSelectedBotSettings((prev) => ({
        ...prev,
        [id]: list[0],
      }));
    }
  }, [list]);

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
        style={{ width: width ? width : "200px" }}
      >
        <p className="customDropDownSelection__text">{list[0]}</p>
        <RiArrowDropDownLine
          fontSize={25}
          color={displayedDropdown === id ? "gray" : "inherit"}
        />
      </div>
      {displayedDropdown === id && (
        <CustomDropdownList
          dropdownList={list}
          setDropdownList={setList}
        />
      )}
    </div>
  );
}

export default CustomDropdownSelection;
