import PropTypes from "prop-types"
 
const Button = (props) => {
    const {text, className, bgColor, textColor, type, onClick} = props;
    return (<button 
        className = {className} 
        onClick = {onClick} 
        style={{backgroundColor: bgColor, color: textColor}}
        type = {type}
        >{text}
        </button>)
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