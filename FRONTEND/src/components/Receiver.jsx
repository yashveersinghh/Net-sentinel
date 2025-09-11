export default function Receiver({ messages }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-2">Receive</h2>
      <ul className="space-y-2">
        {messages.length === 0 ? (
          <li className="text-gray-500 italic">No requests yet</li>
        ) : (
          messages.map((msg, idx) => (
            <li
              key={idx}
              className="p-2 bg-gray-200 rounded-lg"
            >
              {msg}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}