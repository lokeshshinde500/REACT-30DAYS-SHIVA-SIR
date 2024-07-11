import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </>
  );
}
