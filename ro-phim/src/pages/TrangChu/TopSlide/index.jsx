import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Tag from "~/components/Tag";
import Button from "~/components/Button";
import styles from "./TopSlide.module.scss";
import FormatRuntime from "~/utils/formatRuntime";
import SwipperSlider from "~/components/SwipperSlider";
import { HeartIcon, ExclamationIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const ListHotMovie = [
  {
    _id: "o7KPthrr",
    original_title: "Heads of State",
    english_title: "Heads of State",
    title: "Nguyên Thủ Quốc Gia",
    slug: "nguyen-thu-quoc-gia",
    overview:
      "Hai nhà lãnh đạo – Tổng thống Mỹ (John Cena) và Thủ tướng Anh (Idris Elba) – bị rơi vào âm mưu khủng bố khi tham dự hội nghị NATO. Bị lạc ở Belarus, họ buộc phải bắt tay để sinh tồn, dù tính cách trái ngược. Cùng với đặc vụ MI6 (Priyanka Chopra), họ đối đầu kẻ thù quốc tế, qua chuỗi hành động–hài hước kịch tính xuyên châu Âu.",
    release_date: "2025-07-02",
    quality: "fhd",
    rating: "T16",
    runtime: 113,
    type: 1,
    origin_country: ["US"],
    latest_season: 0,
    imdb_rating: "6.5",
    publish: true,
    latest_episode: {
      1: 1,
    },
    year: "2025",
    images: {
      posters: [
        {
          _id: "686ce2239586d57e1edbfa9a",
          path: "9eac40619d5c820e9b87364f0b0d89a7.jpg",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "686ce2299586d57e1edbfaa8",
          path: "8258b7e2de47672be23f49cd4843b7b7.jpg",
          type: 2,
        },
        {
          _id: "686ce233569444840c42ab51",
          path: "0ec3fb367ac36ddb97bad0ebda990e10.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "686ce23d9586d57e1edbfabe",
          path: "094b14d92be4540d7edbfd70ec3b4889.webp",
          type: 3,
        },
        {
          _id: "686ce2489586d57e1edbfac9",
          path: "34be715bcd7b4ed1507a9eb4da757a57.webp",
          type: 3,
        },
        {
          _id: "686ce259569444840c42ab93",
          path: "c0c5a14542fbfd2df610b9df532f99a7.webp",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "686ce21c569444840c42ab46",
          path: "ee4be8474a9f6c0771e3aa6a55aa6aad.png",
          type: 4,
        },
      ],
    },
    genres: [
      { _id: "2xCjTG", name: "Hành Động", slug: "hanh-dong" },
      { _id: "3PP9q7", name: "Gay Cấn", slug: "gay-can" },
      { _id: "W8Dn2a", name: "Hài", slug: "hai" },
      { _id: "eF8pjq", name: "Chính Trị", slug: "chinh-tri" },
      { _id: "wca3Bp", name: "Phiêu Lưu", slug: "phieu-luu" },
    ],
  },

  {
    _id: "vDEpRqtW",
    original_title: "John Wick Presents: Ballerina",
    english_title: "Ballerina",
    title: "Từ Vũ Trụ John Wick: Ballerina",
    slug: "tu-vu-tru-john-wick-ballerina",
    overview:
      "Lấy bối cảnh giữa sự kiện của Sát thủ John Wick: Phần 3 – Chuẩn Bị Chiến Tranh, bộ phim Từ Vũ Trụ John Wick: Ballerina theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình trả thù cho cái chết của gia đình mình, dưới sự huấn luyện của tổ chức tội phạm Ruska Roma.",
    release_date: "2025-06-04",
    rating: "T16",
    runtime: 125,
    type: 1,
    origin_country: ["US"],
    publish: true,
    quality: "4k",
    latest_episode: {
      1: 1,
      4: 1,
    },
    year: "2025",
    imdb_rating: "7.0",
    images: {
      posters: [
        {
          _id: "68638ccf9586d57e1edbac81",
          path: "c1ec338ee8387d310986488629d5e289.webp",
          type: 1,
        },
        {
          _id: "68638cd49586d57e1edbac90",
          path: "c4a72627947bb1bfe0142d138d99666c.webp",
          type: 1,
        },
        {
          _id: "68638cdd569444840c425ab3",
          path: "90d5fb1e864ee9f1f503e08e05143e8f.webp",
          type: 1,
        },
        {
          _id: "68638ebb569444840c425b2a",
          path: "fe15c492d94cdcaf1e5e379f44b94d59.jpg",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "68638e4e569444840c425aeb",
          path: "f802c77d3156545e27382523ae83dd7d.jpg",
          type: 2,
        },
        {
          _id: "68638e559586d57e1edbacc4",
          path: "4c3ce630144d9d465e301f1c0582d0ba.jpg",
          type: 2,
        },
        {
          _id: "68638e5a9586d57e1edbaccf",
          path: "d90107064c9e897a820d32493d4825ca.webp",
          type: 2,
        },
        {
          _id: "68638e6b569444840c425b06",
          path: "c0ce104928f09869d57d34ef7114e8e1.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "68638ce39586d57e1edbac9b",
          path: "0d7e0179ed1c60fa3caf57cea4ed6663.webp",
          type: 3,
        },
        {
          _id: "68638cea569444840c425abe",
          path: "a62c136aa493ba29aa54ae0834fc9721.webp",
          type: 3,
        },
        {
          _id: "68638cef569444840c425ac9",
          path: "a00ecdaed594e51e90b965b24c5ad281.webp",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "68638e769586d57e1edbace1",
          path: "ebfb0189613d2ccfc8734c2efbd9de5e.png",
          type: 4,
        },
      ],
    },
    genres: [
      { _id: "2xCjTG", name: "Hành Động", slug: "hanh-dong" },
      { _id: "3679nF", name: "Chiếu Rạp", slug: "chieu-rap" },
      { _id: "3PP9q7", name: "Gay Cấn", slug: "gay-can" },
      { _id: "IN1LmJ", name: "Hình Sự", slug: "hinh-su" },
      { _id: "wca3Bp", name: "Phiêu Lưu", slug: "phieu-luu" },
    ],
  },
  {
    _id: "qjrNTeSu",
    original_title: "소주전쟁",
    english_title: "Big Deal",
    title: "Mượn Rượu Đẩy Kèo",
    slug: "muon-ruou-day-keo",
    overview:
      "Mượn Rượu Đẩy Kèo lấy bối cảnh Hàn Quốc vào năm 1997, khi cuộc khủng hoảng kinh tế tài chính đang hoành hành khắp châu Á khiến Gukbo - công ty sản xuất Soju số 1 đất nước rơi vào tình trạng cận kề phá sản. In-beom (Lee Je-hoon) - chàng trai trẻ đầy tham vọng đại diện cho tập đoàn đầu tư toàn cầu Solquin đã trở về quê hương với quyết tâm thâu tóm Gukbo. Để thực hiện âm mưu này, In-beom đội lốt một chuyên gia tư vấn ngây thơ, tiếp cận Jong-rok (Yoo Hai-jin) - giám đốc vô cùng trung thành với Gukbo, đang khao khát đưa công ty quay lại thời hoàng kim. Nhưng càng đào sâu vào đế chế Gukbo, In-beom càng nhận ra đây thực sự là một cuộc chiến xảo quyệt với rất nhiều “cú twist”, dẫn đến kết cục không ngờ dành cho tất cả.",
    release_date: "2025-05-30",
    quality: "fhd",
    rating: "T16",
    runtime: 104,
    type: 1,
    origin_country: ["KR"],
    latest_season: 0,
    imdb_rating: "7.1",
    publish: true,
    latest_episode: {
      1: 1,
      4: 1,
    },
    year: "2025",
    images: {
      posters: [
        {
          _id: "6868d73a569444840c428b9d",
          path: "594cf7dffee5772328a52ec44f760714.jpg",
          type: 1,
        },
        {
          _id: "6868d73f569444840c428ba8",
          path: "e8b4929c73592585c0580c052c01d6ac.webp",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "6868d743569444840c428bb3",
          path: "3d83e649bcb5f8880566a5d3811adbfa.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "6868dde19586d57e1edbdcfb",
          path: "7cb6c16ba0981484d55699be63838c9f.webp",
          type: 3,
        },
        {
          _id: "6868dde7569444840c428ca9",
          path: "8ef2abe4c1f1efe18a8fe6e7cd55ac0e.jpg",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "6868de3b569444840c428cb8",
          path: "272fcda16d4b1c81e491b1b4bc0af77f.png",
          type: 4,
        },
      ],
    },
    genres: [
      {
        _id: "1gOywM",
        name: "Chính Kịch",
        slug: "chinh-kich",
      },
      {
        _id: "3679nF",
        name: "Chiếu Rạp",
        slug: "chieu-rap",
      },
      {
        _id: "3PP9q7",
        name: "Gay Cấn",
        slug: "gay-can",
      },
      {
        _id: "epV6Ny",
        name: "Tâm Lý",
        slug: "tam-ly",
      },
    ],
  },

  {
    _id: "ACIyOLuh",
    original_title: "M3GAN 2.0",
    english_title: "M3GAN 2.0",
    title: "M3GAN 2.0",
    slug: "m3gan-20",
    overview:
      'MEGAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp. Kẻ gian đã tạo ra một robot AI khác với chức năng tương tự MEGAN, nhưng được trang bị sức mạnh chiến đấu "khủng" hơn mang tên Amelia. Để "đối đầu" với Amelia, Gemma buộc phải "hồi sinh" và cải tiến MEGAN, hứa hẹn một trận chiến "nảy lửa" trên màn ảnh vào năm 2025.',
    release_date: "2025-06-25",
    quality: "cam",
    rating: "T18",
    runtime: 100,
    type: 1,
    origin_country: ["US"],
    latest_season: 0,
    imdb_rating: "6.3",
    publish: true,
    latest_episode: {
      1: 1,
    },
    year: "2025",
    images: {
      posters: [
        {
          _id: "67bf53e00a40ea03c8a4b25c",
          path: "9fdba340ff590a5c4038148213e25486.jpg",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "67bf53e50a40ea03c8a4b267",
          path: "fcbbb620e45522e4262272c35d36ffd4.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "67bf53ef834ff2054581d612",
          path: "4944c5b73a30dc73e6ee7ced23906b26.jpg",
          type: 3,
        },
        {
          _id: "686556f3569444840c427192",
          path: "2621f2a8a2da537da8243d0435cbd0da.webp",
          type: 3,
        },
        {
          _id: "686556fa9586d57e1edbc179",
          path: "f92a70bbd84ec57fa3e81239da6bd44b.webp",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "686556d09586d57e1edbc16e",
          path: "44386cc9a8fd46755e4984ee247c5697.png",
          type: 4,
        },
      ],
    },
    genres: [
      {
        _id: "3679nF",
        name: "Chiếu Rạp",
        slug: "chieu-rap",
      },
      {
        _id: "3PP9q7",
        name: "Gay Cấn",
        slug: "gay-can",
      },
      {
        _id: "43tNdP",
        name: "Kinh Dị",
        slug: "kinh-di",
      },
      {
        _id: "Rqm5ON",
        name: "Khoa Học",
        slug: "khoa-hoc",
      },
      {
        _id: "epV6Ny",
        name: "Tâm Lý",
        slug: "tam-ly",
      },
      {
        _id: "wN4Ysm",
        name: "Viễn Tưởng",
        slug: "vien-tuong",
      },
    ],
  },
  {
    _id: "HcQwEwlM",
    original_title: "F1",
    title: "Tay Đua F1",
    slug: "tay-dua-f1",
    overview:
      "Brad Pitt vào vai một cựu tay đua trở lại với đường đua Công thức 1 cùng APXGP, một đội đua giả tưởng. Đồng hành cùng Pitt trên chặng đường này là Damson Idris, vào vai người đồng đội của anh. Cùng nhau, họ sẽ đối đầu với những tay đua máu mặt trong lĩnh vực thể thao, chinh phục những đỉnh cao mới. F1 dự kiến khởi chiếu vào 27.06.2025.",
    release_date: "2025-06-25",
    rating: "T16",
    runtime: 100,
    type: 1,
    origin_country: ["US"],
    publish: true,
    english_title: "F1: The Movie",
    imdb_rating: "7.9",
    quality: "cam",
    latest_episode: {
      1: 1,
    },
    year: "2025",
    images: {
      posters: [
        {
          _id: "682328e49f4d56cbc4665506",
          path: "ad92b01db521be321b3b79ee94869555.jpg",
          type: 1,
        },
        {
          _id: "6863f8b29586d57e1edbb1d2",
          path: "c340b90720d089495b3fc1a273ea069d.jpg",
          type: 1,
        },
        {
          _id: "6863f8ba569444840c426004",
          path: "0286bee315b92d4073efb8d2ffe6cd44.jpg",
          type: 1,
        },
        {
          _id: "6863f8bf569444840c42600f",
          path: "bcd571adac9ba00797ac8bb833261fe2.jpg",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "682328ec8975a81000ba16d2",
          path: "065ff0cf3a86637fc011159a1c209b55.jpg",
          type: 2,
        },
        {
          _id: "682329048975a81000ba16e8",
          path: "a97a82ed73a2e450332f6fd1afb20fb9.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "682328fa9f4d56cbc4665511",
          path: "2f26b4ce7ed537fad32d4a0138f4f36c.jpg",
          type: 3,
        },
        {
          _id: "6863f911569444840c426030",
          path: "7fb03fc7adc8de125e80bc0d67d0e841.webp",
          type: 3,
        },
        {
          _id: "6863f9199586d57e1edbb1de",
          path: "e8e69917d75ea39ccd6f59de623d8bdf.webp",
          type: 3,
        },
        {
          _id: "6863f922569444840c42603b",
          path: "af2d9ffe736e0e2318656cf41c87e122.webp",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "6863f92c9586d57e1edbb1e9",
          path: "3f53160176be9787a445b049a07609f9.png",
          type: 4,
        },
      ],
    },
    genres: [
      {
        _id: "1gOywM",
        name: "Chính Kịch",
        slug: "chinh-kich",
      },
      {
        _id: "2xCjTG",
        name: "Hành Động",
        slug: "hanh-dong",
      },
      {
        _id: "3679nF",
        name: "Chiếu Rạp",
        slug: "chieu-rap",
      },
    ],
  },
  {
    _id: "NbrAtRtR",
    original_title: "How to Train Your Dragon",
    english_title: "How to Train Your Dragon",
    title: "Bí Kíp Luyện Rồng",
    slug: "bi-kip-luyen-rong",
    overview:
      "Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng. Giống như bộ phim hay gốc từ năm 2010, Bí Kíp Luyện Rồng phiên bản live-action lần này diễn ra trên Đảo Berk, nơi người Viking và rồng đã là kẻ thù không đội trời chung trong nhiều thế hệ. Nhưng khi Hiccup (Mason Thames) – con trai của Tù trưởng Stoick the Vast đi ngược lại truyền thống hàng thế kỷ để kết bạn với Toothless - một con rồng Night Fury, chính giây phút đó anh ấy đã phá vỡ quy tắc vốn có của cộng đồng và mở ra sự căng thẳng tột cùng cho cả người Viking và rồng.",
    release_date: "2025-06-11",
    quality: "cam",
    rating: "T13",
    runtime: 110,
    type: 1,
    origin_country: ["US"],
    latest_season: 0,
    imdb_rating: "8.1",
    publish: true,
    latest_episode: {
      1: 1,
    },
    year: "2025",
    images: {
      posters: [
        {
          _id: "67bf533e0a40ea03c8a4b20d",
          path: "962217075544e85e0e0e96dbde1561de.jpg",
          type: 1,
        },
        {
          _id: "6862a0d49586d57e1edba671",
          path: "58193a004ba1bf56b271215bd51c093c.jpg",
          type: 1,
        },
        {
          _id: "6862a0fb569444840c42546d",
          path: "207a248f22dfb52dfc5938180cd74ea0.jpg",
          type: 1,
        },
      ],
      horizontal_posters: [
        {
          _id: "67bf53450a40ea03c8a4b218",
          path: "d413f57dd9cd406de09cde0e4d5d5002.jpg",
          type: 2,
        },
      ],
      backdrops: [
        {
          _id: "67bf535e0a40ea03c8a4b223",
          path: "4954888b2af61ce4ea2353c8428a7152.jpg",
          type: 3,
        },
        {
          _id: "6862a0759586d57e1edba65b",
          path: "ecd581a3c6ebadbad901ae1301e5e1d5.jpg",
          type: 3,
        },
        {
          _id: "6862a07e569444840c425461",
          path: "4e4760c4503bc33daa949d163119698e.jpg",
          type: 3,
        },
        {
          _id: "6862a0889586d57e1edba666",
          path: "3bbb90cc73f9c0da84a0fdd58418e043.jpg",
          type: 3,
        },
      ],
      titles: [
        {
          _id: "6862a1b7569444840c425478",
          path: "af56b3ea09c88ca71ccb9ddc8c40042e.png",
          type: 4,
        },
      ],
    },
    genres: [
      {
        _id: "2xCjTG",
        name: "Hành Động",
        slug: "hanh-dong",
      },
      {
        _id: "3679nF",
        name: "Chiếu Rạp",
        slug: "chieu-rap",
      },
      {
        _id: "8VSWst",
        name: "Gia Đình",
        slug: "gia-dinh",
      },
      {
        _id: "gVRG25",
        name: "Kỳ Ảo",
        slug: "ky-ao",
      },
      {
        _id: "wN4Ysm",
        name: "Viễn Tưởng",
        slug: "vien-tuong",
      },
      {
        _id: "wca3Bp",
        name: "Phiêu Lưu",
        slug: "phieu-luu",
      },
    ],
  },
];

function TopSlide() {
  const [active, setActive] = useState(0);

  return (
    <div className={cx("top-slide")}>
      <div className={cx("slide-element")}>
        <div
          className={cx("background-fade")}
          style={{
            backgroundImage: `url("https://static.nutscdn.com/vimg/1920-0/${ListHotMovie[active].images.backdrops[0].path}")`,
          }}
        ></div>
        <div key={active} className={cx("cover-image")}>
          <img
            src={`https://static.nutscdn.com/vimg/1920-0/${ListHotMovie[active].images.backdrops[0].path}`}
            alt="thumbnail"
          />
        </div>

        <div className={cx("anchor")}>
          <div className={cx("slide-content")}>
            <div className={cx("title")}>
              <a
                title={ListHotMovie[active].title}
                href={`/phim/${ListHotMovie[active].slug}`}
              >
                <img
                  alt={ListHotMovie[active].title}
                  src={
                    "https://static.nutscdn.com/vimg/0-260/" +
                    ListHotMovie[active].images.titles[0].path
                  }
                />
              </a>
            </div>
            <div className={cx("alias-title")}>
              <a
                title={ListHotMovie[active].title}
                href={`/phim/${ListHotMovie[active].slug}`}
              >
                {ListHotMovie[active].original_title}
              </a>
            </div>
            <div className={cx("tags")}>
              <Tag imdb>{ListHotMovie[active].imdb_rating}</Tag>
              <Tag model>{ListHotMovie[active].rating}</Tag>
              <Tag classic>{ListHotMovie[active].year}</Tag>
              <Tag classic>
                <FormatRuntime minutes={ListHotMovie[active].runtime} />
              </Tag>
              <Tag classic>{ListHotMovie[active].quality.toUpperCase()}</Tag>
            </div>
            <div className={cx("genres-tags")}>
              {ListHotMovie[active].genres.map((data, index) => (
                <Tag key={index} href={"the-loai/" + data.slug} topic>
                  {data.name}
                </Tag>
              ))}
            </div>
            <div className={cx("description")}>
              {ListHotMovie[active].overview}
            </div>
            <div className={cx("touch")}>
              <Button play href="/xem-phim/bi-kip-luyen-rong.NbrAtRtR">
                <FontAwesomeIcon icon={faPlay} />
              </Button>
              <div className={cx("touch-group")}>
                <a className={cx("item")}>
                  <HeartIcon />
                </a>
                <a
                  className={cx("item")}
                  href="/xem-phim/bi-kip-luyen-rong.NbrAtRtR"
                >
                  <ExclamationIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* swiper thumBs */}
        <div className={cx("swipper-wrapper")}>
          {ListHotMovie.map((data, index) => {
            return active === index ? (
              <SwipperSlider
                key={index}
                data={data}
                active
                onActive={() => setActive(index)}
              />
            ) : (
              <SwipperSlider
                key={index}
                data={data}
                onActive={() => setActive(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopSlide;
