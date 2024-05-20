import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signin(params) {

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {

    e.preventDefault()
    console.log(loginEmail, loginPassword)
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)

    if (loginEmail === "" || loginPassword === "") {
      alert("please,fill all input fields")
    } else if (user.email === loginEmail && user.password === loginPassword) {
      alert("welcome to ours website :)")
      navigate("/home")
    } else {
      alert("Invalid credentials !!!")
    }

    setLoginEmail("")
    setLoginPassword("")

  }


  return (
    <>
      <section className="section-sign-in">
        <div className="sign-in-item">

          <div className="sign-in-title">
            <h4 className="text-center">SIGN IN</h4>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="text" placeholder="Email" />
            </div>

            <div className="input-group">
              <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="text" placeholder="Password" />
            </div>

            <div className="submit-btn text-center">
              <button className="btn" type="submit">sign in</button>
            </div>

          </form>

        </div>
      </section>
    </>
  )
};
