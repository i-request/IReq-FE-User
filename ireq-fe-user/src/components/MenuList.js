import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MenuItem from './MenuItem'

class MenuList extends Component {
  constructor(props) {
    super(props)
    this.toggleActiveBackground = this.toggleActiveBackground.bind(this);
    this.renderCold = this.renderCold.bind(this)
    this.state = {
      navBarColdDrinks: false,
      navBarHotDrinks: false
    }
  }

  toggleActiveBackground(event) {
    console.log('event', event.currentTarget.firstChild.className);
    this.setState({ navBarColdDrinks: !this.state.navBarColdDrinks, navBarHotDrinks: false })
  }

  renderCold(bool) {
    const addActiveBackground = bool
      ? 'active-background'
      : '';
    return (
      <button id="hotDrinks" onClick={this.props.handleDrinkChange} className={`hot product-div btn btn-light ${addActiveBackground}`}>
        <img src="../images/latte.jpg" className="product-img" alt="coffee" />
        <h3 className="item-description">Hot Drinks</h3>
      </button>
    );
  }

  render() {
    return (
      <div>
        <span id='viewBtn' onClick={this.toggleActiveBackground}>{this.renderCold(this.props.isViewed)}</span>

        <button id="coldDrinks" className="product-div btn btn-light active-background" onClick={this.props.handleDrinkChange} value='drink'>
          <img src="../images/example3.png" className="product-img" alt="" />
          <h3 className="item-description">Cold Drinks</h3>
        </button>

        {/* <button onClick={this.props.handleDrinkChange} value='food' className='navbar-item level-item' >Frozen</button> */}

        {this.props.items.map((item, i) => (
          <MenuItem
            key={i}
            imgUrl={item.imgUrl}
            itemName={item.name}
            itemPrice={item.price}
            itemAller={item.allergens}
            itemDescription={item.description}
            extras={item.extras}
            inStock={item.inStock}
            type={item.type}
            temperature={item.temperature}
            handleAddClick={this.props.handleAddClick}

          />
        ))}
      </div>
    );
  }
}

export default MenuList
