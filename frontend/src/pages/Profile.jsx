import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"

const Profile = () => {
    return (
        <div>
           <Navbar  />
           <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
            <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
                <h1 className="mb-4 text-xl font-bold">Your Posts: </h1>
                <ProfilePosts   />
                <ProfilePosts   />
                <ProfilePosts   />
                <ProfilePosts   />
                
            </div>
            <div className="sticky md:top-16 flex md:w-[30%] w-full md:items-end justify-start items-start md:justify-end">
                <div className="flex flex-col items-start space-y-4">
                <h1 className="mb-4 text-xl font-bold">Profile</h1>
                <input className="px-4 py-2 text-gray-200 outline-none" placeholder="Your user name" type="text"/>
                <input className="px-4 py-2 text-gray-200 outline-none" placeholder="Your email" type="text"/>
                <input className="px-4 py-2 text-gray-200 outline-none" placeholder="Your password" type="text"/>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 font-semibold text-white bg-black hover:text-black hover:bg-gray-400 rounded-xl">Update</button>
                    <button className="px-4 py-2 font-semibold text-white bg-black hover:text-black hover:bg-gray-400 rounded-xl">Delete</button>
                </div>
                </div>
           
            </div>
                
           </div>
           <Footer />
        </div>
    )
}

export default Profile