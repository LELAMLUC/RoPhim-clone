import { useState } from "react";
import classNames from "classnames/bind";

import Input from "~/components/Input";
import styles from "./Register.module.scss";
import Button from "~/components/Button";
import * as authService from "~/services/authService";
import { useAuth } from "~/context/AuthContext";
import { useToast } from "~/context/ToastContext";

const cx = classNames.bind(styles);

function Register({ onSwitch, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await authService.register(formData);
      if (!result.error) {
        const loginResult = await authService.login(formData);
        login(loginResult);
        showToast({ text: "Đăng ký thành công", type: "success" });
        onClose();
      } else {
        showToast({
          text: result.error,
          type: "error",
        });
      }
    } catch (error) {
      showToast({
        text: "Đăng ký thất bại, vui lòng thử lại sau",
        type: "error",
      });
    }
  };
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
          <form onSubmit={handleSubmit}>
            <Input
              primary
              name="name"
              required
              placeholder="Tên hiển thị"
              value={formData.name}
              onChange={handleChange}
            />
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
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              primary
              type="password"
              required
              placeholder="Nhập lại mật khẩu"
            />
            <Button primary type="submit">
              Đăng ký
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
