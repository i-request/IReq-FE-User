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
        <section className='section '>
          <div className="App container box">

            <header className="App-header">
              <div className="background-image">
                <img src={headerPic} className="background-image" alt="" />
              </div>
              <h1 className="App-title">Home</h1>
            </header>

            <div>



              <nav className='navbar'>
                <Link to='/Menu'>Menu</Link>
                {' | '}
                <Link to='/Order'>Order</Link>
              </nav>
              <Switch>
                <Route exact path='/Menu' component={Menu} />
                <Route path='/Order' component={Order} />
              </Switch>
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





export default App;
