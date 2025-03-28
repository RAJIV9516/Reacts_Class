import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from "./Component/About"
import Services from "./Component/Services"
import Home from "./Component/Home"
import Layout from './Layout'
// import Navbar from './Component/Navbar'
// import Footer from './Component/Footer'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      </Route>

    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
