import React from "react";
import './NewDeliveryModal.css';


class NewDeliveryModal extends React.Component {

    constructor(props) {
      super(props);
  
      this.handleToggleModal = this.handleToggleModal.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        id: "",
        technician: "",
        platform: "",
        drone: ""
      }
    }
  
    componentDidMount() {
      document.body.style.overflow = 'hidden';
    }
  
    componentWillUnmount() {
      document.body.style.overflow = 'unset';
    }
  
    handleInputChange(key, e) {
      const value = e.target.value;
      this.setState({
        [key]: value
      })
    }
  
    handleToggleModal(toggle) {
      this.props.onToggleModal(toggle);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      for (const key in this.state) {
        if (this.state[key] == "") {
          alert("All elements must be filled")
          return;
        }
      }
  
      const newDelivery = Object.assign({ status: "Pending", technicalCheck: "Passed"}, this.state);
      this.props.onNewDelivery(newDelivery);
      this.props.onToggleModal(false);
  
    }
  
  
    render() {
      return (
        <>
          <div className="darkBG" />
          <div className="centered">
            <div className="modal">
  
              <button onClick={this.handleToggleModal.bind(this, false)} className="closeIcon">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" />
                </svg>
              </button>
  
              <div className="modal__header">
                <p className="modal__title">New Delivery</p>
                <p className="modal__description">Please select the order ID and a technician to deploy the cargo.</p>
                <p className="modal__description">All elements are mandatory.</p>
              </div>
  
              <div className="modal__content">
                <form className="form" id="newDeliveryForm" onSubmit={this.handleSubmit}>
  
                  <div className="form__group">
                    <label className="form__label" htmlFor="order">Order ID</label>
                    <div className="form__item">
                      <input onChange={this.handleInputChange.bind(this, "id")} value={this.state.id} className="form__input" type="text" id="order" />
                    </div>
                  </div>
  
                  <div className="form__group">
                    <label className="form__label" htmlFor="technician">Technician</label>
                    <div className="form__item">
                      <svg className="form__icon form__icon--start" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black" fillOpacity="0.25" />
                      </svg>
                      <input onChange={this.handleInputChange.bind(this, "technician")} value={this.state.technician} className="form__input form__input--wli" type="text" id="technician" />
                    </div>
                  </div>
  
                  <div className="form__group">
                    <label className="form__label" htmlFor="platform">Platform</label>
                    <div className="form__item">
                      <select onChange={this.handleInputChange.bind(this, "platform")} value={this.state.platform} className="form__input" id="platform">
                        <option disabled hidden value=""></option>
                        <option value="alpha">Alpha</option>
                        <option value="beta">Beta</option>
                        <option value="gamma">Gamma</option>
                        <option value="theta">Theta</option>
                      </select>
                      <svg className="form__icon form__icon--end" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41006 0.590088L6.00006 5.17009L10.5901 0.590088L12.0001 2.00009L6.00006 8.00009L6.10352e-05 2.00009L1.41006 0.590088Z" fill="black" fillOpacity="0.25" />
                      </svg>
                    </div>
                  </div>
  
                  <div className="form__group">
                    <label className="form__label" htmlFor="drone">Drone</label>
                    <div className="form__item">
                      <select onChange={this.handleInputChange.bind(this, "drone")} value={this.state.drone} className="form__input" id="drone">
                        <option disabled hidden value=""></option>
                        <option value="DJI-004Q">DJI-004Q</option>
                        <option value="DJI-005Q">DJI-005Q</option>
                        <option value="DJI-006Q">DJI-006Q</option>
                        <option value="DJI-007Q">DJI-007Q</option>
                      </select>
                      <svg className="form__icon form__icon--end" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41006 0.590088L6.00006 5.17009L10.5901 0.590088L12.0001 2.00009L6.00006 8.00009L6.10352e-05 2.00009L1.41006 0.590088Z" fill="black" fillOpacity="0.25" />
                      </svg>
                    </div>
                  </div>
  
                </form>
              </div>
  
              <div className="modal__actions">
                <button onClick={this.handleToggleModal.bind(this, false)} className="button button--empty">Cancel</button>
                <button type="submit" form="newDeliveryForm" value="Submit" className="button button--fill button--ml">Create new delivery</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  export default NewDeliveryModal;