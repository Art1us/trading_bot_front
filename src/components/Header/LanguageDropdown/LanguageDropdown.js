import React, { useEffect, useRef } from "react";
import "./LanguageDropdown.css";
import russianLanguageImg from "../../../assets/pictures/languageFlags/russian-language.png";
import englishLanguageImg from "../../../assets/pictures/languageFlags/english-language.png";

function LanguageDropdown({ setDisplayDropdown }) {
  const languageDropdownRef = useRef();

  useEffect(() => {
    function closeDropdown(e) {
      if (e.target !== languageDropdownRef.current) {
        setDisplayDropdown(false);
      }
    }
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  function mouseLeaveHandler() {
    setTimeout(() => {
      setDisplayDropdown(false);
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
          <div
            className="languageDropdown__languageRow"
            onClick={() => setDisplayDropdown(false)}
          >
            <img
              className="languageDropdown__languageImg"
              src={englishLanguageImg}
              alt="English"
            />
            <p className="languageDropdown__selectLanguage">English</p>
          </div>
          <div
            className="languageDropdown__languageRow"
            onClick={() => setDisplayDropdown(false)}
          >
            <img
              className="languageDropdown__languageImg"
              src={russianLanguageImg}
              alt="russian"
            />
            <p className="languageDropdown__selectLanguage">Russian</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageDropdown;
