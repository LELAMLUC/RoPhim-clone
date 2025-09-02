import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import styles from "./Search.module.scss";
import MovieItem from "~/components/MovieItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { useDebounce } from "~/hooks";
import { MovieAPI } from "~/apis/MovieAPI";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setResults([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setResults([]);
      const res = await MovieAPI.search(debounced);
      setResults(res);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    };

    fetchMovies();
  }, [debounced]);

  const showResults =
    (results.length > 0 || loading) && searchValue.trim().length > 0;

  return (
    <HeadlessTippy
      interactive
      visible={showResults}
      placement="bottom-start"
      onClickOutside={() => {}}
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          {loading ? (
            <div className={cx("loading")}>
              <div className={cx("loader")}></div>
            </div>
          ) : (
            <>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Danh sách phim</h4>
                {results.map((movie) => (
                  <MovieItem key={movie._id} data={movie} />
                ))}
              </PopperWrapper>
              <div className={cx("view-all")}>Toàn bộ kết quả</div>
            </>
          )}
        </div>
      )}
    >
      <div className={cx("search")}>
        <FontAwesomeIcon
          className={cx("icon-search")}
          icon={faMagnifyingGlass}
        />
        <input
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <FontAwesomeIcon
            className={cx("icon-clear")}
            icon={faCircleXmark}
            onClick={() => setSearchValue("")}
          />
        )}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
