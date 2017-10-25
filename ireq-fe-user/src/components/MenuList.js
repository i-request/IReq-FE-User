import React, { Component } from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='List'>
        <h1>Menu List</h1>
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i}>
              <MenuItem
                itemName={item.name}
                itemPrice={item.price}
                handleAddClick={this.props.handleAddClick}
              />
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

export default MenuList