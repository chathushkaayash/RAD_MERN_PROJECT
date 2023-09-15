import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
const navbtn = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"



const Navbar = () => {


  const [prompt, setPrompt] = useState("")
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const path = useLocation().pathname

  // console.log(prompt)


  const showMenu = () => {
    setMenu(!menu)
  }


  const { user } = useContext(UserContext)


  const handleSearch = event => {
    event.preventDefault();
    navigate(prompt ? "?search=" + prompt : navigate("/"));
  };





  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog App</Link></h1>


      {/* search */}
      {path === "/" && <div className="flex justify-center items-center space-x-0">
        {/* search button */}
        <p onClick={handleSearch} className="cursor-pointer"><BsSearch /></p>
        <form onSubmit={handleSearch}>
          <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text" />
        </form>

      </div>}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">



        {user ?
          user.role === "admin" && path === "/announcements" ?
            <h3 className={navbtn}><Link to="/createannouncement">Make Announcements</Link></h3>
            :
            <>
              <h3 className={navbtn}><Link to="/write">Write</Link></h3>
              <h3 className={navbtn}><Link to="/announcements">Announcements</Link></h3>
            </>

          : <h3 className={navbtn}><Link to="/login">Login</Link></h3>
        }
        {/* {console.log(user)} */}

        {user ? <div onClick={showMenu}>
          <p className="cursor-pointer relative"><FaBars /></p>
          {menu && <Menu />}
        </div> : <h3 className={navbtn}   ><Link to="/register">Register</Link></h3>}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative"><FaBars /></p>
        {menu && <Menu />}
      </div>

    </div>
  )
}

export default Navbar 