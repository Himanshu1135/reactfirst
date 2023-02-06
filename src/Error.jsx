import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='text-bg-danger p-3' style={{
        textAlign:"center",
        fontSize : "70px"
        }}>
        <h1>404 Error Page 🛑 </h1>
        <br></br>
        <h1>
            Page Don't Exist ⚔️
        </h1>
        <br></br>
        <NavLink to="/">Go Back 🤚</NavLink>
    </div>
  )
}

