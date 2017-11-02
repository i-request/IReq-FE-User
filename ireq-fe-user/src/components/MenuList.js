import React, {Component} from 'react';

import MenuItem from './MenuItem'

class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: ''
    }
  }

  render() {
    const activeStyle = {
      backgroundColor: '#00653e',
      opacity: '1'
    };
    const activeHeaderStyle = {
      color: '#f7f7f7'
    }
    return (
      <div>

        <button className="hot product-div btn btn-light" onClick={this.props.handleDrinkChange} value='food' style={this.props.active.includes('hot')
          ? activeStyle
          : {}}>
          <img src="../images/food.png" className="product-img" alt=""/>
          <h3 className="item-description" style={this.props.active.includes('hot')
            ? activeHeaderStyle
            : {}}>Food</h3>
        </button>

        <button className="cold product-div btn btn-light" onClick={this.props.handleDrinkChange} value='drink' style={this.props.active.includes('cold')
          ? activeStyle
          : {}}>
          <img src="../images/latte.jpg" className="product-img" alt=""/>
          <h3 className="item-description" style={this.props.active.includes('cold')
            ? activeHeaderStyle
            : {}}>Drink</h3>
        </button>

        <div className="test">
          {this.props.items.map((item, i) => (<MenuItem key={i} imgUrl={item.imgUrl} itemName={item.name} itemPrice={item.price} itemAller ={item.allergens} itemDescription={item.description} handleAddClick={this.props.handleAddClick}/>))}
        </div>
{/* 
//       <button className="hot product-div btn btn-light" onClick={this.props.handleDrinkChange} value='hot drink' style={this.props.active.includes('hot') ? activeStyle : {}}>
//         <img src="../images/latte.jpg" className="product-img" alt="" />
//         <h3 className="item-description" style={this.props.active.includes('hot') ? activeHeaderStyle : {}}>Hot Drinks</h3>
//       </button>

//       <button className="cold product-div btn btn-light" onClick={this.props.handleDrinkChange} value='drink' style={this.props.active.includes('cold') ? activeStyle : {}}>
//           <img src="../images/example3.png" className="product-img" alt="" />
//           <h3 className="item-description" style={this.props.active.includes('cold') ? activeHeaderStyle : {}}>Cold Drinks</h3>
//       </button>

//       <div> */}
{/* //         {this.props.items.reduce((acc, item, i) => { */}
{/* //           let menuItem = (
//           <MenuItem
//             key={i}
//             imgUrl={item.imgUrl}
//             itemName={item.name}
//             itemPrice={item.price}
//             itemAller={item.allergens}
//             itemDescription={item.description}
//             extras={item.extras}
//             inStock={item.inStock}
//             type={item.type}
//             temperature={item.temperature}
//             handleAddClick={this.props.handleAddClick}

//           />)
//           if (item.inStock === true) acc.push(menuItem);
//           return acc;
//            return
//         }, [])} */}

      </div>
    );
  }
}

export default MenuList
