import React, { Component } from 'react';


class AddButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  render() {
    return (
      <div className="add-product-to-basket-btn">
        <button onClick={this.handleClick} className="add-button">
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  handleClick(){
    let { itemName, itemPrice, itemAller, itemExtra, itemStock } = this.props

    this.props.handleAddClick(itemName, itemPrice, itemAller, itemExtra, itemStock,);
  }
}

export default AddButton;
