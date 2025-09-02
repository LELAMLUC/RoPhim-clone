import classNames from "classnames/bind";
import styles from "./TagEppisode.module.scss";

const cx = classNames.bind(styles);

function TagEppisode({ data, style }) {
  const classes = cx("tag", `style-${style}`);
  return (
    <div className={classes}>
      <div className={cx("subtitles")}>
        PĐ. <strong>{data.latest_episode[1]}</strong>
      </div>
      {data.latest_episode[4] && (
        <div className={cx("voiceover")}>
          TM. <strong>{data.latest_episode[4]}</strong>
        </div>
      )}
      {data.latest_episode[2] && (
        <div className={cx("dubbed")}>
          LT. <strong>{data.latest_episode[2]}</strong>
        </div>
      )}
    </div>
  );
}

export default TagEppisode;
