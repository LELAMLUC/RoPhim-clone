import styles from "./Style3.module.scss";
import classNames from "classnames/bind";

import TagEppisode from "~/components/TagEppisode";
import FormatRuntime from "~/utils/formatRuntime";
const cx = classNames.bind(styles);

function Style3({ data }) {
  return (
    <div className={cx("content")}>
      <div className={cx("slide")}>
        <div className={cx("nav")} />
        <div className={cx("swiper")}>
          <div className={cx("swiper-wrapper")}>
            {data.map((item, index) => (
              <div className={cx("swiper-slide")} key={index}>
                <div className={cx("item")}>
                  <div className={cx("thumpnail")}>
                    <div className={cx("mask")} />
                    <TagEppisode style={4} data={item} />
                    <div>
                      <img
                        src={`https://static.nutscdn.com/vimg/500-0/${item.images.backdrops[0].path
                          .split("/")
                          .pop()}`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={cx("intro")}>
                    <div className={cx("thumb")}>
                      <a
                        href={`/phim/${item.slug}`}
                        className={cx("thumbnail")}
                      >
                        <img
                          src={`https://static.nutscdn.com/vimg/100-0/${item.images.posters[0].path
                            .split("/")
                            .pop()}`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div className={cx("info")}>
                      <div className={cx("title")}>{item.title}</div>
                      <div className={cx("alias-title")}>
                        {item.english_title}
                      </div>
                      <div className={cx("tag")}>
                        <div className={cx("tag-small")}>
                          <strong>{item.rating}</strong>
                        </div>
                        <div className={cx("tag-small")}>{item.year}</div>
                        <div className={cx("tag-small")}>
                          <FormatRuntime minutes={item.runtime} />
                        </div>
                        {item.quality === "cam" && (
                          <div className={cx("tag-small")}>CAM</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style3;
