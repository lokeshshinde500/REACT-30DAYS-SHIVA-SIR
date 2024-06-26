import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { authContext } from "../contextProvider/AuthContextProvider"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(authContext)
    const navigate = useNavigate()

    function handleSignUp(event) {
        event.preventDefault()

        const verifyUser = JSON.parse(localStorage.getItem("user"))

        if (email === verifyUser.email && password === verifyUser.password) {

            fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            })
                .then(res => res.json())
                .then((data) => {
                    console.log("token generated : ", data.token)
                    login(data.token)
                    alert("Welcome to our website :) ")
                    navigate("/")
                })



        } else {
            alert("Invalid Credential :(")
        }

        setEmail("")
        setPassword("")
    }


    return (
        <>
            <section className="section-form">

                <div className="form-item">

                    <div className="section-form-title">
                        <h2 className="text-center">LOGIN</h2>
                    </div>

                    <form onSubmit={handleSignUp}>

                        <div className="input-group">
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email" />
                        </div>

                        <div className="input-group">
                            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                        </div>

                        <div className="submit-btn text-center">
                            <button type="submit">sign in</button>
                        </div>

                        <div className="sign-up-group text-center">
                            <span>New user ? <Link to={"/signUp"}>sign up</Link></span>
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}