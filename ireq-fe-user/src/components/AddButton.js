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
    this.props.handleAddClick(this.props.itemName, this.props.itemPrice);
  }
}

export default AddButton;
