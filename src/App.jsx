import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Pokemon} from "./pokemonapi"
import Slotmachine from './Slotmachine'
import Heading from './Heading'
import NavbarC from './navbar'
import Search from './Search'
import Error from './Error'

export default function App() {
  return (
    <div>
        <NavbarC/>
        <Routes>
            <Route exact path='/poke' element={<Pokemon/>} />
            <Route exact path='/slot/:name' element={<Slotmachine/>}/>
            <Route exact path='/search' element={<Search/>}/>
            <Route exact path='/' element={<Heading name="Himanshu"/>}/>
            <Route path="*" element={<Error/>}/> 
        </Routes>
        
    </div>
  )
}
