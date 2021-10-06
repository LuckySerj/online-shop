import React from 'react';

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
 
export default Button;