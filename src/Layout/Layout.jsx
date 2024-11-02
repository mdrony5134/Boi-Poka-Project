import React from 'react'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Home/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout