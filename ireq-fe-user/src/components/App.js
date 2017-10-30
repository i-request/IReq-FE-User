import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import './App.css';

import Menu from './Menu'
import Checkout from './Checkout'

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <section id='main-section' className='section background-image'>

          <nav className="navbar" aria-label="main navigation">
            <div className="navbar-brand">
              <Link className='navbar-item' to='/'>Home</Link>
              <Link className='navbar-item' to='/about'>About</Link>
              <Link className='navbar-item' to='/menu'>Menu</Link>

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
              <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home} />
                <Route path='/menu' component={Menu} />
              </Switch>
            </div>
          </div>

        </section>
      </BrowserRouter>
    );
  }
}

const Home = (props) => (
  <div>Home</div>
)

const About = (props) => (
  <div>About</div>
)
export default App;
