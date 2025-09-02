import classNames from "classnames/bind";

import styles from "./SocialItem.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function SocialItem({ title, href }) {
  return (
    <a className={cx("social-item")} href={href} title={title}>
      <img src={images[title]} alt={title} />
    </a>
  );
}

export default SocialItem;
