import classNames from "classnames/bind";
import styles from "./ItemFilter.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function ItemFilter({ data, active, onClick }) {
  const classes = cx("item", { active });

  return (
    <div className={classes} onClick={onClick}>
      {data}
    </div>
  );
}

export default ItemFilter;
