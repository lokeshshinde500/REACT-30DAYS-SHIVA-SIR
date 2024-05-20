import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {

    e.preventDefault()
    console.log(email, password)

    if (email === "" || password === "") {
      alert("please,fill all input fields")
    } else {
      const user = localStorage.setItem("user", JSON.stringify({ email, password }))
      alert("Register successfully :)")
      navigate("/signin")
    }

    setEmail("")
    setPassword("")

  }


  return (
    <>
      <section className="section-sign-up">
        <div className="sign-up-item">

          <div className="sign-up-title">
            <h4 className="text-center">SIGN UP</h4>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>

            <div className="input-group">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" />
            </div>

            <div className="submit-btn text-center">
              <button className="btn" type="submit">sign up</button>
            </div>

          </form>

        </div>
      </section>
    </>
  )
};
