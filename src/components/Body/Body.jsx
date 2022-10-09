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
            <h1>Why learn React?</h1>
            <ol>
                <li>Need for backend to work</li>
                <li>May get a full stack job</li>
                <li>Passed props: {props.number}</li>

            </ol>
        </div>
    )
}