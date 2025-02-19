import Child3 from "./Child3"
function Child2(props){
    let{name,age}=props
    return(
        <>
       <Child3 name={props.name}/>

        </>
    )
}
export default Child2