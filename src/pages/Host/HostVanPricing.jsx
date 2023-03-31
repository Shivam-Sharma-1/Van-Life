import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
    const [vans, setVans] = useOutletContext();

    return (
        <h3 className="host-van-price">${vans.price}<span>/day</span></h3>
    )
}

export default HostVanPricing