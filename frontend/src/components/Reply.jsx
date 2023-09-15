import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";
import { URL } from "../url";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Reply = ({ c, post, updatedReply, onReplyUpdate }) => {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedReply, setEditedReply] = useState(updatedReply);

  const deleteReply = async (id) => {
    try {
      await axios.delete(URL + "/api/replies/" + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateReply = async (id) => {
    try {
      await axios.put(
        URL + "/api/replies/" + id,
        { reply: editedReply },
        { withCredentials: true }
      );

      // Notify the parent component about the update
      onReplyUpdate(c._id, editedReply); // Pass the reply id and edited reply

      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
          {user?._id === c?.userId ? (
            <div className="flex items-center justify-center space-x-2">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedReply}
                    onChange={(e) => setEditedReply(e.target.value)}
                  />
                  <button onClick={() => updateReply(c._id)}>Save</button>
                </>
              ) : (
                <>
                  <p className="cursor-pointer" onClick={() => setIsEditing(c._id)}>
                    <MdEdit />
                  </p>
                  <p className="cursor-pointer" onClick={() => deleteReply(c._id)}>
                    <MdDelete />
                  </p>
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="px-4 mt-2">{isEditing ? "" : c.reply}</p>
    </div>
  );
};

export default Reply;
