import React from 'react'
// import pizzeriaData from '../json/content.json'
import MenuItem from './MenuItem'

function MenuList({ category }) {
  //   const [isVisible, setList] = useState([])

  return (
    <>
      {/* <button onClick={() => console.log(items)}></button> */}
      {category.map((item, i) => (
        <MenuItem
          key={i}
          name={item.name}
          desc={item.description}
          small={item.small}
          large={item.large}
        />
      ))}
    </>
  )
}

export default MenuList

//   const items = category.map((pizza) => ({
//     name: pizza.name,
//     description: pizza.description,
//     small: pizza.small,
//     large: pizza.large,
//   }))

//   const pastaItems = pizzeriaData.pasta.map((pasta) => ({
//     name: pasta.name,
//     description: pasta.description,
//     small: pasta.small,
//     large: pasta.large,
//   }))
