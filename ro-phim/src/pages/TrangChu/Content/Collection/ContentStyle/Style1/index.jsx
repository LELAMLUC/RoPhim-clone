import styles from "./Style1.module.scss";
import classNames from "classnames/bind";
import TagEppisode from "~/components/TagEppisode";

const cx = classNames.bind(styles);

function Style1({ data }) {
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
                    <TagEppisode style={1} data={item} />
                    <img
                      src={`https://static.nutscdn.com/vimg/300-0/${item.images.posters[0].path
                        .split("/")
                        .pop()}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className={cx("info")}>
                    <div className={cx("title")}>{item.title}</div>
                    <div className={cx("alias-title")}>
                      {item.english_title}
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

export default Style1;
