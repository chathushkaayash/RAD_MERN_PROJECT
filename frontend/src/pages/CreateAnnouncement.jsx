
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Createannouncement = () => {
   
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const {user}=useContext(UserContext)

    const navigate=useNavigate()


    const handleCreate=async (e)=>{
        e.preventDefault()
        const announcement={
          title,
          desc,
          username:user.username,
          userId:user._id
        }

        //announcement upload
        // console.log(announcement)
        try{
          const res=await axios.post(URL+"/api/announcements/create",announcement,{withCredentials:true})
          navigate("/announcements/announcement/"+res.data._id)
          // console.log(res.data)

        }
        catch(err){
          console.log(err)
        }
    }



  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Create an announcement</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter announcement title' className='px-4 py-2 outline-none'/>
          <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={10} className='px-4 py-2 outline-none' placeholder='Enter announcement description'/>
          <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default Createannouncement