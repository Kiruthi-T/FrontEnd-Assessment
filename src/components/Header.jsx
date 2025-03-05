import React from 'react'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Header({ SetSearchTerm }) {

  const handleChange = (event) => {
    SetSearchTerm(event.target.value)
  }
  return (
    <>
      <nav className='flex flex-wrap justify-between items-center p-3 fixed w-full bg-gray-50'>
        {/* <h1 className="text-4xl font-extrabold m-1 bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
        Tasty Tales
        </h1> */}

        <img
          alt="logo"
          src="logo.webp"
          className="aspect-square rounded-full group-hover:opacity-75"
          height="60px"
          width="60px"
        />
        <div className='m-1 '>
          <SearchIcon />
          <TextField
            hiddenLabel
            placeholder='Search Food Name'
            variant="standard"
            size="small"
            onChange={handleChange}
          /></div>
      </nav>
    </>
  )
}

export default Header
