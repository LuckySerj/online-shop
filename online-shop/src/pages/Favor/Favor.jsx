import ProductCard from '../../components/ProductCard/ProductCard';
import PropTypes from 'prop-types';

const Favor = (props) => {
    const { items, favorites, onCheckBtnClick, addToCartBtnClick } = props
    const favoritesItems = items.filter(product => favorites.includes(product.id));
    return (
        (favoritesItems.length > 0)
            ? <>
                <ul className="grid product-list p-0">
                    {favoritesItems.map(item => {
                        return (
                            <ProductCard key={item.id}
                                product={item}
                                onCheckBtnClick={onCheckBtnClick}
                                favorites={favoritesItems}
                                onClick={addToCartBtnClick}
                                status="favorite"
                            />
                        )
                    })}
                </ul>
            </>
            : <p className = 'ms-5'>List of favorite products is empty</p>
    )
}

Favor.propTypes = {
    items: PropTypes.array.isRequired,
    onCheckBtnClick: PropTypes.func,
    addToCartBtnClick: PropTypes.func,
    favorites: PropTypes.array,
}

Favor.defaultProps = {
    onCheckBtnClick: () => { },
    addToCartBtnClick: () => { },
    favorites: []
}

export default Favor