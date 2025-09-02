import classNames from "classnames/bind";

import styles from "./TrangChu.module.scss";
import TopSlide from "./TopSlide";
import Content from "./Content";
import Footer from "../../layouts/components/Footer";
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
