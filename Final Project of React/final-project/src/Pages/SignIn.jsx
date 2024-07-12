import { useState } from "react";
import GoogleButton from "react-google-button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Action";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((store) => store);
  console.log(store);

  const [user, setUser] = useState({ email: "", password: "" });

  function handleSignIn(e) {
    e.preventDefault();
    // sign in code by google firebase

    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        dispatch(login(user.accessToken));
        navigate("/home");
        // console.log("login token - ", user.accessToken);
        // toast.success("login successfully.", { position: "top-right" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, { position: "top-right" });
      });

    setUser({
      email: "",
      password: "",
    });
  }

  function loginWithGoogle() {
    // google login code
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        dispatch(login(user.accessToken));
        console.log("login token - ", token);
        toast.success("login successfully.", { position: "top-right" });
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage, { position: "top-right" });
      });
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">SIGN IN</h2>
        <form onSubmit={handleSignIn}>
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
          <div className="flex items-center justify-center mb-5">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              LOGIN
            </button>
          </div>
          <div className="google-btn flex items-center justify-center mb-4">
            <GoogleButton
              label="Sign in with Google"
              onClick={loginWithGoogle}
            />
          </div>
          <div className="new-user flex justify-between text-sm" >
            <span>New User ?</span>
            <Link to={"/signup"} className="text-blue-500">Register here</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
