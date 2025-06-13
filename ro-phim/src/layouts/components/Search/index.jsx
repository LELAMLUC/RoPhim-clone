import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Search() {
  return (
    <div className={cx("search")}>
      <FontAwesomeIcon className={cx("icon-search")} icon={faMagnifyingGlass} />
      <input type="text" placeholder="Tìm kiếm phim, diễn viên" />
    </div>
  );
}

export default Search;
