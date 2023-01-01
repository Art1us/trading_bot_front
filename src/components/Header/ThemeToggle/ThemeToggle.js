import React from "react"
import "./ThemeToggle.css"
import ReactSwitch from "react-switch"
import { BsFillSunFill } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"
import { useContext } from "react"
import { Context } from "../../../Context"

function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = useContext(Context)

  return (
    <div className="themeToggle__container">
      <ReactSwitch
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(prev => !prev)}
        offColor="#000"
        onColor="#fff"
        onHandleColor="#000"
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
