import { useNavigate, useParams } from "react-router-dom"
import Reply from "../components/Reply"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import axios from "axios"
import { URL, IF } from "../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"


const forumDetails = () => {

    const forumId = useParams().id
    const [forum, setforum] = useState({})
    const { user } = useContext(UserContext)
    const [replies, setReplies] = useState([])
    const [reply, setReply] = useState("")
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()


    const fetchforum = async () => {
        try {
            const res = await axios.get(URL + "/api/forums/" + forumId)
            // console.log(res.data)
            setforum(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDeleteforum = async () => {

        try {
            const res = await axios.delete(URL + "/api/forums/" + forumId, { withCredentials: true })
            console.log(res.data)
            navigate("/")

        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchforum()

    }, [forumId])

    const fetchforumReplies = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + "/api/replies/forum/" + forumId)
            setReplies(res.data)
            setLoader(false)

        }
        catch (err) {
            setLoader(true)
            console.log(err)
        }
    }

    useEffect(() => {
        fetchforumReplies()

    }, [forumId])

    const forumReply = async (e, replyId) => {
        e.preventDefault();
        try {
            console.log(replyId)
            if (replyId) {
                await axios.put(
                    URL + "/api/replies/" + replyId,
                    { reply: reply },
                    { withCredentials: true }
                );

                // Find the updated reply and replace it in the replies state
                const updatedReplies = replies.map((c) =>
                    c._id === replyId ? { ...c, reply: reply } : c
                );

                setReplies(updatedReplies);
            } else {
                const response = await axios.post(
                    URL + "/api/replies/create",
                    { reply: reply, author: user.username, forumId: forumId, userId: user._id },
                    { withCredentials: true }
                );

                // Add the new reply to the replies state
                const newReply = response.data;
                setReplies([...replies, newReply]);
            }

            // Clear the reply input
            setReply(""); // Clear the reply input by setting it to an empty string

            // Notify the Reply component to update
            setUpdatedReply(reply);
        } catch (err) {
            console.log(err);
        }
        window.location.reload(true);
    };





    return (
        <div>
            <Navbar />
            {loader ? <div className="h-[80vh] flex justify-center items-center w-full"><Loader /></div> : <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">{forum.title}</h1>
                    {user?._id === forum?.userId && <div className="flex items-center justify-center space-x-2">
                        <p className="cursor-pointer" onClick={() => navigate("/edit/" + forumId)} ><BiEdit /></p>
                        <p className="cursor-pointer" onClick={handleDeleteforum}><MdDelete /></p>
                    </div>}
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@{forum.username}</p>
                    <div className="flex space-x-2">
                        <p>{new Date(forum.updatedAt).toString().slice(0, 15)}</p>
                        <p>{new Date(forum.updatedAt).toString().slice(16, 24)}</p>
                    </div>
                </div>
                <img src={IF + forum.photo} className="w-full  mx-auto mt-8" alt="" />
                <p className="mx-auto mt-8">{forum.desc}</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        {forum.categories?.map((c, i) => (
                            <>
                                <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
                            </>

                        ))}

                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Replies:</h3>
                    {replies?.map((c) => (
                        <Reply
                            key={c._id}
                            c={c}
                            forum={forum}
                            onReplyUpdate={(replyId, editedReply) => {
                                // Find and update the reply in the replies state
                                const updatedReplies = replies.map((reply) =>
                                    reply._id === replyId
                                        ? { ...reply, reply: editedReply }
                                        : reply
                                );
                                setReplies(updatedReplies);
                            }}
                        />
                    ))}
                </div>
                {/* write a reply */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input onChange={(e) => setReply(e.target.value)} type="text" placeholder="Write a reply" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
                    <button onClick={forumReply} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Reply</button>
                </div>
            </div>}
            <Footer />
        </div>
    )
}

export default forumDetails