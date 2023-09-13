import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from 'react-icons/fa'
import Menu from "./Menu";

const Navbar = () => {

  return (
    <div className="flex items-center justify-between px-6 md:px[200px] py-4">
      <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">Blog Market</Link></h1>
      <div className="flex items-center justify-center space-x-0">
        <p><BsSearch /></p>
        <input className="px-3 outline-none" placeholder="search a post" type="text"></input>
      </div>
      <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
        <h3><Link to="/write">Write</Link></h3><h3><Link to="/login">Login</Link></h3>
        <div>
          <p className="relative cursor-pointer"><FaBars /></p>

        </div>:<h3><Link to="/register">Register</Link></h3>

      </div>
      <div className="text-lg md:hidden">
        <p className="relative cursor-pointer"><FaBars /></p>

      </div>


    </div>
  );
}

export default Navbar;