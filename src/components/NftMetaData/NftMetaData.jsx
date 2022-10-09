import React from "react"
import { useState, useEffect } from 'react'

import './index.css'// our styling 

import nftJson from "./assets/nftJson/Yummi-Universe-Naru.json";
export default function NftMetaData(props) {
    const pokemon = ["Bulba", "CharChar", "Squirt"]
    const [nftData, setData] = useState("")
    // mapping function to easily apply React to each element in the arrays
    const toReact = pokemon.map(poke => { return <p>{poke}</p> })
    // willl be replace with props.ipfs to display he nft
    const naru = "https://cloudflare-ipfs.com/ipfs/Qmd4PLrGV2xT8Q7ZasBxBmP4YVDz4cMzjppUoK8a7qQAs6"
    //read files

    function test(){
        setData(nftJson.Naru01156)
    }
    // nftSets = JSON.parse(nftSets)
    // nftSets = Object.entries(nftSets)

    return (
        <div>
            <img src={naru} className='naru'/>
            {/* check if property exist before rendering*/}
            {props.punchline && <p>Passed props punchline: {props.punchline}</p>}

            {props.setup && <p>Passed props setup: {props.setup}</p>}
            Pokemon : {toReact}
            <div>
                {test}
            </div>
        </div>
    )
}