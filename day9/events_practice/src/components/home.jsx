import { useState } from "react";

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    const getData = (event) => {
        event.preventDefault()
        console.log("email ", email);
        console.log("password ", password);
    }

    const getName = (name) => {
        setName(name)
        console.log("name : ",name);
    }

    
   

    return (
        // onclick onchange onsubmit
        <>
            
            {/* onchange onsubmit events*/}
            <form onSubmit={getData} className="basicForm">
                
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" /><br/>
        
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" /><br/><br />
    
                <button type="submit">submit</button>
                
            </form>

            {/* onchange event */}
            <input type="text" value={name} onChange={(e)=>getName(e.target.value)} placeholder="name" />
    
            <h1>hello react</h1>
            <h2>{count}</h2>
            <button className="btn" type="button" onClick={()=>setCount(count+1)}>increase</button>
            <button className="btn" type="button" onClick={()=>setCount(count-1)}>decrease</button>
        </>
    );
}





export default Home;