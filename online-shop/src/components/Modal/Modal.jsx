import React, {Component} from 'react'
import Button from '../Button/Button'

class Modal extends Component {
    handleClick =()=> {
        this.props.onClick()
    }

    render() { 
        const {header, bgHeader, closeBtn, isCloseBtn, text, textColor, bgBody, actions} = this.props
        return  <>
        <div className="modal-dialog">
          <div className="modal-content" style = {{zIndex: "1051"}}>
            <div className="modal-header" style={{backgroundColor: bgHeader, border: "none"}}>
              <h5 className="modal-title" style={{color: textColor}} >{header}</h5>
              { isCloseBtn && 
              <Button className={closeBtn} onClick = {this.handleClick}/>}
            </div>
            <div className= "modal-body" style={{backgroundColor: bgBody, color: textColor}}>
              {text}
            </div>
            <div className="modal-footer" style={{backgroundColor: bgBody, border: "none", justifyContent: "center"}}>
              {actions}
            </div>
          </div>
        </div>
        <div className="modal-backdrop" style = {{opacity: ".5"}} onClick ={this.handleClick}></div>
        </>
      
    }
}
 
export default Modal;