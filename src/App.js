import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { getDatabase, ref, child, get } from 'firebase/database'
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
  const [loginDisplayed, setLoginDisplayed] = useState(true)
  // const [userId, setUserId] = useState('')
  // const [userData, setUserData] = useState([])
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

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    user != null ? setLoggedIn(true) : setLoggedIn(false)
    loggedIn ? setUserName(user.displayName) : setUserName('')
    // loggedIn ? setUserId(user.uid) : console.log('no user logged in')
    // const dbRef = ref(getDatabase())
    // get(child(dbRef, `users/${userId}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val())
    //     } else {
    //       console.log('No data available')
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  })

  return (
    <>
      <Navbar
        displayCard={displayCard}
        loggedIn={loggedIn}
        displayProfile={displayProfile}
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
      />
      <Order />
    </>
  )
}

export default App
