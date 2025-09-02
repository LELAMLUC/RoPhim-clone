import styles from "./Style4.module.scss";
import classNames from "classnames/bind";
import TagEppisode from "~/components/TagEppisode";

const cx = classNames.bind(styles);

function Style4({ data }) {
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
                        src={`https://static.nutscdn.com/vimg/300-0/${item.images.posters[0].path
                          .split("/")
                          .pop()}`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={cx("info")}>
                    <div className={cx("number")}>{index + 1}</div>
                    <div className={cx("title")}>{item.title}</div>
                    <div className={cx("alias-title")}>
                      {item.english_title}
                    </div>
                    <div className={cx("tag")}>
                      <div className={cx("tag-small")}>
                        <strong>{item.rating}</strong>
                      </div>
                      <div className={cx("tag-small")}>
                        Phần {item.latest_season}
                      </div>
                      <div className={cx("tag-small")}>
                        Tập {item.latest_episode[1]}
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

export default Style4;
