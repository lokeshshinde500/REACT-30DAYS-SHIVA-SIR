import React from "react"

import { Navigate } from "react-router-dom"



export default function PrivateRoutes({ child }) {

    let isAuthenticatedUser = false

    if (!isAuthenticatedUser) {
        return <Navigate to={"/login"} />
    } 


    return (
        <>
            {child}
        </>
    )

};

