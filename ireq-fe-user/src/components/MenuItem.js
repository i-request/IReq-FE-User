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
        <img src={imgUrl}
          className="inner-product-img" alt="" />

        <li className='inner-item-description'>{itemName}</li>
        <li className='inner-item-description'>-*{itemDescription}*-</li>

        <li className='inner-item-description '>{itemPrice}</li>

        <AddButton
          itemName={this.props.itemName}
          itemPrice={this.props.itemPrice}
          handleAddClick={this.props.handleAddClick}
        />

      </div>
      // <div className="product-div-inner-section">
      //   <img src="../images/cappauccino.jpg" className="inner-product-img" alt="Breakfast" />
      //   <h3 className="inner-item-description">Cappauccino</h3>
      // </div>
    );
  }
}


export default MenuItem