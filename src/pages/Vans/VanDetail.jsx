import { Await, Link, defer, useLoaderData, useLocation } from "react-router-dom"
import { getVan } from "../../api"
import { Suspense } from "react"
import LoadingAnimation from "../../components/LoadingAnimation"

function loader({ params }) {
    return defer({ van: getVan(params.id) }) 
}

function VanDetail() {
    const location = useLocation()
    const dataPromise = useLoaderData()
    
    const search = location.state.search ? location.state.search : ''
    const type = location.state.type ? location.state.type : "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr;
                <span>Back to {type} vans</span>
            </Link>
            <Suspense fallback={<LoadingAnimation/>}>
                <Await resolve={dataPromise.van}>
                    {van => {
                        return (
                            <div className="van-detail">
                                <img src={van.imageUrl} />
                                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                <h2>{van.name}</h2>
                                <p className="van-price"><span>${van.price}</span>/day</p>
                                <p>{van.description}</p>
                                <button className="link-button">Rent this van</button>
                            </div>
                        )
                    }}
                </Await>
            </Suspense>
        </div>    
    )
}

export default VanDetail
export { loader }