import Input from "~/components/Input/Index";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Login({ onSwitch }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h4 className={cx("heading")}>Đăng nhập</h4>
        <div className={cx("body")}>
          <p>
            Nếu bạn chưa có tài khoản,{" "}
            <a href="#" onClick={() => onSwitch("register")}>
              đăng ký ngay
            </a>
          </p>
          <form>
            <Input primary name="email" required placeholder="Email" />
            <Input
              primary
              name="password"
              type="password"
              required
              placeholder="Mật khẩu"
              showToggleIcon
            />
            <Button primary type="submit">
              Đăng nhập
            </Button>
            <Button text onClick={() => onSwitch("forgetpass")}>
              Quên mật khẩu ?
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
