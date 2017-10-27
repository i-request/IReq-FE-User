import React, { Component } from 'react';

import AddButton from './AddButton';

class MenuItem extends Component {


  render() {
    const itemName = this.props.itemName;
    const itemPrice = '£' + (this.props.itemPrice / 100).toFixed(2)
    const itemDescription = this.props.itemDescription;
    return (
      <div className='MenuItem level-item'>
        <li className='column'>{itemName}</li>
        <li className='column'>-*{itemDescription}*-</li>
        <li className='column'>{itemPrice}</li>
        

        <AddButton
          itemName={this.props.itemName}
          itemPrice={this.props.itemPrice}
          handleAddClick={this.props.handleAddClick}
        />
      </div>
    );
  }
}


export default MenuItem