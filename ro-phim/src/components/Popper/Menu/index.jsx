import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles);
function Menu({ children, items = [], hideOnClick = false }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        <div className={cx("menu-body")}> {renderItems()}</div>
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
      placement="bottom-start"
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}
export default Menu;
