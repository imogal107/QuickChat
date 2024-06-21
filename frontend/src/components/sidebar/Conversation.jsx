

const Conversation = () => {
  return (

    <>
    <div className="flex cursor-pointer hover:bg-sky-500 rounded py-1 items-center p-2 gap-2">
        <div className="avatar online">
            <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between ">
                <p className="font-bold text-gray-200 text-sm">John Doe</p>
                <span className="text-x1">🎃</span>
            </div>
        </div>
    </div>
        <div className="divider my-0 py-0 h-1"/>
    </>
  )
}

export default Conversation