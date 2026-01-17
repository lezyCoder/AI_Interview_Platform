import { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { RiChatNewLine } from "react-icons/ri";
import { VscNewFolder } from "react-icons/vsc";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);

  const MenuItem = ({ icon:Icon, label }) => {
    return (
      <button
        className={`flex text-center items-center gap-4  w-full font-thin text-xl py-2 hover:bg-gray-500 rounded`}>
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
            <MenuItem icon={RiChatNewLine} label="NewChat" />
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
                className="flex justify-between items-center text-gray-500 text-sm py-2"
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                <p>Chats</p>
                <RiArrowDropDownLine className="text-xl" />
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
