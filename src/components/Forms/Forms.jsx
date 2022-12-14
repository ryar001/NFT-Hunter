import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import emailAlert  from "./emailAlert.jsx"
import Cards from "./Cards.jsx"
import nftJson from "./../../assets/nftJson/Yummi-Universe-Naru.json"

// get item list for autocomplete search bar
function getItemList() {
    var newItems=[]
    let i = 0
    for (let Nftname in nftJson){
            // console.log("N: ",Nftname)
            newItems.push({
                id:i,
                name:Nftname})
            i+=1     
        }
    return newItems  
}

export function Forms() {
    const [isHover, toggleState] = useState(false)
    const [userInput,setUserInput] = useState("")
    const [showCard,toggleCard]=useState(false)
    const [nftData, setData] = useState(null)
    const cloudSvc = "https://ipfs.io/ipfs/"
    // const [nftImg,setNftImg]=useState("src/components/Navbar/assets/NaruHehe.jpeg")
    const [nftImg,setNftImg]=useState("")
    // mapping function to easily apply React to each element in the arrays
    // willl be replace with props.ipfs to display he nft
    //read files

    ////////////////////
    
    const fuseOptions={ 
        keys:["name"],
        maxPatternLength:3               }
    var newItems=getItemList()
    const resultStringKeyName="name"
    const styling={
        height: "44px",
        border: "1px solid #dfe1e5",
        borderRadius: "24px",
        backgroundColor: "white",
        boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
        hoverBackgroundColor: "#eee",
        color: "#212121",
        fontSize: "16px",
        fontFamily: "Arial",
        iconColor: "grey",
        lineColor: "rgb(232, 234, 237)",
        placeholderColor: "grey",
        clearIconMargin: '3px 14px 0 0',
        searchIconMargin: '0 0 0 16px'
        }
    
    
        const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log("typing: ",string)
        }
    
        const handleOnHover = (result) => {
        // the item hovered
    
        console.log(`hover: ${result}`)
        }
    
    
        const handleOnFocus = () => {
        console.log('Focused')
        }


    ////////////////////
    // Note if set state that req prev state, use a function as input to the state-setting fcuntion instead
    
  
    function displayMetaData(name,data){
        
        let attrData=data[name].onchain_metadata.attributes
        
        attrData=Object.assign({"NFT Name":name},attrData)
        console.log("LLL: ",attrData)
        let tmp=Object.keys(attrData).map(attr=>{return <div key={attr} className='metadata'>{attr}: {attrData[attr]}</div>})
        setData(tmp)
    }
    
    async function pullData(nftName){
        // nftJson may be reqplace with blockfrost api call or will cont use with full JSONcontaining all Narus/nft set
        var ifps
        var nft

        // emailAlert(nftName)

        console.log(`attr check: ${nftName in nftJson} `)
        if (nftName in nftJson){
            toggleCard(true)
            // getting the ifps info for the img
            nft=nftJson[nftName]
            ifps=nft.onchain_metadata.image
            let i=ifps.indexOf('//')
            ifps=ifps.slice(i+2,ifps.length)
            let img=cloudSvc+ifps
            // let resp=await fetch(cloudSvc+ifps)
            // let blob=await resp.blob()
            // let reader=new FileReader()
            // var imageFromBase64
            // reader.readAsDataURL(blob)
            // reader.onloadend =()=>{
            //     const imgData=reader.result
            //     // console.log(imgData)
            //     imageFromBase64 = new Image()
            //     imageFromBase64.src=imgData
            // }
            // console.log(imageFromBase64)
            // setNftImg("src/components/Navbar/assets/NaruHehe.jpeg")
            window.addEventListener("load", event => {
                var image = document.querySelector('img');
                var isLoaded = image.complete && image.naturalHeight !== 0;
                alert(isLoaded);
            });
            setNftImg(img)
            displayMetaData(nftName,nftJson)
            // displayMetaData(nftName,nftJson[nftName].onchain_metadata.attributes)
            console.log(cloudSvc+ifps)
            }
        else{
            alert(`${nftName} is not a valid NFT`)
            toggleCard(false)

        }
        }
      

    async function handleSubmit(item) {
        pullData(item.name) // proceed to pull meta data and attribute
    }
    function handleHover() {
        toggleState(true)
        console.log("button on")

    }
    function handleLeave() {
        toggleState(false)
        console.log("button off")
    }
 
    return (
        <div>
            <div className="form">
            <ReactSearchAutocomplete
                items={newItems}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleSubmit}
                onFocus={handleOnFocus}
                autoFocus
                resultStringKeyName={resultStringKeyName}
                styling={styling}
                fuseOptions={fuseOptions}
              />
                <button onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={console.log("Hunt on!")} className="form-submit">
                    {isHover && <div className="form-mouseHoverText">Hunt!</div>}
                    {!isHover && <div className="form-mouseLeaveText">Hunt!</div>}
                </button>
            </div>
            {<div className="forms-cardArea"> 
                {showCard && <Cards nftData={nftData} nftImg={nftImg} />}
                {/* <Cards nftData={nftData} nftImg={nftImg} /> */}
            </div>}


        </div>
    )

}