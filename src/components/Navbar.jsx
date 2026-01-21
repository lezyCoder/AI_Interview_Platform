import { useContext, useState } from "react";
import { ChatContext } from '../Context/ChatContext.jsx'

const Navbar = () => {
  const { currentTitle, updateChatTitle } = useContext(ChatContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(currentTitle);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tempTitle.trim()) return;
    updateChatTitle(tempTitle);
    setIsEditing(false);
  };

  return (
    <nav className="w-full bg-zinc-900 text-center p-4 border-b-2 border-gray-700">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-gray-700 text-center outline-none bg-transparent"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleSubmit}
            autoFocus
          />
        </form>
      ) : (
        <p
          className="cursor-pointer hover:text-gray-400"
          onClick={() => {
            setTempTitle(currentTitle);
            setIsEditing(true);
          }}>
          {currentTitle}
        </p>
      )}
    </nav>
  );
};

export default Navbar;