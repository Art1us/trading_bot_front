import React from "react";
import "./CustomDropdownList.css";

function CustomDropdownList({ list, setList }) {
  function clickHandler(item) {
    setList((prev) => {
      const restListItems = prev.filter(
        (listItem) => listItem.id !== item.id
      );
      return [item, ...restListItems];
    });
  }

  return (
    <ul className="customDropdownList">
      {list.slice(1).map((item) => (
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
