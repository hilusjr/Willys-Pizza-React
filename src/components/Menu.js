import React, { useState } from 'react'
import '../css/Menu.css'
import MenuNav from './MenuNav'
import MenuList from './MenuList'
import pizzeriaData from '../json/content.json'

function Menu() {
  const [category, setCategory] = useState(pizzeriaData.pizzas)

  return (
    <section className="menu-page">
      <div>Menu</div>
      <div className="menu">
        <MenuNav setCategory={setCategory} />
        <MenuList category={category} />
      </div>
    </section>
  )
}

export default Menu
