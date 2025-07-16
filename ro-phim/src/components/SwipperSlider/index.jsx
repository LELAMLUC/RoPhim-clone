import classNames from "classnames/bind";

import styles from "./SwipperSlider.module.scss";

const cx = classNames.bind(styles);

function SwipperSlider({ data, active = false, onActive }) {
  const classes = cx("swipper-slide", { active });
  return (
    <div className={classes} onClick={onActive}>
      <img
        src={
          "https://static.nutscdn.com/vimg/150-0/" +
          data.images.backdrops[0].path
        }
        alt={"Xem phim " + data.title}
      />
    </div>
  );
}

export default SwipperSlider;
