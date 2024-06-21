
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className="input input-sm input-bordered rounded-full" />
        <button type="submit"  className='btn btn-circle btn-sm text-white bg-sky-500'>
        <IoSearchSharp className="w-5 h-5 outline-none" />
        </button>
    </form>
  )
}
 
export default SearchInput