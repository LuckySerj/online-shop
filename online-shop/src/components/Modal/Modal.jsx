import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = (props) => {
  const {
    header,
    bgHeader,
    closeBtn,
    isCloseBtn,
    text,
    headerTextColor,
    bgBody,
    bodyTextColor,
    actions,
    onClick,
  } = props;
  return (
    <>
      <div className="modal-dialog window-modal">
        <div className="modal-content" style={{ zIndex: "1051" }}>
          <div
            className="modal-header"
            style={{ backgroundColor: bgHeader, border: "none" }}
          >
            <h5 className="modal-title" style={{ color: headerTextColor }}>
              {header}
            </h5>
            {isCloseBtn && <Button className={closeBtn} onClick={onClick} />}
          </div>
          <div
            className="modal-body"
            style={{ backgroundColor: bgBody, color: bodyTextColor }}
          >
            {text}
          </div>
          <div
            className="modal-footer"
            style={{
              backgroundColor: bgBody,
              border: "none",
              justifyContent: "center",
            }}
          >
            {actions}
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop"
        style={{ opacity: ".5" }}
        onClick={onClick}
      ></div>
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  bgHeader: PropTypes.string,
  closeBtn: PropTypes.string,
  isCloseBtn: PropTypes.bool,
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgBody: PropTypes.string,
};

Modal.defaultProps = {
  header: "",
  bgHeader: "transparent",
  closeBtn: "btn-close",
  isCloseBtn: true,
  text: "",
  textColor: "#000",
  bgBody: "transparent",
};

export default Modal;
