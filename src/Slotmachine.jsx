import { useNavigate, useLocation, useParams} from "react-router-dom"

function Slotmachine(){
    const  {name} = useParams();
    const loca = useLocation();
    // console.log(loca)
    const Navigate = useNavigate()
    console.log(Navigate);


    return(
        <>
        <div>
            <h1>🎰 Welcome to <span> SlotMachine </span> 🎰</h1>
            {loca.pathname === '/slot/himanshu'? 
            (  <h2>        You    WON!!!!! 😃  {name}      </h2> ) : 
            (<h2>        You    Lose 😫   {name}      </h2>)     }
            
        </div>

        </>



    )
}

export default Slotmachine