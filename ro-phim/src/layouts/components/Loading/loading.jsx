import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);
function LoadingScreen() {
  return (
    <div className={cx("loading-screen")}>
      <div className={cx("loader")}></div>
    </div>
  );
}

export default LoadingScreen;
