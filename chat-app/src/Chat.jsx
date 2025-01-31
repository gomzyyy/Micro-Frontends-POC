import { useState } from "react";
import "./App.css";
import { useStore } from "store/Store";

function App() {
  const allMessages = useStore().chat.messages;

  const [messages, setMessages] = useState(allMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { userName: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="navbar">ChatApp</div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.userName}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
