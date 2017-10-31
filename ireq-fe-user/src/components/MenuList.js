import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MenuItem from './MenuItem'

class MenuList extends Component {
  render() {
    return (
      <div className=''>

        <button onClick={this.props.handleDrinkChange} className="product-div btn btn-light" value='hot drink'>
          <img src="../images/latte.jpg" className="product-img" alt="coffee" />
          <h3 className="item-description">Hot Drinks</h3>
        </button>

        <button className="product-div btn btn-light" onClick={this.props.handleDrinkChange} value='drink'>
          <img src="../images/example3.png" className="product-img" alt="" />
          <h3 className="item-description">Cold Drinks</h3>
        </button>

        {/* <button onClick={this.props.handleDrinkChange} value='food' className='navbar-item level-item' >Frozen</button> */}


        {this.props.items.map((item, i) => (
          <MenuItem
            key={i}
            imgUrl={item.imgUrl}
            itemName={item.name}
            itemPrice={item.price}
            itemDescription={item.description}
            handleAddClick={this.props.handleAddClick}
          />
        ))}

        <Route path='/menu/drinks/hot' />
      </div>
    );
  }


}

export default MenuList