import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import {URL} from "../url"

const Menu = ()=>{
    const {user}=useContext(UserContext)
    const {setUser}=useContext(UserContext)

    const handleLogout=async()=>{
        try{
            const res = await axios.get(URL+"/api/auth/logout",{withCredentials: true})
            console.log(res)
            setUser(null)
            window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4 md:right-32">
            {!user && <h1 className="text-sm text-white cursor-pointer hover:text-gray-500">Login</h1>}
            {!user && <h1 className="text-sm text-white cursor-pointer hover:text-gray-500">Register</h1>}
            {user && <h1 className="text-sm text-white cursor-pointer hover:text-gray-500">Profile</h1>}
            {user && <h1 className="text-sm text-white cursor-pointer hover:text-gray-500">Write</h1>}
            {user && <h1 className="text-sm text-white cursor-pointer hover:text-gray-500">My-blogs</h1>}
            {user && <h1 onClick={handleLogout} className="text-sm text-white cursor-pointer hover:text-gray-500">Log out</h1>}
        </div>
    )
}

export default Menu