import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "~/assets/images";
import SocialItem from "~/components/SocialItem";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("side-left")}>
          <div className={cx("Viet-Nam")}>
            <div className={cx("center")}>
              <div className={cx("icon")}>
                <img
                  src="https://www.rophim.me/images/vn_flag.svg"
                  alt="Vietnam"
                />
              </div>
              <span>Hoàng Sa & Trường Sa là của Việt Nam!</span>
            </div>
          </div>
          <div className={cx("line-center")}>
            <a className={cx("logo")} href={"/phimhay"}>
              <img src={images.logo} alt="Rophim" />
            </a>
            <div className={cx("social")}>
              <SocialItem href="https://t.me/congdongrophim" title="telegram" />
              <SocialItem href="https://discord.gg/rophim" title="discord" />
              <SocialItem href="https://x.com/rophimtv" title="x" />
              <SocialItem
                href="https://www.facebook.com/rophimorg/"
                title="facebook"
              />
              <SocialItem
                href="https://www.tiktok.com/@rophimtv"
                title="tiktok"
              />
              <SocialItem
                href="https://www.youtube.com/@rophimcom"
                title="youtube"
              />
              <SocialItem
                href="https://www.threads.net/@rophimtv"
                title="threads"
              />
              <SocialItem
                href="https://www.instagram.com/rophimtv"
                title="instagram"
              />
            </div>
          </div>
          <div className={cx("menu")}>
            <a title="Hỏi-Đáp" href="/hoi-dap">
              Hỏi-Đáp
            </a>
            <a title="Chính sách bảo mật" href="/chinh-sach-bao-mat">
              Chính sách bảo mật
            </a>
            <a title="Điều khoản sử dụng" href="/dieu-khoan-su-dung">
              Điều khoản sử dụng
            </a>
            <a title="Giới thiệu" href="/gioi-thieu">
              Giới thiệu
            </a>
            <a title="Liên hệ" href="/lien-he">
              Liên hệ
            </a>
          </div>
          <div className={cx("menu")}>
            <a title="Dongphim" href="/dongphim">
              Dongphim
            </a>
            <a title="Ghienphim" href="/ghienphim">
              Ghienphim
            </a>
            <a title="Motphim" href="/motphim">
              Motphim
            </a>
            <a title="Subnhanh" href="/subnhanh">
              Subnhanh
            </a>
          </div>
          <div className={cx("notice")}>
            RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn
            phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ,
            phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn
            Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám
            phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
          </div>
          <div className={cx("copy-right")}>© 2024 RoPhim</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
