import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {

  const [message , setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!message) return
    await sendMessage(message);
    setMessage("")
  }


  return (
    <>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="border rounded-lg bg-gray-700 border-gray-600 text-sm text-white p-1 w-full block"
            placeholder="Send a message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-2">
            {loading ? <span className="loading loading-spinner"></span> : <BsSend/>} 
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
