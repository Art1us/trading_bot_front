import React from "react";
import "./LanguageDropdown.css";
import russianLanguage from "../../../assets/pictures/languageFlags/russian-language.png";

function LanguageDropdown() {
  return (
    <div className="languageDropdown">
      <div className="languageDropdown__container">
        <h3 className="languageDropdown__title">Select Language</h3>
        <div className="languageDropdown__selectLanguageContainer">
          <img
            src={russianLanguage}
            alt="russian"
            className="languageDropdown__selectLanguage--russinLanguage"
          />
          <p className="languageDropdown__selectLanguage">Russian</p>
          <p className="languageDropdown__selectLanguage">English</p>
        </div>
      </div>
    </div>
  );
}

export default LanguageDropdown;
