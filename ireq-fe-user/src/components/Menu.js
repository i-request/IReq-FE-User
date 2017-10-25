import React, { Component } from 'react';
import axios from 'axios';
import MenuList from './MenuList';
import Basket from './Basket'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      basquet: {}
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <div className='Menu columns'>
        <MenuList
          items={this.state.items}
          handleAddClick={this.handleAddClick}
        />
        <Basket
          basquet={this.state.basquet}
          handleSubmitButton={this.handleSubmitButton}
        />
      </div>
    );
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

  handleSubmitButton(event) {
    let newOrder = Object.values(this.state.basquet)
    console.log(newOrder)

    if (Object.keys(this.state.basquet).length > 0) {
      this.submitTicket(newOrder)
      this.setState({
        basquet: {}
      })
    }

    console.log('There is nothing in the basquet!')
  }

  fetchProducts() {
    axios.get('http://localhost:9007/products')
      .then((response) => {
        // console.log(response.data);
        this.setState({
          items: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitTicket(newOrder) {
    axios.post('http://localhost:9007/tickets',
      {
        delivery: true,
        order_content: newOrder,
        message: 'this is the ticket',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}


export default Menu;