import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <>
      <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            className="border rounded-lg bg-gray-700 border-gray-600 text-sm text-white p-2.5 w-full block"
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3">
            <BsSend/> 
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
