import { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { RiChatNewLine } from "react-icons/ri";
import { VscNewFolder } from "react-icons/vsc";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  // ============ all chats are here ============
  const [allChats, setChats] = useState([
    { id: "a13232211", title: "title1" },
    {
      id: "2232219dn",
      title: "title2",
    },
  ]);
  const [showChats, setShowChats] = useState(true);
  //================ Creating a new chat ====================

  const handleCreateNewChat = (chatTitle) => {
    setChats((prev) => [{ id: nanoid(), title: chatTitle }, ...prev]);
  };

  // ============== Handling crud Operations here ============
  const handleOperations = (e, label) => {
    e.stopPropagation();
    if (label === "New chat") {
      handleCreateNewChat((title = "chattitle"));
    }
    if (label === "Search") {
      return;
    }
    if (label === "Projects") return;
  };

  const MenuItem = ({ icon: Icon, label }) => {
    return (
      <button
        className={`flex text-center items-center gap-4  w-full font-thin text-xl py-2 hover:bg-gray-800 rounded`}
        onClick={(e) => {
          handleOperations(e, label);
        }}>
        <Icon icon={RiChatNewLine} className="text-2xl" />
        {isOpen && <span>{label}</span>}
      </button>
    );
  };
  return (
    <aside>
      <div
        className={`${isOpen ? "lg:w-64" : "lg:w-14 "} md:w-36 flex flex-col items-center justify-between bg-base-500 h-full p-4 gap-2 border border-gray-700`}
        onClick={() => setOpen(!isOpen)}>
        <div className="navigation flex justify-between items-center w-full">
          <h1>AI</h1>
          <button
            className={`${isOpen ? "block" : "hidden"}`}
            onClick={() => setOpen(!isOpen)}>
            <BsLayoutSidebarReverse />
          </button>
        </div>

        <div className="container h-96 flex flex-col ">
          <div className="operations-container ">
            <MenuItem icon={RiChatNewLine} label="New chat" />
            <MenuItem icon={IoSearch} label="Search" />
            <MenuItem icon={VscNewFolder} label="Projects" />
          </div>

          {isOpen && (
            <>
              <div
                className="flex justify-between items-center text-gray-500 text-sm py-2"
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                <p>Projects</p>
                <RiArrowDropDownLine className="text-xl" />
              </div>

              <div
                className="flex flex-col  gap-4 text-gray-500 text-sm py-2"
                onClick={(e) => {
                  (e.stopPropagation(), setShowChats(!showChats));
                }}>
                <div className="chat-heading flex justify-between items-center ">
                  <h1>Chats</h1>
                  <RiArrowDropDownLine className="text-xl" />
                </div>
                <div className="chats-list flex flex-col gap-2 bg-base-400">
                  {showChats &&
                    allChats.map((chat, id) => {
                      return (
                        <p key={id} className=" border-b-2 border-gray-700 py-2 overflow-x-hidden">
                          {chat.title}
                        </p>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="footer ">
          {/* {
            isOpen ? <p className="flex text-center items-center gap-4  w-full font-thin text-xl "><FaGear className="font-bold text-2xl" />Settings</p> : <FaGear className="font-bold text-2xl" />
          } */}
          <MenuItem icon={FaGear} label="Settings" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
