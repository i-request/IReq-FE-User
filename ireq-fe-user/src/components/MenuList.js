import React, { Component } from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {
 constructor(props) {
   super(props)
   this.state = {
     active: ''
   }
 }

  render() {
    const activeStyle = { backgroundColor: '#00653e' };
    const activeHeaderStyle = { color: '#f7f7f7' }

    return (

      <div>
        <button className="cold product-div btn btn-light" onClick={this.props.handleDrinkChange} value='drink' style={this.props.active.includes('cold') ? activeStyle : {}}>
          <div className="test">
            <img src="../images/example3.png" className="product-img" alt="" />
            <h3 className="item-description" style={this.props.active.includes('cold') ? activeHeaderStyle : {}}>Cold Drinks</h3>
          </div>
        </button>

        <button className="hot product-div btn btn-light" onClick={this.props.handleDrinkChange} value='hot drink' style={this.props.active.includes('hot') ? activeStyle : {}}>
          <img src="../images/latte.jpg" className="product-img" alt="" />
          <h3 className="item-description" style={this.props.active.includes('hot') ? activeHeaderStyle : {}}>Hot Drinks</h3>
        </button>

        {this.props.items.map((item, i) => (
          <MenuItem
            key={i}
            imgUrl={item.imgUrl}
            itemName={item.name}
            itemPrice={item.price}
            itemAller ={item.allergens}
            itemDescription={item.description}
            handleAddClick={this.props.handleAddClick}
          />
        ))}
      </div>
    );
  }
}

export default MenuList
