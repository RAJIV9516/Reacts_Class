// import './App.css';
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav className="nav">
            <h1>Logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='services'>Services</Link></li>

            </ul>
        </nav>
        </>
    )
}
export default Navbar