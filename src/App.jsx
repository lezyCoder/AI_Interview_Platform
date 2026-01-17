import ChatScreen from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";

const App = () => {
  
  return (
    <div className="w-full h-screen flex">
      <div className="flex w-full ">
        <Sidebar />
        <ChatScreen />
      </div> 
    </div>
  );
};

export default App;
