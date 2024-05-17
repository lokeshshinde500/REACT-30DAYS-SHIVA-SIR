import { Routes, Route, } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import SignUp from "./SignUp"
import PrivateRoutes from "../components/PrivateRoutes"

export default function AllRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>}></Route>
                <Route path="/about" element={<PrivateRoutes><About /></PrivateRoutes>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
        </>
    )
}
