import classNames from "classnames/bind";

import styles from "./ListMovie.module.scss";
import { useAppData } from "~/context/DataContext";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import TagEppisode from "~/components/TagEppisode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "~/components/Filter";
const cx = classNames.bind(styles);

function ListMovie({ data, header = "" }) {
  const { genres, countries } = useAppData();
  return (
    <>
      <h3 className={cx("header")}>{header}</h3>
      <Filter />
      <div className={cx("content")}>
        <div className={cx("cards-grids")}>
          {data.items.map((item) => (
            <div className={cx("item")}>
              <a className={cx("thump")}>
                <TagEppisode data={item} style={"1"} />
                <img
                  src={`https://static.nutscdn.com/vimg/300-0/${item.images.posters[0].path
                    .split("/")
                    .pop()}`}
                  alt={item.title}
                />
              </a>
              <div className={cx("info")}>
                <div className={cx("title")}>{item.title}</div>
                <div className={cx("alias-title")}>{item.english_title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListMovie;
