import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./Modal.scss";
import { setModalOpen } from "../../store/store-components/actions";

const Modal = ({ header, text, actions }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModalOpen(false));
  };
  return (
    <>
      <div className="modal-dialog window-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{header}</h5>
            <Button
              className="btn-close btn-close-white"
              onClick={closeModal}
            />
          </div>
          <div className="modal-body">{text}</div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
      <div className="modal-backdrop" onClick={closeModal}></div>
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

Modal.defaultProps = {
  header: "",
  text: "",
};

export default Modal;
