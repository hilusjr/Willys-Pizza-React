import React, { useState } from 'react'
import OrderItem from './OrderItem'
import pizzeriaData from '../json/content.json'
import '../css/Order.css'

function Order({ displayOrder, orderVisible }) {
  const [category, setCategory] = useState(pizzeriaData.pizzas)

  return (
    <div
      className="order-card"
      style={orderVisible ? { display: 'block' } : { display: 'none' }}
    >
      <i className="fa-solid fa-xmark order-card-i" onClick={displayOrder}></i>
      <h1>Order</h1>
      <div className="order-navbar">
        <div onClick={() => setCategory(pizzeriaData.pizzas)}>Pizza</div>
        <div onClick={() => setCategory(pizzeriaData.pasta)}>Pasta</div>
        <div onClick={() => setCategory(pizzeriaData.desserts)}>Dessert</div>
        <div onClick={() => setCategory(pizzeriaData.drinks)}>Drinks</div>
      </div>
      <div className="order-menu">
        {category.map((item, i) => (
          <OrderItem
            key={i}
            name={item.name}
            desc={item.description}
            small={item.small}
            large={item.large}
          />
        ))}
      </div>
      <button className="order-cart-btn">complete order</button>
    </div>
  )
}

export default Order
