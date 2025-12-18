import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container" data-theme={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
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
