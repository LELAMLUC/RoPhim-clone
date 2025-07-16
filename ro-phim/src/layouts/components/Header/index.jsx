import { useState, useEffect } from "react";
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
import * as genresService from "~/services/genresService";
import * as countryService from "~/services/countryService";

const cx = classNames.bind(styles);
function Header() {
  const [showModal, setShowModal] = useState(false);
  const [TheLoaiItems, setTheLoaiItems] = useState([]);
  const [QuocGiaItems, setQuocGiaItems] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const result = await genresService.getGenres();
      setTheLoaiItems(result);
    };

    const fetchCountry = async () => {
      const result = await countryService.getCountries();
      setQuocGiaItems(result);
    };
    fetchGenres();
    fetchCountry();
  }, []);
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
