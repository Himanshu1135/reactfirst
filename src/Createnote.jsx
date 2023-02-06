import React from "react";
import { useState } from "react";

const CreateNote = () =>{

    const [state,setState] = useState({
        title:"",
        content:"",
    })
    
    const inputEvevnt = (event)=>{
        const {name,value} = event.target;
            setState((prevalue) =>{
                return{
                    ...prevalue,
                    [name]: value,
                }
            });
    
            console.log(state)
        }

    return(
        <>
        <div>
            <form>
                <input type="text" placeholder="Title" name="title" value={state.title} onChange={inputEvevnt} autoComplete="off"/>
                <textarea rows="" column="" name="content" value={state.content} onChange={inputEvevnt} placeholder="Write a note..." />
                <button>
                    Add
                </button>
            </form>
        </div>
        </>
    )
   
}

export default CreateNote