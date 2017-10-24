import React, { Component } from 'react';

class Basquet extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log()
    return (
      <div className='Basquet'>
        <ul>
          {this.props.basquet.map((product,i) => {
            return (
              <div key={i}>
                <li>{product.name}</li>
                <li>{product.price}</li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Basquet;