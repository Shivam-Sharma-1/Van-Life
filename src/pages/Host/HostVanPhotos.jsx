import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
    const [vans, setVans] = useOutletContext();

    return (
        <img src={vans.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVanPhotos