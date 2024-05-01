import { useState } from "react"

export default function Home() {
    const [username, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function postData(e) {
        e.preventDefault();
        console.log(username, userEmail, password);
      
        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, userEmail, password}),
        })
            .then((response) => {
                response.json();
                alert("data added successfully :)");
                setName("");
                setEmail("");
                setPassword("");
            })
            .then((data) => { console.log(data); })
            .catch((error) => {
                    console.log("fetch error")
             });
       
    }


    return (
        <>
            <form onSubmit={postData}>
               
                <input value={username} onChange={(e) => setName(e.target.value)} placeholder="username" type="text" /><br /><br />
                
                <input value={userEmail} onChange={(e) => setEmail(e.target.value)} placeholder="userEmail" type="text" /><br /><br />
                
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="text" /><br /><br />
                
                <button type="submit">submit</button>
            </form>
        </>
    )
}