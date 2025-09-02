import classNames from "classnames/bind";
import styles from "./CategoryMenu.module.scss";
import Button from "~/components/Button";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
function MenuItem({ data, onClick, detailPath }) {
  return (
    <Button
      className={cx("menu-item")}
      to={`${detailPath}/${data.slug}`}
      onClick={onClick}
    >
      {data.name}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
