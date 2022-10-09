import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'

export function Forms() {
    const [isHover, toggleState] = useState(false)
    function handleSubmit() {
        alert("HI there")
    }
    function handleHover() {
        toggleState(true)
        console.log("fck u")

    }
    function handleLeave() {
        toggleState(false)
        console.log("fck off")
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="NFT name" className="input" />
                <button onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleSubmit} className="submit">
                    <div>{isHover && <text className="mouseHoverText">Hunt!</text>}</div>
                    <div>{!isHover && <text className="mouseLeaveText">Submit!</text>}</div>
                </button>

            </div>
        </div>
    )

}