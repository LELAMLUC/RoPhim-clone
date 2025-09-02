import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import stlyes from "./Card.module.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(stlyes);

function Card({ data, header = false }) {
  return (
    <div className={cx("card")}>
      {header && (
        <div className={cx("header")}>
          <h3>Bạn đang quan tâm gì?</h3>
        </div>
      )}
      <div className={cx("content")}>
        <div className={cx("list")}>
          {data.items.map((data, index) => (
            <a className={cx("row")} href={`/c/${data.slug}`} key={index}>
              <div
                className={cx("mask")}
                style={{ backgroundColor: data.color }}
              ></div>
              <div className={cx("intro")}>
                <div className={cx("intro-header")}>{data.name}</div>
                <div className={cx("intro-info")}>
                  Xem chủ đề <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          ))}
          {data.more && (
            <a className={cx("row")} href={"chu-de"}>
              <div
                className={cx("mask")}
                style={{ backgroundColor: data.color }}
              ></div>
              <div className={cx("intro-more")}>
                <div className={cx("intro-header-more")}>
                  +{" " + data.more} chủ đề
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
