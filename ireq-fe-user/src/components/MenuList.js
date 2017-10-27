import React, { Component } from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {


  render() {
    return (
      <div className='MenuList container box is-two-thirds'>
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
      </div>
    );
  }
}

export default MenuList