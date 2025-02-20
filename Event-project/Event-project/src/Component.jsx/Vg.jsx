import { useState } from "react"

function Vg(){
    let [bgcolor,setBgcolor] = useState("black")
    let [tg ,setTg]=useState(true)
    return(
        <>
        <div style={{height:"100vh", backgroundColor:bgcolor}}></div>
        <button onClick={()=>setBgcolor('red')}>Red</button>
        <button onClick={()=>setBgcolor('green')}>Green</button>
        <button onClick={()=>setBgcolor('yellow')}>Yellow</button>
        <button onClick={()=>setBgcolor('blue')}>Blue</button>

         {tg ?<h1>MObil mt chalao</h1> : ""}
         
        {/* <button onClick={()=>setTg(false)}>Hide</button>
        <button onClick={()=>setTg(true)}>Show</button>
        <button onClick={()=>setTg(!tg)}>toggle</button> */}
        
        <button onClick={()=>setTg(!tg)}>
            {tg ? "Hide" :"show"}
        </button>




        </>
    )
}
export default Vg