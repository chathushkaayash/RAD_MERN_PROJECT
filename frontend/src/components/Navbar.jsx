import { Link } from "react-router-dom";
import {BsSearch } from "react-icons/bs";
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import Menu from "./Menu";

const Navbar = () => {

  const [menu,setMenu]=useState(false)

  const showMenu=()=>{
    setMenu(!menu)
  }
  

    const {user} = useContext(UserContext)
    
    return (
      <div className="flex items-center justify-between px-6 md:px[200px] py-4">
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">Blog Market</Link></h1>
        <div className="flex items-center justify-center space-x-0">
        <p><BsSearch/></p>
        <input className="px-3 outline-none" placeholder="search a post" type="text"></input>
        </div>
        <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
        {user? <h3><Link to="/write">Write</Link></h3>:<h3><Link to ="/login">Login</Link></h3>}
        {user? <div onClick={showMenu}>
          <p className="relative cursor-pointer"><FaBars/></p>
          {menu && <Menu/>}
          </div>:<h3><Link to= "/register">Register</Link></h3>}

        </div>
        <div onClick={showMenu} className="text-lg md:hidden">
      <p className="relative cursor-pointer"><FaBars/></p>
      {menu && <Menu/>}
      </div>

        
      </div>
    );
  }
  
  export default Navbar;