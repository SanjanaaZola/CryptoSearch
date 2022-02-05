import React from 'react'
import { BsCoin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' >
        <h1 className='name-tag'>
          C
          <span>
            <BsCoin className='icon' />
          </span>
          in <span className='purple'>Search</span>
        </h1>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar
