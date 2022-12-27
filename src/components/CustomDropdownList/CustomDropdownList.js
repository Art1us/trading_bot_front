import React from "react";
import "./CustomDropdownList.css";

function CustomDropdownList({ dropdownList, setDropdownList }) {

  function clickHandler(item) {
    setDropdownList((prev) => {
      const newDropdownList = prev.filter((li) => li.id !== item.id);
      return [{ ...item }, ...newDropdownList];
    });
  }

  return (
    <ul className="customDropdownList">
      {dropdownList.slice(1).map((item) => (
        <li
          className="customDropdownList__item"
          key={item.id}
          onClick={() => clickHandler(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default CustomDropdownList;
