import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './About';
import Home from './Home';
import Menu from './Menu';
import NavBar from './NavBar';
import Success from './Success';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/success' component={Success} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const NoMatch = () => (
  <div className='Page404'>
    <h1 className='text404'>Page not found - 404</h1>
  </div>
)


export default App;
