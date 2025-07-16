import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "./Card/Card";
import stlyes from "./Content.module.scss";
import Topic from "./Topic/Topic";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(stlyes);

const commentsData = [
  {
    _id: "687625a7df43f53d889f1919",
    parent_id: null,
    user_id: "6839c9b784f2695cf4785fe1",
    movie_id: "ACIyOLuh",
    episode_number: 0,
    season_number: 0,
    is_spoil: false,
    mention_id: null,
    total_children: 8,
    total_like: 15,
    total_dislike: 0,
    content: "Đã update bản 4K nhé. Đợi vài tiếng cho nó load full chất lượng",
    is_pinned: true,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752573351,
    author: {
      _id: "6839c9b784f2695cf4785fe1",
      name: "Cô 2 Rổ",
      role: "admin",
      avatar_id: "67f1170b2fdb432e03ffe58b",
      gender: 1,
      avatar: {
        _id: "67f1170b2fdb432e03ffe58b",
        path: "/avatars/pack1/17.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "ACIyOLuh",
      title: "M3GAN 2.0",
      slug: "m3gan-20",
      images: {
        posters: [
          {
            _id: "67bf53e00a40ea03c8a4b25c",
            path: "9f/db/9fdba340ff590a5c4038148213e25486/9fdba340ff590a5c4038148213e25486.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "67bf53e50a40ea03c8a4b267",
            path: "fc/bb/fcbbb620e45522e4262272c35d36ffd4/fcbbb620e45522e4262272c35d36ffd4.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "67bf53ef834ff2054581d612",
            path: "49/44/4944c5b73a30dc73e6ee7ced23906b26/4944c5b73a30dc73e6ee7ced23906b26.jpg",
            type: 3,
          },
          {
            _id: "686556f3569444840c427192",
            path: "26/21/2621f2a8a2da537da8243d0435cbd0da/2621f2a8a2da537da8243d0435cbd0da.webp",
            type: 3,
          },
          {
            _id: "686556fa9586d57e1edbc179",
            path: "f9/2a/f92a70bbd84ec57fa3e81239da6bd44b/f92a70bbd84ec57fa3e81239da6bd44b.webp",
            type: 3,
          },
        ],
        titles: [
          {
            _id: "686556d09586d57e1edbc16e",
            path: "44/38/44386cc9a8fd46755e4984ee247c5697/44386cc9a8fd46755e4984ee247c5697.png",
            type: 4,
          },
        ],
      },
    },
    reviews: null,
  },
  {
    _id: "68766f89b0ff203dcbe12dec",
    parent_id: null,
    user_id: "67e6ca138f3c09d4de1b1d2f",
    movie_id: "qC4bu5Br",
    episode_number: 0,
    season_number: 0,
    is_spoil: false,
    mention_id: null,
    total_children: 5,
    total_like: 3,
    total_dislike: 0,
    content:
      "ô hóa ra Vãn Hạnh là em gái Bạch Phong hẻ, hèn gì ánh mắt nhìn em khác hẳn nhìn Phục Linh luôn",
    is_pinned: false,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752592265,
    author: {
      _id: "67e6ca138f3c09d4de1b1d2f",
      name: "ThuHunn",
      role: "member",
      avatar_id: "67f117132fdb432e03ffe5c7",
      gender: 3,
      avatar: {
        _id: "67f117132fdb432e03ffe5c7",
        path: "/avatars/pack6/08.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "qC4bu5Br",
      title: "Triều Tuyết Lục",
      slug: "trieu-tuyet-luc",
      images: {
        posters: [
          {
            _id: "68723a649586d57e1edc334f",
            path: "7b/eb/7bebe88e9cf2728dc85f89fdc4c61e28/7bebe88e9cf2728dc85f89fdc4c61e28.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "68723a6a569444840c42e253",
            path: "2e/22/2e22253da249cbbcfc53a429f497a7dc/2e22253da249cbbcfc53a429f497a7dc.webp",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "68723a7e9586d57e1edc335a",
            path: "d5/2a/d52a753d2980fe4423525f13ddb22858/d52a753d2980fe4423525f13ddb22858.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    reviews: null,
  },
  {
    _id: "68765c07c844fbc9c7f81672",
    parent_id: null,
    user_id: "6875696a85b34a7a2c794616",
    movie_id: "qC4bu5Br",
    episode_number: 10,
    season_number: 1,
    is_spoil: false,
    mention_id: null,
    total_children: 0,
    total_like: 7,
    total_dislike: 0,
    content:
      "Nếu sự thật là Thái Hà lên hết kế hoạch từ đầu thì phải công nhận là nhân vật phụ này được xây dựng quá chỉnh chu và thông minh, tâm cơ sâu, nhưng cuối cùng cũng sẽ tự nhận tội vì đã báo thù xong cho mẹ và em gái, quá Hay.",
    is_pinned: false,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752587271,
    author: {
      _id: "6875696a85b34a7a2c794616",
      name: "Chạy Thận GD2",
      role: "member",
      avatar_id: "67272577effb5d02cc0cde49",
      gender: 3,
      avatar: {
        _id: "67272577effb5d02cc0cde49",
        path: "/avatars/pack4/05.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "qC4bu5Br",
      title: "Triều Tuyết Lục",
      slug: "trieu-tuyet-luc",
      images: {
        posters: [
          {
            _id: "68723a649586d57e1edc334f",
            path: "7b/eb/7bebe88e9cf2728dc85f89fdc4c61e28/7bebe88e9cf2728dc85f89fdc4c61e28.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "68723a6a569444840c42e253",
            path: "2e/22/2e22253da249cbbcfc53a429f497a7dc/2e22253da249cbbcfc53a429f497a7dc.webp",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "68723a7e9586d57e1edc335a",
            path: "d5/2a/d52a753d2980fe4423525f13ddb22858/d52a753d2980fe4423525f13ddb22858.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    reviews: null,
  },
  {
    _id: "68765c07c844fbc9c7f81672",
    parent_id: null,
    user_id: "6875696a85b34a7a2c794616",
    movie_id: "qC4bu5Br",
    episode_number: 10,
    season_number: 1,
    is_spoil: false,
    mention_id: null,
    total_children: 0,
    total_like: 7,
    total_dislike: 0,
    content:
      "Nếu sự thật là Thái Hà lên hết kế hoạch từ đầu thì phải công nhận là nhân vật phụ này được xây dựng quá chỉnh chu và thông minh, tâm cơ sâu, nhưng cuối cùng cũng sẽ tự nhận tội vì đã báo thù xong cho mẹ và em gái, quá Hay.",
    is_pinned: false,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752587271,
    author: {
      _id: "6875696a85b34a7a2c794616",
      name: "Chạy Thận GD2",
      role: "member",
      avatar_id: "67272577effb5d02cc0cde49",
      gender: 3,
      avatar: {
        _id: "67272577effb5d02cc0cde49",
        path: "/avatars/pack4/05.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "qC4bu5Br",
      title: "Triều Tuyết Lục",
      slug: "trieu-tuyet-luc",
      images: {
        posters: [
          {
            _id: "68723a649586d57e1edc334f",
            path: "7b/eb/7bebe88e9cf2728dc85f89fdc4c61e28/7bebe88e9cf2728dc85f89fdc4c61e28.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "68723a6a569444840c42e253",
            path: "2e/22/2e22253da249cbbcfc53a429f497a7dc/2e22253da249cbbcfc53a429f497a7dc.webp",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "68723a7e9586d57e1edc335a",
            path: "d5/2a/d52a753d2980fe4423525f13ddb22858/d52a753d2980fe4423525f13ddb22858.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    reviews: null,
  },
  {
    _id: "6876686503281a7d34910a19",
    parent_id: null,
    user_id: "687666b4df43f53d88a7eedc",
    movie_id: "qC4bu5Br",
    episode_number: 9,
    season_number: 1,
    is_spoil: false,
    mention_id: null,
    total_children: 2,
    total_like: 4,
    total_dislike: 0,
    content: "Trời ơi cái khúc đào giếng t khóc luôn á má ác thiệt chứ ",
    is_pinned: false,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752590437,
    author: {
      _id: "687666b4df43f53d88a7eedc",
      name: "Chill",
      role: "member",
      avatar_id: "67f117102fdb432e03ffe5b3",
      gender: 3,
      avatar: {
        _id: "67f117102fdb432e03ffe5b3",
        path: "/avatars/pack1/37.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "qC4bu5Br",
      title: "Triều Tuyết Lục",
      slug: "trieu-tuyet-luc",
      images: {
        posters: [
          {
            _id: "68723a649586d57e1edc334f",
            path: "7b/eb/7bebe88e9cf2728dc85f89fdc4c61e28/7bebe88e9cf2728dc85f89fdc4c61e28.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "68723a6a569444840c42e253",
            path: "2e/22/2e22253da249cbbcfc53a429f497a7dc/2e22253da249cbbcfc53a429f497a7dc.webp",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "68723a7e9586d57e1edc335a",
            path: "d5/2a/d52a753d2980fe4423525f13ddb22858/d52a753d2980fe4423525f13ddb22858.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    reviews: null,
  },
  {
    _id: "687625920c3bb6f54236e877",
    parent_id: null,
    user_id: "6839c9b784f2695cf4785fe1",
    movie_id: "NbrAtRtR",
    episode_number: 0,
    season_number: 0,
    is_spoil: false,
    mention_id: null,
    total_children: 5,
    total_like: 4,
    total_dislike: 0,
    content: "Đã update bản 4K nhé",
    is_pinned: false,
    is_reviews: false,
    reviews_id: null,
    created_at: 1752573330,
    author: {
      _id: "6839c9b784f2695cf4785fe1",
      name: "Cô 2 Rổ",
      role: "admin",
      avatar_id: "67f1170b2fdb432e03ffe58b",
      gender: 1,
      avatar: {
        _id: "67f1170b2fdb432e03ffe58b",
        path: "/avatars/pack1/17.jpg",
      },
    },
    mention_user: null,
    movie: {
      _id: "NbrAtRtR",
      title: "Bí Kíp Luyện Rồng",
      slug: "bi-kip-luyen-rong",
      images: {
        posters: [
          {
            _id: "67bf533e0a40ea03c8a4b20d",
            path: "96/22/962217075544e85e0e0e96dbde1561de/962217075544e85e0e0e96dbde1561de.jpg",
            type: 1,
          },
          {
            _id: "6862a0d49586d57e1edba671",
            path: "58/19/58193a004ba1bf56b271215bd51c093c/58193a004ba1bf56b271215bd51c093c.jpg",
            type: 1,
          },
          {
            _id: "6862a0fb569444840c42546d",
            path: "20/7a/207a248f22dfb52dfc5938180cd74ea0/207a248f22dfb52dfc5938180cd74ea0.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            _id: "67bf53450a40ea03c8a4b218",
            path: "d4/13/d413f57dd9cd406de09cde0e4d5d5002/d413f57dd9cd406de09cde0e4d5d5002.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            _id: "67bf535e0a40ea03c8a4b223",
            path: "49/54/4954888b2af61ce4ea2353c8428a7152/4954888b2af61ce4ea2353c8428a7152.jpg",
            type: 3,
          },
          {
            _id: "6862a0759586d57e1edba65b",
            path: "ec/d5/ecd581a3c6ebadbad901ae1301e5e1d5/ecd581a3c6ebadbad901ae1301e5e1d5.jpg",
            type: 3,
          },
          {
            _id: "6862a07e569444840c425461",
            path: "4e/47/4e4760c4503bc33daa949d163119698e/4e4760c4503bc33daa949d163119698e.jpg",
            type: 3,
          },
          {
            _id: "6862a0889586d57e1edba666",
            path: "3b/bb/3bbb90cc73f9c0da84a0fdd58418e043/3bbb90cc73f9c0da84a0fdd58418e043.jpg",
            type: 3,
          },
        ],
        titles: [
          {
            _id: "6862a1b7569444840c425478",
            path: "af/56/af56b3ea09c88ca71ccb9ddc8c40042e/af56b3ea09c88ca71ccb9ddc8c40042e.png",
            type: 4,
          },
        ],
      },
    },
    reviews: null,
  },
];

function Content() {
  return (
    <div className={cx("fluid-gap")}>
      <Card />
      <Topic />
      <div className={cx("community")}>
        <div className={cx("card-row")}>
          <div className={cx("top-discuss")}>
            <div className={cx("top-title")}>
              <FontAwesomeIcon icon={faMedal} />
              <span>TOP BÌNH LUẬN</span>
            </div>
            <div className={cx("top-list")}>
              <div className={cx("top-nav")}></div>
              <div className={cx("swipper")}>
                <div className={cx("swipper-wrapper")}>
                  {commentsData.map((data) => (
                    <div className={cx("swipper-slide")}>
                      <div className={cx("item")}>
                        <div className={cx("poster")}>
                          <img
                            src="https://static.nutscdn.com/vimg/300-0/9fdba340ff590a5c4038148213e25486.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className={cx("intro")}>
                          <div className={cx("avatar")}>
                            <img
                              alt="Cô 2 Rổ"
                              src="https://www.rophim.me/images/avatars/pack1/17.jpg"
                            />
                          </div>
                          <div className={cx("info")}></div>
                        </div>
                        <div className={cx("thump")}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
