import React, { Component } from 'react';

import SubtractButton from './SubtractButton'

class Basket extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubtractClick = this.handleSubtractClick.bind(this)
    
  }

  render() {
    let total = 0;
    console.log(this.props.basquet)
    return (
      <div className='Basket box column is-one-third'>
        <ul>

          {Object.keys(this.props.basquet).map((productName, i) => {
            const product = this.props.basquet[productName]
            const quantity = product.quantity;
            total += quantity * product.price
            if(quantity === 0) return;
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
                {/* <button onClick={this.handleSubtractClick} className='level-item column'>-</button> */}
              </div>
            )
          })}
          <div className='level'>
            <li className='level-item'>Total: {'£' + (total / 100).toFixed(2)}</li>
            <button onClick={this.handleClick} className='level-item'>Submit</button>
          </div>
        </ul>
      </div>
    );
  }

  // handleSubtractClick(){
  //   this.props.handleSubtractButton()
  // }


  handleClick() {
    this.props.handleSubmitButton()
  }

}

export default Basket;