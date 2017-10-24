import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import headerPic from '../images/coffee-Background.jpg';

import '../App.css';

import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <BrowserRouter>
        <section>
          <div className="App">

            <header className="App-header">
              <div className="background-image">
                <img src={headerPic} className="background-image" alt="image" />
              </div>
              <h1 className="App-title">Home</h1>
            </header>
            <div>

              <nav>
                <Link to='/Menu'>Menu</Link>
                {' | '}
                <Link to='/Order'>Order</Link>
              </nav>
              <Route exact path='/Menu' component={Menu} />
              <Route path='/Order' component={Order} />
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

const Order = (props) => (
  <div className='Order'>
    <p>Order</p>
  </div>
);

const Home = (props) => (
  <div className='Home'>
    <p>Home</p>
  </div>
);




export default App;
