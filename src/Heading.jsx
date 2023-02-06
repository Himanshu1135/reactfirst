import React from "react"
const csstyle = {}
var time = new Date().getHours()
var greet = ''
if(time > 7 && time < 11){
    greet = "Good Morning"; 
    csstyle.color = "green";
    csstyle.textAlign ="centre"
}else if (time => 11 && time < 19) {
    greet = "Good Afternoon";
    csstyle.color = "orange";
    csstyle.textAlign ="centre"
} else {
    greet = "Good night";
    csstyle.color = "black";
    csstyle.textAlign ="centre"
    };

function Heading (props){
    return  <h1>Hello , {props.name} <span style={csstyle}>{greet}</span> </h1>
}
// --------------------------------------------------------------------------------------------
function Card(props){
    return (
        <>
        <div className="card" style={{width : "18rem" ,textAlign:"center" , padding : "60px 60px"}}>   
            <img src={props.imgsrc} className="rounded" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.catorg} </p>
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    )


}

export default Heading;

export {time,Card};