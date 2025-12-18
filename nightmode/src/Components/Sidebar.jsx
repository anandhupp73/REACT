import React, { useState } from 'react';
import './sidebar.css';
import ReactLogo from '../assets/react.svg';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="top-section">
                <img src={ReactLogo} alt="logo" className="logo" />
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isOpen ? '⟨' : '⟩'}
                </button>
            </div>
            <ul className="menu">
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Messages</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}
