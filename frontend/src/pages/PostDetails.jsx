
import {BiEdit} from "react-icons/bi";
import {MdDelete} from "react-icons/md";

const PostDetails = () => {
    return(
        <div>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">How to drink water in the correct way</h1>
                    <div className="flex items-center justify-center space-x-2">
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@r_sons</p>
            <div className="flex space-x-2 text-sm">
                <p>09/05/2023</p>
                 <p>11:40</p>        
            </div>
                    
                </div>
                <img src="http://www.debraduffydds.com/wp-content/uploads/2015/01/drinking-water.jpg" className="w-full mx-auto mt-8" alt=""/>
                <p className="mx-auto mt-8">Once upon a time in the quirky town of Hydraville, there lived a an art form, a performance to be enjoyed by all.

One sunny day, as Max was about to sip his first glass of water, he decided to put on or you are about to witness the most spectacular water-drinking extravaganza!"</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Catogaries</p>
                <div className="flex items-center justify-center space-x-2">
                    <div className="px-3 py-1 bg-gray-300 rounded-lg">Tech</div>
                    <div className="px-3 py-1 bg-gray-300 rounded-lg">Ai</div>

                </div>
                
            </div>
                //create a comment 
            <div className="flex flex-col w-full mt-4 md:flex-row">
                <input type="text" placeholder="write a comment" className="border border-black px-4 py-2 mt-4 rounded-lg outline-none md:w-[80%] md:mt-0"/>
                <button className="px-4 py-2 mt-4 text-sm  text-white bg-black rounded-lg md:w-[20%] md:mt-0">Add comment</button>

            </div>
            </div>
        </div>
    )
}

export default PostDetails;