import { useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./UserMenu.module.scss";
import { useAuth } from "~/context/AuthContext";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import {
  faHeart,
  faHistory,
  faInfinity,
  faPlus,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function UserMenu({ children }) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef();
  const { user, logout, isLogin } = useAuth();
  const toggleMenu = () => setVisible((prev) => !prev);
  const hideMenu = () => setVisible(false);
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        <div className={cx("menu-body")}>
          <div className={cx("header")}>
            <div className={cx("name")}>{user.name}</div>
            <FontAwesomeIcon className={cx("header-icon")} icon={faInfinity} />
          </div>
          <div className={cx("body")}>
            <a className={cx("item")} href="#">
              <FontAwesomeIcon icon={faHeart} />
              <div>Yêu thích</div>
            </a>
            <a className={cx("item")} href="#">
              <FontAwesomeIcon icon={faPlus} />
              <div>Danh sách</div>
            </a>
            <a className={cx("item")} href="#">
              <FontAwesomeIcon icon={faHistory} />
              <div>Xem tiếp</div>
            </a>
            <a className={cx("item")} href="#">
              <FontAwesomeIcon icon={faUser} />
              <div>Tài khoản</div>
            </a>
          </div>
          <div className={cx("footer")}>
            <a className={cx("logout")} href="/" onClick={() => logout()}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <div>Thoát</div>
            </a>
          </div>
        </div>
      </PopperWrapper>
    </div>
  );

  return (
    <div ref={triggerRef}>
      <Tippy
        interactive
        visible={visible}
        placement="bottom-end"
        onClickOutside={hideMenu}
        render={renderResult}
      >
        <div onClick={toggleMenu}>{children}</div>
      </Tippy>
    </div>
  );
}

export default UserMenu;
