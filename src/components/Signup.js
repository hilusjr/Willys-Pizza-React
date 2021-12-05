import React from 'react'

function Signup({ displayLogin }) {
  return (
    <>
      <h1>Sign up</h1>
      <p>Username</p>
      <input type="text"></input>
      <p>E-mail</p>
      <input type="email"></input>
      <p>Password</p>
      <input type="password"></input>
      <p>Repeat password</p>
      <input type="password"></input>
      <h5>Adress:</h5>
      <p>Street (number, name)</p>
      <input type="text"></input>
      <p>City</p>
      <input type="text"></input>
      <button>Sign up</button>
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
