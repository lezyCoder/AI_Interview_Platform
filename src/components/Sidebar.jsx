import { useState, useContext } from "react";
import { FaGear } from "react-icons/fa6";
import { RiChatNewLine } from "react-icons/ri";
import { VscNewFolder } from "react-icons/vsc";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { ChatContext } from '../Context/ChatContext.jsx'

const Sidebar = () => {
  const [isSideBarOpen, setOpen] = useState(false);
  const [showChats, setShowChats] = useState(true);

  // Get from context
  const { allConversations, currentChatId, createNewChat, switchChat } = useContext(ChatContext);

  const handleOperations = (e, label) => {
    e.stopPropagation();
    if (label === "New chat") {
      createNewChat();
    }
    if (label === "Search") {
      return;
    }
    if (label === "Projects") return;
  };

  const MenuItem = ({ icon: Icon, label }) => {
    return (
      <button
        className={`flex text-center items-center gap-4 w-full font-thin text-xl py-2 hover:bg-gray-800 rounded`}
        onClick={(e) => handleOperations(e, label)}>
        <Icon className="text-2xl" />
        {isSideBarOpen && <span>{label}</span>}
      </button>
    );
  };

  return (
    <aside>
      <div
        className={`${isSideBarOpen ? "lg:w-64" : "lg:w-14"} md:w-36 flex flex-col items-center justify-between bg-base-500 h-full p-4 gap-2 border border-gray-700`}
        onClick={() => setOpen(!isSideBarOpen)}>

        <div className="navigation flex justify-between items-center w-full">
          <h1>AI</h1>
          <button
            className={`${isSideBarOpen ? "block" : "hidden"}`}
            onClick={() => setOpen(!isSideBarOpen)}>
            <BsLayoutSidebarReverse />
          </button>
        </div>

        <div className="container h-96 flex flex-col">
          <div className="operations-container">
            <MenuItem icon={RiChatNewLine} label="New chat" />
            <MenuItem icon={IoSearch} label="Search" />
            <MenuItem icon={VscNewFolder} label="Projects" />
          </div>

          {isSideBarOpen && (
            <>
              <div
                className="flex justify-between items-center text-gray-500 text-sm py-2"
                onClick={(e) => e.stopPropagation()}>
                <p>Projects</p>
                <RiArrowDropDownLine className="text-xl" />
              </div>

              <div
                className="flex flex-col gap-4 text-gray-500 text-sm py-2 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowChats(!showChats);
                }}>
                <div className="chat-heading flex justify-between items-center">
                  <h1>Chats</h1>
                  <RiArrowDropDownLine className="text-xl" />
                </div>

                <div className="chats-list flex flex-col gap-2 bg-base-400 max-h-48 overflow-y-hidden w-full">
                  {showChats &&
                    allConversations.map((chat) => (
                      <div className="chat py-2  flex justify-between items-center w-full border hover:bg-zinc-700 hover:rounded relative">
                        <p
                          key={chat.id}
                          className={`px-1 overflow-hidden cursor-pointer `}
                          onClick={(e) => {
                            e.stopPropagation();
                            switchChat(chat.id);
                          }}>
                          {chat.title}
                        </p>
                        <BsThreeDots className="text-gray-500 text-lg" />

                        <ul className="w-40 h-40  p -2 border rounded absolute bg-base-300 px-1 z-20 top-5 right-3">
                          <li className="p-1">Star</li>
                          <li className="p-1 m-1">Add to Projects</li>
                          <li className="p-1 m-1">Rename</li>
                          <li className="text-red-400  m-1 p-1 rounded hover:bg-red-300 hover:text-amber-50">Delete</li>
                        </ul>

                      </div>
                    ))}
                  {
                    showChats ? allConversations.length === 0 && <p className="text-center text-red-400">No chat found</p> : null
                  }
                </div>
              </div>
            </>
          )}
        </div>

        <div className="footer">
          <MenuItem icon={FaGear} label="Settings" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;