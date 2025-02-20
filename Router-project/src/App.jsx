import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from "./Component/About"
import Services from "./Component/Services"
import Home from "./Component/Home"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>

    </Routes>
    </>
  )
}

export default App
