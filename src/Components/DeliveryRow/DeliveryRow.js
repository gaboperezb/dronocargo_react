import React from "react";
import { Link } from "react-router-dom";
import './DeliveryRow.css';

class DeliveryRow extends React.Component {

  constructor(props) {
    super(props);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.state = {
      isDropdownOpen: false
    }
  }


  handleDropdown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    })
  }



  render() {
    const delivery = this.props.delivery;

    return (
      <tr className={`delivery-table__row ${delivery.status === "Pending" ? 'delivery-table__row--pending' : ''}`} >
        <td className="delivery-table__data delivery-table__data--status">
          <p className="delivery-table__header">
            Status
          </p>
          <p className="delivery-table__value delivery-table__value--bold">
            {delivery.status}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--id">
          <p className="delivery-table__header">
            Order ID
          </p>
          <p className="delivery-table__value">
            {delivery.id}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--technician">
          <p className="delivery-table__header">
            Technician
          </p>
          <p className="delivery-table__value">
            {delivery.technician}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--platform">
          <p className="delivery-table__header">
            Platform
          </p>
          <p className="delivery-table__value">
            {delivery.platform}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--drone">
          <p className="delivery-table__header">
            Drone
          </p>
          <p className="delivery-table__value">
            {delivery.drone}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--technical-check">
          <p className="delivery-table__header">
            Technical check
          </p>
          <p className="delivery-table__value">
            {delivery.technicalCheck}
          </p>
        </td>

        <td className="delivery-table__data delivery-table__data--actions">

          <Link className="button button--empty" to={`/shipment/${delivery.id}`}>
            <span>Details</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.10352e-05 0V16H20.0001V0H6.10352e-05ZM18.0001 4.67H15.5001V2H18.0001V4.67ZM15.5001 6.67H18.0001V9.34H15.5001V6.67ZM2.00006 2H13.5001V14H2.00006V2ZM15.5001 14V11.33H18.0001V14H15.5001Z" fill="black" fillOpacity="0.25" />
            </svg>
          </Link>

          <button onClick={this.handleDropdown} className="button button--empty button--ml">
            <span>Actions</span>

            {this.state.isDropdownOpen ?
              <svg className="open-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="#323232" />
              </svg> :
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.41006 0.590088L6.00006 5.17009L10.5901 0.590088L12.0001 2.00009L6.00006 8.00009L6.10352e-05 2.00009L1.41006 0.590088Z" fill="black" fillOpacity="0.25" />
              </svg>
            }
          </button>
          {this.state.isDropdownOpen &&
            <div className="dropdown-content">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </div>}
        </td>
      </tr>
    );
  }
}


export default DeliveryRow;