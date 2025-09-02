import { useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Notification.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function NotificationMenu({ children }) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef();

  const toggleMenu = () => setVisible((prev) => !prev);
  const hideMenu = () => setVisible(false);

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        <div className={cx("menu-body")}>
          <div className={cx("header")}>
            <div className={cx("nav")}>
              <a href="#" className={cx("Movie")}>
                Phim
              </a>
              <a href="#" className={cx("community")}>
                Cộng đồng
              </a>
            </div>
            <div className={cx("mark-all")}>
              <FontAwesomeIcon icon={faCheckDouble} />
              <a href="#">Đã đọc</a>
            </div>
          </div>
          <div className={cx("body")}>
            <div className={cx("no-noti")}>Không có thông báo nào</div>
          </div>
          <div className={cx("footer")}>
            <div>Xem toàn bộ</div>
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

export default NotificationMenu;
