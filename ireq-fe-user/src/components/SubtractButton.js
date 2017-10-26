import React, { Component } from 'react';


class SubtractButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  render() {
    return (
      <div className='column level-item'>
        <button onClick={this.handleClick}>-</button>
      </div>
    );
  }
  
  handleClick(){
    this.props.handleSubtractButton(this.props.itemName)
  }
}


export default SubtractButton;