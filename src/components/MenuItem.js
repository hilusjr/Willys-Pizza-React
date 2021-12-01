import React from 'react'

function MenuItem(props) {
  // const description = () => {
  //   if (!props.desc) return
  //   return <div className="menu-item-description">{props.desc}</div>
  // }

  return (
    <>
      <div className="menu-item">
        <div className="menu-item-col">
          <div className="menu-item-name">{props.name}</div>
          <div className="menu-item-description">{props.desc}</div>
        </div>
        <div className="menu-item-col">
          <div className="menu-item-price">{props.small}$</div>
          <div className="menu-item-price">{props.large}$</div>
        </div>
      </div>
      <div className="menu-item-border"></div>
    </>
  )
}

export default MenuItem
