import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "~/context/AuthContext";
import Search from "../Search";
import images from "~/assets/images";
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import { AppIcon } from "~/components/Icons";
import UserMenu from "~/components/Popper/UserMenu";
import DeviceMenu from "~/components/Popper/DeviceMenu";
import CategoryMenu from "~/components/Popper/CategoryMenu";
import NotificationMenu from "~/components/Popper/NotificationMenu";
import Modal from "~/components/Modal";
import { faBell, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";

import { GenreAPI } from "~/apis/GenreApi";
import { CountryAPI } from "~/apis/CountryApi";

const cx = classNames.bind(styles);

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [quocGiaItems, setQuocGiaItems] = useState([]);
  const [theLoaiItems, setTheLoaiItems] = useState([]);

  const { isLogin } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genres, countries] = await Promise.all([
          GenreAPI.getAllGenres(),
          CountryAPI.getAllCountries(),
        ]);

        setTheLoaiItems(genres);
        setQuocGiaItems(countries);
      } catch (err) {
        console.error("Fetch Header data error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("left-section")}>
          {/* logo */}
          <img className={cx("logo")} src={images.logo} alt="Ro-phim" />

          {/* search */}
          <Search />
          <div className={cx("nav-menu")}>
            <Button href={"/chu-de"} text>
              Chủ đề
            </Button>

            <CategoryMenu
              items={theLoaiItems}
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

            <Button href={"/phim-le"} text>
              Phim Lẻ
            </Button>
            <Button href={"/phim-bo"} text>
              Phim Bộ
            </Button>
            <Button text>
              <span className={cx("label-new")}>NEW</span>
              Xem chung
            </Button>

            <CategoryMenu
              items={quocGiaItems}
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

            <Button href={"/dien-vien"} text>
              Diễn Viên
            </Button>
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

          {!isLogin && (
            <Button
              rounded
              leftIcon={<FontAwesomeIcon icon={faUser} />}
              onClick={() => setShowModal(true)}
            >
              Thành viên
            </Button>
          )}

          {isLogin && (
            <div className={cx("user-logged")}>
              <NotificationMenu hideOnClick>
                <div className={cx("head-noti")}>
                  <a href="#">
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                </div>
              </NotificationMenu>
              <UserMenu>
                <div className={cx("head-user")}>
                  <div className={cx("user-avatar")}>
                    <img
                      alt="Le Lam Luc"
                      src="https://www.rophim.me/images//avatars/pack4/12.jpg"
                    />
                  </div>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </UserMenu>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}

export default Header;
