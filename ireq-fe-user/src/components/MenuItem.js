import React, { Component } from 'react';

import AddButton from './AddButton';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='MenuItem'>
        <p>{this.props.itemName}</p> <p>{this.props.ItemPrice}</p>
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