# AI Interview Practice Platform

An AI-powered interview practice application that helps users prepare for technical interviews through interactive Q&A sessions with intelligent feedback.

## 🌐 Live Demo

[View Live App](#) **

## ✨ Features

### Core Functionality
- **AI-Powered Responses**: Real-time responses using Google's Gemini AI
- **Multiple Chat Sessions**: Create and manage multiple interview practice sessions
- **Persistent Storage**: All conversations saved locally and persist across sessions
- **Real-time Chat Interface**: Smooth, responsive chat experience with loading indicators
- **Markdown Support**: AI responses rendered with proper formatting

### User Experience
- **Session Management**: 
  - Create new chat sessions
  - Switch between different interview sessions
  - Delete unwanted conversations
  - Edit chat titles for better organization
- **Smart UI**:
  - Collapsible sidebar for better screen space
  - Scrollable chat history
  - Loading states ("AI is thinking...")
  - Responsive design for all devices

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Context API** - Global state management
- **Google Gemini AI** - AI-powered responses
- **localStorage** - Data persistence
- **React Markdown** - Rich text rendering
- **Tailwind CSS** - Styling
- **DaisyUI** - UI components
- **Vite** - Build tool
- **nanoid** - Unique ID generation

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/lezyCoder/ai-interview-platform.git

# Navigate to project directory
cd ai-interview-platform

# Install dependencies
npm install

# Create .env file
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 🔑 Getting an API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Add the key to your `.env` file

## 🎯 Key Learning Outcomes

This project helped me master:

### Context API & State Management
- Creating and providing context across the application
- Managing complex nested state (conversations with messages)
- Synchronizing state across multiple components
- Implementing centralized state management patterns

### AI Integration
- Working with Google Gemini API
- Handling async AI responses
- Error handling for API calls
- Streaming responses in real-time

### Advanced React Patterns
- Context API for global state
- Custom hooks potential
- Component composition
- Lifting state effectively
- Managing side effects with useEffect

### Data Persistence
- localStorage for client-side storage
- Serializing/deserializing complex data structures
- Maintaining data integrity across sessions
- Efficient state synchronization

### UX/UI Implementation
- Chat interface design
- Responsive sidebar navigation
- Smooth transitions between chats
- Overflow handling with scrolling

## 📂 Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation and chat list
│   ├── Navbar.jsx            # Title bar with edit functionality
│   ├── ChatScreen.jsx        # Main chat interface
│   └── utility/
│       └── AI.js             # Gemini AI integration
├── ChatContext.jsx           # Global state management
├── App.jsx                   # Root component
└── main.jsx                  # Entry point
```

## 🚀 How It Works

### Data Structure
```javascript
// Conversations structure
[
  {
    id: "unique-id",
    title: "Interview Practice Session",
    timestamp: 1234567890,
    messages: [
      { id: "msg-1", user: "human", text: "What is React?", timestamp: ... },
      { id: "msg-2", user: "ai", text: "React is...", timestamp: ... }
    ]
  }
]
```

### State Flow

1. User creates new chat → Context creates conversation object
2. User sends message → Added to current conversation
3. AI processes → Response added to same conversation
4. All changes → Saved to localStorage
5. Switch chats → Context updates current chat ID
6. UI updates → All components re-render with new data

## 🎨 Features Breakdown

### Context API Implementation
- Centralized state management for all conversations
- Seamless data flow between Sidebar, Navbar, and ChatScreen
- Automatic localStorage synchronization
- Clean separation of concerns

### AI Integration
- Async API calls to Google Gemini
- Error handling with user-friendly messages
- Loading states for better UX
- Markdown rendering for formatted responses

### Chat Management
- Create unlimited chat sessions
- Switch between conversations instantly
- Edit chat titles inline

## 🔮 Future Enhancements

- Voice input for questions
- Code editor for coding questions
- Export chat history
- Interview analytics and insights
- Question categories and difficulty levels
- Timed interview mode
- Multi-language support
- Dark/light theme toggle
- Delete conversations with confirmation
- Auto-scroll to latest message

## 👨‍💻 Author

**LezyCoder**
- GitHub: [@lezyCoder](https://github.com/lezyCoder)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgment
- AI responses powered by [Google Gemini](https://ai.google.dev/)
- UI components from [DaisyUI](https://daisyui.com/)
- Markdown rendering by [react-markdown](https://github.com/remarkjs/react-markdown)

  ## Images 
<img width="1897" height="782" alt="image" src="https://github.com/user-attachments/assets/c4126864-e8a7-4bd8-9034-688e4e3b23b0" />

