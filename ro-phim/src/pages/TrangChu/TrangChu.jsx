import classNames from "classnames/bind";

import styles from "./TrangChu.module.scss";
import TopSlide from "./TopSlide";
import Content from "./Content";
const cx = classNames.bind(styles);

function TrangChu() {
  return (
    <>
      <div className={cx("header")}>
        <TopSlide />
      </div>
      <div className={cx("content")}>
        <Content />
      </div>
    </>
  );
}

export default TrangChu;
