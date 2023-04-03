import { useOutletContext } from "react-router-dom"

function HostVanInfo() {
    const vans = useOutletContext()
    return(
        <section className="host-van-detail-info">
            <h4>Name: <span>{vans.name}</span></h4>
            <h4>Category: <span>{vans.type}</span></h4>
            <h4>Description: <span>{vans.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>    
    )
}

export default HostVanInfo