import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  text = false,
  noHover = false,
  rounded = false,
  play = false,
  disabled = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    noHover,
    rounded,
    play,
    disabled,
    small,
    large,
    leftIcon,
    rightIcon,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  noHover: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
