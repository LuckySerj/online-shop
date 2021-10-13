import React, { Component } from "react";
import Button from "../Button/Button"
import "./ProductCard.scss"
import PropTypes from "prop-types"

export default class ProductCard extends Component {
    render() {
        const { product, favourites, onClick, onCheckBtnClick} = this.props
        const { name, item, color, price, url, id} = product;
        const checked = favourites.some(item => item === id)
        return(
            <li className = 'card g-col-6 g-col-md-4 product-card'>
            <div className = 'col'>
                <Button
          className="btn buy-btn"
          text={
            <>
            <svg      
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> <p className="text-white d-inline-block mb-0">Add</p>
            </>

          }
          bgColor="#fb4509"
          onClick={()=>onClick(id)}
          type="button"
        />

       
          <img
            src={url}
            alt={`${name} ${item}`}
            title={`${name} ${item}`}
            aria-label={`${name} ${item}`}
            className="card-img-top mb-2"
          />

          <h4>{`${name} ${color}`}</h4>
          <p>Article: {item}</p>
          <p>Price: {price} UAH</p>

          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="favorite-btn"
          onClick={()=>onCheckBtnClick(id)}
          fill={checked ? "#FFD700" : "rgb(158,149,149)"}
        >
        <path  d="M 15.863281 7.066406 L 12.589844 10.253906 L 13.363281 14.761719 C 13.417969 15.085938 13.285156 15.414062 13.019531 15.605469 C 12.867188 15.714844 12.6875 15.773438 12.511719 15.773438 C 12.371094 15.773438 12.234375 15.738281 12.105469 15.671875 L 8.0625 13.546875 L 4.015625 15.671875 C 3.726562 15.824219 3.371094 15.800781 3.105469 15.605469 C 2.839844 15.414062 2.707031 15.085938 2.761719 14.761719 L 3.535156 10.257812 L 0.261719 7.066406 C 0.0234375 6.835938 -0.0585938 6.492188 0.0429688 6.179688 C 0.144531 5.867188 0.414062 5.636719 0.738281 5.589844 L 5.261719 4.933594 L 7.285156 0.835938 C 7.429688 0.539062 7.730469 0.351562 8.0625 0.351562 C 8.390625 0.351562 8.691406 0.539062 8.835938 0.835938 L 10.859375 4.933594 L 15.382812 5.589844 C 15.710938 5.636719 15.980469 5.867188 16.082031 6.179688 C 16.183594 6.492188 16.097656 6.835938 15.863281 7.066406 Z M 15.863281 7.066406 "/>
           </svg>

            </div>
            </li>
        )
    }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    item: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  onCheckBtnClick: PropTypes.func

}

ProductCard.defaultProps = {
  price: "check with the consultant",
  color: "check with the consultant",
  onClick: () => { },
  onCheckBtnClick: () => { }
}