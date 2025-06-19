import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgetPass from "./ForgetPass";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Modal({ isOpen, onClose }) {
  const [modalType, setModalType] = useState("login");

  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (modalType) {
      case "register":
        return <Register onSwitch={setModalType} />;
      case "forgetpass":
        return <ForgetPass onSwitch={setModalType} />;
      case "login":
      default:
        return <Login onSwitch={setModalType} />;
    }
  };

  return (
    <div className={cx("overlay")} onClick={onClose}>
      <div className={cx("modal")} onClick={(e) => e.stopPropagation()}>
        <button className={cx("close")} onClick={onClose}>
          ×
        </button>
        {renderModalContent()}
      </div>
    </div>
  );
}

export default Modal;
