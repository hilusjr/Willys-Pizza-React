import React from 'react'
import MenuItem from './MenuItem'

function MenuList({ category }) {
  return (
    <div className="menu-list">
      {category.map((item, i) => (
        <MenuItem
          key={i}
          name={item.name}
          desc={item.description}
          small={item.small}
          large={item.large}
        />
      ))}
    </div>
  )
}

export default MenuList
