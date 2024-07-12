import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleSignUp(e) {
    e.preventDefault();

    console.log("hello");

    // sign up code by google firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // register success
        console.log(user.accessToken);
        toast.success("Register successfully.", { position: "top-right" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //register failed
        toast.error(errorMessage, { position: "top-right" });
      });
    setUser({ email: "", password: "" });
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">SIGN UP</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              REGISTER
            </button>
          </div>
        </form>
        <div className="new-user flex justify-between text-sm mt-4">
          <span>Already Registered ?</span>
          <Link to={"/"} className="text-blue-500">
            Login here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
