import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'
import emailAlert  from "./emailAlert.jsx"
export function Forms() {
    const [isHover, toggleState] = useState(false)
    const [userInput,setUserInput] = useState("")
    const [nftData, setData] = useState(null)
    const cloudSvc = "https://cloudflare-ipfs.com/ipfs/"
    const [nftImg,setNftImg]=useState("src/components/Navbar/assets/NaruHehe.jpeg")
    // mapping function to easily apply React to each element in the arrays
    // willl be replace with props.ipfs to display he nft
    //read files
    function displayMetaData(data){
        let tmp=Object.keys(data).map(attr=>{return <div key={attr} className='metadata'>{attr}: {data[attr]}</div>})
        setData(tmp)
    }
    async function pullData(nftName){
        // nftJson may be reqplace with blockfrost api call or will cont use with full JSONcontaining all Narus/nft set
        let nftJson = "src/assets/nftJson/Yummi-Universe-Naru.json"
        var tmp
        var ifps
        var nft
        tmp=await fetch(nftJson) 
        emailAlert(nftName)
        tmp=await tmp.text()
        
        tmp = await JSON.parse(tmp)
        console.log()
        console.log(`attr check: ${Object.keys(tmp[nftName].onchain_metadata.attributes)}`)
        // getting the ifps info for the img
        nft=tmp[nftName]
        ifps=nft.onchain_metadata.image
        let i=ifps.indexOf('//')
        ifps=ifps.slice(i+2,ifps.length)
        setNftImg(cloudSvc+ifps)
        // tmp = Object.entries(tmp)
        displayMetaData(tmp[nftName].onchain_metadata.attributes)
        console.log(ifps)
        }
    // first alphabet check
    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
      }
    
    async function handleSubmit() {
        var tmp
        // if user put Naru
        if (isLetter(userInput.substring(0, 1))) {
            tmp=userInput.toLowerCase()
            tmp = tmp.substring(0, 1).toUpperCase() + tmp.substring(1, tmp.length+1)  
        }
        else {
            // add the 0 in front before ADDING Naru
            // eg 1156 -> 01156 -> Naru01156
            if (userInput.length<5){
                let diff = 5-userInput.length

                tmp=userInput
                for (let i = 0; i < diff; i++) {
                    tmp="0"+tmp
                    console.log(tmp)
                  }
                tmp="Naru"+tmp
                console.log(`final tmp: ${tmp}`)
                
            }
            else{
                tmp="Naru"+userInput
            }
        }
    
        setUserInput(tmp)
        pullData(tmp) // proceed to pull meta data and attribute
    }
    function handleHover() {
        toggleState(true)
        console.log("button on")

    }
    function handleLeave() {
        toggleState(false)
        console.log("button off")
    }
    async function handleText(inputText) {
        setUserInput(inputText.target.value)
        
        console.log(userInput)
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="NFT name" className="input" onChange={handleText}/>
                <button onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleSubmit} className="submit">
                    <div>{isHover && <div className="mouseHoverText">Hunt!</div>}</div>
                    <div>{!isHover && <div className="mouseLeaveText">Submit!</div>}</div>
                </button>
            </div>
            <div><img src={nftImg} className='naru' /></div>
            {nftData!=null && nftData}
            

        </div>
    )

}