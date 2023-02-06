import { useState } from "react";

function Form(){
    const [fullname,setState] = useState({
        fName: "",                                                  // Create multi states
        lName: "",                                                          
    });
    
    const func = (event) =>{
        const value = event.target.value;
        const name = event.target.name;                        // define the name and value  
         
        console.log(value);
        console.log(name);

        setState((preValue)=>{
            return{
                ...preValue,
                [name]: value
            }
            
            // if (name==="fName") {
            //     return{                                            // set values to lname and fname
            //         fName: value,
            //         lName: preValue.lName,
            // }; 
            // }else if (name ==="lName"){
            //     return{
            //     fName: preValue.fName,
            //     lName: value,
            // }
                
            // }
        });

    }
    const onsubmit= (event)=>{                                     // For not refreashing again and again
        event.preventDefault()
        
    }

    return(
        
        <>
        <form onSubmit={onsubmit}>
        <h1>Hello {fullname.fName} {fullname.lName}</h1>
        <input type="text" placeholder = "Enter your First name" onChange={func} name ="fName"/>
        <input type="text" placeholder = "Enter your Last name" onChange={func} name ="lName"/>
        <button onClick={func}> Click Me 😃 </button>
        </form>
        </>
    )
}

export default Form;