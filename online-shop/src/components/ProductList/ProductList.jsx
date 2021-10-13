import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import "./ProductList.scss"
import PropTypes from "prop-types"

export default class ProductsList extends Component {
    render() {
      const { products, onClick, onCheckBtnClick, favouritesProducts } = this.props
      return (
        <>
          <h2 className="product-list-title ">Most Popular Products</h2>
          <ul className="grid product-list p-0">
            {products.map(item => {
              return (
                  <ProductCard key={item.id}
                    product={item}
                    onClick={onClick} 
                    onCheckBtnClick={onCheckBtnClick} 
                    favourites={favouritesProducts}/>
              )
            })}
          </ul>
        </>
      )
    }
  }

  ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onCheckBtnClick: PropTypes.func,
    favourites: PropTypes.array,

}

ProductsList.defaultProps = {
  onClick: () => { },
  onCheckBtnClick: () => { },
  favourites:[]
}