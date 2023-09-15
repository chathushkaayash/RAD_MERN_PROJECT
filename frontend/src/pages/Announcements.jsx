import axios from "axios"
import Footer from "../components/Footer"
import HomeAnnouncements from "../components/HomeAnnouncements"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"


const Announcements = () => {

    const { search } = useLocation()
    // console.log(search)
    const [announcements, setAnnouncements] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
    const { user } = useContext(UserContext)
    // console.log(user)

    const fetchAnnouncements = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + "/api/Announcements/" + search)
            // console.log(res.data)
            setAnnouncements(res.data)
            if (res.data.length === 0) {
                setNoResults(true)
            }
            else {
                setNoResults(false)
            }
            setLoader(false)

        }
        catch (err) {
            console.log(err)
            setLoader(true)
        }
    }

    useEffect(() => {
        fetchAnnouncements()

    }, [search])



    return (

        <>
            <Navbar />
            <div className="px-8 md:px-[200px] min-h-[80vh]">
                {loader ? <div className="h-[40vh] flex justify-center items-center"><Loader /></div> : !noResults ?
                    announcements.map((announcement) => (
                        <>
                            <Link key={"hi"} to={user ? `/announcements/announcement/${announcement._id}` : "/login"}>
                                <HomeAnnouncements key={announcement._id} announcement={announcement} />
                            </Link>
                        </>

                    )) : <h3 className="text-center font-bold mt-16">No announcements available</h3>}
            </div>
            <Footer />
        </>

    )
}

export default Announcements