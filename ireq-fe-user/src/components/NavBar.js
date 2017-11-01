import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
          <div className="navbar-brand">
            
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-li">
            </li>
              <li className="nav-li">
                <NavLink to="/" className="link-anchor">Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink to='/about' className="link-anchor">About</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to='/menu' className="link-anchor">Menu</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavBar
