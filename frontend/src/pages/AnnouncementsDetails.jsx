import { useNavigate, useParams } from "react-router-dom"
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import axios from "axios"
import { URL, IF } from "../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"


const AnnouncementDetails = () => {

    const announcementId = useParams().id
    const [announcement, setAnnouncement] = useState({})
    const { user } = useContext(UserContext)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()


    const fetchAnnouncement = async () => {
        try {
            const res = await axios.get(URL + "/api/announcements/" + announcementId)
            // console.log(res.data)
            setAnnouncement(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDeleteAnnouncement = async () => {

        try {
            const res = await axios.delete(URL + "/api/announcements/" + announcementId, { withCredentials: true })
            console.log(res.data)
            navigate("/")

        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchAnnouncement()

    }, [announcementId])


    return (
        <div className="min-h-screen">
            <Navbar />
            {loader ? <div className="h-[80vh] flex justify-center items-center w-full"><Loader /></div> 
            : <div className="min-h-[380px] px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">{announcement.title}</h1>
                    {user?._id === announcement?.userId && <div className="flex items-center justify-center space-x-2">
                        <p className="cursor-pointer" onClick={() => navigate("/editannouncement/" + announcementId)} ><BiEdit /></p>
                        <p className="cursor-pointer" onClick={handleDeleteAnnouncement}><MdDelete /></p>
                    </div>}
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@{announcement.username}</p>
                    <div className="flex space-x-2">
                        <p>{new Date(announcement.updatedAt).toString().slice(0, 15)}</p>
                        <p>{new Date(announcement.updatedAt).toString().slice(16, 24)}</p>
                    </div>
                </div>
                <img src={IF + announcement.photo} className="w-full  mx-auto mt-8" alt="" />
                <p className="mx-auto mt-8">{announcement.desc}</p>
                {console.log(user)}


            </div>}
            

            <Footer />
           
        </div>
    )
}

export default AnnouncementDetails