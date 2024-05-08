// This is React project about simple form validation using if else. (08 may 2024)

import { useState } from "react"

export default function Home() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function handleForm(e) {
        e.preventDefault();

       if (username == "" || email == ""  || password == "" ) {
           alert("Please, fill all input fields !")
           return false;
        }
        
        console.log(`username : ${username} \nemail : ${email} \npassword : ${password} `)
    }

    return (
        <>
            <section className="form-handle">
                <div className="container">
                    <div className="row">
                        <div className="form">
                            <div className="w-3">
                            <div className="form-item">
                                <form onSubmit={handleForm}>
                                    <table >
                                        <tbody>
                                                 <tr>
                                            <td>
                                                <div className="input-group">
                                                    <label htmlFor="">Enter Username</label><br />
                                                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="input-group">
                                                    <label htmlFor="">Enter Email</label><br />
                                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="input-group">
                                                    <label htmlFor="">Enter Password</label><br />
                                                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"/>
                                                </div>  
                                            </td>
                                        </tr>
                                         <tr align="center">
                                            <td>
                                                <div className="submit-btn">
                                                    <button type="submit">submit</button>
                                                </div>  
                                            </td>
                                        </tr>
                                       </tbody>
                                    </table>
                                </form>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}