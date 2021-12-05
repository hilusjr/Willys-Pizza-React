import React from 'react'
import '../css/Contact.css'

function Contact({ displayCard, displaySignup }) {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <h2>
        Questions, concerns, or compliments about our products or service?
      </h2>
      <h3>
        <i className="fa-solid fa-phone"></i> Call us at (432)256-7634-12
      </h3>
      <h3>
        <i className="fa-solid fa-envelope"></i> willyspizza@react.com
      </h3>
      <h2 style={{ marginTop: '3rem' }}>Trying to order food online?</h2>
      <h3>
        Create or log into an already existing account to order our products
        EASELY and get a chance to get even more HOT DEALS
      </h3>
      <div>
        <button
          className="contact-page-button sign-up-button"
          onClick={() => {
            displayCard()
            displaySignup()
          }}
        >
          Sign up
        </button>
        <button
          className="contact-page-button log-in-button"
          onClick={displayCard}
        >
          Log in
        </button>
      </div>
    </div>
  )
}

export default Contact
