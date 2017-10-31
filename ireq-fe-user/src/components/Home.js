import React, {Component} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import HotDrinks from './HotDrinks'

class Home extends Component {
  render() {
    return (
      <div className="conatiner-fluid main-container">
        <div className="row row-no-padding-margin">
          <div className="col-md-5 left-side-menu-location">
            <h1 className="menu-indication-header">Menu</h1>
          </div>
          <div className="col-md-7 right-side-menu-items">
            <div className="menu-items">


              <h3 className="drinks-header">DRINKS</h3>
              <Link to="/hot-drinks">
                <div className="product-div">
                  <img src="../images/latte.jpg" className="product-img" alt="coffee"/>
                  <h3 className="item-description">Hot Drinks</h3>
                </div>
              </Link>

              <Link to="/cold-drinks">
                <div className="product-div">
                  <img src="../images/example3.png" className="product-img" alt="coffee"/>
                  <h3 className="item-description">Cold Drinks</h3>
                </div>
              </Link>


              <h3 className="drinks-header">FOOD</h3>
              <Link to="/breakfast">
                <div className="product-div">
                  <img src="../images/example5.jpg" className="product-img" alt="Breakfast"/>
                  <h3 className="item-description">Breakfast</h3>
                </div>
              </Link>

              <Link to="/lunch">
                <div className="product-div">
                  <img src="../images/example4.png" className="product-img" alt="Lunch"/>
                  <h3 className="item-description">Lunch</h3>
                </div>
              </Link>

              <Link to="/bakery">
                <div className="product-div">
                  <img src="../images/example7.jpg" className="product-img" alt="Breakfast"/>
                  <h3 className="item-description">Bakery</h3>
                </div>
              </Link>

              <Link to="/feature-foods">
                <div className="product-div">
                  <img src="../images/poridge.jpg" className="product-img" alt="Breakfast"/>
                  <h3 className="item-description">Feature Foods</h3>
                </div>
              </Link>

              <Link to="/fruit">
                <div className="product-div">
                  <img src="../images/example.jpg" className="product-img" alt="Fresh Fruit"/>
                  <h3 className="item-description">Fresh Fruit</h3>
                </div>
              </Link>

              <Link to="/snacks">
                <div className="product-div">
                  <img src="../images/example6.jpg" className="product-img" alt="Snacks & Sweets"/>
                  <h3 className="item-description">Snacks</h3>
                </div>
              </Link>

              <h3 className="drinks-header">AT HOME COFFEE</h3>
              <div className="product-div">
                <img src="../images/example2.png" className="product-img" alt="Cold Drinks"/>
                <h3 className="item-description">Cold Drinks</h3>
              </div>
              <div className="product-div">
                <img src="../images/example3.png" className="product-img" alt="coffee"/>
                <h3 className="item-description">Hot Drinks</h3>
              </div>
            </div>

            <div className="flex-items-footer">
              <p className="items-footer-text">
                © Copyright 2017. All Rights Reserved. I-Request
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Home
