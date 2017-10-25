import React, { Component } from 'react';

class Basket extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let total = 0;
    return (
      <div className='Basket box column is-one-third'>
        <ul>
          {Object.keys(this.props.basquet).map((productName, i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            let subtotal = quantity * product.price;
            total += quantity * product.price
            return (
              <div key={i} className='level'>
                <li className='level-item'>{product.name}</li>
                <li className='level-item'>{product.price}</li>
                <li className='level-item'>{quantity}</li>
                <li className='level-item'>Sub-total: {'£' + (quantity * product.price / 100).toFixed(2)}</li>

              </div>
            )
          })}
          <div>
            <li>Total: {'£' + (total / 100).toFixed(2)}</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Basket;