import { useState } from "react"
import { FaGear } from "react-icons/fa6";
import { RiChatNewLine } from "react-icons/ri";
import { VscNewFolder } from "react-icons/vsc";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
const Sidebar = () => {
  const [isOpen, setOpen] = useState(true)
  return (

    <aside >
      <div className={`${isOpen ? "lg:w-48" : "lg:w-14 "} md:w-36 flex flex-col items-center justify-between bg-base-300 h-screen p-4 gap-2 border border-gray-700`} onClick={() => setOpen(!isOpen)}>
        <div className="navigation flex justify-between items-center w-full" >
          <h1>AI</h1>
          <button className={`${isOpen ? "block" : "hidden"}`} onClick={() => setOpen(!isOpen)} >
            <BsLayoutSidebarReverse />
          </button>
        </div>

        <div className="container h-96 flex justify-between flex-col ">
          <div className="operations-container ">
            {isOpen ? <p className="flex text-center items-center  gap-4   w-full font-thin text-xl py-2"><RiChatNewLine className="font-bold text-2xl" />New Chat</p> : <RiChatNewLine className="font-bold text-2xl" />}
            {isOpen ? <p className="flex text-center items-center  gap-4   w-full font-thin text-xl py-2"><IoSearch className="font-bold text-2xl" />Search</p> : <IoSearch className="font-bold text-2xl" />}

            {isOpen ? <p className="flex text-center items-center  gap-4   w-full font-thin text-xl py-2"><VscNewFolder className="font-bold text-2xl" />Projects</p> : <VscNewFolder className="font-bold text-2xl" />}
          </div>

          <div className={`chat-container ${isOpen ? "block" : "hidden"}`}>
            <p>Chat1</p>
            <p>Chat2</p>
          </div>
        </div>

        <div className="footer ">
          {
            isOpen ? <p className="flex text-center items-center gap-4  w-full font-thin text-xl "><FaGear className="font-bold text-2xl" />Settings</p> : <FaGear className="font-bold text-2xl" />
          }
        </div>
      </div>
    </aside >

  )
}

export default Sidebar