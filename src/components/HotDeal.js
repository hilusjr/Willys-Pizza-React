import React from 'react'

function HotDeal(props) {
    return (
        <div className='hot-deal'>
            <div className='hot-deal-title'>{props.title}</div>
            <div className='hot-deal-desc'>{props.desc}</div>
            <div className='hot-deal-price'>{props.price}$</div>
        </div>
    )
}

export default HotDeal
