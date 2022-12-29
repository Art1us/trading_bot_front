import React from "react";
import "./CustomDropdownList.css";

function CustomDropdownList({ list, setList }) {
  function clickHandler(item) {
    setList((prev) => {
      const restListItems = prev.filter(
        (listItem) => listItem !== item
      );
      return [item, ...restListItems];
    });
  }

  return (
    <ul className="customDropdownList">
      {list.slice(1).map((item) => (
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
