import React, { Component } from 'react';
import axios from 'axios';
import MenuList from './MenuList';
import Basket from './Basket'
import CheckoutModal from './CheckoutModal'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      basquet: {},
      currentChoice: 'hot drink'
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleSubtractButton = this.handleSubtractButton.bind(this);
    this.handleDrinkChange = this.handleDrinkChange.bind(this);
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <div className="conatiner-fluid main-container">
        <div className="row row-no-padding-margin">
          <div className="col-md-5 left-side-menu-location">
            <Basket
              basquet={this.state.basquet}
              handleSubmitButton={this.handleSubmitButton}
              handleSubtractButton={this.handleSubtractButton}
            />
          </div>

          <div className="col-md-7 right-side-menu-items">
            <div className="menu-items">
              <MenuList
                items={this.itemsFilter(this.state.items)}
                handleAddClick={this.handleAddClick}
                handleDrinkChange={this.handleDrinkChange}
              />
            </div>
            <div className="flex-items-footer">
              <p className="items-footer-text">
                © Copyright 2017. All Rights Reserved. I-Request
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDrinkChange(event) {
    console.log(event.target.value)
    this.setState({
      currentChoice: event.target.value
    });
  }

  itemsFilter(items) {
    return items.filter((item) => {
      return item.type === this.state.currentChoice
    });
  }

  handleAddClick(itemName, itemPrice) {
    let basquet = this.state.basquet
    let order = {
      name: itemName,
      price: itemPrice,
      quantity: basquet[itemName] ? basquet[itemName].quantity + 1 : 1
    }
    this.setState({
      basquet: Object.assign({}, basquet, {
        [itemName]: order
      })
    })
  }

  handleSubtractButton(itemName) {
    let basquet = this.state.basquet
    let quantity = this.state.basquet[itemName].quantity
    let price = this.state.basquet[itemName].price
    let order = {
      name: itemName,
      price: price,
      quantity: quantity - 1
    }

    var newState = {}
    if (order.quantity < 0) {
      for (let key in basquet) {
        if (key === itemName) return;
        else {
          newState[key] = basquet[key]
        }
      }
      this.setState({
        basquet: newState
      })
    }
    else {
      this.setState({
        basquet: Object.assign({}, basquet, {
          [itemName]: order
        })
      });
    }
  }

  fetchProducts() {
   return axios.get('http://localhost:9007/products')
      .then((response) => {
        console.log(response.data);
        this.setState({
          items: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmitButton(event) {
    let newOrder = Object.values(this.state.basquet)
    console.log(newOrder)//Tracking changes/

    if (Object.keys(this.state.basquet).length > 0) {
      this.submitTicket(newOrder)
      this.setState({
        basquet: {}
      })
    }

    console.log('There is nothing in the basquet!')
  }

  submitTicket(newOrder) {
    axios.post('http://localhost:9007/tickets',
      {
        delivery: true,
        order_content: newOrder,
        message: 'this is the ticket',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}


export default Menu;