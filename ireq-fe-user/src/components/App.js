import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Menu from './Menu'
import Checkout from './Checkout'
import NavBar from './NavBar';
import HotDrinks from './HotDrinks'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route path='/menu' component={Menu}/>
          <Route exact path='/hot-drinks' component={HotDrinks}/>
        </div>
      </BrowserRouter>
    );
  }
}

// const Home = (props) => (
//   <div>Home</div>
// )
//
const About = (props) => (
  <div>About</div>
)
export default App;
