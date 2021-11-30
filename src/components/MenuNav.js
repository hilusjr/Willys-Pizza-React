import React from 'react'
import pizzeriaData from '../json/content.json'

function MenuNav({ setCategory }) {
  return (
    <div className="menu-navbar">
      <div onClick={() => setCategory(pizzeriaData.pizzas)}>Pizza</div>
      <div onClick={() => setCategory(pizzeriaData.pasta)}>Pasta</div>
      <div onClick={() => setCategory(pizzeriaData.desserts)}>Dessert</div>
      <div onClick={() => setCategory(pizzeriaData.drinks)}>Drinks</div>
    </div>
  )
}

export default MenuNav
