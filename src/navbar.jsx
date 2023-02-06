import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css";

export default function NavbarC() {
  return (
    <div className='navbarC'> 
        <NavLink className="active_class" to="/">Home</NavLink>
        <NavLink className="active_class" to='/poke'>Pokemon</NavLink>
        <NavLink className="active_class" to='/search'>Search</NavLink>
        <NavLink className="active_class" to="/slot/how">SlotMachine</NavLink>
    </div>
  )
}
