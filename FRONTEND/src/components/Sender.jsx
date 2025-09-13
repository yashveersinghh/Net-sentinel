import { useState } from "react";

export default function Sender({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };
  

  return (
    <div className="p-3 bg-gray-100 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-5">Send Request</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send Request"
        className="border p-3 rounded w-full mb-2"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}
