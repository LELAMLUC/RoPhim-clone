import Input from "~/components/Input/Index";
import styles from "./ForgetPass.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function ForgetPass({ onSwitch }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h4 className={cx("heading")}>Quên mật khẩu</h4>
        <div className={cx("body")}>
          <p>
            Nếu bạn đã có tài khoản,{" "}
            <a href="#" onClick={() => onSwitch("Login")}>
              đăng nhập
            </a>
          </p>
          <form>
            <Input primary name="email" required placeholder="Email đăng ký" />
            <Button primary type="submit">
              Gửi yêu cầu
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
