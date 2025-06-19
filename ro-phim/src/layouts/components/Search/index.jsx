import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MovieItem from "~/components/MovieItem";
import * as searchService from "~/services/searchService";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);
function Search() {
  const [showResult, setShowresult] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResults(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const ShowResults =
    (searchResults.length > 0 || loading) &&
    searchValue.trim().length > 0 &&
    showResult;

  const ClearAndFocusInput = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  return (
    <HeadlessTippy
      onClickOutside={() => setShowresult(false)}
      interactive
      visible={ShowResults}
      placement="bottom-start"
      render={(attrs) => (
        <>
          {/* Loading */}
          {loading && (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <div className={cx("loading")}>
                <div className={cx("loader")}></div>
              </div>
            </div>
          )}
          {/* co ket qua */}
          {!loading && (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Danh sách phim</h4>
                {searchResults.map((movie) => (
                  <MovieItem key={movie._id} data={movie} />
                ))}
              </PopperWrapper>
              <div className={cx("view-all")}>Toàn bộ kết quả</div>
            </div>
          )}
        </>
      )}
    >
      <div className={cx("search")}>
        <FontAwesomeIcon
          className={cx("icon-search")}
          icon={faMagnifyingGlass}
        />
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowresult(true)}
        />
        {searchValue && (
          <FontAwesomeIcon
            className={cx("icon-clear")}
            icon={faCircleXmark}
            onClick={ClearAndFocusInput}
          />
        )}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
