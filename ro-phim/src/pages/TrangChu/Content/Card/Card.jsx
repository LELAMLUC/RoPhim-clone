import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import stlyes from "./Card.module.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(stlyes);
const data = {
  items: [
    {
      _id: "vhyYAW",
      name: "Marvel",
      order: 1,
      slug: "marvel-sieu-anh-hung",
      color: "#324fd1",
    },
    {
      _id: "bZE4Tf",
      name: "4K",
      slug: "4k",
      color: "#666699",
      order: 2,
    },
    {
      _id: "SosVge",
      name: "Sitcom",
      slug: "sitcom-series-us",
      color: "#1b856c",
      order: 2,
    },
    {
      _id: "PGxRUU",
      name: "Lồng Tiếng Cực Mạnh",
      order: 3,
      slug: "long-tieng-cuc-manh",
      color: "#7761b4",
    },
    {
      _id: "3TQ3S1",
      name: "Xuyên Không",
      order: 5,
      slug: "xuyen-khong",
      color: "#cd7e5f",
    },
    {
      _id: "wCSzYH",
      name: "Cổ Trang",
      slug: "co-trang",
      color: "#a73939",
      order: 7,
    },
  ],
  more: 4,
};

function Card() {
  return (
    <div className={cx("card")}>
      <div className={cx("header")}>
        <h3>Bạn đang quan tâm gì?</h3>
      </div>
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
          <a className={cx("row")} href={"chu-de"}>
            <div
              className={cx("mask")}
              style={{ backgroundColor: data.color }}
            ></div>
            <div className={cx("intro-more")}>
              <div className={cx("intro-header-more")}>+4 chủ đề</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
