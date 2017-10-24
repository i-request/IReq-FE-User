import React, { Component } from 'react';

import MenuList from './MenuList';
import Basquet from './Basquet'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Espresso', price: 2 },
        { name: 'Filtered coffee', price: 2.50 },
        { name: 'Latte', price: 2.75 },
        { name: 'Frozen', price: 3 },
      ],
      basquet: []
    }
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handleAddClick(event, eventPrice) {
    // console.log(event, eventPrice)
    // console.log(this.state.basquet)
    const order = {
      name: event,
      price: eventPrice
    }
    this.setState({
      basquet: this.state.basquet.concat(order)
    })
  }


  render() {
    return (
      <div className='Menu'>
        <MenuList
          items={this.state.items}
          handleAddClick={this.handleAddClick}
        />
        <Basquet basquet={this.state.basquet}/>
      </div>
    );
  }
}
export default Menu;