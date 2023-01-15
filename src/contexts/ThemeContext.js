import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext({})

function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    JSON.parse(localStorage.getItem("isDarkTheme"))
  )

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light")
    JSON.stringify(localStorage.setItem("isDarkTheme", isDarkTheme))
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
