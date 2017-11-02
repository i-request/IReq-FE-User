import React, { Component } from 'react';
import SubtractButton from './SubtractButton'
import CheckoutModal from './CheckoutModal'


class Basket extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let total = 0;
  if(Object.values(this.props.basquet).length>0)
      {return (
        <div className='basket'>
            <div className="basket-headers">
              <li className="product-headers-name">Product</li>
              <li className="product-headers">Price</li>
              <li className="product-headers">QTY</li>
              <li className="product-headers">Total</li>
            </div>
          <ul className="basket-ul">

          {Object.keys(this.props.basquet).map((productName, i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            total += quantity * product.price
            if (quantity >= 1){
            return (
              <div key={i} className='basket-product'>
                <li className='product-name-basket'>{product.name}</li>
                <li className='product-price-basket'>{'£' + (product.price / 100).toFixed(2)}</li>
                <li className='product-qyt-basket'>{quantity}</li>
                <li className='product-total-basket'>{'£' + (quantity * product.price / 100).toFixed(2)}</li>
                <SubtractButton
                  itemName={product.name}
                  handleSubtractButton={this.props.handleSubtractButton}
                />
              </div>
            )}
          })}
          <div className='pay-products'>
            <li className='total-price'>Total: {'£' + (total / 100).toFixed(2)}</li>
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
    )}
      else return <h1 className="basket-header"> Basket </h1>
    ;
  }

  handleClick() {

    this.props.handleSubmitButton()
  }

}

export default Basket;
