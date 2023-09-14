import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import Footer from "../components/Footer";
import axios from "axios";
import {URL} from "../url"
import { UserContext } from "../context/UserContext"

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const {setUser} = useContext(UserContext)
    const navigate=useNavigate()

    const handleLogin=async()=>{
        try{
            const res=await axios.post(URL+"/api/auth/login",{email,password}, {withCredentials: true})
            setUser(res.data)
            navigate("/")
        }
        catch(err){
            setError(true)
            console.log(err)
        }
    }

    return (<>
     <div className="flex items-center justify-between px-6 md:px[200px] py-4">
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">Blog Market</Link></h1>
        </div>
    
    <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Log in to your account</h1>
            <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0" type = "text" placeholder="Enter yor email"/>
            <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0" type = "password" placeholder="Enter yor password"/>
            <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">
                Log in
            </button>
            {error && <h3 className="text-sm text-red-500 ">Something went wrong</h3>}
            <div className="flex items-center justify-center space-x-4">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
            </div>


        </div>
        
      </div>
      <Footer   />
      
    </>
      
    );
  }
  
  export default Login;