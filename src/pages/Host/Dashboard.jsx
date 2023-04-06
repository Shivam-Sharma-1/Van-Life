import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import { requiredAuth } from '../../utils'
import { getHostVans } from '../../api'
import { BsStarFill } from 'react-icons/bs'
import { Suspense } from 'react'
import LoadingAnimation from '../../components/LoadingAnimation'

async function loader({ request }) {
    await requiredAuth(request)
    return defer({ vans: getHostVans() })
}

function Dashboard() {
    const dataPromise = useLoaderData()

    function renderHostVansElements(vans) {
        const hostVansEle = vans.map(van => {
            return (
                <Link
                    to={`vans/${van.id}`}
                    key = {van.id}
                    className="host-van-link-wrapper"
                >
                    <div className="host-van-single" key={van.id}>
                        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                        <div className="host-van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className="host-vans-list">
                <section>
                    {hostVansEle}
                </section>
            </div>
        )
    } 

    return (
        <>
            <section className='host-dashboard-earnings'>
                <div className='info'>
                    <h1>Welcome!</h1>
                    <p>Income in last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to='income' className='host-dashboard-link'>Details</Link>
            </section>
            <section className='host-dashboard-reviews'>
                <h2>Review score</h2>
                <BsStarFill className='star'/>
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to='reviews' className='host-dashboard-link'>Details</Link>
            </section>
            <section className='host-dashboard-vans'>
                <div className='top'>
                    <h2>Your listed vans</h2>
                    <Link to='vans' className='host-dashboard-link'>View all</Link>
                </div>
                <Suspense fallback={<LoadingAnimation/>}>
                    <Await resolve={dataPromise.vans}>
                        {renderHostVansElements}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}

export default Dashboard
export { loader }