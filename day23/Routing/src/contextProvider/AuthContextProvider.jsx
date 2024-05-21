import { createContext, useState } from "react";


export const authContext = createContext()

export default function AuthContextProvider({ children }) {

  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)


  function login(token) {

    if (token) {
      setIsAuth(true)
      setToken(token)
    } else {
      setIsAuth(false)
      setToken(null)
    }

  }

  function logout() {
    if (!token) {
      alert("already logout!")
    } else {
      setIsAuth(false)
      setToken(null)
    }
  }


  return (
    <>
      <authContext.Provider value={{ isAuth, login, logout }}>
        {children}
      </authContext.Provider>
    </>
  )

}
