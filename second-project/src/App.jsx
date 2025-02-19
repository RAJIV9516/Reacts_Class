import './App.css'
import Navbar from './Navbar'
import Card from "./Card"
import Child1 from './Child1'
function App() {

  return (
    <>
    <Navbar/>
    <Card/>
    <Child1 name="Rajiv" age={20}/>
    {/* <Child2 name="Suuu" age={25}/> */}
    </>
  
  )
}

export default App
