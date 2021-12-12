import React, { useState } from 'react'

function OrderItem({ name, desc, small, large }) {
  const [chosenSize, setChosenSize] = useState('')
  let [amount, setAmount] = useState(0)

  const substractAmount = () => {
    if (amount === 0) return
    amount--
    setAmount(amount)
  }
  const addAmount = () => {
    if (chosenSize === '') {
      alert('Please choose size!')
      return
    }
    amount++
    setAmount(amount)
    console.log(chosenSize)
  }

  return (
    <div className="order-item">
      <div className="order-item-col">
        <div className="order-item-name">{name}</div>
        <div className="order-item-desc">{desc}</div>
      </div>
      <div className="order-item-col">
        <form className="order-item-form">
          <div>
            <input
              id={`${name}-small`}
              type="radio"
              name="size"
              value="small"
              onClick={() => setChosenSize('small')}
            ></input>
            <label
              htmlFor={`${name}-small`}
              onClick={() => setChosenSize('small')}
            >
              small - {small}$
            </label>
          </div>

          <div>
            <input
              id={`${name}-large`}
              type="radio"
              name="size"
              value="large"
              onClick={() => setChosenSize('large')}
            ></input>
            <label
              htmlFor={`${name}-large`}
              onClick={() => setChosenSize('large')}
            >
              large - {large}$
            </label>
          </div>
        </form>
        <div className="order-item-amount">
          <button
            className="amount-btn"
            onClick={substractAmount}
            style={
              amount > 0
                ? { opacity: '1', cursor: 'pointer' }
                : { opacity: '0.5', cursor: 'default' }
            }
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div
            className="amount-display"
            style={
              amount > 0 ? { color: 'black' } : { color: 'rgb(194, 194, 194)' }
            }
          >
            {amount}
          </div>
          <button
            className="amount-btn"
            onClick={addAmount}
            style={
              chosenSize != ''
                ? { opacity: '1', cursor: 'pointer' }
                : { opacity: '0.5', cursor: 'default' }
            }
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
