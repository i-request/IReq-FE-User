import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className='Home'>
      <h1>WELCOME</h1>
      <h2><Link to='/menu'>Press here to see the MENU</Link></h2>
      </div>
    );
  }
}
export default Home
