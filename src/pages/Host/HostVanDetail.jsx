import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

function HostVanDetail() { 
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    }
    const [vans, setVans] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVans(data.vans[0]))
            console.log(vans);
    }, [params.id])

    if(!vans) return <h1>Loading...</h1>

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
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