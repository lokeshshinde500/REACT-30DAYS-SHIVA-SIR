import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="d-flex align-item-center justify-between">
                        <div className="logo">
                            <Link to="">LOGO</Link>
                        </div>
                        <nav>
                            <ul className="d-flex align-item-center">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <div className="login-resister-btn">
                                    <ul className="d-flex">
                                        <li><Link className="btn" to="/login">LOGIN</Link></li>
                                        <li><Link className="btn" to="signUp">SIGN UP</Link></li>
                                   </ul>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
};
