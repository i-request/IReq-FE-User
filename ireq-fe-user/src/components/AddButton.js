import React, { Component } from 'react';


class AddButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  render() {
    return (
      <div className='column level-item'>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
  
  handleClick(){
    this.props.handleAddClick(this.props.itemName, this.props.itemPrice);
  }
}


export default AddButton;