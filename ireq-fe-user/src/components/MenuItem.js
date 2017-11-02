import React, {Component} from 'react';
import AddButton from './AddButton';

class MenuItem extends Component {
  render() {
    const itemName = this.props.itemName;
    const itemPrice = '£' + (this.props.itemPrice / 100).toFixed(2)
    const imgUrl = this.props.imgUrl;
    return (
      <div className='product-div-inner-section'>
        <div className='product-img-div'>
          <img src={imgUrl} className="inner-product-img" alt=""/>
        </div>
        <div className='product-details-div'>
          <div className="product-title-div">
            <li className='product-title'>{itemName}</li>
          </div>

          <div className='price-addbtn'>
            <li className="product-price">{itemPrice}</li>

            <AddButton itemName={this.props.itemName}
             itemPrice={this.props.itemPrice}
             itemAller={this.props.itemAller} 
             itemExtra ={this.props.itemExtra}
             itemStock ={this.props.itemStock}
             handleAddClick={this.props.handleAddClick}/>
          </div>
        </div>

      </div>
    );
  }
}
export default MenuItem
