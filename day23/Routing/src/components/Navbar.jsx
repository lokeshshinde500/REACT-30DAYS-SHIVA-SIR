import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contextProvider/AuthContextProvider";


export default function Navbar() {
    const { logout, isAuth } = useContext(authContext)
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
                                        {!isAuth && <li><Link className="btn" to="/login">LOGIN</Link></li>}
                                        {!isAuth && <li><Link className="btn" to="/signUp">SIGN UP</Link></li>}
                                        {
                                            isAuth && <li><Link className="btn" onClick={logout} to="login">LOGOUT</Link></li>
                                        }
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
