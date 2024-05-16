import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSignUp(event) {
        event.preventDefault()

        localStorage.setItem("user", JSON.stringify({ email, password }))
        navigate("/login")

        setEmail("")
        setPassword("")
    }


    return (
        <>
            <section className="section-form">

                <div className="form-item">

                    <div className="section-form-title">
                        <h2 className="text-center">SIGN UP</h2>
                    </div>

                    <form onSubmit={handleSignUp}>

                        <div className="input-group">
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email" />
                        </div>

                        <div className="input-group">
                            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                        </div>

                        <div className="submit-btn text-center">
                            <button type="submit">Register</button>
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}