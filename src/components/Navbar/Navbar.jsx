import React from "react"
import reactLogo from './assets/react.svg'
import naruHehe from './assets/NaruHehe.jpeg'

import './index.css'// our styling 
export function Navbar() {
    return (
        <nav className="navbar">
            <img src={naruHehe} className='logo' />
            <ul className='nav-items'>
                <li>Connect Wallet</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
        </nav>
    )
}