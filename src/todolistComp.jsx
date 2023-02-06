import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";


const TodoComp=(props)=>{
    const [line,setstate] = useState(false)
    const cutIT=()=>{
        setstate(true)
    }

    return(
        <>
        <div className="todo_style">
        <span onClick={cutIT}>
            <DeleteIcon className="deleteIcon"/>
        </span>
        <li style={{textDecoration: line ? "line-through" : "none"}}>{props.val}</li>
        </div>
        </>
    )
}

export default TodoComp