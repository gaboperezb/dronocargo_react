import React from "react";
import Navbar from "../Navbar/Navbar";
import DeliveryHeader from "../DeliveryHeader/DeliveryHeader";
import SearchBar from "../Searchbar/Searchbar";
import DeliveryTable from "../DeliveryTable/DeliveryTable";
import NewDeliveryModal from "../NewDeliveryModal/NewDeliveryModal";
import Footer from "../Footer/Footer";
import './DronocargoApp.css';

class DronocargoApp extends React.Component {
    constructor(props) {
      super(props);
      const deliveries = JSON.parse(localStorage.getItem("deliveries")) || DELIVERIES;
      this.state = {
        filterId: "",
        modalIsOpen: false,
        deliveries
      }
  
      this.handleFilterIdChange = this.handleFilterIdChange.bind(this);
      this.handleToggleModal = this.handleToggleModal.bind(this);
      this.handleNewDelivery = this.handleNewDelivery.bind(this);
    }
  
    handleNewDelivery(newDelivery) {
      
      let deliveries = this.state.deliveries.slice();
      deliveries.unshift(newDelivery);
      this.setState({deliveries});
      localStorage.setItem("deliveries", JSON.stringify(deliveries));
  
    }
  
    handleFilterIdChange(filterId) {
      this.setState({ filterId })
    }
  
    handleToggleModal(open) {
      this.setState({ modalIsOpen: open })
    }
  
    render() {
      return (
        <div>
          {this.state.modalIsOpen && <NewDeliveryModal onToggleModal={this.handleToggleModal} onNewDelivery={this.handleNewDelivery}/>}
          <Navbar/>
          <div className="delivery-actions">
            <DeliveryHeader />
            <SearchBar onFilterIdChange={this.handleFilterIdChange} />
            <button className="button button--fill" onClick={this.handleToggleModal.bind(this, true)}>New Delivery</button>
          </div>
          <DeliveryTable deliveries={this.state.deliveries} filterId={this.state.filterId} />
          <Footer />
        </div>
      )
    }
  }

  export default DronocargoApp;



const DELIVERIES = [
  { status: 'Ready', id: '010-300FCT', technician: "Pedro Suárez", platform: 'Tetha', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '009-300FCT', technician: "Ben Santana", platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '008-300FCT', technician: "Juan Reynosa", platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '007-300FCT', technician: "Shan Smith", platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '006-300FCT', technician: "Gerardo Torres", platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '005-300FCT', technician: "Leonardo Flores", platform: 'Beta', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '004-300FCT', technician: "Miguel Obregón", platform: 'Beta', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '003-300FCT', technician: "Mariano Arribas", platform: 'Alpha', drone: 'DJI-004Q', technicalCheck: "Passed" },
  { status: 'Ready', id: '002-300FCT', technician: "Jessica Salinas", platform: 'Alpha', drone: 'DJI-004Q', technicalCheck: "Passed" }
];