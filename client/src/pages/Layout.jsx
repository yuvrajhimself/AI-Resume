import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      {/* <h1>Layout Page</h1> */}
      <div className='min-h-screen bg-gray-50'>
        <Navbar/>
       
        <Outlet/>
        {/* When building websites, you often want a consistent structure—like keeping the same Navbar and Sidebar on the screen—while changing only the central content area as you switch pages. <Outlet> solves this by enabling Nested Routing.
          for child routes as dashboard and layout both in app route see App.jsx file */}
      </div>
    </div>
  )
}

export default Layout
