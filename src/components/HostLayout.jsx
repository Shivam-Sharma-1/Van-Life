import { Link, Outlet } from "react-router-dom";

function HostLayout() {
    return (
        <>
            <h1>Host</h1>
            <nav>
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default HostLayout