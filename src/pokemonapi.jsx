import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Pokemon = () => {
    const [num,setState] = useState()
    const [name,setname] = useState()
    const [move,setmove] = useState()
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name)
            setname(res.data.name)
            setmove(res.data.moves.length)
        }
        getData();
    })
  return (
    <>
    <h1>You have selecte <span style={{colour:"red"}}>{num}</span> </h1>
    <h1>You have selecte <span style={{colour:"red"}}>{name}</span> </h1>
    <h1>Total moves <span style={{colour:"red"}}>{move}</span></h1>
    <div>

        <select value = {num} onChange={(event) =>{
            setState(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    </>
  )
}
