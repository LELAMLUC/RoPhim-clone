import classNames from "classnames/bind";
import styles from "./DeviceMenu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/assets/images";
import Button from "~/components/Button";
import { MonitorIcon, PhoneIcon } from "~/components/Icons";
const cx = classNames.bind(styles);
function DeviceMenu({ children, hideOnClick = false }) {
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        <div className={cx("menu-body")}>
          <div className={cx("header")}>
            <img src={images.appicon} alt="Logo icon" />
            <p>Chọn thiết bị tương ứng để tải và cài đặt</p>
          </div>
          <div className={cx("body")}>
            <Button to={"/rophim-app"} outline leftIcon={<MonitorIcon />}>
              Android TV
            </Button>
            <Button to={"/rophim-apk"} outline leftIcon={<PhoneIcon />}>
              Điện thoại
            </Button>
          </div>
        </div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy
      trigger="click"
      hideOnClick={hideOnClick}
      delay={[0, 500]}
      offset={[12, 8]}
      interactive
      placement="bottom-end"
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}
export default DeviceMenu;
