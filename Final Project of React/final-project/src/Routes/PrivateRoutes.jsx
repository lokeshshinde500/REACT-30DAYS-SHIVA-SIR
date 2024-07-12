import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  
  const isAuth = useSelector((store) => store.isAuth);
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
