import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './css/index.css'
import Navbar from './components/Navbar'
import Startpage from './components/Startpage'
import HotDeals from './components/HotDeals'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginCard from './components/LoginCard'
import Profile from './components/Profile'
import Order from './components/Order'

function App() {
  const [cardVisible, setCardVisible] = useState(false)
  const [profileVisible, setProfileVisible] = useState(false)
  const [orderVisible, setOrderVisible] = useState(false)
  const [loginDisplayed, setLoginDisplayed] = useState(true)
  const [userName, setUserName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

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

  const displayProfile = () => {
    setProfileVisible(!profileVisible)
  }
  const displayOrder = () => {
    setOrderVisible(!orderVisible)
  }

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user === null) return
    setLoggedIn(true)
    loggedIn ? setUserName(user.displayName) : setUserName('')
  })

  return (
    <>
      <Navbar
        displayCard={displayCard}
        loggedIn={loggedIn}
        displayProfile={displayProfile}
        displayOrder={displayOrder}
        userName={userName}
        // userData={userData}
      />
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
      <Profile
        loggedIn={loggedIn}
        displayProfile={displayProfile}
        profileVisible={profileVisible}
        setLoggedIn={setLoggedIn}
        userName={userName}
        setUserName={setUserName}
      />
      <Order displayOrder={displayOrder} orderVisible={orderVisible} />
    </>
  )
}

export default App
