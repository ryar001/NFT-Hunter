import React from "react"
export default function Joke(props) {
    const pokemon = ["Bulba", "CharChar", "Squirt"]
    // mapping function to easily apply React to each element in the arrays
    const toReact = pokemon.map(poke => { return <p>{poke}</p> })
    return (
        <div>
            {/* check if property exist before rendering*/}
            {props.punchline && <p>Passed props punchline: {props.punchline}</p>}

            {props.setup && <p>Passed props setup: {props.setup}</p>}
            Pokemon : {toReact}

        </div>
    )
}