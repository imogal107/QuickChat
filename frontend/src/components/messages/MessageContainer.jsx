import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  
  const { selectedConversation, setSelectedConversation } = useConversation();

   useEffect(() => {
      //cleanup function (unmounts component)
    return () => setSelectedConversation(null)
    
  }, [setSelectedConversation])
  

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-gray-950 font-bold">To : </span>
            <span className="text-gray-800 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center text-gray-200 font-semibold flex flex-col items-center gap-2 sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};
