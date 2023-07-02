import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
        <NavLink
            to="/kenny"
        >
            Kenny
        </NavLink>
        <NavLink
            to="/ernest"
        >
            Ernest
        </NavLink>
        <NavLink
            to="/misha"
        >
            Misha
        </NavLink>
        <NavLink
            to="/lauren"
        >
            Lauren
        </NavLink>
        <NavLink
            to="/shanna"
        >
            Shanna
        </NavLink>
    
    
    
    </>
  )
}

export default Nav