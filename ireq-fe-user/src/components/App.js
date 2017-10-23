import React, { Component } from 'react';
import headerPic from '../images/coffee-Background.jpg';
import '../App.css';

import MenuList from './MenuList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Espresso', price: 2 },
        { name: 'Filtered coffee', price: 2.50 },
        { name: 'Latte', price: 2.75 },
        { name: 'Frozen', price: 3 },
      ]
    }
  }

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        <header className="App-header">

          <div className="background-image">
            <img src={headerPic} className="background-image" alt="image" />
          </div>
          <h1 className="App-title">Coffee Menu</h1>
        </header>

        <MenuList items={this.state.items} />
      </div>
    );
  }
}

const Order = (props) => (
  <div className='Order'>
    Order
  </div>
);





export default App;
