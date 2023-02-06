import React, { useState } from 'react'
import Sea_res from './sea_res'
export default function Search() {
    const [img,setimg] = useState();
    const [ser,setser] = useState();

    const func = (event)=>{
        setimg(event.target.value)
    }
    const func2 = ()=>{
        setser(img)
    }
  return (
    <div className='search_bar'>
        <input 
        className='search_input' 
        type='text' placeholder='Search' 
        value={img} onChange={func}></input>
        <br></br>
        <button type="button" class="btn btn-outline-success" onClick={func2}>Success</button>
        <br></br>
        <Sea_res ip={ser}/>
    </div>
  )
}
