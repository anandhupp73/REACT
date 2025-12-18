import './navbar.css'
import ReactLogo from '../assets/react.svg'
export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="left">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="center">
                    <div className="search-bar">
                        <input type="text" className="search-input" />
                    </div>
                </div>
                <div className="right">
                    <div className="mode">
                        <button className='modebtn'>Mode</button>
                    </div>
                    <div className="logo">
                        <img src={ReactLogo} alt="react" />
                    </div>
                </div>
            </div>
        </>
    )
}