import React from "react";
import './DeliveryHeader.css';

class DeliveryHeader extends React.Component {
    render() {
      return (
        <div className="header delivery-actions__element">
          <button className="header__button header__button--selected">Delivery</button>
          <button className="header__button">History</button>
        </div>
      );
    }
}

export default DeliveryHeader;