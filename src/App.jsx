import { useState, useEffect } from 'react'
import './App.css'// our styling

// NOte for importing Named export (not export default, need to put in {})
import { Navbar } from "./components/Navbar/Navbar.jsx" // importing local module
import { Footer } from "./components/Footer/Footer.jsx" // importing local module
import { Body as Body } from "./components/Body/Body.jsx" // importing local module
import NftMetaData from "./components/NftMetaData/NftMetaData.jsx"
import { Forms } from "./components/Forms/Forms.jsx" // importing local module
import { Dice } from "./components/Dice/Dice.jsx" // importing local module

// making a Component
// similar to function
// need to start with Capital letters
// call using <Component/>
//{JScode}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Body number={1} />
      <Footer />
      <Dice />
      <NftMetaData punchline="LOL" setup="setups" />
    </div>
  )
}

export default App
