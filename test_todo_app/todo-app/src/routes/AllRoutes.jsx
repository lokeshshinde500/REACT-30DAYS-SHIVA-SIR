
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

export default function AllRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </>
  )
}
