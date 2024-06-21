
const Message = () => {
  return (
    <div className="chat chat-end text-sm">
      <div className="chat-image avatar">
        <div className="rounded-full w-10 ">
          <img
            alt="Tailwind CSS chat bubble component"
            src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
        </div>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
      <div className="chat-footer opacity-30 text-slate-200">Seen at 12:46</div>
    </div>
  );
};

export default Message;

