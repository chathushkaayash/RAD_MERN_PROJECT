import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comment = ()=>{
    
    return(
        <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg">
                <div className="flex items-center justify-between"> 
                <h3 className="font-bold text-gray-600">@senuputha</h3>
                <div className="flex items-center justify-center space-x-4">
                    <p className="text-sm text-gray-500">09/05/23</p>
                    <p className="text-sm text-gray-500"> 5:48</p>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
                </div>
                <p className="px-4 mt-2">Nice information</p>
                </div>
    )
}

export default Comment;