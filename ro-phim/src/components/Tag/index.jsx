import classNames from "classnames/bind";

import styles from "./Tag.module.scss";

const cx = classNames.bind(styles);

function Tag({
  href,
  classic = false,
  imdb = false,
  model = false,
  topic = false,
  children,
}) {
  let Comp = "div";
  if (href) {
    Comp = "a";
  }
  const classes = cx("wrapper", { imdb, model, classic, topic });
  return (
    <Comp className={classes} href={href}>
      <span>{children}</span>
    </Comp>
  );
}

export default Tag;
