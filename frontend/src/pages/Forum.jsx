import axios from "axios"
import Footer from "../components/Footer"
import HomeForums from "../components/HomeForums"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"
import { Navigate, useNavigate } from 'react-router-dom'


const Forums = () => {

    const { search } = useLocation()
    const [forums, setForums] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
    const [temp, setTemp] = useState("")
    const { user } = useContext(UserContext)

    // create forum
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const navigate = useNavigate()

    const fetchForums = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + "/api/Forums/" + search)
            // console.log(res.data)
            setForums(res.data)
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
        fetchForums()

    }, [search])


    const handleCreate = async (e) => {
        e.preventDefault()
        const forum = {
            title,
            desc,
            username: user.username,
            userId: user._id
        }

        //forum upload
        // console.log(forum)
        try {
            const res = await axios.post(URL + "/api/forums/create", forum, { withCredentials: true })
            // console.log(forum)
            window.location.reload(true)
            // navigate("/forum/")

        }
        catch (err) {
            console.log(err)
        }
    }



    return (

        <>
            <Navbar />
            <div className="flex flex-row">
                <div className="px-8 md:px-[50px] min-h-[60vh] w-[60%]">
                    {loader ? <div className=" flex justify-center items-center"><Loader /></div> : !noResults ?
                        forums.map((forum) => (
                            <>
                                <Link key={"forum"} to={user ? `/forums/forum/${forum._id}` : "/login"}>
                                    <HomeForums key={forum._id} forum={forum} />
                                </Link>
                            </>

                        )) : <h3 className="text-center font-bold mt-16">No forums available</h3>}
                </div>

                {/* create forums */}
                <div className=' md:px-[50px] mt-8 w-[40%]'>
                    <h1 className='font-bold md:text-2xl text-xl '>Create a Fourm</h1>
                    <form className='flex flex-col space-y-4 md:space-y-8 mt-4'>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter forum title' className='px-4 py-2 outline-none bg-slate-200 rounded-lg' />
                        <textarea onChange={(e) => setDesc(e.target.value)} rows={5} cols={10} className='px-4 py-2 outline-none bg-slate-200 rounded-lg' placeholder='Enter forum description' />
                        <button onClick={handleCreate} className='bg-black w-full md:w-[30%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg rounded-xl hover:bg-blue-500 hover:text-red-500'>Create</button>
                    </form>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default Forums