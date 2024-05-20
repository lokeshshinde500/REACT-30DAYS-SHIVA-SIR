import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <>
      <header>
        <div className="container">
          <div className="d-flex space-between align-center">
            <div className="logo">
              <Link to=""><h4>LOGO</h4></Link>
            </div>
            <nav>
              <ul className="d-flex align-center">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link className="btn" to="/signIn">SIGN IN</Link></li>
                <li><Link className="btn" to="signUp">SIGN UP</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
