import React, { Component } from 'react';


class AddButton extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const itemName = this.props.itemName;
    const itemPrice = this.props.itemPrice;

    return (
      <div className='column level-item'>
        <button onClick={() => this.props.handleAddClick(itemName, itemPrice)}>+</button>
      </div>
    );
  }
}


export default AddButton;