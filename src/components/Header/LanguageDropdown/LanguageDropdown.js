import React, { useEffect, useRef } from "react";
import "./LanguageDropdown.css";
import russianLanguageImg from "../../../assets/pictures/languageFlags/russian-language.png";
import englishLanguageImg from "../../../assets/pictures/languageFlags/english-language.png";

function LanguageDropdown({ setDisplayDropdownActive }) {
  const languageDropdownRef = useRef();

  const languageDropdownItems = [
    { id: 1, value: "English", icon: englishLanguageImg },
    { id: 2, value: "Russian", icon: russianLanguageImg },
  ];

  useEffect(() => {
    function closeDropdown(e) {
      if (e.target !== languageDropdownRef.current) {
        setDisplayDropdownActive(false);
      }
    }
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  function mouseLeaveHandler() {
    setTimeout(() => {
      setDisplayDropdownActive(false);
    }, 1000);
  }

  return (
    <div
      ref={languageDropdownRef}
      className="languageDropdown"
      onClick={(e) => e.stopPropagation()}
      onMouseLeave={mouseLeaveHandler}
    >
      <span className="languageDropdown__topContainer--triangle languageDropdown__topContainer--triangleOuter"></span>
      <span className="languageDropdown__topContainer--triangle languageDropdown__topContainerBorder--triangle"></span>
      <div className="languageDropdown__container">
        <div className="languageDropdown__selectLanguageContainer">
          {languageDropdownItems.map((item) => (
            <div
              key={item.id}
              className="languageDropdown__languageRow"
              onClick={() => setDisplayDropdownActive(false)}
            >
              <img
                className="languageDropdown__languageImg"
                src={item.icon}
                alt={item.value}
              />
              <p className="languageDropdown__selectLanguage">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageDropdown;
