import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";
import { Suspense } from "react";
import LoadingAnimation from "../../components/LoadingAnimation";

async function loader({request}) {
    await requiredAuth(request)
    return defer({ vans: getHostVans()})
}

function HostVans() {
    const dataPromise = useLoaderData()

    function renderHostVansElements(vans) {
        const hostVansEle = vans.map(van => {
            return (
                <Link
                    to={van.id}
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
        <section className="host-vans">
                <h1 className="host-vans-title">Your listed vans</h1>
                <Suspense fallback={<LoadingAnimation/>}>
                    <Await resolve={dataPromise.vans}>
                        {renderHostVansElements}
                    </Await>
                </Suspense>
            </section>
    )
}

export default HostVans
export { loader }