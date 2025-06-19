import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TrangChu.module.scss";

const cx = classNames.bind(styles);
function TrangChu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-slide")}>
        <img
          src="https://static.nutscdn.com/vimg/1920-0/d65790d160abd8842a11aa80c19d3bf1.jpg"
          alt="thumpnail"
        />
      </div>
    </div>
  );
}

export default TrangChu;
