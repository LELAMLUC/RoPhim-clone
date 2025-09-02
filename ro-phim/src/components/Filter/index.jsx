import classNames from "classnames/bind";

import styles from "./Filter.module.scss";
import { useAppData } from "~/context/DataContext";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemFilter from "./ItemFilter";
import { useState } from "react";

const cx = classNames.bind(styles);
const type = [
  { name: "Phim lẻ", slug: "phim-le" },
  { name: "Phim bộ", slug: "phim-bo" },
];
const ageRatings = [
  { name: "P (Mọi lứa tuổi)", slug: "P" },
  { name: "K (Dưới 13 tuổi)", slug: "K" },
  { name: "T13 (13 tuổi trở lên)", slug: "T13" },
  { name: "T16 (16 tuổi trở lên)", slug: "T16" },
  { name: "T18 (18 tuổi trở lên)", slug: "T18" },
];
const languageVersions = [
  { name: "Phụ đề", slug: 1 },
  { name: "Lồng tiếng", slug: 2 },
  { name: "Thuyết minh giọng Bắc", slug: 3 },
  { name: "Thuyết minh giọng Nam", slug: 4 },
];
const sortOptions = [
  { name: "Mới nhất", slug: "release_date" },
  { name: "Mới cập nhật", slug: "updated_at" },
  { name: "Điểm IMDb", slug: "imdb_rating" },
  { name: "Lượt Xem", slug: "total_views" },
];
function Filter() {
  const [activeFilters, setActiveFilters] = useState({
    country: "all",
    type: "all",
    ageRatings: "all",
    genres: "all",
    languageVersions: "all",
    sortOptions: "release_date",
  });
  const handleChange = (key, value) => {
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
  };
  const { genres, countries } = useAppData();
  return (
    <>
      <div className={cx("filter")}>
        <FontAwesomeIcon className={cx("icon-filter")} icon={faFilter} />
        <span>Bộ lọc</span>
      </div>
      <div className={cx("filter-element")}>
        <div className={cx("row")}>
          <div className={cx("name")}>Quốc gia:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.country === "all"}
              onClick={() => handleChange("country", "all")}
            />
            {countries.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.country === item.name}
                onClick={() => handleChange("country", item.name)}
              />
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("name")}>Loại phim:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.type === "all"}
              onClick={() => handleChange("type", "all")}
            />
            {type.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.type === item.name}
                onClick={() => handleChange("type", item.name)}
              />
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("name")}>Loại phim:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.ageRatings === "all"}
              onClick={() => handleChange("ageRatings", "all")}
            />
            {ageRatings.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.ageRatings === item.name}
                onClick={() => handleChange("ageRatings", item.name)}
              />
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("name")}>Loại phim:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.genres === "all"}
              onClick={() => handleChange("genres", "all")}
            />
            {genres.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.genres === item.name}
                onClick={() => handleChange("genres", item.name)}
              />
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("name")}>Loại phim:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.languageVersions === "all"}
              onClick={() => handleChange("languageVersions", "all")}
            />
            {languageVersions.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.languageVersions === item.name}
                onClick={() => handleChange("languageVersions", item.name)}
              />
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("name")}>Loại phim:</div>
          <div className={cx("result")}>
            <ItemFilter
              key={"all"}
              data={"Tất cả"}
              active={activeFilters.languageVersions === "all"}
              onClick={() => handleChange("languageVersions", "all")}
            />
            {languageVersions.map((item) => (
              <ItemFilter
                key={item.name}
                data={item.name}
                active={activeFilters.languageVersions === item.name}
                onClick={() => handleChange("languageVersions", item.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
