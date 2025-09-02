import { Link } from "react-router-dom";
import styles from "./MovieItem.module.scss";
import classNames from "classnames/bind";
import FormatRuntime from "~/utils/formatRuntime";
const cx = classNames.bind(styles);
function MovieItem({ data }) {
  return (
    <Link to={"/"} className={cx("wrapper")}>
      <img
        className={cx("thumbnail")}
        src={`https://static.nutscdn.com/vimg/300-0/${data.images.posters[0].path
          .split("/")
          .pop()}`}
        alt={data.title}
      />
      <div className={cx("info")}>
        <h4 className={cx("title")}>{data.title}</h4>
        <div className={cx("alias-title")}>{data.englishTitle}</div>
        <div className={cx("info-line")}>
          <div className={cx("tag-small")}>{data.rating}</div>
          {data.latestSeason !== 0 ? (
            <>
              <div className={cx("tag-small")}>Phần {data.latestSeason}</div>
              <div className={cx("tag-small")}>Tập {data.latestEpisode[1]}</div>
            </>
          ) : (
            <>
              <div className={cx("tag-small")}>{data.year}</div>
              <div className={cx("tag-small")}>
                <FormatRuntime minutes={data.runtime} />
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
