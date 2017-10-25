import React, { Component } from 'react';

class Basquet extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let total = 0;
    return (
      <div className='Basquet'>
        <ul>
          {Object.keys(this.props.basquet).map((productName, i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            let subtotal = quantity * product.price;
            total += quantity * product.price
            return (
              <div key={i}>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{quantity}</li>
                <li>Sub-total: {'£' + (quantity * product.price / 100).toFixed(2)}</li>

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

export default Basquet;