import React, { Component } from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='MenuList section box is-two-thirds'>
        <h1>Menu List</h1>
        <div className='DecorativeList container box column'>
          <ul>
            {this.props.items.map((item, i) => (
              <div className='level columns' key={i}>

                <MenuItem
                  itemName={item.name}
                  itemPrice={item.price}
                  handleAddClick={this.props.handleAddClick}
                />

              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuList