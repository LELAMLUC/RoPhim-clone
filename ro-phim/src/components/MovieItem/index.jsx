import { Link } from "react-router-dom";
import styles from "./MovieItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MovieItem({ data }) {
  return (
    <Link to={"/"} className={cx("wrapper")}>
      <img className={cx("thumbnail")} src={data.images} alt={data.title} />
      <div className={cx("info")}>
        <h4 className={cx("title")}>{data.title}</h4>
        <div className={cx("alias-title")}>{data.english_title}</div>
        <div className={cx("info-line")}>
          <div className={cx("tag-small")}>{data.rating}</div>
          <div className={cx("tag-small")}>Phần {data.latest_season}</div>
          <div className={cx("tag-small")}>Tập {data.latest_episode}</div>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
