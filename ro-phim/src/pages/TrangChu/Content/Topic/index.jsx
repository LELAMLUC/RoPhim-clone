import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import stlyes from "./Topic.module.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowLeftIcon, ArrowRightIcon } from "~/components/Icons";
import TagEppisode from "~/components/TagEppisode";
const cx = classNames.bind(stlyes);

const result = {
  collections: [
    {
      _id: "3KYr2v",
      name: "Phim Hàn Quốc mới",
      slug: "phim-han-quoc-moi",
      color: "#674196",
      order: 1,
      style: 6,
      random_data: false,
      type: 2,
      filter: {
        country_code: ["KR"],
        status: "On Going",
        type: "",
        top_views: "",
        limit: "20",
        sort_by: "updated_at",
        order: "-1",
      },
      movies: [
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
            4: 5,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
        {
          _id: "pS0mgYWV",
          original_title: "모태솔로지만 연애는 하고 싶어",
          english_title: "Better Late Than Single",
          title: "Muộn Còn Hơn Ế",
          slug: "muon-con-hon-e",
          overview:
            "Sẵn sàng hẹn hò, những người độc thân lâu năm sẽ được chuyên gia giúp đỡ về phong cách, sức khỏe và sự tự tin. ",
          release_date: "2025-07-08",
          quality: "fhd",
          rating: "T18",
          runtime: 60,
          type: 2,
          origin_country: ["KR"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.8",
          latest_episode: {
            1: 6,
          },
          year: "2025",
          genres: [
            {
              _id: "4RxsoY",
              name: "Tình Cảm",
              slug: "tinh-cam",
            },
            {
              _id: "PwWb5h",
              name: "Truyền Hình Thực Tế",
              slug: "truyen-hinh-thuc-te",
            },
            {
              _id: "tvr5v7",
              name: "Lãng Mạn",
              slug: "lang-man",
            },
          ],
          images: {
            posters: [
              {
                path: "3f/66/3f66ca3f3cf32622466e00f411af73df/3f66ca3f3cf32622466e00f411af73df.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "c9/e6/c9e6a7774bd66521dc73d6feecb006e7/c9e6a7774bd66521dc73d6feecb006e7.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e8a510968f1ef5415b5db246e525dd76.jpg",
                type: 3,
              },
            ],
            titles: [],
          },
        },
      ],
    },
    {
      _id: "m1YQvz",
      name: "Phim Trung Quốc mới",
      slug: "phim-trung-quoc-moi",
      color: "#f7a10b",
      order: 1,
      style: 6,
      random_data: false,
      type: 2,
      filter: {
        country_code: ["CN"],
        status: "On Going",
        type: "",
        top_views: "",
        limit: "20",
        sort_by: "updated_at",
        order: "-1",
      },
      movies: [
        {
          _id: "MSqEuxd8",
          original_title: "正当防卫",
          english_title: "Justifiable Defense",
          title: "Phòng Vệ Chính Đáng",
          slug: "phong-ve-chinh-dang",
          overview:
            "Công tố viên kỳ cựu của Viện Kiểm sát thành phố Đoàn Hồng Sơn...",
          release_date: "2025-07-09",
          quality: "fhd",
          rating: "T13",
          runtime: 45,
          type: 2,
          origin_country: ["CN"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: 0,
          latest_episode: {
            1: 15,
          },
          year: "2025",
          genres: [
            { _id: "1gOywM", name: "Chính Kịch", slug: "chinh-kich" },
            { _id: "8VSWst", name: "Gia Đình", slug: "gia-dinh" },
            { _id: "IN1LmJ", name: "Hình Sự", slug: "hinh-su" },
            { _id: "T6q81e", name: "Bí Ẩn", slug: "bi-an" },
            { _id: "epV6Ny", name: "Tâm Lý", slug: "tam-ly" },
            { _id: "wca3Bp", name: "Phiêu Lưu", slug: "phieu-luu" },
          ],
          images: {
            posters: [
              {
                path: "34/d8/34d80c2db8b657b1843c4df367e65d94/34d80c2db8b657b1843c4df367e65d94.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "34/ac/34ac14dd659cc8923887c294daf436cf/34ac14dd659cc8923887c294daf436cf.webp",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "e36e881d88a5ef55696d79f754a11f7e.webp",
                type: 3,
              },
            ],
            titles: [],
          },
        },
      ],
    },
    {
      _id: "KcDGDD",
      name: "Phim US-UK mới",
      slug: "phim-us-uk-moi",
      color: "#FF0099",
      order: 1,
      style: 6,
      random_data: false,
      type: 2,
      filter: {
        country_code: ["CA", "FR", "GB", "US"],
        status: ["On Going"],
        type: "2",
        top_views: "",
        limit: "15",
        sort_by: "updated_at",
        order: "-1",
      },
      movies: [
        {
          _id: "2By0ucWG",
          original_title: "Outrageous",
          english_title: "Outrageous",
          title: "Tai Tiếng Hào Môn",
          slug: "tai-tieng-hao-mon",
          overview:
            "Dựa trên câu chuyện có thật về gia đình Mitford, bộ phim kể về sáu chị em gái nổi tiếng trong xã hội thượng lưu Anh quốc...",
          release_date: "2025-06-19",
          quality: "fhd",
          rating: "T16",
          runtime: 60,
          type: 2,
          origin_country: ["GB"],
          status: "On Going",
          latest_season: 1,
          imdb_rating: "7.0",
          latest_episode: {
            1: 2,
          },
          year: "2025",
          genres: [
            { _id: "1gOywM", name: "Chính Kịch", slug: "chinh-kich" },
            { _id: "Lnhyb0", name: "Đời Thường", slug: "doi-thuong" },
            { _id: "MKSFtq", name: "Cổ Điển", slug: "co-dien" },
            { _id: "tvr5v7", name: "Lãng Mạn", slug: "lang-man" },
          ],
          images: {
            posters: [
              {
                path: "a3/5b/a35b5ae47dbd7e81f604724b0996d687/a35b5ae47dbd7e81f604724b0996d687.jpg",
                type: 1,
              },
            ],
            horizontal_posters: [
              {
                path: "55/b2/55b201cdb15af407a3c862f0fb13a974/55b201cdb15af407a3c862f0fb13a974.jpg",
                type: 2,
              },
            ],
            backdrops: [
              {
                path: "b93c82c26beda37bac2dc3f0ff1f6244.webp",
                type: 3,
              },
            ],
            titles: [
              {
                path: "e4/85/e485005299b318479b7b139cde8c639d/e485005299b318479b7b139cde8c639d.png",
                type: 4,
              },
            ],
          },
        },
      ],
    },
  ],
};
function Topic() {
  return (
    <div className={cx("topic")}>
      <div className={cx("topic-list")}>
        {result.collections.map((data) => (
          <div className={cx("row-topic")}>
            <div className={cx("intro")}>
              <div
                className={cx("heading")}
                style={{
                  background: `linear-gradient(
      235deg,
      rgb(255, 255, 255) 30%,
      ${data.color} 130%
    )`,
                }}
              >
                {data.name}
              </div>
              <div className={cx("info")}>
                Xem toàn bộ <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className={cx("row-content")}>
              <div className={cx("swiper-nav")}>
                <button className={cx("prev")}>
                  <ArrowLeftIcon />
                </button>
                <button className={cx("next")}>
                  <ArrowRightIcon />
                </button>
              </div>
              <div className={cx("swiper")}>
                <div className={cx("swiper-wrapper")}>
                  {data.movies.map((movie) => (
                    <div className={cx("swiper-slide")}>
                      <a className={cx("thumpnail")}>
                        <TagEppisode leftBottom data={movie} />

                        <img
                          src={`https://static.nutscdn.com/vimg/400-0/${movie.images.backdrops[0].path}`}
                          alt={`Xem phim ${movie.slug}`}
                        />
                      </a>
                      <div className={cx("thumpnail-info")}>
                        <h4 className={cx("item-title")}>
                          <a title={movie.title} href={`/phim/${movie.slug}`}>
                            {movie.title}
                          </a>
                        </h4>
                        <h4 className={cx("alias-title")}>
                          <a
                            title={movie.english_title}
                            href={`/phim/${movie.slug}`}
                          >
                            {movie.english_title}
                          </a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topic;
