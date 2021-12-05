import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

function Login({ displaySignup, displayCard }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorAlert, setErrorAlert] = useState('')
  const login = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        displayCard()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setErrorAlert(errorCode + errorMessage)
      })
  }

  const logout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <>
      <h1>Log in</h1>
      <p>E-mail</p>
      <input
        type="text"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      ></input>
      <p>Password</p>
      <input
        type="password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      ></input>
      <p style={{ color: 'red' }}>{errorAlert}</p>
      <button onClick={login}>Log in</button>
      <p>Don't have an account?</p>
      <button onClick={displaySignup}>Sign up</button>
      <button onClick={logout}>Log out</button>
    </>
  )
}

export default Login
