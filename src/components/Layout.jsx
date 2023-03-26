import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout() {
    return(
        <div className="site-wrapper">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout