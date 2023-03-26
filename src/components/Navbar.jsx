import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const style = {
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
                    style={({isActive}) => isActive ? style : null}
                    // className={({isActive}) => isActive ? "active-link" : null}
                    >Host</NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? style : null}
                    >About</NavLink>
                <NavLink 
                    to='/vans'
                    style={({isActive}) => isActive ? style : null}
                >Vans</NavLink>
            </nav>
        </header>
    )
}

export default Navbar