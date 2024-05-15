import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import SignUp from "./SignUp"

export default function AllRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
        </>
    )
}
