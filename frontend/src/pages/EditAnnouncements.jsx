import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ImCross } from 'react-icons/im'
import axios from "axios"
import { URL } from "../url"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const EditAnnouncement = () => {

  const announcementId = useParams().id
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const fetchAnnouncement = async () => {
    try {
      const res = await axios.get(URL + "/api/announcements/" + announcementId)
      setTitle(res.data.title)
      setDesc(res.data.desc)


    }
    catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const announcement = {
      title,
      desc,
      username: user.username,
      userId: user._id

    }

    
    //announcement upload

    try {
      const res = await axios.put(URL + "/api/announcements/" + announcementId, announcement, { withCredentials: true })
      navigate("/announcements/announcement/" + res.data._id)
      // console.log(res.data)

    }
    catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    fetchAnnouncement()
  }, [announcementId])

  
  return (
    <div>
      <Navbar />
      <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Update a announcement</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter announcement title' className='px-4 py-2 outline-none bg-slate-200 rounded-l border-spacing-0' />
    
          
          <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={8} cols={30} className='px-4 py-2 outline-none bg-slate-200 rounded-xl' placeholder='Enter announcement description' />
          <button onClick={handleUpdate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg rounded-lg hover:bg-blue-500 hover:text-red-500'>Update</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}

export default EditAnnouncement