import { createRoot } from 'react-dom/client';
import './index.css';
const App = () => {
  return (
    <>
      <h1>hi there</h1>
    </>
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App