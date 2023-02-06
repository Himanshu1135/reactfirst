// import List from "./List";
import * as ass from "./Heading";
import * as cal from "./Cal.jsx";
import './index.css';
import * as data from "./Srdata";
import { useState } from "react";

function Calapp(){
    return (
    <>
        <div className="header">
        <ass.default/>
        <h1>add {cal.default(40,10)}</h1>
        <h1>sub {cal.sub(40,10)}</h1>
        <h1>mul {cal.mul(40,10)}</h1>
        <h1>div {cal.div(10,3)}</h1>
        </div>
    </>
    );  
}
// ---------------------------------------------------------------------------------
function ncard(val){
    return (
        <ass.Card
                key = {val.id}
                imgsrc = {val.imgsrc}
                title = {val.title}
                link = {val.link}
                catorg = {val.catorg}
                />
    )
}
var name = "Anme"
function Cardapp(){
        // if(name === "Anime"){
        //     return(
        //         <>
        //         {data.default.map(ncard)};
        //         </>
        //     )
        // } else{
        //     return(
        //         <>
        //         {data.scify.map(ncard)};
        //         </>
        //     )
        // }
        return (
            <>
                    {name === "Anime" ? data.default.map(ncard) : data.scify.map(ncard)}

            </>
        )
}
// -----------------------------------------------------------------------------------------------
var time = new Date().toLocaleTimeString()
function Hooks(){
    var [count,setCount] = useState(time)
    const inc= () => {
        var curr = new Date().toLocaleTimeString()
        setCount(curr);
    }
    setInterval(inc, 1000);
    return(
    
        <>
                  <h1 className="header">{count}</h1>
            
            {/* <button className="button" onClick={inc}>Click Me</button> */}
        </>

    )
};


export default Cardapp;

export {Calapp,Hooks};

