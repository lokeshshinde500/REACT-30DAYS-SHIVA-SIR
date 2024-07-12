import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
          <header className="bg-indigo-500 text-white w-full">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <div className="logo">
                  <Link to={"/"} className="text-xl font-bold">
                    LOGO.com
                  </Link>
                </div>
                <nav>
                  <ul className="flex space-x-4">
                    <li>
                      <Link to={"/home"} className="hover:text-gray-300">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="hover:text-gray-300">
                        SIGN IN
                      </Link>
                    </li>
                    <li>
                      <Link to={"/signup"} className="hover:text-gray-300">
                        SIGN UP
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-300">LOGOUT</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </>
      );
      
}
