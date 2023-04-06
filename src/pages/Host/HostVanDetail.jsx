import { Await, Link, NavLink, Outlet, defer, useLoaderData } from "react-router-dom"
import { getVan } from "../../api"
import { requiredAuth } from "../../utils"
import { Suspense } from "react"
import LoadingAnimation from "../../components/LoadingAnimation"

async function loader({params, request}) {
    await requiredAuth(request)
    return defer({ vans: getVan(params.id) }) 
}

function HostVanDetail() { 
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    }
    
    const dataPromise = useLoaderData()

    function renderHostVanDetailElements(vans) {
        return (
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
                <Outlet context={vans}/>
            </div>
        )
    }

    return (
        <section className="van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr;
                <span>Back to all vans</span>
            </Link>
            <Suspense fallback={<LoadingAnimation/>}>
                <Await resolve={dataPromise.vans}>
                    {renderHostVanDetailElements}
                </Await>
            </Suspense>
        </section>
    )
}

export default HostVanDetail
export { loader }