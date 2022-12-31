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

  const firstOption = BOT_OPTIONS[id].filter(
    (item) => item.id === selectedBotSettings[id].id
  );
  const restOptions = BOT_OPTIONS[id].filter(
    (item) => item.id !== selectedBotSettings[id].id
  );
  const optionsList = [...firstOption, ...restOptions];

  const [list, setList] = useState(optionsList);
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
      className="customDropdownSelection"
      onClick={clickHandler}
      ref={dropdownRef}
    >
      <div
        className="customDropdownSelection__container"
        style={{ width: width ? width : "200px" }}
      >
        <p className="customDropdownSelection__text">{list[0].name}</p>
        <RiArrowDropDownLine
          fontSize={25}
          color={displayedDropdown === id ? "gray" : "inherit"}
        />
      </div>
      {displayedDropdown === id && (
        <CustomDropdownList list={list} setList={setList} />
      )}
    </div>
  );
}

export default CustomDropdownSelection;
