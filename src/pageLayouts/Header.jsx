import React from "react"
export function Header() {
    return (
        <header>
            <img src={reactLogo} className='logo' />
            <ul className='nav-items'>
                <li>Connect Wallet</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
        </header>
    )
}