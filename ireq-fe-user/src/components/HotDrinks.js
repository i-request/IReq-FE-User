import React, {Component} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';

class HotDrinks extends Component {
  render() {
    return (
      <div className="conatiner-fluid main-container">
        <div className="row row-no-padding-margin">
          <div className="col-md-5 left-side-menu-location">
            <Link to='/'>
              <h4 className="left-side-back-menu">
                Menu
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </h4>
            </Link>
            <h1 className="menu-indication-header">
              Hot Drinks</h1>
          </div>
          <div className="col-md-7 right-side-menu-items">
            <div className="menu-items-inner">
              <div className="flex-container-child">
                <div className="product-div-inner-section">
                  <img src="../images/cappauccino.jpg" className="inner-product-img" alt="Breakfast"/>
                  <h3 className="inner-item-description">Cappauccino</h3>
                </div>
                <div className="product-div-inner-section">
                  <img src="../images/coffee-latte.jpg" className="inner-product-img" alt="Breakfast"/>
                  <h3 className="inner-item-description">Coffee Latte</h3>
                </div>
                <div className="product-div-inner-section">
                  <img src="../images/latte.jpg" className="inner-product-img" alt="Breakfast"/>
                  <h3 className="inner-item-description">Flat White</h3>
                </div>
                <div className="product-div-inner-section">
                  <img src="../images/poridge.jpg" className="inner-product-img" alt="Breakfast"/>
                  <h3 className="inner-item-description">Feature Foods</h3>
                </div>
                <div className="flex-items-footer">
                  <p className="items-footer-text">
                    © Copyright 2017. All Rights Reserved. I-Request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HotDrinks
