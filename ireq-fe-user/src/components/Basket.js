import React, { Component } from 'react';
import SubtractButton from './SubtractButton'
import Checkout from './Checkout';
import CheckoutModal from './CheckoutModal'


class Basket extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let total = 0;
    return (
      <div className='Basket box column is-one-third'>
        <ul>

          {Object.keys(this.props.basquet).map((productName, i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            total += quantity * product.price
            if (quantity >= 1){ 
            return (
              <div key={i} className='level columns'>
                <li className='level-item column is-half'>{product.name}</li>
                <li className='level-item column'>{'£' + (product.price / 100).toFixed(2)}</li>
                <li className='level-item column'>{quantity}</li>
                <li className='level-item column'>{'£' + (quantity * product.price / 100).toFixed(2)}</li>
                <SubtractButton
                  itemName={product.name}
                  handleSubtractButton={this.props.handleSubtractButton}
                />

              </div>
            )}
          })}
          <div className='total level'>
            <li className='level-item'>Total: {'£' + (total / 100).toFixed(2)}</li>
            <CheckoutModal
            name={'iRequest'}
            description={'Enjoy your food!'}
            amount={total}
            sendTicket={this.handleClick}
            GenhandleChange = {this.props.GenhandleChange}
            basket = {this.props.basquet}
            handleMessage ={this.props.handleMessage}
            />
          </div>
         

        </ul>
      </div>
    );
  }

  handleClick() {

    this.props.handleSubmitButton()
  }

}

export default Basket;