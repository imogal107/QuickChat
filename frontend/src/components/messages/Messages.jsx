import { useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message"
import { useEffect } from "react";

const Messages = () => {

  const {loading,messages} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"});
    }  , 100)
  },[messages])

  return (
    <div className="px-4 overflow-auto flex-1">
     
    {!loading && messages.length > 0 && messages.map((message)=>(
      <div  key={message._id} ref={lastMessageRef}>
        <Message  message = {message} />
      </div>
    ))}

    {loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx}/>)}

    {!loading && messages.length===0 && 
    (<p className="text-center text-green-100"> Send a message to start the conversation
    </p>) }
    </div>
  )
}

export default Messages