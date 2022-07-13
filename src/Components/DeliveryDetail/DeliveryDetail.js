import { useParams } from "react-router-dom";
import "./DeliveryDetail.css"

const DeliveryDetail = () => {
    const {id} = useParams();
    return <h1 className="detail">{id}</h1>
}

export default DeliveryDetail;