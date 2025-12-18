import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-area">
        <Sidebar />
        <div className="page-content">
          <h1>Welcome to the Dashboard</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
