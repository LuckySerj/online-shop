import React, { Component } from 'react';
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import Error from './components/Error/Error'
import ProductList from './components/ProductList/ProductList'
import "bootstrap/scss/bootstrap.scss"

class App extends Component {
 state = { 
  isModalOpen: false,
  items: [],
  error: null,
  favourites: [],
  selectedToCartItemId: null,
  itemsIsInCart: [],
     }
  
     componentDidMount = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        this.setState({ items: data })
        this.setItemsInCart()
        this.setFavouriteItems()
      } catch (error) {
        this.setState({ error })
      }
    }

    setItemsInCart = () => {
      if (localStorage.getItem('inCart')) {
        const itemsIsInCartLS = JSON.parse(localStorage.getItem('inCart'))
        this.setState({ itemsIsInCart: itemsIsInCartLS })
      }
    }

    setFavouriteItems = () => {
      if (localStorage.getItem('favourites')) {
        const favouritesLS = JSON.parse(localStorage.getItem('favourites'))
        this.setState({ favourites: favouritesLS })
      }
    }

    onOpenBtnClick = (id) => {
      this.setState({ selectedToCartItemId: id })
      this.setState({ isModalOpen: true })
    }

    onCheckBtnClick = (id) => {
      const newFavouritesArr = [...this.state.favourites]
      newFavouritesArr.includes(id)
        ? newFavouritesArr.splice(newFavouritesArr.indexOf(id), 1)
        : newFavouritesArr.push(id)
      this.setState({ favourites: newFavouritesArr })
      localStorage.setItem('favourites', JSON.stringify(newFavouritesArr))
    }

    onCartBtnClick = () => {
      const newItemsInCartArr = [...this.state.itemsIsInCart]
      const { selectedToCartItemId } = this.state
      newItemsInCartArr.push(selectedToCartItemId)
      const uniqueCartItems = [...new Set(newItemsInCartArr)];
      this.setState({ itemsIsInCart: uniqueCartItems })
      localStorage.setItem('inCart', JSON.stringify(uniqueCartItems))
      this.modalClose()
    }


  modalClose = () => {
    this.setState({ isModalOpen: false})
  };

  render() { 
    const { isModalOpen, items, error, favourites } = this.state
    return ( 
     
      <>
           {error
          ? <Error />
          : <ProductList products={items}
           favouritesProducts ={favourites}
            onClick={this.onOpenBtnClick}
            onCheckBtnClick={this.onCheckBtnClick} />
        }

        {isModalOpen && <Modal
          closeBtn = "btn-close btn-close-white" 
          isCloseBtn = {true} 
          header="Do you want to add the product to cart?"
          headerTextColor = "#fff"
          bgHeader = "#fb4509"
          text="This product will be saved in your cart"
         
          actions={
          <>
            <Button
              text="Add"
              bgColor="#ff7c12"
              onClick={this.onCartBtnClick}
              textColor="#fff"
              type="button"
            />
            <Button 
              text="Cancel" 
              bgColor="#ff7c12" 
              onClick={this.modalClose} 
              textColor="#fff"
              type="button"
             />
         </>

          }
          onClick={this.modalClose} />
        }
      </>

     );
  }
}
 
export default App;
