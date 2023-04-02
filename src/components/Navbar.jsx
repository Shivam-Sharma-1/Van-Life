import { Link, NavLink } from "react-router-dom"
import avatar from "../assets/images/avatar.png"

function Navbar() {
    const activeStyles = {
        color: '#161616',
        textDecoration: 'underline',
        fontWeight: 'bold',
    }

    return (
        <header>
            <Link className="site-logo" to="/">
                #VanLife
            </Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                    // className={({isActive}) => isActive ? "active-link" : null}
                    >Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >About
                </NavLink>
                <NavLink 
                    to='/vans'
                    style={({isActive}) => isActive ? activeStyles : null}
                    >Vans
                </NavLink>
                <Link to='login'>
                    <img src={avatar} alt="" />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar