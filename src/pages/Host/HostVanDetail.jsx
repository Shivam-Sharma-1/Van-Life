import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import { getHostVans } from "../../api"

function loader({params}) {
    return getHostVans(params.id)
}

function HostVanDetail() { 
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    }
    
    const vans = useLoaderData()

    return (
        <section className="van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr;
                <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={vans.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vans.type}`}
                        >
                            {vans.type}
                        </i>
                        <h3>{vans.name}</h3>
                        <h4>${vans.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to='.'
                        end
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to='pricing'
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos'
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={[vans, setVans]}/>
            </div>
        </section>
    )
}

export default HostVanDetail
export { loader }