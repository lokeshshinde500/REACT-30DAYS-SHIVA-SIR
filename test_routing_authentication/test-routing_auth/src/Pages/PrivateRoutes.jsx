
import { Navigate } from "react-router-dom"

export default function PrivateRoutes({ child }) {

  const isLogin = false

  if (!isLogin) {
    return <Navigate to="/signIn" />
  }

  return (
    <>
      {child}
    </>
  )
};
