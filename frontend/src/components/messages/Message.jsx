
import {useAuthContext} from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const formattedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";

  return (
    <div className={`chat ${chatClassName} text-sm`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-10 ">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}/>
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-30 text-slate-200">{formattedTime}</div>
    </div>
  );
};

export default Message;

