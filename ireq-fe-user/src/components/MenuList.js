import React, { Component } from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {


  render() {
    return (
      <div className='List'>
        <h1>Menu List</h1>
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i}>
              <MenuItem
                name={item.name}
                price={item.price}
              />
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

export default MenuList