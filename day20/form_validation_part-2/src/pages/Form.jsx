// form validation show error on UI using span tag

import React, { useEffect } from 'react'
import { useState } from "react"

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("users")) || []
        setUsers(userData)
    }, [])



    function handleSubmit(event) {

        event.preventDefault()

        console.log(users)

        const errorObj = {}

        if (!name) {
            errorObj.name = "name required !"
        }
        else if (!email) {
            errorObj.email = "email required !"
        }
        else if (!password) {
            errorObj.password = "password required !"
        }

        if (Object.keys(errorObj).length !== 0) {
            setError(errorObj)
        } else {
            users.push({ name, email, password })
            localStorage.setItem("users", JSON.stringify(users))
            setName("")
            setEmail("")
            setPassword("")
            setError({})
        }
    }


    return (
        <>
            <section className="section-form">
                <div className="form-item">
                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label>Name</label><br />
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" /><br />
                            {error.name && <span className="error">{error.name}</span>}
                        </div>

                        <div className="input-group">
                            <label>Email</label><br />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" /><br />
                            {error.email && <span className="error">{error.email}</span>}
                        </div>

                        <div className="input-group">
                            <label>Password</label><br />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" /><br />
                            {error.password && <span className="error">{error.password}</span>}
                        </div>

                        <div className="submit-btn text-center">
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}