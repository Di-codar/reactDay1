import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import SideNav from './SideNav'

function Header() {
  let [myNav,setMyNav] = useState(false)

  function showNav() {
    // if (myNav == true) {
    //   setMyNav(false)
    // } else {
    //   setMyNav(true)
    // }
    myNav ? setMyNav(false) : setMyNav(true)
  }

  return (
    <header className=' flex justify-around items-center h-[60px] '>
      <h1 className=' text-3xl font-extrabold font-[cursive]'>Logo</h1>
      <nav className=' hidden md:block'>
        <ol className=' flex gap-9 font-medium'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ol>
      </nav>
      <div className=' md:hidden'>
        <button onClick={showNav}><RiMenu3Line/></button>
      </div>

      <SideNav myNav={myNav}/>
    </header>
  )
}

export default Header