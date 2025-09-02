import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ActorList.module.scss";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function ActorList({ data, header }) {
  return (
    <>
      <h3 className={cx("header")}>{header}</h3>
      <div className={cx("content")}>
        <div className={cx("cards-grids")}>
          {data.items.map((item) => (
            <div className={cx("item")}>
              <a className={cx("actor")}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.title}
                />
              </a>
              <div className={cx("info")}>
                <h4 className={cx("title")}>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActorList;
