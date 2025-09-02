import classNames from "classnames/bind";
import styles from "./ChuDe.module.scss";
import Card from "~/components/Card";
import { useEffect, useState } from "react";
import { TopicAPI } from "~/apis/TopicApi";

const cx = classNames.bind(styles);

function ChuDe() {
  const [allTopics, setAllTopics] = useState({ items: [] });

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await TopicAPI.getAllTopics();
      setAllTopics({ items: data.items });
    };
    fetchTopics();
  }, []);

  console.log("👉 state allTopics:", allTopics);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <div className={cx("cards-row")}>
            <div className={cx("header")}>Các chủ đề</div>
            <div className={cx("content")}>
              <Card data={allTopics} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChuDe;
