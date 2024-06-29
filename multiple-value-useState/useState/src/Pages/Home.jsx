import React, { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
  
    e.preventDefault();
    console.log("email ", login.email);
    console.log("password ", login.password);
    
    // making objects empty 
    setLogin({
      email: "",
      password: "",
    });
  }

  return (
    <>
      <section className="section-form">
        <div className="form-item">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              placeholder="Enter email"
            />
            <br />
            <input
              type="text"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              placeholder="Enter password"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
