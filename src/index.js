import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Navbar from './components/Navbar'
import Startpage from './components/Startpage'
import HotDeals from './components/HotDeals'
import Menu from './components/Menu'

const element = (
  <>
    <Navbar />
    <Startpage />
    <HotDeals />
    <Menu />
  </>
)
ReactDOM.render(element, document.getElementById('root'))
