import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((store) => store.isAuth);

  if (!isAuth) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
