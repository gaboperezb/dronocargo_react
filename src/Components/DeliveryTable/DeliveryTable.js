import React from "react";
import DeliveryRow from "../DeliveryRow/DeliveryRow";
import './DeliveryTable.css';

class DeliveryTable extends React.Component {
    render() {
      const filterId = this.props.filterId;
      const deliveries = this.props.deliveries.filter(delivery => delivery.id.indexOf(filterId) != -1)
        .map(delivery => <DeliveryRow key={delivery.id} delivery={delivery} />)
  
      if (deliveries.length) {
        return (
          <table className="delivery-table">
            <tbody>
              {deliveries}
            </tbody>
          </table>
        )
      } else if (filterId != "") {
        return <p className="no-results">No results for "{filterId}"</p>
      } else {
        return null;
      }
  
    }
  }

  export default DeliveryTable;