import React from "react"
import { useContext } from "react"

import { Navigate } from "react-router-dom"
import { authContext } from "../contextProvider/AuthContextProvider"



export default function PrivateRoutes({ children }) {

    const { isAuth } = useContext(authContext)

    if (!isAuth) {
        alert("login required !")
        return <Navigate to={"/login"} />
    }


    return (
        <>
            {children}
        </>
    )

};

