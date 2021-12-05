import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import '../css/Login.css'

function LoginCard({
  cardVisible,
  displayCard,
  loginDisplayed,
  displaySignup,
  displayLogin,
}) {
  return (
    <div
      className="log-in-bg"
      style={cardVisible ? { display: 'block' } : { display: 'none' }}
    >
      <div className="log-in-card">
        <i className="fa-solid fa-xmark" onClick={displayCard}></i>
        {loginDisplayed ? (
          <Login displaySignup={displaySignup} />
        ) : (
          <Signup displayLogin={displayLogin} />
        )}
      </div>
    </div>
  )
}

export default LoginCard
