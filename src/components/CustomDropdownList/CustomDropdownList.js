import React from "react";
import "./CustomDropdownList.css";

function CustomDropdownList({ dropdownList, setDropdownList }) {
  function clickHandler(item) {
    setDropdownList((prev) => {
      const newDropdownList = prev.filter(
        (listItem) => listItem.id !== item.id
      );
      return [{ ...item }, ...newDropdownList];
    });
  }

  return (
    <ul className="customDropdownList">
      {dropdownList.slice(1).map((item) => (
        <li
          className="customDropdownList__item"
          key={item}
          onClick={() => clickHandler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CustomDropdownList;
