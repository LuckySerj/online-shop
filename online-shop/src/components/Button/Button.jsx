import React from 'react';
import PropTypes from "prop-types"

class Button extends React.Component {
    handleClick =()=> {
        if(this.props.onClick){
            this.props.onClick()   
        }
    }
    render() { 
        const {text, className, bgColor, textColor, type} = this.props
        return (<button 
        className = {className} 
        onClick = {this.handleClick} 
        style={{backgroundColor: bgColor, color: textColor}}
        type = {type}
        >{text}
        </button>)
        
    }
}
 
Button.propTypes = {
    className: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    type: PropTypes.string

}

Button.defaultProps = {
    className: 'btn',
    bgColor: '',
    type: 'button'
}


export default Button;