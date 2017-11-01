import React, { Component } from 'react';


class AddButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  render() {
    return (
      <div className='inner-item-description'>
        <button onClick={this.handleClick}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  handleClick(){
    let { itemName, itemPrice, itemAller, extras, inStock, type, temperature } = this.props

    this.props.handleAddClick(itemName, itemPrice, itemAller, extras, inStock, type, temperature);
  }
}

export default AddButton;
