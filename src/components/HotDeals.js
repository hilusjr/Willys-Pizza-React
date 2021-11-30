import React from 'react'
import HotDeal from './HotDeal'
import '../css/HotDeals.css'
import pizzeriaData from '../json/content.json'

function HotDeals() {
  return (
    <section className="hot-deals-page">
      <div>Hot deals</div>
      <div className="hot-deals-container">
        {pizzeriaData.hotDeals.map((deal, i) => (
          <HotDeal
            key={i}
            title={deal.title}
            desc={deal.description}
            price={deal.price}
          />
        ))}
      </div>
    </section>
  )
}

export default HotDeals
