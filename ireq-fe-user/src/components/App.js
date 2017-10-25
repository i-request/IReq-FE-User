import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'

import './App.css';

import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchStatus();
  }

  fetchStatus() {
    axios.get('http://localhost:9007/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <section id='main-section' className='section background-image'>

          <nav className="navbar" aria-label="main navigation">
            <div className="navbar-brand">

              <Link className='navbar-item' to='/Menu'>Menu</Link>
              <Link className='navbar-item' to='/Order'>Order</Link>

              <button className="button navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>

          <div className="App">
            <div>

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