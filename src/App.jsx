import ChatScreen from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";
import { ChatProvider } from '../src/Context/ChatContext.jsx';

const App = () => {
  return (
    <ChatProvider>
      <div className="w-full h-screen flex">
        <div className="flex w-full">
          <Sidebar />
          <ChatScreen />
        </div>
      </div>
    </ChatProvider>
  );
};

export default App;