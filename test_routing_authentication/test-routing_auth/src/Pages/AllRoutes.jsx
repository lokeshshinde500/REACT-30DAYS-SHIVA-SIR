import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Signin from "./Signin"
import Signup from "./Signup"

import PrivateRoutes from "./PrivateRoutes"

export default function AllRoutes() {


  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes >} />
        <Route path="/about" element={<PrivateRoutes><About /></PrivateRoutes>} />
        <Route path="/contact" element={<PrivateRoutes><Contact /></PrivateRoutes>} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes >
    </>
  )
};
