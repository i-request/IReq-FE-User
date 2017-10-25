import React, { Component } from 'react';

import MenuList from './MenuList';
import Basquet from './Basquet'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          type: "drink",
          name: "large black coffee",
          extras: [],
          price: 170,
          inStock: true,
          allergens: []
        },
        {
          type: "food",
          name: "super hot dog",
          extras: ['cheese'],
          price: 700,
          inStock: true,
          allergens: ['meat', 'dairy', 'egg']
        },
        {
          type: "food",
          name: "ham and cheese panini",
          extras: [],
          price: 550,
          inStock: true,
          allergens: ['meat', 'dairy', 'egg']
        },
        {
          type: "drink",
          name: "large diet coke",
          extras: [],
          price: 390,
          inStock: true,
          allergens: []
        },
      ],
      basquet: {}
    }
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handleAddClick(itemName, itemPrice) {
    let basquet = this.state.basquet

    let order = {
      name: itemName,
      price: itemPrice,
      quantity: basquet[itemName] ? basquet[itemName].quantity + 1 : 1
    }

    this.setState({
      basquet: Object.assign({}, basquet, {
        [itemName]: order
      })
    })
  }


  render() {
    return (
      <div className='section'>
      <div className='Menu container box'>
        <MenuList
          items={this.state.items}
          handleAddClick={this.handleAddClick}
        />
        <Basquet 
        basquet={this.state.basquet}
        
         />
      </div>
      </div>
    );
  }
}
export default Menu;