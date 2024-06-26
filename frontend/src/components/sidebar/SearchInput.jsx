import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault()
  

  if(!search) return
  if(search.length < 3 ) {
    return toast.error("Search term must be atleast 3 characters long");
  }

  const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
  if(conversation){
    setSelectedConversation(conversation)
    setSearch('')
  }
  else{
    return toast.error("No such user exists")
  }

}
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-sm input-bordered rounded-full"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle btn-sm text-white bg-sky-500"
      >
        <IoSearchSharp className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

