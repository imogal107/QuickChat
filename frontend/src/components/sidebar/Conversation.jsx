
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
  return (

    <>
    <div className={`flex cursor-pointer hover:bg-sky-500 rounded py-1 items-center p-2 gap-2 
        ${isSelected ? "bg-sky-500" : ""}`} onClick={()=>setSelectedConversation(conversation)}>
        <div className="avatar online">
            <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between ">
                <p className="font-bold text-gray-200 text-sm">{conversation.fullName}</p>
                <span className="text-x1">{emoji}</span>
            </div>
        </div>
    </div>
        {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </>
  )
}

export default Conversation