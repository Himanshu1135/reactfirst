import React, { useEffect } from "react";
import { useState } from "react";

const Useeffect =()=>{
    const [item,setitem] = useState(0)
    const [itemA,setitemA] = useState(0)

    useEffect(() =>{
        document.title = `You fuck me ${item} times 🥵 !!`;
    },[item])

    const func =()=>{
        setitem(item+1)
    }
    const funcA =()=>{
        setitemA(itemA+1)
    }

    return(
        <>
        <div>
            <button onClick={func}>Click!!!{item}</button>
        </div>
        <div>
            <button onClick={funcA}>Click A !!!{itemA}</button>
        </div>
        </>
    )
}

export default Useeffect