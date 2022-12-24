import React, { useEffect, useRef } from "react";
import "./LanguageDropdown.css";
import russianLanguage from "../../../assets/pictures/languageFlags/russian-language.png";
import englishLanguage from "../../../assets/pictures/languageFlags/english-language.png";

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

  function leaveMouseHandler() {
    setTimeout(() => {
      setDisplayDropdown(false);
    }, 1000);
  }

  return (
    <div
      ref={languageDropdownRef}
      className="languageDropdown"
      onClick={(e) => e.stopPropagation()}
      onMouseLeave={leaveMouseHandler}
    >
      <div className="languageDropdown__container">
        <h3 className="languageDropdown__title">Select Language</h3>
        <div className="languageDropdown__selectLanguageContainer">
          <div
            className="languageDropdown__englishContainer"
            onClick={() => setDisplayDropdown(false)}
          >
            <img
              className="languageDropdown__languageImg"
              src={englishLanguage}
              alt="English"
            />
            <p className="languageDropdown__selectLanguage">English</p>
          </div>
          <div
            className="languageDropdown__russianContainer"
            onClick={() => setDisplayDropdown(false)}
          >
            <img
              className="languageDropdown__languageImg"
              src={russianLanguage}
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
