import { createContext, useState } from "react"

export const themeContext = createContext()

export default function ThemeSwitchProvider({ children }) {

    const [theme, setTheme] = useState(false)

    function switchTheme() {
        setTheme(!theme)
    }


    return (
        <>
            <themeContext.Provider value={{ theme, switchTheme }}>
                {children}
            </themeContext.Provider>
        </>
    )
}

