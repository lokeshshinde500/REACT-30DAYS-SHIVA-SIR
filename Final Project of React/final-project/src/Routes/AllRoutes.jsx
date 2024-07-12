
import {Route, Routes} from "react-router-dom"
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import Home from "../Pages/Home"
import PrivateRoutes from "./PrivateRoutes"

export default function AllRoutes(){


    return (
        <>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/Home" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            </Routes>
        </>
    )
}