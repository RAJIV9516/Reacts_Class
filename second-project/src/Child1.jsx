import Child2 from "./Child2"
const Child1 =(props) =>{
    let{name,age} =props
    // Destructuring
    return(
        
        <>
        <h1>Child 1 comp {age}</h1>
        <h1>my name{name}</h1>
        <Child2 name="Rajiv" age={20}/>

        </>
    )
}
export default Child1