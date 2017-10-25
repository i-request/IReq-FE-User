import React, { Component } from 'react';

import AddButton from './AddButton';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemName = this.props.itemName;
    const itemPrice = '£' + (this.props.itemPrice / 100).toFixed(2)
    return (
      <div className='MenuItem level'>
        <p className='level-item'>{itemName}</p> <p  className='level-item'>{itemPrice}</p>

        <AddButton
          itemName={this.props.itemName}
          itemPrice={this.props.itemPrice}
          handleAddClick={this.props.handleAddClick}
        />
      </div>
    );
  }
}


export default MenuItem