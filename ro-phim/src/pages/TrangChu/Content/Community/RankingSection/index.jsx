import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./RankingSection.module.scss";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faMinus,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const listColorPopularRanking = [
  "#742d4b",
  "#387fda",
  "#7356b1",
  "#91ab47",
  "#a98762",
];

function RankingSection({
  data,
  title,
  icon,
  hidden = false,
  more = false,
  movieRankingSection = false,
  popularRanking = false,
  latestComments = false,
}) {
  const classes = cx("wrapper", {
    hidden,
    movieRankingSection,
    popularRanking,
    latestComments,
  });
  return (
    <div className={classes}>
      <div className={cx("title")}>
        {icon}
        <span>{title}</span>
      </div>

      {latestComments ? (
        data.map((item, index) => (
          <div className={cx("swiper-slide")} key={index}>
            <a className={cx("slide")} href="">
              <div className={cx("avatar")}>
                <img
                  src={`https://www.rophim.me/images/${item.author.avatar}`}
                  alt=""
                />
              </div>
              <div className={cx("user-comment")}>
                {item.author.name}
                <span> {item.content}</span>
              </div>
              <div className={cx("movie")}>
                <small>
                  <FontAwesomeIcon icon={faPlay} />
                </small>
                <span>{item.movie.title}</span>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div className={cx("list")}>
          {data.slice(0, 5).map((item, index) => (
            <div className={cx("item")} key={index}>
              <div className={cx("pos")}>{index + 1}.</div>
              <div className={cx("dev")}>
                {item.direction === "up" && (
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    style={{ color: "#bedc33" }}
                  />
                )}
                {item.direction === "down" && (
                  <FontAwesomeIcon
                    icon={faArrowTrendDown}
                    style={{ color: "#dc328c" }}
                  />
                )}
                {item.direction === "same" && (
                  <FontAwesomeIcon icon={faMinus} />
                )}
              </div>
              {movieRankingSection && (
                <>
                  <div className={cx("thumbnail")}>
                    <img
                      alt={`Xem Phim ${item.title}`}
                      loading="lazy"
                      src={`https://static.nutscdn.com/vimg/300-0/${item.images.posters[0].path}`}
                    />
                  </div>
                  <h4 className={cx("name")}>
                    <a title={item.title} href={`/phim/${item.slug}`}>
                      {item.title}
                    </a>
                  </h4>
                </>
              )}
              {popularRanking && (
                <div
                  className={cx("topic")}
                  style={{ background: listColorPopularRanking[index] }}
                >
                  <a href={`/the-loai/${item.slug}`}>{item.name}</a>
                </div>
              )}
            </div>
          ))}
          {more && (
            <div className={cx("more")}>
              <a>Xem thêm</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RankingSection;
