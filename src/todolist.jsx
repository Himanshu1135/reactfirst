import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TodoComp from "./todolistComp";

const Todolist=()=>{

    const [item,setitem] = useState();
    const [newitem,set] = useState([]);

    const Func1=(event)=>{
        setitem(event.target.value)
    }
    const Func2=()=>{
        set((prevalue)=>{
            return [...prevalue,item]
        })
        setitem("")
    }

    return(
        <>
        <div className="main_div">
            <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type="text" value={item} placeholder="Add Note" onChange={Func1} />
            <Button className="newBtn" onClick={Func2}>
                <AddIcon />
            </Button>
            <br />
            <ol>
                {
                    newitem.map((val,index) =>{
                        return <TodoComp key={index} val={val}/>
                    }
                    )
                }
            </ol>
            <br />
            </div>
        </div>
        </>
    )
}

export default Todolist