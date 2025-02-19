function Child3(props){
    let{name,age}=props
    return(
        <>
              <Child3 name={props.name}/>

        </>
    )
}
export default Child3