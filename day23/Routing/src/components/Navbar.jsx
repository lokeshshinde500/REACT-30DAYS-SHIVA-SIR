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
                            <ul className="d-flex">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="signUp">Sign UP</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
};
