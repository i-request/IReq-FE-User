import React, { Component } from 'react';

class Basquet extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='Basquet'>
        <ul>
          {Object.keys(this.props.basquet).map((productName,i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            return (
              <div key={i}>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{quantity}</li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Basquet;