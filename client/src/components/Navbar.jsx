import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user={name:"John Doe"}
    // When user data is fetched asynchronously from an API, it starts as null or undefined while loading, causing standard dot notation like {user.name} to throw a fatal TypeError and crash your entire React application. Optional chaining ({user?.name}) solves this by acting as a safety guard that checks for the object's existence first; if the object is missing, JavaScript safely stops executing and returns undefined (which renders as nothing) instead of breaking the app.
   const navigate=useNavigate();
   //not using link tag here as js funtion used navigate , react router dom has <Navigate>
   //tag which is to redirect
    const layoutUser=()=>{
        navigate("/");
    }


    return (
    <div className="w-full h-16 flex items-center justify-between px-6 bg-white border border-gray-300/60">
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5
      text-slate-800 transition-all'>
        <Link to="/" >
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        
        
{/* This code snippet is a standard React component setup that creates a clickable logo that instantly redirects the user back to the homepage without refreshing the page
the logo.svg should be inside the public folder */}
        <div className="flex items-center gap-4">
            <p>Hi, {user?.name}</p>
            <button onClick={layoutUser} className='bg-white hover:bg-slate-50 border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
