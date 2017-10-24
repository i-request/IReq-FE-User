import React, { Component } from 'react';


class AddButton extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const itemName = this.props.itemName;
    const itemPrice = this.props.itemPrice;

    return (
      <div>
        <button onClick={() => this.props.handleAddClick(itemName,  itemPrice)}>+</button>
      </div>
    );
  }

  // handleAddClick(event) {
  //   const itemName = this.props.itemName
  //   const itemPrice = this.props.itemPrice
  //   console.log(itemName, itemPrice)
  //   return {name:itemName, price:itemPrice}
  // }

}


export default AddButton;