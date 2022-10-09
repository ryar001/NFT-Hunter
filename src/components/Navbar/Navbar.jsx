import React from "react"
import reactLogo from './assets/react.svg'
import './index.css'// our styling 
export function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} className='logo' />
            <ul className='nav-items'>
                <li>Connect Wallet</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
        </nav>
    )
}