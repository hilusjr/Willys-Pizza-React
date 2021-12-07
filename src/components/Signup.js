import React, { useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

function Signup({ displayLogin }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const signup = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        const userId = user.uid
        writeUserData(userId)
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            console.log(error)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  const writeUserData = (userId) => {
    const db = getDatabase()
    set(ref(db, 'users/' + userId), {
      name: username,
      email: email,
      street: street,
      city: city,
    })
  }

  return (
    <>
      <h1>Sign up</h1>
      <p>Username</p>
      <input
        type="text"
        value={username}
        onInput={(e) => setUsername(e.target.value)}
      ></input>
      <p>E-mail</p>
      <input
        type="email"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      ></input>
      <p>Password</p>
      <input
        type="password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      ></input>
      <p>Repeat password</p>
      <input
        type="password"
        value={rPassword}
        onInput={(e) => setRPassword(e.target.value)}
      ></input>
      <h5>Adress:</h5>
      <p>Street (number, name)</p>
      <input
        type="text"
        value={street}
        onInput={(e) => setStreet(e.target.value)}
      ></input>
      <p>City</p>
      <input
        type="text"
        value={city}
        onInput={(e) => setCity(e.target.value)}
      ></input>
      <button
        onClick={() => {
          signup()
          displayLogin()
        }}
      >
        Sign up
      </button>
      <p>Already have an account?</p>
      <button onClick={displayLogin}>Log in</button>
      {/* <p>
        <i>
          <b>
            Disclaimer! Please do not use your actual passwords or any other
            data as this website is not secure! This is just a react project, I
            haven't worked my way up to security yet.
          </b>
        </i>
      </p> */}
    </>
  )
}

export default Signup
