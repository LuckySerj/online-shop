import PropTypes from "prop-types";

const Button = ({ text, className, bgColor, textColor, type, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
      type={type}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: "btn",
  bgColor: "",
  type: "button",
};

export default Button;
