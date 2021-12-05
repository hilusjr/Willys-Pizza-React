import React from 'react'

function Login({ displaySignup }) {
  return (
    <>
      <h1>Log in</h1>
      <p>Username/E-mail</p>
      <input type="text"></input>
      <p>Password</p>
      <input type="password"></input>
      <button>Log in</button>
      <p>Don't have an account?</p>
      <button onClick={displaySignup}>Sign up</button>
    </>
  )
}

export default Login
