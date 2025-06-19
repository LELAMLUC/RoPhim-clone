import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Search from "../Search";
import Button from "~/components/Button";
import { AppIcon } from "~/components/Icons";
import CategoryMenu from "~/components/Popper/CategoryMenu";
import DeviceMenu from "~/components/Popper/DeviceMenu";
import Modal from "~/components/Modal";
const TheLoaiItems = [
  { title: "Anime", to: "/anime" },
  { title: "Bí Ẩn", to: "/bi-an" },
  { title: "Chiến Tranh", to: "/chien-tranh" },
  { title: "Chiếu Rạp", to: "/chieu-rap" },
  { title: "Chuyển Thể", to: "/chuyen-the" },
  { title: "Chính Kịch", to: "/chinh-kich" },
  { title: "Chính Luận", to: "/chinh-luan" },
  { title: "Chính Trị", to: "/chinh-tri" },
  { title: "Chương Trình Truyền Hình", to: "/chuong-trinh-truyen-hinh" },
  { title: "Cung Đấu", to: "/cung-dau" },
  { title: "Cuối Tuần", to: "/cuoi-tuan" },
  { title: "Cách Mạng", to: "/cach-mang" },
  { title: "Cổ Trang", to: "/co-trang" },
  { title: "Cổ Tích", to: "/co-tich" },
  { title: "Cổ Điển", to: "/co-dien" },
  { title: "DC", to: "/dc" },
  { title: "Disney", to: "/disney" },
  { title: "Gay Cấn", to: "/gay-can" },
  { title: "Gia Đình", to: "/gia-dinh" },
  { title: "Giáng Sinh", to: "/giang-sinh" },
  { title: "Giả Tưởng", to: "/gia-tuong" },
  { title: "Hoàng Cung", to: "/hoang-cung" },
  { title: "Hoạt Hình", to: "/hoat-hinh" },
  { title: "Hài", to: "/hai" },
  { title: "Hành Động", to: "/hanh-dong" },
  { title: "Hình Sự", to: "/hinh-su" },
  { title: "Học Đường", to: "/hoc-duong" },
  { title: "Khoa Học", to: "/khoa-hoc" },
  { title: "Kinh Dị", to: "/kinh-di" },
  { title: "Kinh Điển", to: "/kinh-dien" },
  { title: "Kịch Nói", to: "/kich-noi" },
  { title: "Kỳ Ảo", to: "/ky-ao" },
  { title: "LGBT+", to: "/lgbt-plus" },
  { title: "Lãng Mạn", to: "/lang-man" },
  { title: "Lịch Sử", to: "/lich-su" },
  { title: "Marvel", to: "/marvel" },
  { title: "Miền Viễn Tây", to: "/mien-vien-tay" },
  { title: "Nghề Nghiệp", to: "/nghe-nghiep" },
  { title: "Nhạc Kịch", to: "/nhac-kich" },
  { title: "Phiêu Lưu", to: "/phieu-luu" },
  { title: "Phép Thuật", to: "/phep-thuat" },
  { title: "Siêu Anh Hùng", to: "/sieu-anh-hung" },
  { title: "Thiếu Nhi", to: "/thieu-nhi" },
  { title: "Thần Thoại", to: "/than-thoai" },
  { title: "Thể Thao", to: "/the-thao" },
  { title: "Truyền Hình Thực Tế", to: "/truyen-hinh-thuc-te" },
  { title: "Tuổi Trẻ", to: "/tuoi-tre" },
  { title: "Tài Liệu", to: "/tai-lieu" },
  { title: "Tâm Lý", to: "/tam-ly" },
  { title: "Tình Cảm", to: "/tinh-cam" },
  { title: "Tập Luyện", to: "/tap-luyen" },
  { title: "Viễn Tưởng", to: "/vien-tuong" },
  { title: "Võ Thuật", to: "/vo-thuat" },
  { title: "Xuyên Không", to: "/xuyen-khong" },
  { title: "Đau Thương", to: "/dau-thuong" },
  { title: "Đời Thường", to: "/doi-thuong" },
];
const QuocGiaItems = [
  { title: "Anh", to: "/anh" },
  { title: "Canada", to: "/canada" },
  { title: "Hàn Quốc", to: "/han-quoc" },
  { title: "Hồng Kông", to: "/hong-kong" },
  { title: "Mỹ", to: "/my" },
  { title: "Nhật Bản", to: "/nhat-ban" },
  { title: "Pháp", to: "/phap" },
  { title: "Thái Lan", to: "/thai-lan" },
  { title: "Trung Quốc", to: "/trung-quoc" },
  { title: "Úc", to: "/uc" },
  { title: "Đài Loan", to: "/dai-loan" },
  { title: "Đức", to: "/duc" },
];

const cx = classNames.bind(styles);
function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("left-section")}>
          {/* logo */}
          <img className={cx("logo")} src={images.logo} alt="Ro-phim" />

          {/* search  */}
          <Search />
          <div className={cx("nav-menu")}>
            <Button text>Chủ đề</Button>
            <CategoryMenu
              items={TheLoaiItems}
              hideOnClick
              columnCount={4}
              detailPath="/the-loai"
            >
              <Button
                text
                rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                noHover
              >
                Thể loại
              </Button>
            </CategoryMenu>
            <Button text>Phim Lẻ</Button>
            <Button text>Phim Bộ</Button>
            <Button text>
              <span className={cx("label-new")}>NEW</span>
              Xem chung
            </Button>

            <CategoryMenu
              items={QuocGiaItems}
              hideOnClick
              detailPath="/quoc-gia"
            >
              <Button
                text
                rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                noHover
              >
                Quốc Gia
              </Button>
            </CategoryMenu>
            <Button text>Diễn Viên </Button>
            <Button text>Lịch Chiếu</Button>
          </div>
        </div>
        <div className={cx("right-section")}>
          <DeviceMenu hideOnClick>
            <Button
              className={cx("btn-download")}
              text
              leftIcon={<AppIcon />}
              noHover
            >
              <p> Tải ứng dụng</p>
              <strong> RoPhim</strong>
            </Button>
          </DeviceMenu>
          <Button
            rounded
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            onClick={() => setShowModal(true)}
          >
            Thành viên
          </Button>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}

export default Header;
