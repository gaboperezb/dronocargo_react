import { useParams } from "react-router-dom";
import "./DeliveryDetail.css"

const Details = () => {
    const {id} = useParams();
    return <h1 className="detail">{id}</h1>
}

export default Details;