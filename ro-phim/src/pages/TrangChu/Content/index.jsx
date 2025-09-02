import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import Card from "~/components/Card";
import styles from "./Content.module.scss";
import Topic from "./Topic";
import Community from "./Community";
import Collection from "./Collection";

import { TopicAPI } from "~/apis/TopicApi";

const cx = classNames.bind(styles);

function Content() {
  const [homepageTopics, setHomepageTopics] = useState({ items: [], more: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await TopicAPI.getHomepageTopics();
      setHomepageTopics(data);
    };
    fetchData();
  }, []);

  return (
    <div className={cx("fluid-gap")}>
      <Card data={homepageTopics} header />
      <Topic />
      <Community />
      <Collection />
    </div>
  );
}

export default Content;
