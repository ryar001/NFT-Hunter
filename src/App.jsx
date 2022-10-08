import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'// our styling
import Header from "./pageLayouts/Header.jsx" // importing local module
import Footer from "./pageLayouts/Footer.jsx" // importing local module
import Body from "./pageLayouts/Body.jsx" // importing local module

// making a Component
// similar to function
// need to start with Capital letters
// call using <Component/>
//{JScode}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
