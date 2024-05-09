import { useEffect, useState } from "react"

export default function Home() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch((error) => console.log(error))
    }, [])

    function getId(id) {
        console.log(id)
        const data = users.find((v, i) => v.id == id);
        setUpdate(data)
        setName(data.name)
        setEmail(data.email)
    }

    async function updateUser() {

        if (name === "" || email === "") {
            alert("Please,fill all input fields !")
        } else {
            await fetch(`http://localhost:8000/users/${update.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name: name, email: email })
            })
                .then(data => {
                    alert("user updated successfully :) ")
                })
                .catch((error) => console.log(error))
            
                window.location.reload()
        }

    }

    return (
        <>
            <section className="section-card py">
                <div className="section-card-title text-center">
                    <h2>USERS DETAIL</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            users.map((v, i) => {
                                return (
                                    <div className="w-4">
                                        <div className="card-item">
                                            <div className="card-content">
                                                <h5>Id : {v.id}</h5>



                                                {/* edit name */}
                                                {
                                                    update && update.id === v.id ? (
                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                                                    ) : (
                                                        <h5>Name :  {v.name}</h5>
                                                    )
                                                }

                                                {/* edit email */}
                                                {
                                                    update && update.id === v.id ? (
                                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                                                    ) : (
                                                        <h5>Email :  {v.email}</h5>
                                                    )
                                                }

                                                {/* edit and update btn */}
                                                {
                                                    update && update.id === v.id ? (
                                                        <button onClick={updateUser} type="button">Update</button>
                                                    ) : (
                                                        <button onClick={() => getId(v.id)} type="submit">Edit</button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )

}
