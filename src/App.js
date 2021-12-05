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
  const [cardVisible, setCardVisible] = useState(false)
  const [loginDisplayed, setLoginDisplayed] = useState(true)

  const displayCard = () => {
    setCardVisible(!cardVisible)
    displayLogin()
  }

  const displayLogin = () => {
    setLoginDisplayed(true)
  }
  const displaySignup = () => {
    setLoginDisplayed(false)
  }

  return (
    <>
      <Navbar displayCard={displayCard} />
      <Startpage />
      <HotDeals />
      <Menu />
      <About />
      <Contact displayCard={displayCard} displaySignup={displaySignup} />
      <Footer />
      <LoginCard
        cardVisible={cardVisible}
        displayCard={displayCard}
        loginDisplayed={loginDisplayed}
        displaySignup={displaySignup}
        displayLogin={displayLogin}
      />
      <Order />
    </>
  )
}

export default App
