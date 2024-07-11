import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Action";

export default function SignIn() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSignIn(e) {
    e.preventDefault();

    // Sign in code
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const token = user.accessToken;
        dispatch(login(token));
        toast.success("Login successfully", {
          position: "top-center",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
          position: "top-center",
        });
      });
  }

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        toast.success("Login successfully", {
          position: "top-center",
        });
        console.log(token);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(`${errorMessage}`, {
          position: "top-center",
        });
        // ...
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-4"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <GoogleButton onClick={loginWithGoogle} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
