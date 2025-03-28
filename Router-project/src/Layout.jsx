import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
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

        <div>
            <Outlet />
        </div>

        <footer>
            <h1>Footer</h1>
        </footer>
        </>
    )
}
export default Layout