import { useState } from "react";

function State(){
    let [c,setC] = useState({
        name:"Rajiv",
        city:"Itarsi"
    })
    return(
        <h1>my name is {c.name}</h1>
    )
}
export default State