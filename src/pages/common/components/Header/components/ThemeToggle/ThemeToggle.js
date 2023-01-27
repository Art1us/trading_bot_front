import React from "react"
import ReactSwitch from "react-switch"

import "./ThemeToggle.css"
import { BsFillSunFill } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

import { useThemeContext } from "hooks/contextHooks/useThemeContext/useThemeContext"

function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext()

  return (
    <div className="themeToggle__container">
      <ReactSwitch
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(prev => !prev)}
        offColor="#323232"
        onColor="#fff"
        onHandleColor="#323232"
        offHandleColor="#fff"
        handleDiameter={20}
        uncheckedIcon={<BsFillMoonFill className="themeToggle__icon--night" />}
        checkedIcon={<BsFillSunFill className="themeToggle__icon--day" />}
        uncheckedHandleIcon={
          <BsFillSunFill className="themeToggle__handleIcon--day" />
        }
        checkedHandleIcon={
          <BsFillMoonFill className="themeToggle__handleIcon--night" />
        }
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0"
        height={23}
        width={45}
        className="react-switch"
        id="material-switch"
      />
    </div>
  )
}

export default ThemeToggle
