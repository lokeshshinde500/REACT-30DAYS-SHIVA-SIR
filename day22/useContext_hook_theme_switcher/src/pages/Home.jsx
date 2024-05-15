import { useContext } from "react";
import { themeContext } from "../components/ThemeSwitchProvider";

export default function Home() {

    const { theme, switchTheme } = useContext(themeContext)


    return (
        <>
            <div className="box" style={{ backgroundColor: theme ? "black" : "white", height: "100vh" }}>
                <button onClick={switchTheme} type="button">change theme</button>
            </div>
        </>
    )

};






