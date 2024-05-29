import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <>
      <header className="header bg-green-600 absolute w-full shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link className="text-white" to=""><b>LOGO</b></Link>
            </div>
            <ul className="flex">
              <Link className="m-4 text-white" to="/">HOME</Link>
              <Link className="m-4 text-white" to="/signin">SIGN IN</Link>
              <Link className="m-4 text-white" to="/signup">SIGN UP</Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
