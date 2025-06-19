import Input from "~/components/Input/Index";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Register({ onSwitch }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h4 className={cx("heading")}>Tạo tài khoản mới</h4>
        <div className={cx("body")}>
          <p>
            Nếu bạn đã có tài khoản,{" "}
            <a href="#" onClick={() => onSwitch("Login")}>
              đăng nhập
            </a>
          </p>
          <form>
            <Input primary name="name" required placeholder="Tên hiển thị" />
            <Input primary name="email" required placeholder="Email" />
            <Input
              primary
              name="password"
              type="password"
              required
              placeholder="Mật khẩu"
            />
            <Input
              primary
              type="password"
              required
              placeholder="Nhập lại mật khẩu"
            />
            <Button primary type="submit">
              Đăng ký;
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
