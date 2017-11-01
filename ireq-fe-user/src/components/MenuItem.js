import React, { Component } from 'react';
import AddButton from './AddButton';

class MenuItem extends Component {
  render() {
    const itemName = this.props.itemName;
    const itemPrice = '£' + (this.props.itemPrice / 100).toFixed(2)
    const itemDescription = this.props.itemDescription;
    const imgUrl = this.props.imgUrl;
    return (
      <div className='product-div-inner-section'>
        <img src={imgUrl} className="inner-product-img" alt="" />

        <li className=''>{itemName}</li>
        <li className=''>{itemDescription}</li>
        <li className=''>{itemPrice}</li>

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
