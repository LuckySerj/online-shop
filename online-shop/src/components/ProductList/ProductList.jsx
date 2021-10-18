import ProductCard from '../ProductCard/ProductCard';
import "./ProductList.scss"
import PropTypes from "prop-types"


  const ProductsList = (props) => {
    const { products, onClick, onCheckBtnClick, favoritesProducts } = props
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
                  favorites={favoritesProducts}/>
            )
          })}
        </ul>
      </>
    )

  }


  ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onCheckBtnClick: PropTypes.func,
    favorites: PropTypes.array,

}

ProductsList.defaultProps = {
  onClick: () => { },
  onCheckBtnClick: () => { },
  favorites:[]
}

export default ProductsList