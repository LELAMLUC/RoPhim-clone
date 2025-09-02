import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Panigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Panigation({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className={cx("pagination")}>
      <div className={cx("page-control")}>
        <button
          className={cx("btn-circle", { dissable: currentPage === 1 })}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faArrowLeft} />
        </button>
        <div className={cx("page-current")}>
          <div>Trang</div>
          <input
            className={cx("form-control")}
            type="number"
            max={data.page_count}
            min={1}
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          />
          <div>/ {data.page_count}</div>
        </div>
        <button
          className={cx("btn-circle", {
            dissable: currentPage === data.page_count,
          })}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Panigation;
