import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Navbar from './components/Navbar'
import Startpage from './components/Startpage'
import HotDeals from './components/HotDeals'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const element = (
  <>
    <Navbar />
    <Startpage />
    <HotDeals />
    <Menu />
    <About />
    <Contact />
    <Footer></Footer>
  </>
)
ReactDOM.render(element, document.getElementById('root'))
