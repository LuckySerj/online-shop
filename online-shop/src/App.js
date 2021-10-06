import React, { Component } from 'react';
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import "bootstrap/scss/bootstrap.scss"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isFirstModalOpen: false,
      isSecondModalOpen: false
     }
  }

  firstModalOpen = () => {
    this.setState({ isFirstModalOpen: true})
  };

  secondModalOpen = () => {
    this.setState({ isSecondModalOpen: true})
  }

  firstModalClose = () => {
    this.setState({ isFirstModalOpen: false})
  };

  secondModalClose = () => {
    this.setState({ isSecondModalOpen: false})
  };

  render() { 
    const {isFirstModalOpen, isSecondModalOpen} = this.state
    return ( 
     
      <div>
      <header className="container d-flex justify-content-center mt-5">
      <Button text = "Open first modal"
      className="btn btn-primary me-3"
      onClick={this.firstModalOpen}/>
      <Button text = "Open second modal" 
      className="btn btn-info ms-3" 
      onClick={this.secondModalOpen}/>
      </header>
      
      
      {  isFirstModalOpen && <Modal header = "Do you want to delete this file?" 
      closeBtn = "btn-close btn-close-white" 
      isCloseBtn = {true} 
      text = "Once you delete this file, it won`t be possible to undo this action. Are you sure you want delete it?"
      textColor = "#fff"
      onClick = {this.firstModalClose}
      bgHeader = "#d44637"
      bgBody = "#e74c3c"
      actions={
         <>

         <Button 
         text="Ok" 
         bgColor="#b3382c" 
         className="btn btn-danger"/>
        
         <Button 
         text="Cancel" 
         bgColor="#b3382c" 
         onClick={this.firstModalClose} 
         className="btn btn-danger"/>
         </>
       }
       onClick={this.firstModalClose}
      />}

      {  isSecondModalOpen && <Modal header = "Do you want to add new file?" 
      closeBtn = "btn-close btn-close-white" 
      isCloseBtn = {true} 
      text = "After adding the file you can delete it . Are you sure you want add it?"
      textColor = "#fff"
      onClick = {this.secondModalClose}
      bgHeader = "	#228B22"
      bgBody = "#3CB371"
      actions={
         <>
         <Button 
         text="Ok" 
         bgColor="#006400" 
         className="btn btn-success"/>
        
         <Button 
         text="Cancel" 
         bgColor="#006400" 
         onClick={this.secondModalClose} 
         className="btn btn-success"/>
         </>
       }
       onClick={this.secondModalClose}
      />}

</div>
     );
  }
}
 
export default App;
