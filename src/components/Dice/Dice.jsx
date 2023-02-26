import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'

export function Dice() {
    const [res, rollDice] = useState(1)
    const [isHover, toggleState] = useState(false)


    function handleSubmit() {
        var tmp = Math.floor((Math.random() * 10) % 6)
        rollDice(tmp + 1)
        alert(`Dice Roll: ${res}`)
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
                    <div>{isHover && <text className="mouseHoverText">Hit!</text>}</div>
                    <div>{!isHover && <text className="mouseLeaveText">Roll!</text>}</div>
                </button>

            </div>
        </div>
    )

}