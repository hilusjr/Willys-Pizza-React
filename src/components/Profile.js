import React from 'react'
import { getAuth, signOut } from 'firebase/auth'

import '../css/Profile.css'

function Profile({
  displayProfile,
  profileVisible,
  setLoggedIn,
  userName,
  setUserName,
}) {
  const logout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        setLoggedIn(false)
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div
      className="profile-card-bg"
      style={profileVisible ? { display: 'block' } : { display: 'none' }}
    >
      <div className="profile-card">
        <i className="fa-solid fa-xmark" onClick={displayProfile}></i>
        <h1>Hi {userName}</h1>
        <h3>Your info:</h3>
        <h4>Points:</h4>
        <p>Points: $points</p>
        <h4>Adress:</h4>
        <p>Street: $street</p>
        <p>City: $city</p>
        <h4>Hot Deals chosen just for you!</h4>
        <div className="profile-hot-deal">Lorem Ipsum 10$</div>
        <div className="profile-hot-deal">Ipsum Lorem 12$</div>
        <div className="profile-hot-deal">Lorra Ipssa 14$</div>
        <h4>Wanna order online?</h4>
        <button>order</button>
        <button
          onClick={() => {
            logout()
            displayProfile()
            setUserName(null)
          }}
        >
          log out
        </button>
      </div>
    </div>
  )
}

export default Profile
