import React from 'react';
import Modal from 'react-modal';
import Checkout from './Checkout'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class TestModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      flag: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.successPayment = this.successPayment.bind(this);
  }

  successPayment() {
     this.setState({
      flag: true
     })
  }

  openModal(e) {
    e.preventDefault()
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(e) {
    e.preventDefault()
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal(e) {
    e.preventDefault()
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log()
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>   
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h3 ref={subtitle => this.subtitle = subtitle}>Checkout - step 1</h3>
          <form onSubmit ={(e) => e.preventDefault()}>
          <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-body">

                  <div className="row">
                      <div className="col-6">

                          <input type="text" className="form-control" id="custName" aria-describedby="custName" placeholder="Name" onChange={this.props.GenhandleChange('user_name')} />
                      </div>

                      <div className="col-6">

                          <input type="email" className="form-control" id="custEmail" aria-describedby="custEmail" placeholder="Email address" onChange={this.props.GenhandleChange('email')} />
                      </div>
</div>
<div>&nbsp;</div>
<div className="row">
                      <div className="col-4">

                          <input type="telephone" className="form-control" id="custMobile" aria-describedby="custMobile" placeholder="Mobile no." onChange={this.props.GenhandleChange('phone_num')} />
                      </div>



                      <div className="col-4">

                          <input type="text" className="form-control" id="companyName" aria-describedby="companyName" placeholder="Company" onChange={this.props.GenhandleChange('user_company')} />
                      </div>

                      <div className="col-4">

                          <select className="form-control" id="productType" onChange={this.props.GenhandleChange('user_floor')}>
                              <option className="card-text" value={null}>Please select...</option>
                              <option className="card-text" value="B">B</option>
                              <option className="card-text" value="LG">LG</option>
                              <option className="card-text" value="G">G</option>
                              <option className="card-text" value="UG">UG</option>
                              <option className="card-text" value="1">1</option>
                              <option className="card-text" value="2">2</option>
                              <option className="card-text" value="3">3</option>
                              <option className="card-text" value="4">4</option>
                              <option className="card-text" value="5">5</option>
                              <option className="card-text" value="6">6</option>
                          </select>
                      </div>
                      </div>
<div>&nbsp;</div>
                      <div className="row">
                      <div className="form-group col-12">

                          <textarea className="form-control" onChange = {this.props.handleMessage}id="custAdditionalInfo" rows="1" placeholder="Additional information" ></textarea>
                      </div>

                  </div>

                  <div className="row">
                      <div className="form-group col-12">

                          <textarea className="form-control" id="custAdditionalInfo" rows="5" >{Object.keys(this.props.basket).toString()}</textarea>
                          </div>
                          </div>

                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                      <Checkout 
                      flag={this.state.flag}
                      successPayment={this.successPayment}
            name={this.props.name}
            description={this.props.description}
            amount={this.props.amount}
            sendTicket={this.props.sendTicket} />
                  </div>
              </div>
          </div>
      </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default TestModal