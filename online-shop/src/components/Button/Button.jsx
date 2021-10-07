import React from 'react';
import PropTypes from "prop-types"

class Button extends React.Component {
    handleClick =()=> {
        if(this.props.onClick){
            this.props.onClick()   
        }
    }
    render() { 
        const {text, className, bgColor} = this.props
        return (<button 
        className = {className} 
        onClick = {this.handleClick} 
        style={{backgroundColor: bgColor}}>{text}
        </button>)
        
    }
}
 
Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string.isRequired,
    bgColor: PropTypes.string

}

Button.defaultProps = {
    text: '',
    className: 'btn',
    bgColor: '',
}


export default Button;