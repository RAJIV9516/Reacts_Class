import './App.css'
import State from './State'
import Vg from './Component.jsx/Vg'
function App() {
  function fun(a){
    alert("event working "+a)
  }

  return (
    <>
    <State/>
    <Vg/>
    <h1>Welcome</h1>
    <button onClick={()=>fun("RAjiv")}>Click here</button>
    <button onDoubleClick={()=>fun("Priya")}>Click here</button>
    <button onMouseDown={()=>fun("suuu")}>Click here</button>
    <section className='hero1'>
      <article>
    <h1>Laptop</h1>
    <h1>Mobile</h1>
    <h1>Desktop</h1>
    <h1>Tablet</h1>
    </article>
    <article className='ar1'>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPS65ltf_KTwEbchtM31Nm_tGtMZa_TL5deA&s" alt="" /></div>
    </article>

    </section>
    </>
  
  )
}

export default App
