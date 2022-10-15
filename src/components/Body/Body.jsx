import React from "react"
import './index.css'// our styling
import { useState, useEffect } from 'react'


// getting varible from the main function
// then just need props , shorthand for properties
// props.{PROPS NAME}
export function Body(props) {
    const [count, setCount] = useState(0)

    return (
        <div className="body">
            <h1>How to Use</h1>
            <ol>
                <li>key in the NFT full name: "NARU01156" OR just the number "1156"</li>
                <li>press "Submit" to show NFT data</li>
                <li>Hit "SNIPE"  to allow auto buy with smart contract(WIP)</li>

            </ol>
        </div>
    )
}