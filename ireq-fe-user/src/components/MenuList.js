import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import MenuItem from './MenuItem'

class MenuList extends Component {


  render() {
    return (
      <div className='MenuList container box is-two-thirds'>
        <nav className="navbar level">
          <button onClick={this.props.handleDrinkChange} value='hot drink' className='navbar-item level-item' >Hot</button>
          <button onClick={this.props.handleDrinkChange} value='drink' className='navbar-item level-item' >Cold</button>
          <button onClick={this.props.handleDrinkChange} value='food' className='navbar-item level-item' >Frozen</button>
        </nav>
        <div className='DecorativeList container box column'>
          <ul>
            {this.props.items.map((item, i) => (
              <div className='level columns' key={i}>

                <MenuItem
                  itemName={item.name}
                  itemPrice={item.price}
                  itemDescription={item.description}
                  handleAddClick={this.props.handleAddClick}
                />
              </div>
            ))}
          </ul>
        </div>
        <Route path='/menu/drinks/hot'/>
      </div>
    );
  }


}

export default MenuList