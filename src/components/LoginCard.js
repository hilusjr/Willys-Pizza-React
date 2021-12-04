import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import '../css/Login.css'

function LoginCard({ loginDisplayed, displayLogin }) {
  return (
    <div
      className="log-in-bg"
      style={loginDisplayed ? { display: 'block' } : { display: 'none' }}
    >
      <div className="log-in-card">
        <i className="fa-solid fa-xmark" onClick={displayLogin}></i>
        <Login />
        <Signup />
      </div>
    </div>
  )
}

export default LoginCard
