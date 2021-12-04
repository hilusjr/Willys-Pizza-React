import React, { useState } from 'react'
import './css/index.css'
import Navbar from './components/Navbar'
import Startpage from './components/Startpage'
import HotDeals from './components/HotDeals'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginCard from './components/LoginCard'
import Order from './components/Order'

function App() {
  const [loginDisplayed, setLoginDisplayed] = useState(false)
  const displayLogin = () => {
    setLoginDisplayed(!loginDisplayed)
  }
  return (
    <>
      <Navbar displayLogin={displayLogin} />
      <Startpage />
      <HotDeals />
      <Menu />
      <About />
      <Contact displayLogin={displayLogin} />
      <Footer />
      <LoginCard loginDisplayed={loginDisplayed} displayLogin={displayLogin} />
      <Order />
    </>
  )
}

export default App
