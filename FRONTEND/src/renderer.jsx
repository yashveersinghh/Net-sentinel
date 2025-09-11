import './index.css';
import { createRoot } from 'react-dom/client';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import { useState } from 'react';
const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-2 gap-6 w-3/4">
        <Sender onSend={handleSend} />
        <Receiver messages={messages} />
      </div>
    </div>
    </>
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App