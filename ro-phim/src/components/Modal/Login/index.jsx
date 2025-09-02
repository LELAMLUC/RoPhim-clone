import { useState } from "react";
import classNames from "classnames/bind";

import { useToast } from "~/context/ToastContext";
import { useAuth } from "~/context/AuthContext";
import * as authService from "~/services/authService";
import Input from "~/components/Input";
import styles from "./Login.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Login({ onSwitch, onClose }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login } = useAuth();
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await authService.login(formData);
      if (!result.error) {
        login(result);
        showToast({
          text: "Đăng nhập thành công",
          type: "success",
        });
        onClose();
      } else {
        showToast({
          text: "Tài khoản hoặc mật khẩu không chính xác",
          type: "error",
        });
      }
    } catch (err) {
      showToast({
        text: "Đăng nhập không thành công, vui lòng thử lại sau",
        type: "error",
      });
    }
  };
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
          <form onSubmit={handleSubmit}>
            <Input
              primary
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              primary
              name="password"
              type="password"
              required
              placeholder="Mật khẩu"
              showToggleIcon
              value={formData.password}
              onChange={handleChange}
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
