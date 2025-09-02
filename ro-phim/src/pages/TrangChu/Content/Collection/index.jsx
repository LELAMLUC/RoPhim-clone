import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ContentStyle from "./ContentStyle";

const cx = classNames.bind(styles);

const collection = [
  {
    _id: "CGPoDx",
    name: "Phim Điện Ảnh Mới Coóng",
    slug: "phim-dien-anh-moi-coong",
    color: "",
    order: 2,
    style: 1,
    random_data: false,
    type: 2,
    filter: {
      years: ["2025", "2024"],
      status: "Released",
      type: "1",
      top_views: "",
      limit: "30",
      sort_by: "updated_at",
      order: "-1",
    },
    movies: [
      {
        _id: "9bb9BEsZ",
        original_title: "84제곱미터",
        english_title: "Wall to Wall",
        title: "84 Mét Vuông",
        slug: "84-met-vuong",
        overview:
          "Dốc hết tiền tiết kiệm cả đời để mua một căn hộ mới, người đàn ông nọ phát hiện ra các bức tường trong căn hộ này đầy những tiếng ồn đáng sợ, hàng xóm thù địch và bí mật ghê rợn.\r\n",
        release_date: "2025-07-17",
        quality: "fhd",
        rating: "T16",
        runtime: 118,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
        ],
        images: {
          posters: [
            {
              path: "de/20/de20f19c9485ac49476ac3ece58ca529/de20f19c9485ac49476ac3ece58ca529.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "40/29/40297c33d2560db6f2445081ff923594/40297c33d2560db6f2445081ff923594.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "96/9b/969b6c0008155b24de996148aa2d181c/969b6c0008155b24de996148aa2d181c.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "5f/29/5f292166575d638b305d560ca51a1f0b/5f292166575d638b305d560ca51a1f0b.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/54ZIrolDcGFv8AIWxUAvu2kQsuoXppzFuSCgUTDTRsKp8PB-p7b+dKVR5-a4R5-JFs8UHmVxZp9JNmA0vLfBsEnVe6CXSGFNm5Mj0BOEAb4=/video.mp4",
      },
      {
        _id: "ylfbOUz2",
        original_title: "Everything's Going to Be Great",
        english_title: "Everything's Going to Be Great",
        title: "Đời Sẽ Vẫn Đẹp Tươi",
        slug: "doi-se-van-dep-tuoi",
        overview:
          "Khi buộc phải chuyển đến sống cùng một người họ hàng xa lâu năm không liên lạc, gia đình Smart rơi vào một vòng xoáy mới của những giấc mơ quá cỡ, khủng hoảng bản thân, và cả… sân khấu kịch địa phương. Trong chiếc tổ ấm bất đắc dĩ này, mỗi thành viên phải học cách đối diện với chính mình – và với nhau – trong một câu chuyện gia đình đầy ấm áp và hài hước châm biếm nhẹ nhàng.",
        release_date: "2025-06-20",
        quality: "fhd",
        rating: "T16",
        runtime: 95,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.5",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "3c/10/3c10f89093de817cba4d395b3d3095e2/3c10f89093de817cba4d395b3d3095e2.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "bf/8a/bf8af57cded767ab2b2ef48c2d0e1dec/bf8af57cded767ab2b2ef48c2d0e1dec.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "94/14/9414bfb0777fd12e3feb4ea0b0f36eb4/9414bfb0777fd12e3feb4ea0b0f36eb4.jpg",
              type: 3,
            },
            {
              path: "06/6b/066baecadc5b589576085be3c7887649/066baecadc5b589576085be3c7887649.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "4rh2LtT9",
        original_title: "장손",
        english_title: "House of the Seasons",
        title: "Cháu Đích Tôn",
        slug: "chau-dich-ton",
        overview:
          "Giữa mùa hè rực lửa, cả đại gia đình họ Kim tề tựu về Daegu để làm giỗ tổ.\r\nTrong số đó có Seong-jin – cháu đích tôn – con trai của người đang nối nghiệp nhà: một xưởng đậu phụ lâu đời. Nhưng khi hương khói vừa tàn, không khí gia đình bắt đầu nóng lên. Trong lúc mọi người còn chưa kịp nguôi giận vì những mâu thuẫn âm ỉ bấy lâu, Seong-jin buông lời chấn động: anh sẽ không nối nghiệp cha.",
        release_date: "2024-09-11",
        quality: "fhd",
        rating: "T16",
        runtime: 121,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.4",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
        ],
        images: {
          posters: [
            {
              path: "b3/89/b389cc56a5393142c882a2a1773d4ce6/b389cc56a5393142c882a2a1773d4ce6.jpg",
              type: 1,
            },
            {
              path: "12/c5/12c5937e84d16b6decf563cfd62a7305/12c5937e84d16b6decf563cfd62a7305.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "c8/93/c893b219cd974ea7bbfb31aa1fd7be2f/c893b219cd974ea7bbfb31aa1fd7be2f.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "9a/d1/9ad10c180a16b893f1c3670a82dab904/9ad10c180a16b893f1c3670a82dab904.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "2oiIHdCZ",
        original_title: "Superman",
        title: "Superman",
        slug: "superman",
        overview:
          "Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent.",
        release_date: "2025-07-09",
        rating: "T13",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "Superman",
        imdb_rating: "7.6",
        quality: "cam",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "GNUW6k",
            name: "DC",
            slug: "dc",
          },
          {
            _id: "OW2M9i",
            name: "Siêu Anh Hùng",
            slug: "sieu-anh-hung",
          },
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "0e/19/0e190589111b3c28e1451cde7b82ca3e/0e190589111b3c28e1451cde7b82ca3e.jpg",
              type: 1,
            },
            {
              path: "4b/3c/4b3cdd803e3ca867776d04315e013142/4b3cdd803e3ca867776d04315e013142.webp",
              type: 1,
            },
            {
              path: "5f/0d/5f0dfab3a4b9602c439f20167581a826/5f0dfab3a4b9602c439f20167581a826.webp",
              type: 1,
            },
            {
              path: "b9/87/b987711629ddc4e21645a4e8af96e60d/b987711629ddc4e21645a4e8af96e60d.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "82/90/8290b8ce36c1fb7bc8d8707f81faebea/8290b8ce36c1fb7bc8d8707f81faebea.jpg",
              type: 2,
            },
            {
              path: "da/94/da9452dff98ba7f7c82af03dd5e87266/da9452dff98ba7f7c82af03dd5e87266.webp",
              type: 2,
            },
            {
              path: "1a/17/1a170535e5c4af5ce9b7cfa94ff6292a/1a170535e5c4af5ce9b7cfa94ff6292a.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "16/16/161625de0f2c34ec4795140b44bed834/161625de0f2c34ec4795140b44bed834.webp",
              type: 3,
            },
            {
              path: "f1/05/f105d609e2cc3c8ce1c29f999f42bb9d/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ef/39/ef39e6430dd40aae938a87909bdcbbe1/ef39e6430dd40aae938a87909bdcbbe1.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/L1k0Z7d5-i3j2whoUb+vYYDjSVc24+OqhGN1h+aOcfeu5HwBUfiObC1Qi+p1uAbprMOYrBvZFtYCG2UyBZkzAxN6PYD0BfAR2kMZGU6GYbc=/video.mp4",
      },
      {
        _id: "QigIhNas",
        original_title: "Jurassic World Rebirth",
        english_title: "Jurassic World Rebirth",
        title: "Thế Giới Khủng Long: Tái Sinh",
        slug: "the-gioi-khung-long-tai-sinh",
        overview:
          "Phim lấy bối cảnh 5 năm sau phần phim Thế Giới Khủng Long: Lãnh Địa (Jurassic World: Dominion). Thế Giới Khủng Long: Tái Sinh mở ra một chương mới đầy tính hành động, chứng kiến một đội khai thác chạy đua đến nơi nguy hiểm nhất trên Trái Đất. Dàn nhân vật chính là bộ ba Scarlett Johansson, Mahershala Ali và Jonathan Bailey dấn thân vào một nhiệm vụ cực kỳ hiểm nguy, đó chính là cố gắng lấy DNA có thể dẫn đến một bước đột phá y học cho nhân loại. Chìa khóa của nó tình cờ lại là DNA của ba con khủng long khổng lồ nhất trên cạn, biển và không trung trong sinh quyển nhiệt đới. Hành trình này sẽ đưa nhóm nhân vật chính băng rừng, vượt biển, đối mặt với nhiều loài khủng long kỳ lạ, nguy hiểm nhưng cũng đầy lý thú, từ đó hé mở nhiều điều bí ẩn mà tạo hóa đã giấu khỏi con người suốt bấy lâu nay.",
        release_date: "2025-07-02",
        quality: "cam",
        rating: "T16",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
          {
            _id: "zUEian",
            name: "Giả Tưởng",
            slug: "gia-tuong",
          },
        ],
        images: {
          posters: [
            {
              path: "e8/58/e858d26041ca8a9896aa606d549f9bdc/e858d26041ca8a9896aa606d549f9bdc.jpg",
              type: 1,
            },
            {
              path: "12/a2/12a222c45d2c1c0a05a35f354ed86da2/12a222c45d2c1c0a05a35f354ed86da2.jpg",
              type: 1,
            },
            {
              path: "8d/06/8d06fb6e1be482cbe8c62914a9e05d0e/8d06fb6e1be482cbe8c62914a9e05d0e.jpg",
              type: 1,
            },
            {
              path: "f5/93/f5936fa72cab3567d3cf52840810d8de/f5936fa72cab3567d3cf52840810d8de.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "2f/2f/2f2ff60e643d641a2655ba44b9f45fbb/2f2ff60e643d641a2655ba44b9f45fbb.jpg",
              type: 2,
            },
            {
              path: "05/16/05168942d6b75e2bde65cbcc742e5d3c/05168942d6b75e2bde65cbcc742e5d3c.jpg",
              type: 2,
            },
            {
              path: "86/b7/86b75d60e1762d2780f0f23365354226/86b75d60e1762d2780f0f23365354226.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "54/05/5405bf6a627e5bdcc9bc6acac645e6a4/5405bf6a627e5bdcc9bc6acac645e6a4.webp",
              type: 3,
            },
            {
              path: "f9/f1/f9f19a5f7eaa5795b11e3d369c48cbca/f9f19a5f7eaa5795b11e3d369c48cbca.webp",
              type: 3,
            },
            {
              path: "26/a5/26a53600a57c7a4497a22606eecbd9b3/26a53600a57c7a4497a22606eecbd9b3.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "15/1b/151b39ab91873a620e3c78fab5686d23/151b39ab91873a620e3c78fab5686d23.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/ZjjS1QAJPM2c+aOQUX1rfNgfstIOV6Exur2ms8ieZY-Qfh2g1VS77TDCtHjz79AIG1XE1bFqE2AuGQ7SrMv0w0sj7R9rWXKrU+VeHu1KPSI=/video.mp4",
      },
      {
        _id: "1UQOap9o",
        original_title: "Vincent",
        english_title: "Vincent",
        title: "Vincent",
        slug: "vincent",
        overview:
          "Một bộ phim hài đen độc đáo chưa từng có, theo chân Vincent Tremblay – một nhà văn sống ẩn dật – bỗng trở thành mục tiêu của một thế lực bí ẩn và đen tối.",
        release_date: "2024-03-09",
        quality: "fhd",
        rating: "T16",
        runtime: 92,
        type: 1,
        origin_country: ["AU"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.1",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "a7/c0/a7c0405e8a0f1db02ff5a9a336886cf8/a7c0405e8a0f1db02ff5a9a336886cf8.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "07/e8/07e849be156efdf675341e30e77fbfc0/07e849be156efdf675341e30e77fbfc0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "c7/45/c745c90a1ca719f5d5c13c5ead0dd458/c745c90a1ca719f5d5c13c5ead0dd458.webp",
              type: 3,
            },
          ],
          titles: [],
        },
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
        quality: "4k",
        rating: "T18",
        runtime: 100,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "9f/db/9fdba340ff590a5c4038148213e25486/9fdba340ff590a5c4038148213e25486.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "fc/bb/fcbbb620e45522e4262272c35d36ffd4/fcbbb620e45522e4262272c35d36ffd4.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "49/44/4944c5b73a30dc73e6ee7ced23906b26/4944c5b73a30dc73e6ee7ced23906b26.jpg",
              type: 3,
            },
            {
              path: "26/21/2621f2a8a2da537da8243d0435cbd0da/2621f2a8a2da537da8243d0435cbd0da.webp",
              type: 3,
            },
            {
              path: "f9/2a/f92a70bbd84ec57fa3e81239da6bd44b/f92a70bbd84ec57fa3e81239da6bd44b.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "44/38/44386cc9a8fd46755e4984ee247c5697/44386cc9a8fd46755e4984ee247c5697.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/M4TPqXZnNHtUlrj97ll0HRqvscu71tXydoc8wVS6u9Wf7Uhhumt5iEilHLqrqws+3D-K7sUGBEq8-ry7nw61-U21DwW1vtKJk1X0eaHvAlk=/video.mp4",
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
        quality: "4k",
        rating: "T13",
        runtime: 110,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "8.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "96/22/962217075544e85e0e0e96dbde1561de/962217075544e85e0e0e96dbde1561de.jpg",
              type: 1,
            },
            {
              path: "58/19/58193a004ba1bf56b271215bd51c093c/58193a004ba1bf56b271215bd51c093c.jpg",
              type: 1,
            },
            {
              path: "20/7a/207a248f22dfb52dfc5938180cd74ea0/207a248f22dfb52dfc5938180cd74ea0.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "d4/13/d413f57dd9cd406de09cde0e4d5d5002/d413f57dd9cd406de09cde0e4d5d5002.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "49/54/4954888b2af61ce4ea2353c8428a7152/4954888b2af61ce4ea2353c8428a7152.jpg",
              type: 3,
            },
            {
              path: "ec/d5/ecd581a3c6ebadbad901ae1301e5e1d5/ecd581a3c6ebadbad901ae1301e5e1d5.jpg",
              type: 3,
            },
            {
              path: "4e/47/4e4760c4503bc33daa949d163119698e/4e4760c4503bc33daa949d163119698e.jpg",
              type: 3,
            },
            {
              path: "3b/bb/3bbb90cc73f9c0da84a0fdd58418e043/3bbb90cc73f9c0da84a0fdd58418e043.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "af/56/af56b3ea09c88ca71ccb9ddc8c40042e/af56b3ea09c88ca71ccb9ddc8c40042e.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/eac37uMb-g15Qd0mkm7YIVfZuN6RhXKYV+jmPceMd3kEj8rLNBeesfLxY7faP3UI09seD1QOfUjRpRc1OAnAQ2UDX7c31HFY1XTGWbQDbs8=/video.mp4",
      },
      {
        _id: "KFwS2fqR",
        original_title: "ซองแดงแต่งผี",
        english_title: "The Red Envelope",
        title: "Cưới Ma Giải Hạn",
        slug: "cuoi-ma-giai-han",
        overview:
          "Menn, một tên trộm cắp đang làm tay trong cho cảnh sát, đồng thời cũng là một gã trai thẳng chính hiệu. Ngày nọ, Menn vô tình nhặt được một bao lì xì đỏ bí ẩn và bị ràng buộc bởi khế ước siêu nhiên, bắt anh phải kết hôn với một hồn ma. Không dừng lại ở đó, số phận càng trớ trêu hơn khi “vợ” của Menn không chỉ là người cõi âm, mà còn là một “mỹ” vong dễ thương với tư tưởng cấp tiến tên Titi. Menn buộc phải giúp Titi tìm ra sự thật đằng sau vụ tai nạn cướp đi sinh mạng của cậu để Titi được siêu thoát và trả lại bình yên cho mình. Trùng hợp làm sao, tất cả đầu mối đều dẫn đến vụ buôn ma túy bất hợp pháp do Menn và Goi, nữ cảnh sát lớn tuổi mà Menn yêu mến, đang điều tra. Tin rằng việc phá án sẽ có lợi cho sự nghiệp và tình yêu của mình, Menn quyết định tham gia phi vụ bất bình thường này để giúp Titi, từ đó tạo nên một mối liên kết không tưởng giữa đồng tính và trai thẳng, giữa người sống và kẻ chết.\r\n",
        release_date: "2025-03-20",
        quality: "fhd",
        rating: "T16",
        runtime: 127,
        type: 1,
        origin_country: ["TH"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "3679nF",
            name: "Chiếu Rạp",
            slug: "chieu-rap",
          },
          {
            _id: "J1tgRB",
            name: "LGBT+",
            slug: "lgbt",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
        ],
        images: {
          posters: [
            {
              path: "8d/30/8d30e80270467d9340f87fdf246ad102/8d30e80270467d9340f87fdf246ad102.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "58/ea/58ea9e5070bfdf9ef3e83a61499da545/58ea9e5070bfdf9ef3e83a61499da545.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "32/9f/329fe46824c8623733781ca1d58bda32/329fe46824c8623733781ca1d58bda32.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "5c/dc/5cdc84ab7d668572f940496ffed684d5/5cdc84ab7d668572f940496ffed684d5.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "cxo7lhOH",
        original_title: "Eden",
        english_title: "Eden",
        title: "Eden: Vườn Địa Đàng",
        slug: "eden-vuon-dia-dang",
        overview:
          "Vì khao khát thay đổi sâu sắc, một nhóm người đã rời bỏ xã hội để tự kiến tạo tương lai mới giữa vùng đất khắc nghiệt của quần đảo Galápagos.",
        release_date: "2025-04-10",
        quality: "fhd",
        rating: "T16",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.3",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "f5/0f/f50f2aa10027debf1d95edb3b2f8ad1a/f50f2aa10027debf1d95edb3b2f8ad1a.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "e4/27/e427d00c86fab7b4773b1c78dc8ee17f/e427d00c86fab7b4773b1c78dc8ee17f.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "ed/f3/edf3fb87e9ba91f60ad82c79f3f65a35/edf3fb87e9ba91f60ad82c79f3f65a35.webp",
              type: 3,
            },
            {
              path: "de/43/de4373c7e53a04e75f8039df6b1b8469/de4373c7e53a04e75f8039df6b1b8469.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "9Av3Dzwe",
        original_title: "Sovereign",
        english_title: "Sovereign",
        title: "Đấng Tối Cao",
        slug: "dang-toi-cao",
        overview:
          'Jerry – một ông bố đơn thân đầy bất ổn – dạy con trai mình rằng luật pháp chỉ là ảo ảnh và tự do là thứ phải giành lấy, không xin ai cả. Dần bị cuốn vào hệ tư tưởng cực đoan của phong trào "công dân tối thượng", cha con Jerry lún sâu vào con đường chống đối xã hội. Nhưng khi họ chạm trán với một vị trưởng cảnh sát cả đời bảo vệ pháp luật, cuộc đối đầu giữa hai thế giới quan – một bên là trật tự, một bên là hỗn loạn – trở nên không thể tránh khỏi.',
        release_date: "2025-07-11",
        quality: "fhd",
        rating: "T18",
        runtime: 100,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.4",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "eF8pjq",
            name: "Chính Trị",
            slug: "chinh-tri",
          },
        ],
        images: {
          posters: [
            {
              path: "37/a1/37a154580b4c5b4bf3e51663a417b2e1/37a154580b4c5b4bf3e51663a417b2e1.jpg",
              type: 1,
            },
            {
              path: "2c/04/2c04fba1d96d2f9efc29173f9b7f2623/2c04fba1d96d2f9efc29173f9b7f2623.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "ee/16/ee16a27e23426b1c6fa11179e39ad822/ee16a27e23426b1c6fa11179e39ad822.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "61/dd/61dd10633b7a4417dacf4e04b94688d1/61dd10633b7a4417dacf4e04b94688d1.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "42/48/4248cc9ca1c2e1790383e1c978fd0362/4248cc9ca1c2e1790383e1c978fd0362.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "tgHwPupu",
        original_title: "The Other",
        english_title: "The Other",
        title: "Con Nuôi",
        slug: "con-nuoi",
        overview:
          "Họ muốn cứu một đứa trẻ. Không ngờ, chính điều đó sẽ hủy diệt họ. Khao khát làm cha mẹ, một cặp đôi nhận nuôi một bé mồ côi mang quá khứ bi kịch. Nhưng hành động xuất phát từ tình yêu ấy nhanh chóng biến thành cơn ác mộng khi họ nhận ra: quá khứ đầy bạo lực của đứa trẻ đang quay trở lại, đe dọa phá hủy tất cả khiến cho mái ấm họ cố gắng xây dựng dần bị bóp nghẹt bởi sự kinh hoàng mà họ chưa từng tưởng tượng.",
        release_date: "2025-06-13",
        quality: "fhd",
        rating: "T18",
        runtime: 99,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "4.6",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
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
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "86/b7/86b74e8721d640a9c4aeab48084a4943/86b74e8721d640a9c4aeab48084a4943.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "d7/5b/d75bdb2b4678a96cac14a49e781af1e0/d75bdb2b4678a96cac14a49e781af1e0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "74/6c/746ce03192a176d178f0695518f0c837/746ce03192a176d178f0695518f0c837.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "o7KPthrr",
        original_title: "Heads of State",
        english_title: "Heads of State",
        title: "Nguyên Thủ Quốc Gia",
        slug: "nguyen-thu-quoc-gia",
        overview:
          "Hai nhà lãnh đạo – Tổng thống Mỹ (John Cena) và Thủ tướng Anh (Idris Elba) – bị rơi vào âm mưu khủng bố khi tham dự hội nghị NATO. Bị lạc ở Belarus, họ buộc phải bắt tay để sinh tồn, dù tính cách trái ngược. Cùng với đặc vụ MI6 (Priyanka Chopra), họ đối đầu kẻ thù quốc tế, qua chuỗi hành động–hài hước kịch tính xuyên châu Âu.\r\n\r\n",
        release_date: "2025-07-02",
        quality: "4k",
        rating: "T16",
        runtime: 113,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.4",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "eF8pjq",
            name: "Chính Trị",
            slug: "chinh-tri",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "9e/ac/9eac40619d5c820e9b87364f0b0d89a7/9eac40619d5c820e9b87364f0b0d89a7.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "82/58/8258b7e2de47672be23f49cd4843b7b7/8258b7e2de47672be23f49cd4843b7b7.jpg",
              type: 2,
            },
            {
              path: "0e/c3/0ec3fb367ac36ddb97bad0ebda990e10/0ec3fb367ac36ddb97bad0ebda990e10.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "09/4b/094b14d92be4540d7edbfd70ec3b4889/094b14d92be4540d7edbfd70ec3b4889.webp",
              type: 3,
            },
            {
              path: "34/be/34be715bcd7b4ed1507a9eb4da757a57/34be715bcd7b4ed1507a9eb4da757a57.webp",
              type: 3,
            },
            {
              path: "c0/c5/c0c5a14542fbfd2df610b9df532f99a7/c0c5a14542fbfd2df610b9df532f99a7.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ee/4b/ee4be8474a9f6c0771e3aa6a55aa6aad/ee4be8474a9f6c0771e3aa6a55aa6aad.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "Etwg8kgy",
        original_title: "하이파이브",
        english_title: "Hi-Five",
        title: "Bộ 5 Siêu Đẳng Cấp",
        slug: "bo-5-sieu-dang-cap",
        overview:
          "Chuyện phim xoay quanh năm con người xa lạ, vô tình sở hữu các siêu năng lực sau khi được cấy ghép nội tạng từ những người hiến tặng bí ẩn. Trên hành trình khám phá “món quà” bất ngờ này, họ buộc phải đối mặt với những thế lực đen tối đang khao khát chiếm đoạt khả năng phi thường ấy.\r\n\r\n",
        release_date: "2025-05-30",
        quality: "fhd",
        rating: "T13",
        runtime: 120,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wN4Ysm",
            name: "Viễn Tưởng",
            slug: "vien-tuong",
          },
        ],
        images: {
          posters: [
            {
              path: "ff/5a/ff5a373283e20bc5ce701d386741a1f7/ff5a373283e20bc5ce701d386741a1f7.jpg",
              type: 1,
            },
            {
              path: "ab/22/ab22c81a26a92cf9e7fae5c982cc0a24/ab22c81a26a92cf9e7fae5c982cc0a24.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "e2/f9/e2f90255d32e9cee9048f8cea9eed2a6/e2f90255d32e9cee9048f8cea9eed2a6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "98/a5/98a5b22913fbf7a1505ba29fdfd70353/98a5b22913fbf7a1505ba29fdfd70353.webp",
              type: 3,
            },
            {
              path: "8d/9c/8d9c68e67801743356391c099831aff3/8d9c68e67801743356391c099831aff3.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "d7/19/d71987a8894a4fcf65a49695f42bffc4/d71987a8894a4fcf65a49695f42bffc4.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "UcfPser5",
        original_title: "Z-O-M-B-I-E-S 4: Dawn of the Vampires",
        english_title: "Z-O-M-B-I-E-S 4: Dawn of the Vampires",
        title: "ZOMBIES 4: Bình Minh Ma Cà Rồng",
        slug: "zombies-4-binh-minh-ma-ca-rong",
        overview:
          "Một cuộc phiêu lưu mới bắt đầu với Zed và Addison khi chuyến đi chơi hè của họ bất ngờ rẽ hướng, đưa họ rơi vào giữa một cuộc đối đầu giữa hai thế lực quái vật: Daywalker và Ma cà rồng. Căng thẳng leo thang khi Zed và Addison bị cuốn vào vai trò làm cố vấn trại hè cho hai phe siêu nhiên đối địch. Với sự giúp sức của Eliza và Willa, họ phải thuyết phục hai kẻ thù truyền kiếp Nova và Victor hợp tác, trước khi một mối đe dọa còn lớn hơn khiến cả hai thế giới bị hủy diệt.",
        release_date: "2025-07-10",
        quality: "fhd",
        rating: "T13",
        runtime: 88,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.6",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "QyBY48",
            name: "Nhạc Kịch",
            slug: "nhac-kich",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "e9/b0/e9b09fda8580902e4705d28a24382b55/e9b09fda8580902e4705d28a24382b55.jpg",
              type: 1,
            },
            {
              path: "04/3a/043a962d1e2b39e5b39ca4df6ba433c6/043a962d1e2b39e5b39ca4df6ba433c6.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "f1/76/f1768ec97c740bf95879e4834eb89a7c/f1768ec97c740bf95879e4834eb89a7c.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "63/84/6384e54935e60f0d7641478959df791f/6384e54935e60f0d7641478959df791f.webp",
              type: 3,
            },
            {
              path: "e3/b9/e3b9be31d31a5c1e548d1f3be59635fd/e3b9be31d31a5c1e548d1f3be59635fd.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "19/73/197366570f4c4a75d7c4ecc6b08bdd54/197366570f4c4a75d7c4ecc6b08bdd54.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "1i5ioUm9",
        original_title: "室町無頼",
        english_title: "Muromachi Burai",
        title: "Vô Lại Thời Muromachi",
        slug: "vo-lai-thoi-muromachi",
        overview:
          "Trong khung cảnh hỗn loạn của Kyoto thế kỷ 15, khi chiến tranh Onin đang cận kề, một nhóm thảo khấu do kiếm khách lừng danh Hyoe lãnh đạo đã nổi dậy chống lại chế độ Mạc phủ mục nát. Đứng đầu chiến tuyến, Hyoe không chỉ phải đối mặt với binh lính triều đình mà còn phải chạm trán với kẻ thù nguy hiểm nhất: Doken – người bạn cũ từng vào sinh ra tử, nay trở thành đối thủ khốc liệt nhất.",
        release_date: "2025-01-17",
        quality: "fhd",
        rating: "T16",
        runtime: 135,
        type: 1,
        origin_country: ["JP"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "OGqPaU",
            name: "Cổ Trang",
            slug: "co-trang",
          },
          {
            _id: "Pr7kIn",
            name: "Chiến Tranh",
            slug: "chien-tranh",
          },
          {
            _id: "eF8pjq",
            name: "Chính Trị",
            slug: "chinh-tri",
          },
        ],
        images: {
          posters: [
            {
              path: "b0/fd/b0fd2d810f2ed5fa2c020e485e5cc6f9/b0fd2d810f2ed5fa2c020e485e5cc6f9.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "19/95/199503d6260cd97f2fd8cff103a80358/199503d6260cd97f2fd8cff103a80358.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "02/87/0287c80106dc5f66bc1888057e84e7ea/0287c80106dc5f66bc1888057e84e7ea.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "jm745Iay",
        original_title: "On Swift Horses",
        english_title: "On Swift Horses",
        title: "Tựa Gió Ngựa Phi",
        slug: "tua-gio-ngua-phi",
        overview:
          "Vào những năm 1950, một cô dâu mới tưởng chừng đứng đắn và người anh chồng phóng túng của cô bắt đầu hai hành trình song song – đầy rẫy những rủi ro, lãng mạn và khám phá bản thân.\r\n\r\n",
        release_date: "2025-04-24",
        quality: "fhd",
        rating: "T13",
        runtime: 119,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "MKSFtq",
            name: "Cổ Điển",
            slug: "co-dien",
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
              path: "25/49/254940c55f081ae6d9e1dc167aef3117/254940c55f081ae6d9e1dc167aef3117.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "86/ac/86ac684b232ef13c7d338b8ee8c7d5cf/86ac684b232ef13c7d338b8ee8c7d5cf.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "0f/1d/0f1d292718ccdb5174b464457331c8ea/0f1d292718ccdb5174b464457331c8ea.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ce/d0/ced017f1064dffd182097bc9bf964ccb/ced017f1064dffd182097bc9bf964ccb.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "wBhPjSDL",
        original_title: "盜月者",
        english_title: "The Moon Thieves",
        title: "Đạo Nguyệt Giả",
        slug: "dao-nguyet-gia",
        overview:
          "Một cửa hàng đồng hồ danh tiếng ở Hồng Kông ẩn giấu một bí mật gay cấn: đây chính là trung tâm buôn bán đồng hồ trộm cắp. Dưới sự chỉ huy lạnh lùng của Uncle, một nhóm tinh nhuệ được triệu tập: một siêu trộm liều lĩnh, một chuyên gia chất nổ, một thần đồng mở khóa, và một tay chơi đồng hồ thứ thiệt. Mục tiêu của họ? Tokyo — nơi họ lên kế hoạch đánh cắp ba chiếc đồng hồ siêu sang.",
        release_date: "2024-02-08",
        quality: "fhd",
        rating: "T16",
        runtime: 108,
        type: 1,
        origin_country: ["HK"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.0",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "61/40/6140f5ce5d3efe629abdc9bad90c8cba/6140f5ce5d3efe629abdc9bad90c8cba.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "e3/5c/e35c9be309f58a68c287e4711a02047a/e35c9be309f58a68c287e4711a02047a.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "f3/a9/f3a9f6b19cec89eb2e2900db24ce98b0/f3a9f6b19cec89eb2e2900db24ce98b0.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "6y1fnjGm",
        original_title: "On Becoming a Guinea Fowl",
        english_title: "On Becoming a Guinea Fowl",
        title: "Gà Sao Kêu Trong Đêm",
        slug: "ga-sao-keu-trong-dem",
        overview:
          "Trên con đường vắng lúc nửa đêm, Shula tình cờ phát hiện thi thể của người chú. Khi lễ tang bắt đầu, cô cùng những người anh chị em họ dần hé lộ những bí mật chôn giấu bấy lâu của gia đình trung lưu người Zambia.",
        release_date: "2024-12-06",
        quality: "fhd",
        rating: "T13",
        runtime: 99,
        type: 1,
        origin_country: ["GB"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.0",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "26/50/2650ddf2af967ca6f59ecc1359ffac4d/2650ddf2af967ca6f59ecc1359ffac4d.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "09/8b/098b04ba7ce398257116008e9c49d9f4/098b04ba7ce398257116008e9c49d9f4.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "0c/31/0c3122257637db5fb6ed1b479a169182/0c3122257637db5fb6ed1b479a169182.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "897SDR6W",
        original_title: "Mother Father Sister Brother Frank",
        english_title: "Mother Father Sister Brother Frank",
        title: "Mẹ Cha Chị Em và Frank",
        slug: "me-cha-chi-em-va-frank",
        overview:
          "Gia đình Jennings sống yên bình như bao gia đình ngoại ô khác, cho đến khi chú Frank bất ngờ ghé thăm bữa tối Chủ nhật hàng tuần. Nhưng lần này, án mạng lại là món chính trên thực đơn...",
        release_date: "2024-04-06",
        quality: "fhd",
        rating: "T18",
        runtime: 85,
        type: 1,
        origin_country: ["CA"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.8",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
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
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "52/e0/52e01cce84617d13b683ec42b99509c5/52e01cce84617d13b683ec42b99509c5.jpg",
              type: 1,
            },
            {
              path: "36/4f/364f7640627948ec93934bfa82365c9b/364f7640627948ec93934bfa82365c9b.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "99/f6/99f638ed662cc26332a310355c41c2c0/99f638ed662cc26332a310355c41c2c0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "a5/13/a513310244040d9f7904eb0a5f10abc0/a513310244040d9f7904eb0a5f10abc0.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "hbhksAsf",
        original_title: "Madea's Destination Wedding",
        english_title: "Madea's Destination Wedding",
        title: "Madea: Lễ Cưới Khó Quên",
        slug: "madea-le-cuoi-kho-quen",
        overview:
          "Madea chuẩn bị những chiếc váy hoa đẹp nhất và vô số hỗn loạn khi gia đình Simmons đến Bahamas để tham dự đám cưới chớp nhoáng của cháu gái.\r\n",
        release_date: "2025-07-10",
        quality: "fhd",
        rating: "T13",
        runtime: 102,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "b8/0f/b80fa52ce53b488f3a8ef46e97a7c441/b80fa52ce53b488f3a8ef46e97a7c441.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "85/8b/858b7f85b89fbac21d3d0edf1c2ba890/858b7f85b89fbac21d3d0edf1c2ba890.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "b7/0c/b70c2b0e712ea1214986266221860ee8/b70c2b0e712ea1214986266221860ee8.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "c9/b0/c9b07308596388acb31a50369a92a7ab/c9b07308596388acb31a50369a92a7ab.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "O7JVEnM4",
        original_title: "Bad Boa's",
        english_title: "Almost Cops",
        title: "Bộ Đôi Phá Án",
        slug: "bo-doi-pha-an",
        overview:
          "Khi một cảnh sát cộng đồng hăng hái quá mức và một cựu thanh tra liều lĩnh buộc phải hợp tác, hàng loạt hỗn loạn bùng nổ trên đường phố Rotterdam.\r\n",
        release_date: "2025-07-10",
        quality: "fhd",
        rating: "T13",
        runtime: 95,
        type: 1,
        origin_country: ["NL"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "4.8",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "00/a8/00a820e0393f5278d294713f4a28fd35/00a820e0393f5278d294713f4a28fd35.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "06/b3/06b3a54116f8d20e01953d3d741681ed/06b3a54116f8d20e01953d3d741681ed.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "60/a6/60a634d5aed09aae8aae588e9f52bf1d/60a634d5aed09aae8aae588e9f52bf1d.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "u1e8EZ64",
        original_title: "Brick",
        english_title: "Brick",
        title: "Bức Tường Bí Ẩn",
        slug: "buc-tuong-bi-an",
        overview:
          "Khi một bức tường gạch bí ẩn bao quanh tòa nhà chung cư của họ suốt đêm, Tim và Olivia phải bắt tay với những người hàng xóm đầy cảnh giác để an toàn thoát ra.\r\n",
        release_date: "2025-07-09",
        quality: "fhd",
        rating: "T16",
        runtime: 99,
        type: 1,
        origin_country: ["DE"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.5",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
        ],
        images: {
          posters: [
            {
              path: "82/92/8292081da08fb847d080aaa3fa71b705/8292081da08fb847d080aaa3fa71b705.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "a1/be/a1be8c0ca2ee83b1042675e4dd3cbbc9/a1be8c0ca2ee83b1042675e4dd3cbbc9.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "a1/8e/a18e92f0ba15c47fd82b36c1eb57d51a/a18e92f0ba15c47fd82b36c1eb57d51a.jpg",
              type: 3,
            },
            {
              path: "24/8b/248b97ad1130d84c87987e939d291a7b/248b97ad1130d84c87987e939d291a7b.jpg",
              type: 3,
            },
            {
              path: "e1/7e/e17ea10628e98321b00745edb2f56598/e17ea10628e98321b00745edb2f56598.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "90/e1/90e128f6ba1832472ab89d8743c949c1/90e128f6ba1832472ab89d8743c949c1.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "3oLJX7wB",
        original_title: "はたらく細胞",
        english_title: "Cells at Work!",
        title: "Khi Tế Bào Làm Việc",
        slug: "khi-te-bao-lam-viec",
        overview:
          "Một hồng cầu non nớt và một bạch cầu kiên cường cùng hợp sức bảo vệ cơ thể chủ thể trước sự xâm nhập của vi trùng, mầm bệnh và nhiều mối đe dọa khác.\r\n",
        release_date: "2024-12-13",
        quality: "fhd",
        rating: "T16",
        runtime: 110,
        type: 1,
        origin_country: ["JP"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.7",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wN4Ysm",
            name: "Viễn Tưởng",
            slug: "vien-tuong",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "57/98/5798f5a890874c15a57224f315c4a610/5798f5a890874c15a57224f315c4a610.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "10/bc/10bc7ad77e0a1cfd2ab5ceb904ad1c8e/10bc7ad77e0a1cfd2ab5ceb904ad1c8e.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "2b/d7/2bd749303d9b958c9c076007bb681ebc/2bd749303d9b958c9c076007bb681ebc.webp",
              type: 3,
            },
            {
              path: "15/22/15221f8ded5dc8675e81333f28534d36/15221f8ded5dc8675e81333f28534d36.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "8e/d1/8ed1d4a08ba47ed87afea5f65d597f9b/8ed1d4a08ba47ed87afea5f65d597f9b.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "cWLhdPxi",
        original_title: "The Unholy Trinity",
        english_title: "The Unholy Trinity",
        title: "Bộ Ba Bất Hạnh",
        slug: "bo-ba-bat-hanh",
        overview:
          "Lấy bối cảnh Montana đầy biến động những năm 1870, trong khoảnh khắc trước khi bị hành quyết, Isaac Broadway giao cho người con trai đã xa cách bấy lâu – Henry – một nhiệm vụ bất khả thi: giết kẻ đã vu oan cho ông một tội danh mà ông không hề gây ra. Quyết thực hiện lời hứa, Henry lên đường đến thị trấn hẻo lánh Trinity. Nhưng một sự kiện bất ngờ khiến anh mắc kẹt tại đây, bị cuốn vào cuộc đối đầu giữa Gabriel Dove – vị cảnh trưởng mới chính trực – và một nhân vật bí ẩn tên là St. Christopher.",
        release_date: "2025-06-13",
        quality: "4k",
        rating: "T18",
        runtime: 95,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.5",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "5J36Eg",
            name: "Miền Viễn Tây",
            slug: "mien-vien-tay",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "MKSFtq",
            name: "Cổ Điển",
            slug: "co-dien",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "e5/38/e538633733624c3490947dcbc2afd0a7/e538633733624c3490947dcbc2afd0a7.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "18/08/18081ad774fbd2d13975dd44ba48c95d/18081ad774fbd2d13975dd44ba48c95d.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "9c/c9/9cc9d2008cb739de22bfa2ecb02f623c/9cc9d2008cb739de22bfa2ecb02f623c.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "d7/71/d77163d9c75119a0933b0be98f6e798a/d77163d9c75119a0933b0be98f6e798a.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "woUFU6eA",
        original_title: "Tokyo Cowboy",
        english_title: "Tokyo Cowboy",
        title: "Cao Bồi Tokyo",
        slug: "cao-boi-tokyo",
        overview:
          "Doanh nhân liều lĩnh Hideki (Arata Iura) tự tin hứa hẹn với cấp trên tại Tokyo rằng anh có thể biến một trang trại bò không sinh lời ở vùng Montana thành một tài sản vàng. Nhưng khi chuyên gia bò Wagyu của anh bất ngờ thất bại, mọi kế hoạch đứng bên bờ vực sụp đổ. Không còn đường lui, Hideki buộc phải đối diện với chính mình – nhận ra rằng chìa khóa để thay đổi không nằm ở đàn bò, mà là ở con người anh.",
        release_date: "2024-06-07",
        quality: "fhd",
        rating: "T16",
        runtime: 118,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.0",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
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
              path: "e1/96/e1964c5f78b6ee2369b3a7ac7a9c89a9/e1964c5f78b6ee2369b3a7ac7a9c89a9.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "06/fa/06fa87649901789a2e515b0e6215c7e0/06fa87649901789a2e515b0e6215c7e0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "e8/dd/e8ddb48d57d1011f424c5145d056dd91/e8ddb48d57d1011f424c5145d056dd91.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "7e/88/7e88d35b29fe4a84de5afc9479d407b1/7e88d35b29fe4a84de5afc9479d407b1.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "UWcrkTDJ",
        original_title: "گلاس ورکر",
        title: "Nghệ Nhân Thủy Tinh",
        slug: "nghe-nhan-thuy-tinh",
        overview:
          "Trong một thị trấn ven biển yên bình, một chàng thanh niên tập sự nghề làm thủy tinh sống êm đềm bên người cha hiền lành, chủ trương hòa bình. Thế nhưng, sự yên ả ấy nhanh chóng tan biến khi bóng đen chiến tranh kéo đến, cùng với sự xuất hiện của một đại tá quân đội làm đảo lộn mọi thứ – kể cả tương lai và niềm tin của cậu.",
        release_date: "2024-07-26",
        rating: "T16",
        runtime: 98,
        type: 1,
        origin_country: ["PK"],
        status: "Released",
        english_title: "The Glassworker",
        imdb_rating: "7.2",
        quality: "fhd",
        latest_episode: {
          1: 1,
        },
        year: "2024",
        genres: [
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "IusvEH",
            name: "Chính Luận",
            slug: "chinh-luan",
          },
          {
            _id: "ZERgfX",
            name: "Hoạt Hình",
            slug: "hoat-hinh",
          },
          {
            _id: "eF8pjq",
            name: "Chính Trị",
            slug: "chinh-tri",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "56/6d/566dc444185344a1b7781f27c566d396/566dc444185344a1b7781f27c566d396.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "d3/2e/d32efe5e64bf54773a5a8f4c400037dd/d32efe5e64bf54773a5a8f4c400037dd.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "3c/94/3c940690bd59b2eeeea43579a3dfc291/3c940690bd59b2eeeea43579a3dfc291.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "cPDDRZKG",
        original_title: "Dora and the Search for Sol Dorado",
        english_title: "Dora and the Search for Sol Dorado",
        title: "Dora Truy Tìm Kho Báu Sol Dorado",
        slug: "dora-truy-tim-kho-bau-sol-dorado",
        overview:
          "Dora, Diego và nhóm bạn mới dấn thân vào chuyến phiêu lưu nghẹt thở xuyên rừng Amazon, nơi đầy rẫy cạm bẫy và hiểm họa rình rập. Mục tiêu của họ: tìm ra kho báu cổ đại Sol Dorado trước khi nó rơi vào tay những kẻ đang âm mưu sử dụng sức mạnh của nó cho mục đích đen tối.",
        release_date: "2025-07-02",
        quality: "fhd",
        rating: "T13",
        runtime: 96,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.4",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "TVBHfX",
            name: "Thiếu Nhi",
            slug: "thieu-nhi",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "0a/a8/0aa84076bf69858b3ea97856f8a1013b/0aa84076bf69858b3ea97856f8a1013b.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "b6/4f/b64fd7d9ca3cb8c397450f3aec4d57e6/b64fd7d9ca3cb8c397450f3aec4d57e6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "e4/5c/e45c290c85600d742776886338f25923/e45c290c85600d742776886338f25923.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "d3/20/d320cae30d9970cc8860e654edb117e4/d320cae30d9970cc8860e654edb117e4.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "J16NmkdW",
        original_title: "ปากกัด ตีนถีบ",
        english_title: "Ziam",
        title: "Ziam",
        slug: "ziam",
        overview:
          "Trong cuộc chiến sinh tồn trước đội quân thây ma kinh hoàng, một cựu võ sĩ Muay Thái phải dốc toàn bộ kỹ năng, tốc độ và ý chí để cứu bạn gái.\r\n",
        release_date: "2025-07-09",
        quality: "fhd",
        rating: "T18",
        runtime: 95,
        type: 1,
        origin_country: ["TH"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "4.9",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
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
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "1d/00/1d000a648fa868186e70e20fac13c994/1d000a648fa868186e70e20fac13c994.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "63/c5/63c5e9e5f529025034ad1d58864736be/63c5e9e5f529025034ad1d58864736be.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "7a/d9/7ad9d5e43c3e65dfb695e1f87ee72e0e/7ad9d5e43c3e65dfb695e1f87ee72e0e.webp",
              type: 3,
            },
            {
              path: "6f/b6/6fb6d8efd184dd1195cec61701e46056/6fb6d8efd184dd1195cec61701e46056.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "vsEq1zX7",
        original_title: "The Old Guard 2",
        english_title: "The Old Guard 2",
        title: "Những Chiến Binh Bất Tử 2",
        slug: "nhung-chien-binh-bat-tu-2",
        overview:
          "Andy và đội chiến binh bất tử chiến đấu với mục đích mới khi họ đương đầu với một kẻ thù mới hùng mạnh đang đe dọa sứ mệnh bảo vệ nhân loại của họ.\r\n",
        release_date: "2025-07-01",
        quality: "fhd",
        rating: "T18",
        runtime: 104,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.1",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
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
        images: {
          posters: [
            {
              path: "0c/ac/0cac3065f52c996538a18b6c13a5c2d6/0cac3065f52c996538a18b6c13a5c2d6.jpg",
              type: 1,
            },
            {
              path: "10/b3/10b33f7b9386bc265a085073c7aca6d5/10b33f7b9386bc265a085073c7aca6d5.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "29/37/29371c993a665191b1d55bcedd37edac/29371c993a665191b1d55bcedd37edac.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "ab/c9/abc93c8bef6641fd75c633150ef4a15e/abc93c8bef6641fd75c633150ef4a15e.jpg",
              type: 3,
            },
            {
              path: "48/67/4867203c76261c814e40d354ad11631a/4867203c76261c814e40d354ad11631a.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "da/69/da69d023bafb91eec319be51a4e86146/da69d023bafb91eec319be51a4e86146.png",
              type: 4,
            },
          ],
        },
      },
    ],
  },
  {
    _id: "RAdEjH",
    name: "Top 10 phim bộ hôm nay",
    slug: "top-10-phim-bo-hom-nay",
    color: "",
    order: 3,
    style: 4,
    random_data: false,
    type: 2,
    filter: {
      type: "2",
      top_views: "today",
      limit: "10",
      sort_by: "title",
      order: "-1",
    },
    movies: [
      {
        _id: "qC4bu5Br",
        original_title: "朝雪录",
        english_title: "Coroner's Diary",
        title: "Triều Tuyết Lục",
        slug: "trieu-tuyet-luc",
        overview:
          'Triều Tuyết Lục được chuyển thể từ tiểu thuyết Quyền Sủng Chi Ngỗ Tác Y Phi của tác giả Bộ Nguyệt Thiển Trang, do Trâu Việt (biên kịch của Ngọc Chiêu Lệnh) chấp bút. Lý Huệ Châu (Cung Tỏa Tâm Ngọc) và Đặng Vĩ Ân (Cửu Tiêu Hàn Dạ Noãn) đồng đạo diễn. Phim có sự tham gia của các diễn viên chính: Lý Lan Địch (Xin Chào, Ngày Xưa Ấy), Ngao Thụy Bằng (Bạch Nguyệt Phạn Tinh, Yêu Nhau Đi Thực Mộng Quân, Mùa Hoa Rơi Gặp Lại Chàng), Dư Thừa Ân (Mạn Thành, Cá Mực Hầm Mật), và Thẩm Vũ Khiết (Không sợ hãi: quyết không từ bỏ). Đại Lý Tự khanh Thẩm Nghị bị vướng vào vụ án Tấn Vương mà dẫn tới thảm họa diệt môn. Con gái ông là Thẩm Hoản giả danh Tần thị cửu nương tử - Tần Hoản trốn đến Kinh Châu. Từ một tiểu thư yếu đuối, "Tần Hoản" bỗng tính tình thay đổi, không những tinh thông y thuật cứu người, còn có thể giải phẫu thi thể phục vụ điều tra, thuần phục được cả đám đại phu nhân, thứ muội, tiểu thiếp và gia nô hung ác trong phủ. Trong quá trình phá án, nàng quen biết Yên Trì - thế tử Duệ Vương phủ. Yên Trì một lòng muốn minh oan cho Tấn Vương, mục đích này cũng trùng hợp với nguyện vọng báo thù cho cha của Tần Hoản. Hai người cùng nhau trở về kinh thành, trên đường đi liên tiếp phá giải những vụ án kỳ bí. Sau khi về kinh, một bộ hài cốt bất ngờ được phát hiện đã khiến vụ án Tấn Vương được đem ra xét lại. Yên Trì và Tần Hoản cùng nhau từng bước tiếp cận sự thật, phát hiện ra bí mật động trời được che giấu trong cung cấm...',
        release_date: "2025-07-13",
        quality: "fhd",
        rating: "T13",
        runtime: 40,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 16,
          4: 16,
        },
        year: "2025",
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
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "OGqPaU",
            name: "Cổ Trang",
            slug: "co-trang",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
        ],
      },
      {
        _id: "2U8nbg",
        original_title: "청담국제고등학교",
        title: "Chị Đại Học Đường",
        slug: "chi-dai-hoc-duong",
        overview:
          "Chị Đại Học Đường - Bitch Rich xoay quanh cuộc chiến tâm lý giữa hai nữ sinh liên quan đến một vụ án mạng. Nội dung kể về Kim Hye In, cô gái được chuyển đến trường trung học quốc tế Cheongdam để đối lấy sự im lặng trước những sự thật chỉ có cô mới biết liên quan tới một vụ sát hại nữ sinh trung học. Tại đây, cô gặp Baek Je Na - nghi phạm lớn nhất trong vụ án và cũng là nữ sinh quyền lực nhất trường trung học Cheongdam đồng thời là tiểu thư của một tập đoàn lớn tại Hàn Quốc. Cơn ác mộng của Kim Hye In từ đó bắt đầu.",
        release_date: "2023-05-31",
        quality: "fhd",
        rating: "T16",
        runtime: 35,
        type: 2,
        status: "On Going",
        english_title: "Bitch x Rich",
        latest_episode: {
          1: 6,
        },
        latest_season: 2,
        imdb_rating: "6.6",
        year: "2023",
        images: {
          posters: [
            {
              _id: "66b055dc7f78441353b24584",
              path: "1a/7e/1a7e4fba1e71da5e5d71fa54c392365e/1a7e4fba1e71da5e5d71fa54c392365e.jpg",
              type: 1,
            },
            {
              _id: "66b055f69eab31d43a50b11e",
              path: "5c/d1/5cd13d588fb7730a306c61c39537ecdc/5cd13d588fb7730a306c61c39537ecdc.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "66b055e39eab31d43a50b0fd",
              path: "eb/31/eb31a03a93f87c80f0bb1a8f63ae7d79/eb31a03a93f87c80f0bb1a8f63ae7d79.jpg",
              type: 2,
            },
            {
              _id: "686644409586d57e1edbcbd9",
              path: "90/2d/902db0d961e26aa1e39441ce5a44ed55/902db0d961e26aa1e39441ce5a44ed55.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "66b055ed9eab31d43a50b113",
              path: "e6/72/e672c0dbcda76db676427dd0740a0860/e672c0dbcda76db676427dd0740a0860.jpg",
              type: 3,
            },
            {
              _id: "686644549586d57e1edbcbf3",
              path: "a8/02/a8021f4b0b6688a7eeb44c2b9b30c884/a8021f4b0b6688a7eeb44c2b9b30c884.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "671b1cd94d5605c62c726cd0",
              path: "3d/2c/3d2ca301a7494090e594f74e5037b83f/3d2ca301a7494090e594f74e5037b83f.png",
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
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "n7N6C6",
            name: "Học Đường",
            slug: "hoc-duong",
          },
        ],
      },
      {
        _id: "EWshEBoz",
        original_title: "S라인",
        english_title: "S Line",
        title: "S-Line: Sợi Chỉ Tử Thần",
        slug: "s-line-soi-chi-tu-than",
        overview:
          "Bộ phim sẽ kể câu chuyện về một đường màu đỏ bí ẩn xuất hiện trên đầu mọi người, kết nối họ với những người mà họ đã quan hệ tình dục. Han Ji Uk là một thám tử muốn khám phá sự thật về đường màu đỏ bí ẩn. Gyu Jin là một giáo viên trung học lập dị và Hyun Heup là một học sinh trung học có thể nhìn thấy đường màu đỏ từ khi sinh ra.",
        release_date: "2025-07-11",
        quality: "fhd",
        rating: "T18",
        runtime: 50,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.9",
        latest_episode: {
          1: 4,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "6870e8289586d57e1edc22fb",
              path: "bd/d0/bdd0c99f584cf77878b7b0e8e4a8275e/bdd0c99f584cf77878b7b0e8e4a8275e.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "6870e82d9586d57e1edc2306",
              path: "c4/6d/c46d3fde9c092fe68214e389cf842df4/c46d3fde9c092fe68214e389cf842df4.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "6870e8319586d57e1edc2311",
              path: "0a/8b/0a8b77bc2fae401c3b031a207e28cb7f/0a8b77bc2fae401c3b031a207e28cb7f.webp",
              type: 3,
            },
            {
              _id: "6870e83a569444840c42d38f",
              path: "fc/e4/fce47badc0c63164bbb70582111bb0b7/fce47badc0c63164bbb70582111bb0b7.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "6870e8699586d57e1edc231c",
              path: "49/6d/496dd8a900230cd9a74fcc5e8fb5f5b8/496dd8a900230cd9a74fcc5e8fb5f5b8.png",
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
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
        ],
      },
      {
        _id: "4tDukPxp",
        original_title: "견우와 선녀",
        english_title: "Head Over Heels",
        title: "Ngưu Lang Chức Nữ",
        slug: "nguu-lang-chuc-nu",
        overview:
          "Cô gái Seong Ah, ban ngày làm nữ sinh, đêm đến sẽ trở thành một pháp sư với số mệnh kết nối dương thế với thế giới linh hồn. Dù không được sống một cuộc đời bình thường, Seong Ah đã học cách đối mặt kiên cường và không bao giờ bỏ cuộc. Cô vô tình gặp Gyeon Woo – cậu thiếu niên với vẻ ngoài hoàn hảo đến phi thực nhưng lại sống dưới lời nguyền của vận xui mãn kiếp. Cuộc đời cậu chỉ là những lần phải đối diện với vận rủi, kỳ vọng dành cho một vận động viên, cô độc đến mức chẳng còn tin vào tình yêu. Lần đầu gặp mặt, Gyeon Woo hiện lên trong mắt Seong Ah với hình hài lộn ngược – dấu hiệu cho thấy cái chết đang cận kề. Hoá ra anh chỉ còn sống được 21 ngày. Với cô, đó không phải kết thúc cho anh mà là khởi đầu của một cuộc chiến chống lại số phận được viết sẵn.",
        release_date: "2025-06-23",
        quality: "fhd",
        rating: "T13",
        runtime: 60,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: "8.5",
        latest_episode: {
          1: 8,
          4: 4,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "6859776a9fd7659bdb23023c",
              path: "05/a7/05a7b43d57bc949bd389ffd24a34f1d0/05a7b43d57bc949bd389ffd24a34f1d0.jpg",
              type: 1,
            },
            {
              _id: "685977729fd7659bdb23023f",
              path: "da/e0/dae02bd86bbe90c51c89cca05aa4b783/dae02bd86bbe90c51c89cca05aa4b783.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68597779830976c1523423bb",
              path: "ab/4c/ab4c34a9ba343103f919ad98d9a6387d/ab4c34a9ba343103f919ad98d9a6387d.jpg",
              type: 2,
            },
            {
              _id: "6859777e830976c1523423c6",
              path: "6b/b6/6bb66fea2262d6792140761a43fccc60/6bb66fea2262d6792140761a43fccc60.jpg",
              type: 2,
            },
            {
              _id: "6859cbfa830976c15234245a",
              path: "a1/4a/a14af69819f41b5fea85818ef212b6a1/a14af69819f41b5fea85818ef212b6a1.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "6859778c830976c1523423d1",
              path: "da/fe/dafee077981526e731d544d1205a7832/dafee077981526e731d544d1205a7832.webp",
              type: 3,
            },
            {
              _id: "685977939fd7659bdb230255",
              path: "24/cd/24cd5a2c8e75bd41890be644ff1eb6f0/24cd5a2c8e75bd41890be644ff1eb6f0.jpg",
              type: 3,
            },
            {
              _id: "685977999fd7659bdb230260",
              path: "5a/8c/5a8caa29130c633ba0c7d64507d60d0a/5a8caa29130c633ba0c7d64507d60d0a.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "685977e79fd7659bdb23026b",
              path: "0f/1f/0f1faebc2ab547ce55f142bcb60e77ff/0f1faebc2ab547ce55f142bcb60e77ff.png",
              type: 4,
            },
          ],
        },
        genres: [
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "iu6SWz",
            name: "Tuổi Trẻ",
            slug: "tuoi-tre",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
        ],
      },
      {
        _id: "F3QXRdxW",
        original_title: "樱桃琥珀",
        english_title: "Our Generation",
        title: "Anh Đào Hổ Phách",
        slug: "anh-dao-ho-phach",
        overview:
          "Lâm Anh Đào là một cô gái có tính cách tươi sáng, hồn nhiên, lớn lên trong tình yêu thương vô bờ bến của gia đình và nhóm bạn thời niên thiếu. Tuổi thơ giản dị và hạnh phúc đó bắt đầu rẽ sang hướng khác khi thần đồng Toán học Tưởng Kiều Tây chuyển đến học cùng trường với cô. Ngay lần đầu gặp gỡ, vẻ lạnh lùng, cô độc của Kiều Tây đã thu hút sự chú ý của Anh Đào và từ đó, cuộc sống của họ cũng dần dà có sự gắn kết ngày một sâu đậm. Không chỉ xoay quanh mối quan hệ giữa Anh Đào và Kiều Tây, Anh Đào Hổ Phách còn là câu chuyện của nhiều bạn trẻ thế hệ 9x giữa những biến chuyển của thời đại.",
        release_date: "2025-07-14",
        quality: "fhd",
        rating: "T13",
        runtime: 45,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.9",
        latest_episode: {
          1: 8,
          4: 6,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "68751c1b97c49e6175393c09",
              path: "59/40/594049aa2c8862b9d1e1d10b6660e2a2/594049aa2c8862b9d1e1d10b6660e2a2.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68751c23edeccef1d6ad7336",
              path: "96/5e/965e0695b588043e26038314c172edc3/965e0695b588043e26038314c172edc3.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68751c3797c49e6175393c14",
              path: "3a/a0/3aa05038e952f6f3448f57cbf468bede/3aa05038e952f6f3448f57cbf468bede.webp",
              type: 3,
            },
            {
              _id: "68751c45edeccef1d6ad7341",
              path: "8b/c7/8bc718fb33e829a0d31f0fd51083e635/8bc718fb33e829a0d31f0fd51083e635.webp",
              type: 3,
            },
          ],
          titles: [],
        },
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "n7N6C6",
            name: "Học Đường",
            slug: "hoc-duong",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
        ],
      },
      {
        _id: "vDFJBjKv",
        original_title: "굿보이",
        english_title: "Good Boy",
        title: "Kiện Tướng",
        slug: "kien-tuong",
        overview:
          "“Good Boy” kể về câu chuyện của Yoon Dong Joo (Park Bo Gum thủ vai), một cựu vận động viên quyền anh quốc gia từng giành huy chương vàng quốc tế, trở thành cảnh sát thông qua một chương trình tuyển dụng đặc biệt dành cho các vận động viên giành huy chương. Cuộc sống của cậu rẽ sang một hướng đầy kịch tính khi Min Joo Young (Oh Jung Se) - một nhân vật phản diện tàn nhẫn cai trị thành phố Inseong từ trong bóng tối - xuất hiện như kẻ thù cuối cùng. Với sự hiện diện nham hiểm và sự khinh thường luật pháp, trật tự, ngay cả hình bóng của hắn cũng khiến người ta rùng mình.",
        release_date: "2025-05-31",
        quality: "fhd",
        rating: "T16",
        runtime: 60,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.7",
        latest_episode: {
          1: 14,
          4: 11,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "683b834d68105005bb714aba",
              path: "7a/6d/7a6d6a456fe14c149ea625fd0178d38e/7a6d6a456fe14c149ea625fd0178d38e.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "683b833f3189360ab3624fd8",
              path: "4b/ea/4bea0ec931acb2514e56a8be2788dc4a/4bea0ec931acb2514e56a8be2788dc4a.jpg",
              type: 2,
            },
            {
              _id: "683b839768105005bb714ad0",
              path: "5c/f5/5cf5dc3ae201b4774dd19dc53ac7fd77/5cf5dc3ae201b4774dd19dc53ac7fd77.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "683b31c73189360ab3624f88",
              path: "27/59/27591bc926452f55a69c18dbf6b6f930/27591bc926452f55a69c18dbf6b6f930.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "683b83c368105005bb714ae6",
              path: "67/f6/67f61f7bc00c3b66a801580626cdcddc/67f61f7bc00c3b66a801580626cdcddc.png",
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
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
      },
      {
        _id: "0K8gX7R4",
        original_title: "书卷一梦",
        english_title: "A Dream Within a Dream",
        title: "Thư Quyển Nhất Mộng",
        slug: "thu-quyen-nhat-mong",
        overview:
          "Phim kể về Tống Tiểu Ngư, một cô gái hiện đại vô tình xuyên không vào thế giới kịch bản, trở thành nữ chính bị nam phản diện “dùng xong là vứt”, hành hạ đến chết. Không cần suy nghĩ, cô chọn cách duy nhất: chạy càng xa càng tốt! Kế hoạch nghe thì hoàn hảo, nhưng hiện thực lại đầy tàn khốc. Mỗi lần cô cố thay đổi cốt truyện để kết hôn với nam phụ, hệ thống lại lập tức đưa cô vào vòng lặp vô hạn, mắc kẹt trong những lỗ hổng kịch bản, khiến cô trải qua 108 kiểu chết không trùng nhau, đúng nghĩa vừa vào game là toi mạng. Cuối cùng, Tống Tiểu Ngư buộc phải chấp nhận sự thật dù có cố gắng thế nào, cốt truyện vẫn sẽ đẩy cô về bên nam chính Nam Hành, và ép cô tái hiện từng cảnh trong kịch bản. Trong thế giới kịch bản này còn có vô số nhân vật bị định sẵn kết cục. Có người mắc kẹt trong cung cấm, có người bị trói buộc bởi danh gia vọng tộc, có người bị mệt mỏi vì tranh giành nam nhân, có người sống chết vì quyền thế, có người khao khát yêu và tự do nhưng lại chỉ có thể bị trói buộc bất an bước tiếp, có người ôm giấc mộng bay cao như đại bàng cưỡi gió nhưng lại bị những ràng buộc và tầm thường lặp đi lặp lại mỗi ngày bào mòn ý chí và đam mê. Đây không đơn thuần là cuộc đối đầu giữa Tống Tiểu Ngư, kẻ chỉ muốn nằm im sống qua ngày và Nam Hành, kẻ máu lạnh chỉ biết tranh đấu, mà còn là cuộc chiến của mỗi “cái tôi nhỏ bé” trong thế giới hư cấu chống lại định mệnh được lập định sẵn.",
        release_date: "2025-06-26",
        quality: "fhd",
        rating: "T13",
        runtime: 45,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.9",
        latest_episode: {
          1: 40,
          4: 40,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "685bb1c59fd7659bdb230811",
              path: "97/a0/97a0f0cf18d278188e8966fa65abcae4/97a0f0cf18d278188e8966fa65abcae4.jpg",
              type: 1,
            },
            {
              _id: "6870e942569444840c42d3bc",
              path: "a9/f8/a9f85e0911d4873c0f5a61b95325986c/a9f85e0911d4873c0f5a61b95325986c.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "685bb1ca9fd7659bdb23081c",
              path: "3f/ab/3fabac5bf0aa5964c5ce7f710dbfa0cf/3fabac5bf0aa5964c5ce7f710dbfa0cf.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "685bb1e8830976c152342a45",
              path: "ec/b5/ecb58da8bdea176c38d0f41f619c93b0/ecb58da8bdea176c38d0f41f619c93b0.webp",
              type: 3,
            },
            {
              _id: "685bb1f49fd7659bdb23082b",
              path: "dd/56/dd566586ebcb2df82486c651fcca535b/dd566586ebcb2df82486c651fcca535b.webp",
              type: 3,
            },
            {
              _id: "6870e9169586d57e1edc2334",
              path: "14/23/14239393b3032b398df3824fdb234be4/14239393b3032b398df3824fdb234be4.webp",
              type: 3,
            },
            {
              _id: "6870e91f569444840c42d3b1",
              path: "cc/81/cc81e45f4bef193709dfa06ca1438a54/cc81e45f4bef193709dfa06ca1438a54.webp",
              type: 3,
            },
            {
              _id: "6870e9289586d57e1edc2346",
              path: "e1/14/e1148be7de5cc69848354b0eb2a19d53/e1148be7de5cc69848354b0eb2a19d53.webp",
              type: 3,
            },
          ],
          titles: [],
        },
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "OGqPaU",
            name: "Cổ Trang",
            slug: "co-trang",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
          {
            _id: "ujD7Uu",
            name: "Xuyên Không",
            slug: "xuyen-khong",
          },
        ],
      },
      {
        _id: "Rq52P7bP",
        original_title: "남주의 첫날밤을 가져버렸다",
        english_title: "The First Night with the Duke",
        title: "Tôi Đã Cướp Mất Đêm Đầu Tiên Của Nam Chính",
        slug: "toi-da-cuop-mat-dem-dau-tien-cua-nam-chinh",
        overview:
          "Bất ngờ xuyên không vào tiểu thuyết lãng mạn đã đành, Seon Chaek còn vào vai một nhân vật không có kết cục tốt. Nào chịu nghe theo kịch bản, cô chốt hạ sẽ quyến rũ luôn nam chính để cải mệnh.",
        release_date: "2025-06-11",
        quality: "fhd",
        rating: "T13",
        runtime: 60,
        type: 2,
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 12,
          3: 10,
          4: 10,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "68498a55e70616aeb22090b9",
              path: "fb/3e/fb3e9bd8372cee8e58c5146f767ae2b4/fb3e9bd8372cee8e58c5146f767ae2b4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68498a5ce70616aeb22090c4",
              path: "b7/01/b701960ae2d9f98e0aec330110fa5ff5/b701960ae2d9f98e0aec330110fa5ff5.jpg",
              type: 2,
            },
            {
              _id: "684c4dd7671e3ef1b0381da1",
              path: "34/9a/349a8c9ec9ffec35c12cc8edd3fbe9c8/349a8c9ec9ffec35c12cc8edd3fbe9c8.jpg",
              type: 2,
            },
            {
              _id: "684c4dde159f2d7408a27c0f",
              path: "b4/aa/b4aa9d28d67db2c9c02ae7c4c23a60cb/b4aa9d28d67db2c9c02ae7c4c23a60cb.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68498a67e70616aeb22090da",
              path: "b5/50/b550c6d9d0991f52961750b6a0ebcc9c/b550c6d9d0991f52961750b6a0ebcc9c.jpg",
              type: 3,
            },
            {
              _id: "68498a6be70616aeb22090ef",
              path: "e8/cb/e8cb36f9f7e14ed8b0615dc2d74d4fcf/e8cb36f9f7e14ed8b0615dc2d74d4fcf.webp",
              type: 3,
            },
            {
              _id: "684c4dc9159f2d7408a27c04",
              path: "df/a7/dfa7d0a08d590c572a2a745132643194/dfa7d0a08d590c572a2a745132643194.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "684c4de7671e3ef1b0381dac",
              path: "a8/1b/a81bc3edb3990ee02e0ef22f13bdeffb/a81bc3edb3990ee02e0ef22f13bdeffb.png",
              type: 4,
            },
          ],
        },
        genres: [
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "OGqPaU",
            name: "Cổ Trang",
            slug: "co-trang",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
          {
            _id: "ujD7Uu",
            name: "Xuyên Không",
            slug: "xuyen-khong",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
        ],
      },
      {
        _id: "zevi3D3N",
        original_title: "오징어 게임",
        title: "Trò Chơi Con Mực",
        slug: "tro-choi-con-muc",
        overview:
          "Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.",
        release_date: "2021-09-17",
        rating: "T13",
        runtime: 60,
        type: 2,
        status: "On Going",
        english_title: "Squid Game",
        quality: "fhd",
        latest_episode: {
          1: 6,
          2: 6,
        },
        latest_season: 3,
        imdb_rating: "8.0",
        year: "2021",
        images: {
          posters: [
            {
              _id: "6742548f6b2caf0601c27c73",
              path: "92/e2/92e25a970aada9fdef01d1a00aa29b3e/92e25a970aada9fdef01d1a00aa29b3e.jpg",
              type: 1,
            },
            {
              _id: "67425496fe71faf3aebbca17",
              path: "64/c0/64c01776ad526d9b0f596e39ff0889c5/64c01776ad526d9b0f596e39ff0889c5.jpg",
              type: 1,
            },
            {
              _id: "6742549c6b2caf0601c27c7e",
              path: "a5/ce/a5ce707a117b83bb3b6bacde3be7d4df/a5ce707a117b83bb3b6bacde3be7d4df.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "674254a26b2caf0601c27c89",
              path: "e0/ab/e0ab69e9f965933b39c9c2de81aa405c/e0ab69e9f965933b39c9c2de81aa405c.jpg",
              type: 2,
            },
            {
              _id: "674254a96b2caf0601c27c94",
              path: "64/1b/641b54b54ecb44426d008341763c4f2d/641b54b54ecb44426d008341763c4f2d.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "674254b16b2caf0601c27c9f",
              path: "c8/69/c869edc2a38369b6ee541b3faf085db8/c869edc2a38369b6ee541b3faf085db8.jpg",
              type: 3,
            },
            {
              _id: "685e016b3726d71d138c2e32",
              path: "84/5b/845bc3cb532b979f65aa4f291ba88801/845bc3cb532b979f65aa4f291ba88801.webp",
              type: 3,
            },
            {
              _id: "685e0179f177da2e23cad282",
              path: "52/c2/52c2868b732ec596353e302343027a37/52c2868b732ec596353e302343027a37.webp",
              type: 3,
            },
            {
              _id: "685e01c2f177da2e23cad28d",
              path: "c1/b5/c1b556ed11cc023929adce98146f918c/c1b556ed11cc023929adce98146f918c.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "674254b66b2caf0601c27caa",
              path: "1a/31/1a315dbcf29f5bcf22a94b753697e4d1/1a315dbcf29f5bcf22a94b753697e4d1.png",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
      },
      {
        _id: "IT34GZKw",
        original_title: "桃花映江山",
        english_title: "The Princess's Gambit",
        title: "Đào Hoa Ánh Giang Sơn",
        slug: "dao-hoa-anh-giang-son",
        overview:
          "Lúc bấy giờ, thiên hạ chia ba. Ngụy quốc hùng mạnh nhưng tranh đoạt ngôi thái tử căng thẳng. Ở Triệu quốc, Lữ Hậu nắm quyền, công chúa Khương Đào Hoa quyết định gả sang Ngụy để tìm đường sống cho mình và đệ đệ. Vừa đến nơi, nàng bị sói tấn công và bị bắt gặp trên giường cùng Thừa tướng Thẩm Tại Dã, đành xin làm thiếp để ở lại. Dù trúng độc, nàng vẫn phải hoàn thành nhiệm vụ lật đổ thái tử do Lữ Hậu giao phó. Thẩm Tại Dã ngoài lạnh trong nóng, một lòng muốn phò tá minh quân, nhưng lại vô tình có “một đêm xuân sắc” với nàng trong khi điều tra vụ án. Sau đó, vì muốn loại bỏ kẻ địch và trừ Khương Đào Hoa, Thẩm Tại Dã bày mưu giết nàng, nhưng nàng tự vẫn để thoát thân, khiến hắn thay đổi cách nhìn. Hai người vừa đấu trí vừa dần nảy sinh tình cảm. Phát hiện thái tử là kẻ thù của Thẩm Tại Dã, nàng chủ động hỗ trợ hắn thanh trừng hậu viện nội gián. Sau cùng, hai người cùng đưa bằng chứng khiến thái tử thất thế, nhưng tranh đoạt ngôi vị lại càng gay gắt hơn.",
        release_date: "2025-06-25",
        quality: "fhd",
        rating: "T13",
        runtime: 45,
        type: 2,
        status: "Ended",
        latest_season: 1,
        imdb_rating: "7.2",
        latest_episode: {
          1: 36,
          4: 36,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "685bb60e830976c152342ab1",
              path: "b6/c5/b6c588f9ee44e20bac0307be9f4d367d/b6c588f9ee44e20bac0307be9f4d367d.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "685bb6199fd7659bdb2308fc",
              path: "51/95/51952290dfcac44f3572ae6016f316a0/51952290dfcac44f3572ae6016f316a0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "685bb62a9fd7659bdb230907",
              path: "fc/78/fc7895ee905e20d312e8f4618c715d21/fc7895ee905e20d312e8f4618c715d21.jpeg",
              type: 3,
            },
            {
              _id: "685d0457f82bf44696bf4eaf",
              path: "e3/5e/e35ef83760669577119b30513045b17c/e35ef83760669577119b30513045b17c.webp",
              type: 3,
            },
          ],
          titles: [],
        },
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "OGqPaU",
            name: "Cổ Trang",
            slug: "co-trang",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
      },
    ],
  },
  {
    _id: "Ks4CFk",
    name: "Mãn Nhãn với Phim Chiếu Rạp",
    slug: "man-nhan-voi-phim-chieu-rap",
    color: "#ecaf21",
    order: 3,
    style: 3,
    random_data: false,
    type: 2,
    filter: {
      genre_ids: ["3679nF"],
      status: "Released",
      type: "1",
      top_views: "",
      limit: "20",
      sort_by: "release_date",
      order: "-1",
    },
    movies: [
      {
        _id: "2oiIHdCZ",
        original_title: "Superman",
        title: "Superman",
        slug: "superman",
        overview:
          "Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent.",
        release_date: "2025-07-09",
        rating: "T13",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "Superman",
        imdb_rating: "7.6",
        quality: "cam",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "GNUW6k",
            name: "DC",
            slug: "dc",
          },
          {
            _id: "OW2M9i",
            name: "Siêu Anh Hùng",
            slug: "sieu-anh-hung",
          },
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "0e/19/0e190589111b3c28e1451cde7b82ca3e/0e190589111b3c28e1451cde7b82ca3e.jpg",
              type: 1,
            },
            {
              path: "4b/3c/4b3cdd803e3ca867776d04315e013142/4b3cdd803e3ca867776d04315e013142.webp",
              type: 1,
            },
            {
              path: "5f/0d/5f0dfab3a4b9602c439f20167581a826/5f0dfab3a4b9602c439f20167581a826.webp",
              type: 1,
            },
            {
              path: "b9/87/b987711629ddc4e21645a4e8af96e60d/b987711629ddc4e21645a4e8af96e60d.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "82/90/8290b8ce36c1fb7bc8d8707f81faebea/8290b8ce36c1fb7bc8d8707f81faebea.jpg",
              type: 2,
            },
            {
              path: "da/94/da9452dff98ba7f7c82af03dd5e87266/da9452dff98ba7f7c82af03dd5e87266.webp",
              type: 2,
            },
            {
              path: "1a/17/1a170535e5c4af5ce9b7cfa94ff6292a/1a170535e5c4af5ce9b7cfa94ff6292a.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "16/16/161625de0f2c34ec4795140b44bed834/161625de0f2c34ec4795140b44bed834.webp",
              type: 3,
            },
            {
              path: "f1/05/f105d609e2cc3c8ce1c29f999f42bb9d/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ef/39/ef39e6430dd40aae938a87909bdcbbe1/ef39e6430dd40aae938a87909bdcbbe1.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/L1k0Z7d5-i3j2whoUb+vYYDjSVc24+OqhGN1h+aOcfeu5HwBUfiObC1Qi+p1uAbprMOYrBvZFtYCG2UyBZkzAxN6PYD0BfAR2kMZGU6GYbc=/video.mp4",
      },
      {
        _id: "QigIhNas",
        original_title: "Jurassic World Rebirth",
        english_title: "Jurassic World Rebirth",
        title: "Thế Giới Khủng Long: Tái Sinh",
        slug: "the-gioi-khung-long-tai-sinh",
        overview:
          "Phim lấy bối cảnh 5 năm sau phần phim Thế Giới Khủng Long: Lãnh Địa (Jurassic World: Dominion). Thế Giới Khủng Long: Tái Sinh mở ra một chương mới đầy tính hành động, chứng kiến một đội khai thác chạy đua đến nơi nguy hiểm nhất trên Trái Đất. Dàn nhân vật chính là bộ ba Scarlett Johansson, Mahershala Ali và Jonathan Bailey dấn thân vào một nhiệm vụ cực kỳ hiểm nguy, đó chính là cố gắng lấy DNA có thể dẫn đến một bước đột phá y học cho nhân loại. Chìa khóa của nó tình cờ lại là DNA của ba con khủng long khổng lồ nhất trên cạn, biển và không trung trong sinh quyển nhiệt đới. Hành trình này sẽ đưa nhóm nhân vật chính băng rừng, vượt biển, đối mặt với nhiều loài khủng long kỳ lạ, nguy hiểm nhưng cũng đầy lý thú, từ đó hé mở nhiều điều bí ẩn mà tạo hóa đã giấu khỏi con người suốt bấy lâu nay.",
        release_date: "2025-07-02",
        quality: "cam",
        rating: "T16",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
          {
            _id: "zUEian",
            name: "Giả Tưởng",
            slug: "gia-tuong",
          },
        ],
        images: {
          posters: [
            {
              path: "e8/58/e858d26041ca8a9896aa606d549f9bdc/e858d26041ca8a9896aa606d549f9bdc.jpg",
              type: 1,
            },
            {
              path: "12/a2/12a222c45d2c1c0a05a35f354ed86da2/12a222c45d2c1c0a05a35f354ed86da2.jpg",
              type: 1,
            },
            {
              path: "8d/06/8d06fb6e1be482cbe8c62914a9e05d0e/8d06fb6e1be482cbe8c62914a9e05d0e.jpg",
              type: 1,
            },
            {
              path: "f5/93/f5936fa72cab3567d3cf52840810d8de/f5936fa72cab3567d3cf52840810d8de.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "2f/2f/2f2ff60e643d641a2655ba44b9f45fbb/2f2ff60e643d641a2655ba44b9f45fbb.jpg",
              type: 2,
            },
            {
              path: "05/16/05168942d6b75e2bde65cbcc742e5d3c/05168942d6b75e2bde65cbcc742e5d3c.jpg",
              type: 2,
            },
            {
              path: "86/b7/86b75d60e1762d2780f0f23365354226/86b75d60e1762d2780f0f23365354226.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "54/05/5405bf6a627e5bdcc9bc6acac645e6a4/5405bf6a627e5bdcc9bc6acac645e6a4.webp",
              type: 3,
            },
            {
              path: "f9/f1/f9f19a5f7eaa5795b11e3d369c48cbca/f9f19a5f7eaa5795b11e3d369c48cbca.webp",
              type: 3,
            },
            {
              path: "26/a5/26a53600a57c7a4497a22606eecbd9b3/26a53600a57c7a4497a22606eecbd9b3.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "15/1b/151b39ab91873a620e3c78fab5686d23/151b39ab91873a620e3c78fab5686d23.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/ZjjS1QAJPM2c+aOQUX1rfNgfstIOV6Exur2ms8ieZY-Qfh2g1VS77TDCtHjz79AIG1XE1bFqE2AuGQ7SrMv0w0sj7R9rWXKrU+VeHu1KPSI=/video.mp4",
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
        quality: "4k",
        rating: "T18",
        runtime: 100,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "9f/db/9fdba340ff590a5c4038148213e25486/9fdba340ff590a5c4038148213e25486.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "fc/bb/fcbbb620e45522e4262272c35d36ffd4/fcbbb620e45522e4262272c35d36ffd4.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "49/44/4944c5b73a30dc73e6ee7ced23906b26/4944c5b73a30dc73e6ee7ced23906b26.jpg",
              type: 3,
            },
            {
              path: "26/21/2621f2a8a2da537da8243d0435cbd0da/2621f2a8a2da537da8243d0435cbd0da.webp",
              type: 3,
            },
            {
              path: "f9/2a/f92a70bbd84ec57fa3e81239da6bd44b/f92a70bbd84ec57fa3e81239da6bd44b.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "44/38/44386cc9a8fd46755e4984ee247c5697/44386cc9a8fd46755e4984ee247c5697.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/M4TPqXZnNHtUlrj97ll0HRqvscu71tXydoc8wVS6u9Wf7Uhhumt5iEilHLqrqws+3D-K7sUGBEq8-ry7nw61-U21DwW1vtKJk1X0eaHvAlk=/video.mp4",
      },
      {
        _id: "HcQwEwlM",
        original_title: "F1",
        title: "Tay Đua F1",
        slug: "tay-dua-f1",
        overview:
          "Brad Pitt vào vai một cựu tay đua trở lại với đường đua Công thức 1 cùng APXGP, một đội đua giả tưởng. Đồng hành cùng Pitt trên chặng đường này là Damson Idris, vào vai người đồng đội của anh. Cùng nhau, họ sẽ đối đầu với những tay đua máu mặt trong lĩnh vực thể thao, chinh phục những đỉnh cao mới. F1 dự kiến khởi chiếu vào 27.06.2025.\r\n\r\n",
        release_date: "2025-06-25",
        rating: "T16",
        runtime: 100,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "F1: The Movie",
        imdb_rating: "7.9",
        quality: "cam",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "ad/92/ad92b01db521be321b3b79ee94869555/ad92b01db521be321b3b79ee94869555.jpg",
              type: 1,
            },
            {
              path: "c3/40/c340b90720d089495b3fc1a273ea069d/c340b90720d089495b3fc1a273ea069d.jpg",
              type: 1,
            },
            {
              path: "02/86/0286bee315b92d4073efb8d2ffe6cd44/0286bee315b92d4073efb8d2ffe6cd44.jpg",
              type: 1,
            },
            {
              path: "bc/d5/bcd571adac9ba00797ac8bb833261fe2/bcd571adac9ba00797ac8bb833261fe2.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "06/5f/065ff0cf3a86637fc011159a1c209b55/065ff0cf3a86637fc011159a1c209b55.jpg",
              type: 2,
            },
            {
              path: "a9/7a/a97a82ed73a2e450332f6fd1afb20fb9/a97a82ed73a2e450332f6fd1afb20fb9.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "2f/26/2f26b4ce7ed537fad32d4a0138f4f36c/2f26b4ce7ed537fad32d4a0138f4f36c.jpg",
              type: 3,
            },
            {
              path: "7f/b0/7fb03fc7adc8de125e80bc0d67d0e841/7fb03fc7adc8de125e80bc0d67d0e841.webp",
              type: 3,
            },
            {
              path: "e8/e6/e8e69917d75ea39ccd6f59de623d8bdf/e8e69917d75ea39ccd6f59de623d8bdf.webp",
              type: 3,
            },
            {
              path: "af/2d/af2d9ffe736e0e2318656cf41c87e122/af2d9ffe736e0e2318656cf41c87e122.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "3f/53/3f53160176be9787a445b049a07609f9/3f53160176be9787a445b049a07609f9.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/uSkEtDas4NTDZXs44N2dRJFSTnw-NrCLxMIgXyRKGpKf0ParphXSCPptyPmYdo9Lt1HALiuQyShfbHTsHc1zH-Kx2fUhlMts4mq+zsN+T-s=/video.mp4",
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
        quality: "4k",
        rating: "T13",
        runtime: 110,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "8.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "96/22/962217075544e85e0e0e96dbde1561de/962217075544e85e0e0e96dbde1561de.jpg",
              type: 1,
            },
            {
              path: "58/19/58193a004ba1bf56b271215bd51c093c/58193a004ba1bf56b271215bd51c093c.jpg",
              type: 1,
            },
            {
              path: "20/7a/207a248f22dfb52dfc5938180cd74ea0/207a248f22dfb52dfc5938180cd74ea0.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "d4/13/d413f57dd9cd406de09cde0e4d5d5002/d413f57dd9cd406de09cde0e4d5d5002.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "49/54/4954888b2af61ce4ea2353c8428a7152/4954888b2af61ce4ea2353c8428a7152.jpg",
              type: 3,
            },
            {
              path: "ec/d5/ecd581a3c6ebadbad901ae1301e5e1d5/ecd581a3c6ebadbad901ae1301e5e1d5.jpg",
              type: 3,
            },
            {
              path: "4e/47/4e4760c4503bc33daa949d163119698e/4e4760c4503bc33daa949d163119698e.jpg",
              type: 3,
            },
            {
              path: "3b/bb/3bbb90cc73f9c0da84a0fdd58418e043/3bbb90cc73f9c0da84a0fdd58418e043.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "af/56/af56b3ea09c88ca71ccb9ddc8c40042e/af56b3ea09c88ca71ccb9ddc8c40042e.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/eac37uMb-g15Qd0mkm7YIVfZuN6RhXKYV+jmPceMd3kEj8rLNBeesfLxY7faP3UI09seD1QOfUjRpRc1OAnAQ2UDX7c31HFY1XTGWbQDbs8=/video.mp4",
      },
      {
        _id: "vDEpRqtW",
        original_title: "John Wick Presents: Ballerina",
        title: "Từ Vũ Trụ John Wick: Ballerina",
        slug: "tu-vu-tru-john-wick-ballerina",
        overview:
          "Lấy bối cảnh giữa sự kiện của Sát thủ John Wick: Phần 3 – Chuẩn Bị Chiến Tranh, bộ phim Từ Vũ Trụ John Wick: Ballerina theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình trả thù cho cái chết của gia đình mình, dưới sự huấn luyện của tổ chức tội phạm Ruska Roma.\r\n",
        release_date: "2025-06-04",
        rating: "T16",
        runtime: 125,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "Ballerina",
        imdb_rating: "7.0",
        quality: "4k",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "c1/ec/c1ec338ee8387d310986488629d5e289/c1ec338ee8387d310986488629d5e289.webp",
              type: 1,
            },
            {
              path: "c4/a7/c4a72627947bb1bfe0142d138d99666c/c4a72627947bb1bfe0142d138d99666c.webp",
              type: 1,
            },
            {
              path: "90/d5/90d5fb1e864ee9f1f503e08e05143e8f/90d5fb1e864ee9f1f503e08e05143e8f.webp",
              type: 1,
            },
            {
              path: "fe/15/fe15c492d94cdcaf1e5e379f44b94d59/fe15c492d94cdcaf1e5e379f44b94d59.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "f8/02/f802c77d3156545e27382523ae83dd7d/f802c77d3156545e27382523ae83dd7d.jpg",
              type: 2,
            },
            {
              path: "4c/3c/4c3ce630144d9d465e301f1c0582d0ba/4c3ce630144d9d465e301f1c0582d0ba.jpg",
              type: 2,
            },
            {
              path: "d9/01/d90107064c9e897a820d32493d4825ca/d90107064c9e897a820d32493d4825ca.webp",
              type: 2,
            },
            {
              path: "c0/ce/c0ce104928f09869d57d34ef7114e8e1/c0ce104928f09869d57d34ef7114e8e1.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "0d/7e/0d7e0179ed1c60fa3caf57cea4ed6663/0d7e0179ed1c60fa3caf57cea4ed6663.webp",
              type: 3,
            },
            {
              path: "a6/2c/a62c136aa493ba29aa54ae0834fc9721/a62c136aa493ba29aa54ae0834fc9721.webp",
              type: 3,
            },
            {
              path: "a0/0e/a00ecdaed594e51e90b965b24c5ad281/a00ecdaed594e51e90b965b24c5ad281.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "eb/fb/ebfb0189613d2ccfc8734c2efbd9de5e/ebfb0189613d2ccfc8734c2efbd9de5e.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "qjrNTeSu",
        original_title: "소주전쟁",
        english_title: "Big Deal",
        title: "Mượn Rượu Đẩy Kèo",
        slug: "muon-ruou-day-keo",
        overview:
          "Mượn Rượu Đẩy Kèo lấy bối cảnh Hàn Quốc vào năm 1997, khi cuộc khủng hoảng kinh tế tài chính đang hoành hành khắp châu Á khiến Gukbo - công ty sản xuất Soju số 1 đất nước rơi vào tình trạng cận kề phá sản. In-beom (Lee Je-hoon) - chàng trai trẻ đầy tham vọng đại diện cho tập đoàn đầu tư toàn cầu Solquin đã trở về quê hương với quyết tâm thâu tóm Gukbo. Để thực hiện âm mưu này, In-beom đội lốt một chuyên gia tư vấn ngây thơ, tiếp cận Jong-rok (Yoo Hai-jin) - giám đốc vô cùng trung thành với Gukbo, đang khao khát đưa công ty quay lại thời hoàng kim. Nhưng càng đào sâu vào đế chế Gukbo, In-beom càng nhận ra đây thực sự là một cuộc chiến xảo quyệt với rất nhiều “cú twist”, dẫn đến kết cục không ngờ dành cho tất cả.\r\n",
        release_date: "2025-05-30",
        quality: "fhd",
        rating: "T16",
        runtime: 104,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.9",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
        images: {
          posters: [
            {
              path: "59/4c/594cf7dffee5772328a52ec44f760714/594cf7dffee5772328a52ec44f760714.jpg",
              type: 1,
            },
            {
              path: "e8/b4/e8b4929c73592585c0580c052c01d6ac/e8b4929c73592585c0580c052c01d6ac.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "3d/83/3d83e649bcb5f8880566a5d3811adbfa/3d83e649bcb5f8880566a5d3811adbfa.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "7c/b6/7cb6c16ba0981484d55699be63838c9f/7cb6c16ba0981484d55699be63838c9f.webp",
              type: 3,
            },
            {
              path: "8e/f2/8ef2abe4c1f1efe18a8fe6e7cd55ac0e/8ef2abe4c1f1efe18a8fe6e7cd55ac0e.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "27/2f/272fcda16d4b1c81e491b1b4bc0af77f/272fcda16d4b1c81e491b1b4bc0af77f.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "Etwg8kgy",
        original_title: "하이파이브",
        english_title: "Hi-Five",
        title: "Bộ 5 Siêu Đẳng Cấp",
        slug: "bo-5-sieu-dang-cap",
        overview:
          "Chuyện phim xoay quanh năm con người xa lạ, vô tình sở hữu các siêu năng lực sau khi được cấy ghép nội tạng từ những người hiến tặng bí ẩn. Trên hành trình khám phá “món quà” bất ngờ này, họ buộc phải đối mặt với những thế lực đen tối đang khao khát chiếm đoạt khả năng phi thường ấy.\r\n\r\n",
        release_date: "2025-05-30",
        quality: "fhd",
        rating: "T13",
        runtime: 120,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wN4Ysm",
            name: "Viễn Tưởng",
            slug: "vien-tuong",
          },
        ],
        images: {
          posters: [
            {
              path: "ff/5a/ff5a373283e20bc5ce701d386741a1f7/ff5a373283e20bc5ce701d386741a1f7.jpg",
              type: 1,
            },
            {
              path: "ab/22/ab22c81a26a92cf9e7fae5c982cc0a24/ab22c81a26a92cf9e7fae5c982cc0a24.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "e2/f9/e2f90255d32e9cee9048f8cea9eed2a6/e2f90255d32e9cee9048f8cea9eed2a6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "98/a5/98a5b22913fbf7a1505ba29fdfd70353/98a5b22913fbf7a1505ba29fdfd70353.webp",
              type: 3,
            },
            {
              path: "8d/9c/8d9c68e67801743356391c099831aff3/8d9c68e67801743356391c099831aff3.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "d7/19/d71987a8894a4fcf65a49695f42bffc4/d71987a8894a4fcf65a49695f42bffc4.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "r1ixveLR",
        original_title: "Karate Kid: Legends",
        title: "Siêu Nhí Karate: Những Huyền Thoại",
        slug: "sieu-nhi-karate-nhung-huyen-thoai",
        overview:
          "Sau một bi kịch gia đình, thiên tài võ thuật Lý Phong buộc phải rời quê hương Bắc Kinh để chuyển đến New York cùng mẹ. Tại nơi ở mới, khi một người bạn gặp rắc rối và cần giúp đỡ, Lý quyết định tham gia một giải đấu karate. Tuy nhiên, chỉ với kỹ năng kungfu thôi thì chưa đủ. Thầy dạy kungfu của Lý – ông Hàn – đã tìm đến Daniel LaRusso, huyền thoại Karate Kid, để hỗ trợ. Từ đó, Lý học được một cách chiến đấu hoàn toàn mới, kết hợp giữa kungfu và karate để bước vào trận chiến đỉnh cao của võ thuật.",
        release_date: "2025-05-30",
        rating: "T16",
        runtime: 110,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "Karate Kid: Legends",
        imdb_rating: "6.4",
        quality: "4k",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "s68Tsc",
            name: "Võ Thuật",
            slug: "vo-thuat",
          },
        ],
        images: {
          posters: [
            {
              path: "b9/c4/b9c4e284d9bb838b249ce4dc0fc5c192/b9c4e284d9bb838b249ce4dc0fc5c192.jpg",
              type: 1,
            },
            {
              path: "5f/2c/5f2c1da059ec84f92e5e821e927616a2/5f2c1da059ec84f92e5e821e927616a2.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "b1/0c/b10c433e8e56f1063f4f77bd416e9654/b10c433e8e56f1063f4f77bd416e9654.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "48/96/48969d11d9709aee05913418b1ad6ebd/48969d11d9709aee05913418b1ad6ebd.webp",
              type: 3,
            },
            {
              path: "a7/07/a7072eb52d4b750dbf9a54e15c6db723/a7072eb52d4b750dbf9a54e15c6db723.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "a6/f3/a6f37e489d31410f0f1cefc46e7465af/a6f37e489d31410f0f1cefc46e7465af.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "hseo1ZmW",
        original_title: "Bring Her Back",
        english_title: "Bring Her Back",
        title: "Mượn Hồn Đoạt Xác",
        slug: "muon-hon-doat-xac",
        overview:
          "Sự trở lại của bộ óc sáng tạo đằng sau Talk to Me, Danny và Michael Philippou cùng A24 với một bộ phim kinh dị mới nhất Mượn Hồn Đoạt Xác. Nhiều người tin rằng linh hồn vẫn sẽ ở lại trong thân xác một thời gian trước khi rời đi, đây cũng là niềm tin đáng sợ cho nghi lễ ám ảnh nhất tháng 5.\r\n",
        release_date: "2025-05-28",
        quality: "4k",
        rating: "T18",
        runtime: 104,
        type: 1,
        origin_country: ["AU"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "43tNdP",
            name: "Kinh Dị",
            slug: "kinh-di",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "05/56/05569ff35bce4f00cf988ce9f0cf1610/05569ff35bce4f00cf988ce9f0cf1610.webp",
              type: 1,
            },
            {
              path: "5b/73/5b73d805d0c26ab27123f66a99f40e7d/5b73d805d0c26ab27123f66a99f40e7d.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "44/49/4449b6fd473b4655f8cc93506a2b5c04/4449b6fd473b4655f8cc93506a2b5c04.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "6b/61/6b618f64a56e59310d472ed9ccf78753/6b618f64a56e59310d472ed9ccf78753.webp",
              type: 3,
            },
            {
              path: "5b/b4/5bb4781fff2bfd87cade9517e3ffcaa5/5bb4781fff2bfd87cade9517e3ffcaa5.webp",
              type: 3,
            },
            {
              path: "fd/36/fd36a341eba5bf70d45e115b4dfad744/fd36a341eba5bf70d45e115b4dfad744.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ac/3b/ac3b0c682fcae863bd0e267c366c78a5/ac3b0c682fcae863bd0e267c366c78a5.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "36A0mybQ",
        original_title: "The Ritual",
        english_title: "The Ritual",
        title: "Quỷ Tha Ma Bắt",
        slug: "quy-tha-ma-bat",
        overview:
          "Emma Schmidt, một phụ nữ 46 tuổi, đã phải chịu đựng suốt nhiều năm với các triệu chứng đáng sợ như mất ý thức, sợ hãi các vật thánh và nhiều biểu hiện kỳ lạ khác. Sau khi điều trị tâm thần không mang lại hiệu quả, một buổi trừ tà trang nghiêm đã được sắp xếp tại một tu viện hẻo lánh, do Cha Theophilus Riesinger thực hiện và Cha Steiger giám sát. Kể từ khi Emma đến, những hiện tượng kỳ quái bắt đầu xuất hiện, và chuỗi ngày thử thách kéo dài nhiều tháng đã đẩy tất cả những người liên quan đến giới hạn về tinh thần lẫn đức tin. Sau một phiên trừ tà căng thẳng kéo dài 72 giờ, Emma cuối cùng đã được giải thoát và sống phần đời còn lại trong yên bình. Trường hợp của cô vẫn là một trong những vụ trừ tà được ghi chép và công bố rộng rãi nhất trong lịch sử nước Mỹ..\r\n",
        release_date: "2025-05-27",
        quality: "fhd",
        rating: "T18",
        runtime: 98,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "4.5",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "3679nF",
            name: "Chiếu Rạp",
            slug: "chieu-rap",
          },
          {
            _id: "43tNdP",
            name: "Kinh Dị",
            slug: "kinh-di",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
        ],
        images: {
          posters: [
            {
              path: "aa/b3/aab31f6b48d69ef800ad47e54d59db03/aab31f6b48d69ef800ad47e54d59db03.jpg",
              type: 1,
            },
            {
              path: "40/1c/401c83614f06d239b6928d46d43ec914/401c83614f06d239b6928d46d43ec914.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "39/7d/397d968d63f4a23943ae5543124b52e2/397d968d63f4a23943ae5543124b52e2.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "14/3c/143c7aab7b3647572aaca5319bc4ca1e/143c7aab7b3647572aaca5319bc4ca1e.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "24/f2/24f2479c31b6b3cd853d1f39d9fae4d7/24f2479c31b6b3cd853d1f39d9fae4d7.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "H0CuOIcq",
        original_title: "The Phoenician Scheme",
        english_title: "The Phoenician Scheme",
        title: "Âm Mưu Phoenicia",
        slug: "am-muu-phoenicia",
        overview:
          "Doanh nhân giàu có Zsa-zsa Korda bất ngờ chỉ định người con gái duy nhất của mình — hiện đang là một nữ tu — làm người thừa kế toàn bộ tài sản. Nhưng khi Korda bắt tay vào một dự án kinh doanh mới, cha con họ lập tức trở thành mục tiêu của những tập đoàn lắm mưu mô, các tổ chức khủng bố nước ngoài và những sát thủ máu lạnh.",
        release_date: "2025-05-23",
        quality: "fhd",
        rating: "T16",
        runtime: 102,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.8",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "7f/7c/7f7c7fe93b0e33107b3de8bd9a31ca64/7f7c7fe93b0e33107b3de8bd9a31ca64.jpg",
              type: 1,
            },
            {
              path: "66/9c/669c432af08d0f66f48f3bf737788e4c/669c432af08d0f66f48f3bf737788e4c.jpg",
              type: 1,
            },
            {
              path: "c5/58/c55803b1167992d7546d63605658c4d7/c55803b1167992d7546d63605658c4d7.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "18/b0/18b0cc584f6155b281c0dc23ec3252cd/18b0cc584f6155b281c0dc23ec3252cd.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "c7/25/c7251cddf029980137a7a7f9b1b05255/c7251cddf029980137a7a7f9b1b05255.webp",
              type: 3,
            },
            {
              path: "4d/ae/4daea1460a637faaae8d32f66d149796/4daea1460a637faaae8d32f66d149796.webp",
              type: 3,
            },
            {
              path: "04/f9/04f955e075ca66656821217b87e83672/04f955e075ca66656821217b87e83672.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "5e/c1/5ec1172aac2f8274953ad39b78065a57/5ec1172aac2f8274953ad39b78065a57.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "IbjIXu5D",
        original_title: "Mission: Impossible 8",
        english_title: "Mission: Impossible - The Final Reckoning",
        title: "Nhiệm Vụ Bất Khả Thi 8 - Nghiệp Báo Cuối Cùng",
        slug: "nhiem-vu-bat-kha-thi-8-nghiep-bao-cuoi-cung",
        overview:
          "Cuộc đời là tất thảy những lựa chọn. Tom Cruise thủ vai Ethan Hunt trở lại trong Nhiệm Vụ: Bất Khả Thi – Nghiệp Báo Cuối Cùng.",
        release_date: "2025-05-22",
        quality: "cam",
        rating: "T16",
        runtime: 120,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        latest_episode: {
          1: 1,
        },
        imdb_rating: "7.4",
        year: "2025",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "0d/4e/0d4e7c499e56e0a3bb5f54795a16ab33/0d4e7c499e56e0a3bb5f54795a16ab33.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "fd/2a/fd2af3c1451bc7ae612f9840fc9f2fca/fd2af3c1451bc7ae612f9840fc9f2fca.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "93/1f/931fb23eb19f7496494d3168a38f81eb/931fb23eb19f7496494d3168a38f81eb.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "81/67/81674273bb9b96eeca7754d8526e49b5/81674273bb9b96eeca7754d8526e49b5.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/ws-qZZm-FRBxWxEEWr8rOkRuNVYXgm2f3T8Ak9wUMYctFKc6ZlwP7OII75lSvwWgrSCXbwq83+LrGYsmWicfgBiFFqnkUTfqW1gurX1trpk=/video.mp4",
      },
      {
        _id: "JgCgEG0V",
        original_title: "Lilo & Stitch",
        english_title: "Lilo & Stitch",
        title: "Lilo & Stitch",
        slug: "lilo-and-stitch",
        overview:
          "Bộ phim live-action Lilo và Stitch đưa câu chuyện kinh điển của Disney năm 2002 trở lại với một diện mạo mới, vừa hài hước vừa đầy cảm xúc. Phim theo chân Lilo, một cô bé người Hawaii cô đơn và Stitch, sinh vật ngoài hành tinh tinh nghịch đang chạy trốn, khi cả hai vô tình tìm thấy nhau và cùng nhau hàn gắn những tan vỡ trong gia đình của Lilo.\r\n",
        release_date: "2025-05-21",
        quality: "cam",
        rating: "T13",
        runtime: 108,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.9",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "TVBHfX",
            name: "Thiếu Nhi",
            slug: "thieu-nhi",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "eb/47/eb47f0497c707f7108af0ae6e8a4af59/eb47f0497c707f7108af0ae6e8a4af59.webp",
              type: 1,
            },
            {
              path: "ed/1e/ed1ec5f573fecdffda17cf232a22a975/ed1ec5f573fecdffda17cf232a22a975.webp",
              type: 1,
            },
            {
              path: "5f/8a/5f8ad74eff156ae4943c0ce733ffc95e/5f8ad74eff156ae4943c0ce733ffc95e.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "2b/8c/2b8c0c1b9c17e14b0133c790b1974efd/2b8c0c1b9c17e14b0133c790b1974efd.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "a9/71/a9715fe20d6670716ccbbe9caa861be3/a9715fe20d6670716ccbbe9caa861be3.webp",
              type: 3,
            },
            {
              path: "fe/91/fe9192eaee792eff0b9f5c5a1c56ce38/fe9192eaee792eff0b9f5c5a1c56ce38.webp",
              type: 3,
            },
            {
              path: "33/3f/333fd7d173be80f31bc3c63401f293a5/333fd7d173be80f31bc3c63401f293a5.webp",
              type: 3,
            },
            {
              path: "04/5d/045dcc202811220e3a6f601001e35ef1/045dcc202811220e3a6f601001e35ef1.webp",
              type: 3,
            },
          ],
          titles: [],
        },
        video_preview:
          "https://seemymeat.net/media/18GpWTIL8s-Ah3YAgPw-bBIDD9PWG0ztb9Z+Ke3fz-yftt7vYauDJIgXQYz42jv2RZqS-sXKUhZQ7cVHMgm8KU1QWGXuPJncGT4z7Qrg52A=/video.mp4",
      },
      {
        _id: "ivMSilmy",
        original_title: "야당",
        english_title: "Yadang: The Snitch",
        title: "Yadang: Ba Mặt Lật Kèo",
        slug: "yadang-ba-mat-lat-keo",
        overview:
          '"Từ giờ trở đi, bạn là kẻ chỉ điểm của tôi." Là “cầu nối” giữa thế giới ngầm và các cơ quan thực thi pháp luật, những kẻ chỉ điểm chuyên nghiệp được gọi là "yadang" - người cung cấp thông tin bí mật về thế giới ma túy cho các công tố viên và cảnh sát. Khi một kẻ chỉ điểm ma túy “báo tin” về một bữa tiệc có sự tham dự của các VIP nổi tiếng và vô tình vướng vào một âm mưu nguy hiểm, hắn phải làm mọi thứ trong khả năng của mình không chỉ để sống sót,mà còn để phục thù\r\n',
        release_date: "2025-05-18",
        quality: "fhd",
        rating: "T13",
        runtime: 123,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.9",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "7d/d2/7dd2b6c974826d8dc5fdecc40498b363/7dd2b6c974826d8dc5fdecc40498b363.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "78/45/784543799c537bda4c8f8b9c1757bfc3/784543799c537bda4c8f8b9c1757bfc3.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "b5/7a/b57a585ffd7d109233e409b3b4d216e5/b57a585ffd7d109233e409b3b4d216e5.jpg",
              type: 3,
            },
            {
              path: "73/84/7384a5b33bc49ee3cf73d489d79f6fb4/7384a5b33bc49ee3cf73d489d79f6fb4.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "7a/c2/7ac2a70b3dcfa0f90dfb8c44d53eabc6/7ac2a70b3dcfa0f90dfb8c44d53eabc6.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/Nc6UAY7Bwlxkcs4X5zSLI7QuIlcv1EG8Vrdv6NTU1EmHsM9nvqOEVcQtn1Yig5hzfAr5RlaShlS1RRMy9VK4W1KxDWxBSzKw2Tv78b+FCH8=/video.mp4",
      },
      {
        _id: "cNlB2E1o",
        original_title: "Until Dawn",
        english_title: "Until Dawn",
        title: "Bí Mật Kinh Hoàng",
        slug: "bi-mat-kinh-hoang",
        overview:
          "Until Dawn/ Until Dawn: Bí Mật Kinh Hoàng diễn ra sau khi em gái Melanie mất tích một cách bí ẩn, Clover cùng bạn bè quyết định vào một thung lũng nơi cuối cùng nhìn thấy em gái để tìm kiếm câu trả lời. Khi lạc vào một khu nhà bỏ hoang, họ bị một kẻ giết người đeo mặt nạ theo dõi và bị sát hại một cách kinh hoàng từng người một... cho đến khi họ tỉnh dậy và phát hiện mình quay ngược lại vào buổi tối đầu tiên. Bị mắc kẹt trong một vòng lặp thời gian bí ẩn, họ buộc phải sống lại cơn ác mộng đó mỗi đêm, nhưng mỗi lần lại phải đối mặt với những mối đe dọa mới và những cách chết khác nhau, ngày càng đáng sợ hơn. Khi hy vọng dần tắt, nhóm bạn nhận ra họ chỉ còn 13 mạng sống trước khi biến mất mãi mãi. Cách duy nhất để thoát khỏi là sống sót cho đến khi bình minh.\r\n\r\n",
        release_date: "2025-05-18",
        quality: "4k",
        rating: "T18",
        runtime: 103,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.7",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "3679nF",
            name: "Chiếu Rạp",
            slug: "chieu-rap",
          },
          {
            _id: "43tNdP",
            name: "Kinh Dị",
            slug: "kinh-di",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
        ],
        images: {
          posters: [
            {
              path: "cf/a0/cfa0d9ded1b1dea66b327f4251ec4e29/cfa0d9ded1b1dea66b327f4251ec4e29.jpg",
              type: 1,
            },
            {
              path: "52/51/5251aee220500a7830569dd471dd0218/5251aee220500a7830569dd471dd0218.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "25/80/2580e4f2abb44309b22d850586ec25c9/2580e4f2abb44309b22d850586ec25c9.jpg",
              type: 2,
            },
            {
              path: "77/b1/77b1cef8fae268e5f949e1ddf5a2b426/77b1cef8fae268e5f949e1ddf5a2b426.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "b9/3d/b93de5750a063ee53413a5730194f5ce/b93de5750a063ee53413a5730194f5ce.jpg",
              type: 3,
            },
            {
              path: "16/fc/16fc431f6e351f6c72dbc98349a3fd40/16fc431f6e351f6c72dbc98349a3fd40.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "d4/14/d414be6e2693ecd7fd645ca08b4c763a/d414be6e2693ecd7fd645ca08b4c763a.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "1qU2PKwD",
        original_title: "Final Destination Bloodlines",
        english_title: "Final Destination Bloodlines",
        title: "Lưỡi Hái Tử Thần: Huyết Thống",
        slug: "luoi-hai-tu-than-huyet-thong",
        overview:
          "Bộ phim sẽ là xoay quanh một sinh viên đại học liên tục gặp các ác mộng về sự sụp đổ của gia đình cô, buộc cô phải trở về ngôi nhà của mình và tìm kiếm người có thể ngăn chặn điều đó xảy ra\r\n\r\n",
        release_date: "2025-05-09",
        quality: "4k",
        rating: "T18",
        runtime: 104,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.8",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "31/74/3174a27e6ef19d7715eb2ac7158fa625/3174a27e6ef19d7715eb2ac7158fa625.jpg",
              type: 1,
            },
            {
              path: "43/d1/43d1612bcfba24fc1a152000f4df71b4/43d1612bcfba24fc1a152000f4df71b4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "a8/ee/a8eefdf05ab4fc52c87f34e4bdf76b1b/a8eefdf05ab4fc52c87f34e4bdf76b1b.jpg",
              type: 2,
            },
            {
              path: "ff/8b/ff8bfd804df0378a083fb9ccf70151b0/ff8bfd804df0378a083fb9ccf70151b0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "32/1b/321b0537ce9d3d6ad123d95f8d73d2ad/321b0537ce9d3d6ad123d95f8d73d2ad.jpg",
              type: 3,
            },
            {
              path: "3f/91/3f912f6db5f248397fe4140f01c1c374/3f912f6db5f248397fe4140f01c1c374.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "1b/b2/1bb2997c7ffda96d2dd5ff44c0f74e35/1bb2997c7ffda96d2dd5ff44c0f74e35.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "TWvvbJgR",
        original_title: "바이러스",
        english_title: "Virus",
        title: 'Dính "Thính" Là Yêu',
        slug: "dinh-thinh-la-yeu",
        overview:
          "Dính “Thính” Là Yêu là bộ phim hài lãng mạn xoay quanh cô nàng Taek-seon (Bae Doo-na) - bộ trưởng bộ thờ ơ, chủ tịch hội vô cảm, trưởng nhóm anti tình yêu. Đang sống cuộc đời như một “tảng băng di động”, Taek-seon bất ngờ bị nhiễm “virus tình yêu” - cơn dịch bệnh kỳ lạ khiến con người không thể kiềm chế ham muốn yêu và được yêu. Nếu không tìm được tình yêu đích thực của đời mình trong vòng 5 ngày, người nhiễm virus sẽ chết… vì cô đơn, theo đúng nghĩa đen. Đứng trước những ngã rẽ là can đảm đi tìm tình yêu hay chấp nhận từ bỏ cuộc sống, Taek-seon đã gặp gỡ 3 người đàn ông với hi vọng họ có thể thay đổi số phận của cô. Đó là nhà nghiên cứu Nam Soo-pil (Son Suk-ku), bạn học cùng tiểu học Kim Yeon-woo (Chang Ki-ha) và chuyên gia y tế Lee Kyun (Kim Yoon-seok). Những phản ứng tình yêu “dở khóc dở cười” bắt đầu bùng nổ trên hành trình chữa bệnh của Taek-seon khiến cô phải tự hỏi: Liệu đây chỉ là triệu chứng mà virus mang lại hay đó chính là tình yêu thật sự?\r\n",
        release_date: "2025-05-07",
        quality: "fhd",
        rating: "T16",
        runtime: 99,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.0",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "8d/f1/8df1420f6c47a9fdee16b6a79755087c/8df1420f6c47a9fdee16b6a79755087c.jpg",
              type: 1,
            },
            {
              path: "9b/8e/9b8e08172049639665aa31f9829d32cd/9b8e08172049639665aa31f9829d32cd.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "92/db/92db34f6edb634c96a9df95926a8a27a/92db34f6edb634c96a9df95926a8a27a.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "fe/e6/fee6cbdce3ea777f104489214afeea75/fee6cbdce3ea777f104489214afeea75.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "cd/c0/cdc091811c1975f3b6d1cc014b7ec217/cdc091811c1975f3b6d1cc014b7ec217.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "rfDhoxup",
        original_title: "Thunderbolts*",
        title: "Thunderbolts*: Biệt Đội Sấm Sét",
        slug: "thunderbolts-biet-doi-sam-set",
        overview:
          "Ai trong team này cũng từng làm việc ác, giờ là lúc làm việc ác cùng nhau. Các thành phần bất hảo trong vũ trụ điện ảnh Marvel giờ đây đã được triệu tập trở thành một nhóm gọi là “Biệt Đội Sấm Sét”, để làm những nhiệm vụ nguy hiểm bậc nhất mà có thể sẽ thay đổi con người, cuộc đời họ mãi mãi. ",
        release_date: "2025-04-30",
        rating: "T16",
        runtime: 130,
        type: 1,
        origin_country: ["US"],
        status: "Released",
        english_title: "Thunderbolts",
        imdb_rating: "7.3",
        quality: "4k",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "OW2M9i",
            name: "Siêu Anh Hùng",
            slug: "sieu-anh-hung",
          },
          {
            _id: "QriAOn",
            name: "Marvel",
            slug: "marvel",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "80/51/8051e3ae246c5e276828cf6eb5b3ebd1/8051e3ae246c5e276828cf6eb5b3ebd1.jpg",
              type: 1,
            },
            {
              path: "f7/bd/f7bdc84f76fc64467f0bb8f0e789f4b4/f7bdc84f76fc64467f0bb8f0e789f4b4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "70/59/705999298fff92f2bc73deb920e69a4a/705999298fff92f2bc73deb920e69a4a.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "34/d5/34d52a3d2fff34e05addeb6a92014d28/34d52a3d2fff34e05addeb6a92014d28.jpg",
              type: 3,
            },
            {
              path: "80/75/8075260038eecb4c9684956a174180a5/8075260038eecb4c9684956a174180a5.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "59/19/59195b7e2ecf4e2218bdaab9f1a829e1/59195b7e2ecf4e2218bdaab9f1a829e1.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/Orilzeje22YDajhuEGBobw4EAJaNekqJhQ+ZvrFL49eInieMBagozrnZK6WGtgv2YIGlQFm8QvVsYrD82RvHSyv6BDDSBWTcdFga2FH-VEM=/video.mp4",
      },
      {
        _id: "PN1BOaUM",
        original_title: "거룩한 밤: 데몬 헌터스",
        english_title: "Holy Night: Demon Hunters",
        title: "Đêm Thánh: Đội Săn Quỷ",
        slug: "dem-thanh-doi-san-quy",
        overview:
          "Đêm Thánh Đội Săn Quỷ là bộ phim Hàn mới nhất với sự góp mặt của ông chú Ma Dong Seok. Seoul chìm trong hỗn loạn khi một mạng lưới tội phạm tôn thờ ma quỷ xuất hiện. Trong sự cầu xin tuyệt vọng để được cứu rỗi, cảnh sát buộc phải nhờ đến ‘Đêm Thánh’, một bộ ba thợ săn quỷ được trang bị sức mạnh siêu nhiên. Liệu ‘Đêm Thánh’ có thể chinh phục ách thống trị của quỷ dữ và khôi phục trật tự cho thành phố? ",
        release_date: "2025-04-30",
        quality: "fhd",
        rating: "T16",
        runtime: 110,
        type: 1,
        origin_country: ["KR"],
        status: "Released",
        latest_season: 0,
        imdb_rating: "5.1",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
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
            _id: "43tNdP",
            name: "Kinh Dị",
            slug: "kinh-di",
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
        ],
        images: {
          posters: [
            {
              path: "be/a4/bea475c025e6d0d3ad410df2b59150e6/bea475c025e6d0d3ad410df2b59150e6.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "8f/09/8f090bed2fea73594319d3ec9669eb28/8f090bed2fea73594319d3ec9669eb28.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "19/b7/19b749644db795712b403d810ced1339/19b749644db795712b403d810ced1339.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "70/31/703101310f7fa2877cd93b0313ceca42/703101310f7fa2877cd93b0313ceca42.png",
              type: 4,
            },
          ],
        },
        video_preview:
          "https://seemymeat.net/media/ukOH1JNipiNkBFS6QTSbfLtrS4z3WsVSmYYWk7Wrqo9hrYBjaF4+zu0QvArQL10z3G+DvG1Jd0EYG-uF88OQg1SvkiuA5yweUaMm5ycIEJw=/video.mp4",
      },
    ],
  },
  {
    _id: "GShalB",
    name: "Top 10 phim lẻ hôm nay",
    slug: "top-10-phim-le-hom-nay",
    color: "#cb358e",
    order: 4,
    style: 4,
    random_data: false,
    type: 2,
    filter: {
      type: "1",
      top_views: "today",
      limit: "10",
      sort_by: "updated_at",
      order: "-1",
    },
    movies: [
      {
        _id: "2oiIHdCZ",
        original_title: "Superman",
        title: "Superman",
        slug: "superman",
        overview:
          "Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent.",
        release_date: "2025-07-09",
        rating: "T13",
        runtime: 130,
        type: 1,
        status: "Released",
        english_title: "Superman",
        imdb_rating: "7.6",
        quality: "cam",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "67bf5594834ff2054581d68a",
              path: "0e/19/0e190589111b3c28e1451cde7b82ca3e/0e190589111b3c28e1451cde7b82ca3e.jpg",
              type: 1,
            },
            {
              _id: "6877843997c49e6175395200",
              path: "4b/3c/4b3cdd803e3ca867776d04315e013142/4b3cdd803e3ca867776d04315e013142.webp",
              type: 1,
            },
            {
              _id: "6877843fedeccef1d6ad8add",
              path: "5f/0d/5f0dfab3a4b9602c439f20167581a826/5f0dfab3a4b9602c439f20167581a826.webp",
              type: 1,
            },
            {
              _id: "6877844697c49e617539520b",
              path: "b9/87/b987711629ddc4e21645a4e8af96e60d/b987711629ddc4e21645a4e8af96e60d.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "67bf559e834ff2054581d695",
              path: "82/90/8290b8ce36c1fb7bc8d8707f81faebea/8290b8ce36c1fb7bc8d8707f81faebea.jpg",
              type: 2,
            },
            {
              _id: "6877840197c49e61753951f5",
              path: "da/94/da9452dff98ba7f7c82af03dd5e87266/da9452dff98ba7f7c82af03dd5e87266.webp",
              type: 2,
            },
            {
              _id: "6877846dedeccef1d6ad8af3",
              path: "1a/17/1a170535e5c4af5ce9b7cfa94ff6292a/1a170535e5c4af5ce9b7cfa94ff6292a.webp",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "687783e4edeccef1d6ad8aa1",
              path: "16/16/161625de0f2c34ec4795140b44bed834/161625de0f2c34ec4795140b44bed834.webp",
              type: 3,
            },
            {
              _id: "687783eb97c49e61753951ea",
              path: "f1/05/f105d609e2cc3c8ce1c29f999f42bb9d/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "687783b297c49e61753951df",
              path: "ef/39/ef39e6430dd40aae938a87909bdcbbe1/ef39e6430dd40aae938a87909bdcbbe1.png",
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
            _id: "GNUW6k",
            name: "DC",
            slug: "dc",
          },
          {
            _id: "OW2M9i",
            name: "Siêu Anh Hùng",
            slug: "sieu-anh-hung",
          },
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
      },
      {
        _id: "9bb9BEsZ",
        original_title: "84제곱미터",
        english_title: "Wall to Wall",
        title: "84 Mét Vuông",
        slug: "84-met-vuong",
        overview:
          "Dốc hết tiền tiết kiệm cả đời để mua một căn hộ mới, người đàn ông nọ phát hiện ra các bức tường trong căn hộ này đầy những tiếng ồn đáng sợ, hàng xóm thù địch và bí mật ghê rợn.\r\n",
        release_date: "2025-07-17",
        quality: "fhd",
        rating: "T16",
        runtime: 118,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "6877d35797c49e617539537e",
              path: "de/20/de20f19c9485ac49476ac3ece58ca529/de20f19c9485ac49476ac3ece58ca529.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "6877d35dedeccef1d6ad8bef",
              path: "40/29/40297c33d2560db6f2445081ff923594/40297c33d2560db6f2445081ff923594.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "6877d36597c49e6175395389",
              path: "96/9b/969b6c0008155b24de996148aa2d181c/969b6c0008155b24de996148aa2d181c.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "6879f65697c49e6175396713",
              path: "5f/29/5f292166575d638b305d560ca51a1f0b/5f292166575d638b305d560ca51a1f0b.png",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
        ],
      },
      {
        _id: "QigIhNas",
        original_title: "Jurassic World Rebirth",
        english_title: "Jurassic World Rebirth",
        title: "Thế Giới Khủng Long: Tái Sinh",
        slug: "the-gioi-khung-long-tai-sinh",
        overview:
          "Phim lấy bối cảnh 5 năm sau phần phim Thế Giới Khủng Long: Lãnh Địa (Jurassic World: Dominion). Thế Giới Khủng Long: Tái Sinh mở ra một chương mới đầy tính hành động, chứng kiến một đội khai thác chạy đua đến nơi nguy hiểm nhất trên Trái Đất. Dàn nhân vật chính là bộ ba Scarlett Johansson, Mahershala Ali và Jonathan Bailey dấn thân vào một nhiệm vụ cực kỳ hiểm nguy, đó chính là cố gắng lấy DNA có thể dẫn đến một bước đột phá y học cho nhân loại. Chìa khóa của nó tình cờ lại là DNA của ba con khủng long khổng lồ nhất trên cạn, biển và không trung trong sinh quyển nhiệt đới. Hành trình này sẽ đưa nhóm nhân vật chính băng rừng, vượt biển, đối mặt với nhiều loài khủng long kỳ lạ, nguy hiểm nhưng cũng đầy lý thú, từ đó hé mở nhiều điều bí ẩn mà tạo hóa đã giấu khỏi con người suốt bấy lâu nay.",
        release_date: "2025-07-02",
        quality: "cam",
        rating: "T16",
        runtime: 130,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "687806c2edeccef1d6ad8dc0",
              path: "e8/58/e858d26041ca8a9896aa606d549f9bdc/e858d26041ca8a9896aa606d549f9bdc.jpg",
              type: 1,
            },
            {
              _id: "687806c8edeccef1d6ad8dcb",
              path: "12/a2/12a222c45d2c1c0a05a35f354ed86da2/12a222c45d2c1c0a05a35f354ed86da2.jpg",
              type: 1,
            },
            {
              _id: "687806cdedeccef1d6ad8dd6",
              path: "8d/06/8d06fb6e1be482cbe8c62914a9e05d0e/8d06fb6e1be482cbe8c62914a9e05d0e.jpg",
              type: 1,
            },
            {
              _id: "687806d2edeccef1d6ad8de1",
              path: "f5/93/f5936fa72cab3567d3cf52840810d8de/f5936fa72cab3567d3cf52840810d8de.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "6878078897c49e6175395575",
              path: "2f/2f/2f2ff60e643d641a2655ba44b9f45fbb/2f2ff60e643d641a2655ba44b9f45fbb.jpg",
              type: 2,
            },
            {
              _id: "6878078fedeccef1d6ad8e0d",
              path: "05/16/05168942d6b75e2bde65cbcc742e5d3c/05168942d6b75e2bde65cbcc742e5d3c.jpg",
              type: 2,
            },
            {
              _id: "68780795edeccef1d6ad8e18",
              path: "86/b7/86b75d60e1762d2780f0f23365354226/86b75d60e1762d2780f0f23365354226.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68780727edeccef1d6ad8df7",
              path: "54/05/5405bf6a627e5bdcc9bc6acac645e6a4/5405bf6a627e5bdcc9bc6acac645e6a4.webp",
              type: 3,
            },
            {
              _id: "68780731edeccef1d6ad8e02",
              path: "f9/f1/f9f19a5f7eaa5795b11e3d369c48cbca/f9f19a5f7eaa5795b11e3d369c48cbca.webp",
              type: 3,
            },
            {
              _id: "6878073997c49e617539556a",
              path: "26/a5/26a53600a57c7a4497a22606eecbd9b3/26a53600a57c7a4497a22606eecbd9b3.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "6878079b97c49e6175395580",
              path: "15/1b/151b39ab91873a620e3c78fab5686d23/151b39ab91873a620e3c78fab5686d23.png",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
          {
            _id: "zUEian",
            name: "Giả Tưởng",
            slug: "gia-tuong",
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
        quality: "4k",
        rating: "T13",
        runtime: 110,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "8.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
      {
        _id: "Etwg8kgy",
        original_title: "하이파이브",
        english_title: "Hi-Five",
        title: "Bộ 5 Siêu Đẳng Cấp",
        slug: "bo-5-sieu-dang-cap",
        overview:
          "Chuyện phim xoay quanh năm con người xa lạ, vô tình sở hữu các siêu năng lực sau khi được cấy ghép nội tạng từ những người hiến tặng bí ẩn. Trên hành trình khám phá “món quà” bất ngờ này, họ buộc phải đối mặt với những thế lực đen tối đang khao khát chiếm đoạt khả năng phi thường ấy.\r\n\r\n",
        release_date: "2025-05-30",
        quality: "fhd",
        rating: "T13",
        runtime: 120,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.0",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "6862576e569444840c4253af",
              path: "ff/5a/ff5a373283e20bc5ce701d386741a1f7/ff5a373283e20bc5ce701d386741a1f7.jpg",
              type: 1,
            },
            {
              _id: "6862577b9586d57e1edba598",
              path: "ab/22/ab22c81a26a92cf9e7fae5c982cc0a24/ab22c81a26a92cf9e7fae5c982cc0a24.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68625806569444840c4253be",
              path: "e2/f9/e2f90255d32e9cee9048f8cea9eed2a6/e2f90255d32e9cee9048f8cea9eed2a6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68727c5f569444840c42e3d2",
              path: "98/a5/98a5b22913fbf7a1505ba29fdfd70353/98a5b22913fbf7a1505ba29fdfd70353.webp",
              type: 3,
            },
            {
              _id: "687281f2569444840c42e3f3",
              path: "8d/9c/8d9c68e67801743356391c099831aff3/8d9c68e67801743356391c099831aff3.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "687281eb9586d57e1edc34cd",
              path: "d7/19/d71987a8894a4fcf65a49695f42bffc4/d71987a8894a4fcf65a49695f42bffc4.png",
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
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wN4Ysm",
            name: "Viễn Tưởng",
            slug: "vien-tuong",
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
        quality: "4k",
        rating: "T18",
        runtime: 100,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "6.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
        _id: "50q7Hkub",
        original_title: "KPop Demon Hunters",
        english_title: "KPop Demon Hunters",
        title: "Thợ Săn Quỷ Kpop",
        slug: "tho-san-quy-kpop",
        overview:
          "Khi các siêu sao Kpop Rumi, Mira và Zoey không bận trình diễn tại các sân vận động cháy vé, họ sử dụng sức mạnh bí mật để bảo vệ người hâm mộ khỏi những mối đe dọa siêu nhiên.\r\n",
        release_date: "2025-06-20",
        quality: "fhd",
        rating: "K",
        runtime: 95,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.8",
        latest_episode: {
          1: 1,
          2: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "685533f0671e3ef1b03a48dd",
              path: "01/a9/01a9b136a8df472c2718001fc3b52f98/01a9b136a8df472c2718001fc3b52f98.jpg",
              type: 1,
            },
            {
              _id: "685533f5671e3ef1b03a48e8",
              path: "11/a0/11a035d51f54182891a4ee26cb6e0d79/11a035d51f54182891a4ee26cb6e0d79.jpg",
              type: 1,
            },
            {
              _id: "685533fa671e3ef1b03a48f3",
              path: "0f/8d/0f8d7be3d981fad9e0c99241d3140f63/0f8d7be3d981fad9e0c99241d3140f63.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "685533ff671e3ef1b03a48fe",
              path: "05/ec/05eca8c9ec0c24d87dc1caba104d60f2/05eca8c9ec0c24d87dc1caba104d60f2.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68553405671e3ef1b03a4909",
              path: "9e/e4/9ee48d07087f4e13de00de4a14188ffe/9ee48d07087f4e13de00de4a14188ffe.webp",
              type: 3,
            },
            {
              _id: "6855340a671e3ef1b03a4914",
              path: "66/92/66926eb9fbd54e961a3007206a003b93/66926eb9fbd54e961a3007206a003b93.webp",
              type: 3,
            },
          ],
          titles: [],
        },
        genres: [
          {
            _id: "2xCjTG",
            name: "Hành Động",
            slug: "hanh-dong",
          },
          {
            _id: "QyBY48",
            name: "Nhạc Kịch",
            slug: "nhac-kich",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "ZERgfX",
            name: "Hoạt Hình",
            slug: "hoat-hinh",
          },
          {
            _id: "wN4Ysm",
            name: "Viễn Tưởng",
            slug: "vien-tuong",
          },
        ],
      },
      {
        _id: "vDEpRqtW",
        original_title: "John Wick Presents: Ballerina",
        title: "Từ Vũ Trụ John Wick: Ballerina",
        slug: "tu-vu-tru-john-wick-ballerina",
        overview:
          "Lấy bối cảnh giữa sự kiện của Sát thủ John Wick: Phần 3 – Chuẩn Bị Chiến Tranh, bộ phim Từ Vũ Trụ John Wick: Ballerina theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình trả thù cho cái chết của gia đình mình, dưới sự huấn luyện của tổ chức tội phạm Ruska Roma.\r\n",
        release_date: "2025-06-04",
        rating: "T16",
        runtime: 125,
        type: 1,
        status: "Released",
        english_title: "Ballerina",
        imdb_rating: "7.0",
        quality: "4k",
        latest_episode: {
          1: 1,
          4: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "68638ccf9586d57e1edbac81",
              path: "c1/ec/c1ec338ee8387d310986488629d5e289/c1ec338ee8387d310986488629d5e289.webp",
              type: 1,
            },
            {
              _id: "68638cd49586d57e1edbac90",
              path: "c4/a7/c4a72627947bb1bfe0142d138d99666c/c4a72627947bb1bfe0142d138d99666c.webp",
              type: 1,
            },
            {
              _id: "68638cdd569444840c425ab3",
              path: "90/d5/90d5fb1e864ee9f1f503e08e05143e8f/90d5fb1e864ee9f1f503e08e05143e8f.webp",
              type: 1,
            },
            {
              _id: "68638ebb569444840c425b2a",
              path: "fe/15/fe15c492d94cdcaf1e5e379f44b94d59/fe15c492d94cdcaf1e5e379f44b94d59.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68638e4e569444840c425aeb",
              path: "f8/02/f802c77d3156545e27382523ae83dd7d/f802c77d3156545e27382523ae83dd7d.jpg",
              type: 2,
            },
            {
              _id: "68638e559586d57e1edbacc4",
              path: "4c/3c/4c3ce630144d9d465e301f1c0582d0ba/4c3ce630144d9d465e301f1c0582d0ba.jpg",
              type: 2,
            },
            {
              _id: "68638e5a9586d57e1edbaccf",
              path: "d9/01/d90107064c9e897a820d32493d4825ca/d90107064c9e897a820d32493d4825ca.webp",
              type: 2,
            },
            {
              _id: "68638e6b569444840c425b06",
              path: "c0/ce/c0ce104928f09869d57d34ef7114e8e1/c0ce104928f09869d57d34ef7114e8e1.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68638ce39586d57e1edbac9b",
              path: "0d/7e/0d7e0179ed1c60fa3caf57cea4ed6663/0d7e0179ed1c60fa3caf57cea4ed6663.webp",
              type: 3,
            },
            {
              _id: "68638cea569444840c425abe",
              path: "a6/2c/a62c136aa493ba29aa54ae0834fc9721/a62c136aa493ba29aa54ae0834fc9721.webp",
              type: 3,
            },
            {
              _id: "68638cef569444840c425ac9",
              path: "a0/0e/a00ecdaed594e51e90b965b24c5ad281/a00ecdaed594e51e90b965b24c5ad281.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "68638e769586d57e1edbace1",
              path: "eb/fb/ebfb0189613d2ccfc8734c2efbd9de5e/ebfb0189613d2ccfc8734c2efbd9de5e.png",
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
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
      },
      {
        _id: "KFwS2fqR",
        original_title: "ซองแดงแต่งผี",
        english_title: "The Red Envelope",
        title: "Cưới Ma Giải Hạn",
        slug: "cuoi-ma-giai-han",
        overview:
          "Menn, một tên trộm cắp đang làm tay trong cho cảnh sát, đồng thời cũng là một gã trai thẳng chính hiệu. Ngày nọ, Menn vô tình nhặt được một bao lì xì đỏ bí ẩn và bị ràng buộc bởi khế ước siêu nhiên, bắt anh phải kết hôn với một hồn ma. Không dừng lại ở đó, số phận càng trớ trêu hơn khi “vợ” của Menn không chỉ là người cõi âm, mà còn là một “mỹ” vong dễ thương với tư tưởng cấp tiến tên Titi. Menn buộc phải giúp Titi tìm ra sự thật đằng sau vụ tai nạn cướp đi sinh mạng của cậu để Titi được siêu thoát và trả lại bình yên cho mình. Trùng hợp làm sao, tất cả đầu mối đều dẫn đến vụ buôn ma túy bất hợp pháp do Menn và Goi, nữ cảnh sát lớn tuổi mà Menn yêu mến, đang điều tra. Tin rằng việc phá án sẽ có lợi cho sự nghiệp và tình yêu của mình, Menn quyết định tham gia phi vụ bất bình thường này để giúp Titi, từ đó tạo nên một mối liên kết không tưởng giữa đồng tính và trai thẳng, giữa người sống và kẻ chết.\r\n",
        release_date: "2025-03-20",
        quality: "fhd",
        rating: "T16",
        runtime: 127,
        type: 1,
        status: "Released",
        latest_season: 0,
        imdb_rating: "7.2",
        latest_episode: {
          1: 1,
        },
        year: "2025",
        images: {
          posters: [
            {
              _id: "68760e25edeccef1d6ad7dbf",
              path: "8d/30/8d30e80270467d9340f87fdf246ad102/8d30e80270467d9340f87fdf246ad102.webp",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "68760e2aedeccef1d6ad7dca",
              path: "58/ea/58ea9e5070bfdf9ef3e83a61499da545/58ea9e5070bfdf9ef3e83a61499da545.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "68760e2eedeccef1d6ad7dd5",
              path: "32/9f/329fe46824c8623733781ca1d58bda32/329fe46824c8623733781ca1d58bda32.webp",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "68760e48edeccef1d6ad7de0",
              path: "5c/dc/5cdc84ab7d668572f940496ffed684d5/5cdc84ab7d668572f940496ffed684d5.png",
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
            _id: "J1tgRB",
            name: "LGBT+",
            slug: "lgbt",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
          },
        ],
      },
      {
        _id: "PojN4HEd",
        original_title: "Harry Potter and the Philosopher's Stone",
        title: "Harry Potter và Hòn Đá Phù Thủy",
        slug: "harry-potter-va-hon-da-phu-thuy",
        overview:
          "Harry Potter, một cậu bé bình thường, bất ngờ được đưa đến Trường Phù thủy và Pháp sư Hogwarts, nơi cậu bắt đầu hành trình phi thường khám phá thế giới phép thuật. Tại đây, Harry phải học cách sử dụng phép thuật, kết bạn mới và đối mặt với những kẻ thù nguy hiểm, đồng thời nhận ra rằng thế giới phù thủy không hề đơn giản như cậu tưởng tượng.",
        release_date: "2001-11-16",
        rating: "K",
        runtime: 152,
        type: 1,
        status: "Released",
        quality: "4k",
        english_title: "Harry Potter and the Sorcerer's Stone",
        latest_episode: {
          1: 1,
          2: 1,
          3: 1,
        },
        imdb_rating: "7.7",
        year: "2001",
        images: {
          posters: [
            {
              _id: "671f67448215668b558db401",
              path: "54/f9/54f979e549613213bfec8a605803f2b0/54f979e549613213bfec8a605803f2b0.jpg",
              type: 1,
            },
            {
              _id: "671f67728215668b558db40c",
              path: "0d/03/0d03513b7899b4c59067fa5c0ecc7fb2/0d03513b7899b4c59067fa5c0ecc7fb2.jpg",
              type: 1,
            },
            {
              _id: "671f677cd1065b415a3fd423",
              path: "d2/ea/d2ea54a1e0c02fc2fd3e85c30e2c3360/d2ea54a1e0c02fc2fd3e85c30e2c3360.jpg",
              type: 1,
            },
            {
              _id: "671f6783d1065b415a3fd42e",
              path: "d2/b9/d2b92ebcab5c711e10787f42616783af/d2b92ebcab5c711e10787f42616783af.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              _id: "671f67948215668b558db422",
              path: "0a/ce/0ace2c8e95ee6b10b915f888aaa31f17/0ace2c8e95ee6b10b915f888aaa31f17.jpg",
              type: 2,
            },
            {
              _id: "671f67a18215668b558db438",
              path: "5b/e4/5be44289a65807ccf6949af6507c3ce6/5be44289a65807ccf6949af6507c3ce6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              _id: "671f67aad1065b415a3fd439",
              path: "b1/de/b1de92dcbd3205fc39bd508e7d42e541/b1de92dcbd3205fc39bd508e7d42e541.jpg",
              type: 3,
            },
            {
              _id: "671f67c6d1065b415a3fd444",
              path: "a7/24/a724335b954577aa36dac8d9b16926d3/a724335b954577aa36dac8d9b16926d3.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              _id: "671f67d3d1065b415a3fd44f",
              path: "11/08/1108ec9e8b952ba6f08a58605355cd1e/1108ec9e8b952ba6f08a58605355cd1e.png",
              type: 4,
            },
          ],
        },
        genres: [
          {
            _id: "ky4BgF",
            name: "Kinh Điển",
            slug: "kinh-dien",
          },
          {
            _id: "m62MH1",
            name: "Phép Thuật",
            slug: "phep-thuat",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
          {
            _id: "zUEian",
            name: "Giả Tưởng",
            slug: "gia-tuong",
          },
        ],
      },
    ],
  },
  {
    _id: "GEFuE6",
    name: "Phim Nhật Mới Oanh Tạc Chốn Này",
    slug: "phim-nhat-moi-oanh-tac-chon-nay",
    color: "#cd7e5f",
    order: 4,
    style: 1,
    random_data: false,
    type: 2,
    filter: {
      country_code: ["JP"],
      genre_ids: ["2yxWKe"],
      status: ["On Going"],
      type: "2",
      top_views: "",
      limit: "20",
      sort_by: "updated_at",
      order: "-1",
    },
    movies: [
      {
        _id: "psVbNZA9",
        original_title: "私の夫と結婚して",
        english_title: "Marry My Husband: Japan",
        title: "Cô Đi Mà Lấy Chồng Tôi (Bản Nhật)",
        slug: "co-di-ma-lay-chong-toi-ban-nhat",
        overview:
          "Kanbe Misa luôn sống cuộc đời của “vai phụ”, lúc nào cũng đặt người khác lên trước bản thân. Cô dành trọn niềm tin vào chồng và cô bạn thân nhất, thế nhưng họ đáp lại Misa bằng sự phản bội cay nghiệt và cướp đi cả mạng sống của cô. Tưởng chừng mọi thứ đã kết thúc, Misa bất ngờ tỉnh dậy và nhận ra mình đã quay về quá khứ, trở lại mốc thời gian 10 năm trước. Lần này, cô không còn là người phụ nữ cam chịu như trước. Quyết tâm trả thù, Misa bắt đầu lên kế hoạch hủy hoại hai kẻ từng đâm sau lưng mình. Nhưng sự xuất hiện của cấp trên Suzuki Wataru - người mà cô chưa từng có mối liên hệ nào trong “kiếp trước” - lại khiến trái tim của Misa bắt đầu rung động. Ở cuộc đời thứ hai này, Misa không còn là vai phụ mà sẽ là nhân vật chính trong câu chuyện của chính mình, tự mình quyết định hạnh phúc.",
        release_date: "2025-06-27",
        quality: "fhd",
        rating: "T13",
        runtime: 60,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "8.5",
        latest_episode: {
          1: 8,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
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
              path: "8d/49/8d49184894f6a0e3653d664948a26fe5/8d49184894f6a0e3653d664948a26fe5.jpg",
              type: 1,
            },
            {
              path: "5a/db/5adb6f56b7e79f352bc00daaa2abe74c/5adb6f56b7e79f352bc00daaa2abe74c.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "03/4b/034b196edcaba0f89a4030613a368f6a/034b196edcaba0f89a4030613a368f6a.jpg",
              type: 2,
            },
            {
              path: "59/87/5987c204100212c3e0b0b29b0f6ba0a6/5987c204100212c3e0b0b29b0f6ba0a6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "da/c0/dac05b5ca878939f64cbaac2382a9694/dac05b5ca878939f64cbaac2382a9694.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "1d/32/1d32ff86dcb874fdcd19c845036693d5/1d32ff86dcb874fdcd19c845036693d5.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "7qs3721H",
        original_title: "パラレル夫婦 死んだ“僕と妻”の真実",
        english_title: "Parallel Couple",
        title: "Cặp Đôi Thực Tại: Khi Thế Giới Va Chạm",
        slug: "cap-doi-thuc-tai-khi-the-gioi-va-cham",
        overview:
          "Sau tai nạn cướp đi người vợ yêu dấu Natsume, Kanta chìm trong nỗi đau mất mát. Nhưng điều kỳ lạ xảy ra khi Natsume bất ngờ trở về nhà, còn sống, như chưa từng ra đi. Cùng lúc đó, ở một thế giới song song, chính Kanta mới là người đã chết. Khi hai thực tại chồng lấn lên nhau, họ bước vào hành trình xuyên qua ranh giới của sự sống và cái chết, để níu giữ tình yêu và những khoảnh khắc chưa kịp sống trọn vẹn.",
        release_date: "2025-04-01",
        quality: "fhd",
        rating: "T16",
        runtime: 22,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 2,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "gVRG25",
            name: "Kỳ Ảo",
            slug: "ky-ao",
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
              path: "0e/8e/0e8eefa3faa08d18eadf238e32f0b7c5/0e8eefa3faa08d18eadf238e32f0b7c5.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "d7/93/d7938334f747c6b6bf5294c945cb5cae/d7938334f747c6b6bf5294c945cb5cae.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "13/bb/13bb632659f96e5798f57c111bf6eafe/13bb632659f96e5798f57c111bf6eafe.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "CYtCFVK8",
        original_title: "こんばんは、朝山家です。",
        english_title: "The Asayama Family",
        title: "Gia Đình Asayama",
        slug: "gia-dinh-asayama",
        overview:
          "Vào buổi sáng lẽ ra phải là đỉnh cao sự nghiệp, một biên kịch thành công lại biến ngôi nhà thành bãi chiến trường khi anh ám ảnh với độ phủ sóng trên mạng xã hội. Trong khi đó, người vợ phải vật lộn xoay xở giữa áp lực công việc, con cái và một người chồng chỉ biết nghĩ đến bản thân. Khi danh vọng va chạm với đời thường, một gia đình tưởng chừng hoàn hảo bắt đầu rơi vào khủng hoảng.",
        release_date: "2025-07-06",
        quality: "fhd",
        rating: "T16",
        runtime: 44,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "8VSWst",
            name: "Gia Đình",
            slug: "gia-dinh",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
        ],
        images: {
          posters: [
            {
              path: "83/b2/83b219be680b84276f220dfc379adcc4/83b219be680b84276f220dfc379adcc4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "e8/9a/e89a49cbc2be8a19261196c741dcd81b/e89a49cbc2be8a19261196c741dcd81b.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "f2/dd/f2ddd08c294685a3735e23bf63c7ccdc/f2ddd08c294685a3735e23bf63c7ccdc.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "6c/c9/6cc94abf38ddef80b7745528fe57b0fb/6cc94abf38ddef80b7745528fe57b0fb.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "6K0sZqTb",
        original_title:
          "北くんがかわいすぎて手に余るので、３人でシェアすることにしました。",
        english_title:
          "Kita-kun Is Too Cute to Handle, So the 3 of Us Decided to Share Him!",
        title:
          "Kita-kun Quá Đáng Yêu Để Độc Chiếm, 3 Chúng Tôi Sẽ Cùng Chia Sẻ",
        slug: "kita-kun-qua-dang-yeu-de-doc-chiem-3-chung-toi-se-cung-chia-se",
        overview:
          "Ba con người cô đơn, mỗi người mang một nỗi đau không tên, bất ngờ tìm thấy tia sáng trong cuộc đời khi gặp Kita-kun — chàng trai trẻ quyến rũ với trái tim dịu dàng. Nhưng khi tình cảm nảy nở từ cả ba phía, họ không chọn cách cạnh tranh, mà quyết định làm điều không ai ngờ tới: chia sẻ cùng một tình yêu, cùng nhau sống dưới một mái nhà. ",
        release_date: "2025-07-01",
        quality: "fhd",
        rating: "T18",
        runtime: 25,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 2,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
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
              path: "88/2c/882c965d976471a96aa82464272f4fe6/882c965d976471a96aa82464272f4fe6.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "eb/2e/eb2ecbee099102efe1729f7bfe600d18/eb2ecbee099102efe1729f7bfe600d18.jpg",
              type: 2,
            },
            {
              path: "d6/b2/d6b22354ea0843654fa40802a6fed75d/d6b22354ea0843654fa40802a6fed75d.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "20/a9/20a9740cad86e63e9f9c61e10d5bbfd6/20a9740cad86e63e9f9c61e10d5bbfd6.png",
              type: 3,
            },
            {
              path: "d2/a7/d2a760a152b721de6b8edbd30eef8f16/d2a760a152b721de6b8edbd30eef8f16.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "0RUoWHud",
        original_title: "明日はもっと、いい日になる",
        english_title: "Tomorrow will be a better day",
        title: "Ngày Mai Sẽ Là Ngày Tươi Sáng Hơn",
        slug: "ngay-mai-se-la-ngay-tuoi-sang-hon",
        overview:
          "Dưới cái nắng như thiêu đốt của một thị trấn ven biển, thám tử Natsui Tsubasa hối hả lao qua những con phố rực lửa, không ngờ rằng cuộc đời mình cũng sắp rẽ sang một hướng khác. Khi bị bất ngờ điều chuyển từ truy bắt tội phạm bạo lực sang làm việc tại cơ quan phúc lợi trẻ em, anh buộc phải từ bỏ vai trò điều tra viên gan góc để học cách lắng nghe, bảo vệ và chữa lành. Giữa cái nắng bỏng rát và những vết thương lòng chưa lành của cả anh lẫn lũ trẻ, một hành trình mới bắt đầu — nơi công lý không còn chỉ là truy bắt, mà là lòng trắc ẩn.",
        release_date: "2025-07-07",
        quality: "fhd",
        rating: "T13",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
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
              path: "0e/5f/0e5f30fcd8d4d2ab8324d32d243decc3/0e5f30fcd8d4d2ab8324d32d243decc3.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "15/20/1520b9196ff66b3a7dd69f970e89ee8a/1520b9196ff66b3a7dd69f970e89ee8a.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "6f/bd/6fbd3905afcec11552c77b75fd64fcef/6fbd3905afcec11552c77b75fd64fcef.webp",
              type: 3,
            },
            {
              path: "87/da/87da7b8d384a8000a12ce9adbdff8e22/87da7b8d384a8000a12ce9adbdff8e22.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "7b/f0/7bf07c1dddd961a662eaf543cf1e0c41/7bf07c1dddd961a662eaf543cf1e0c41.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "njwhDbiH",
        original_title: "シンデレラ クロゼット",
        english_title: "Cinderella Closet",
        title: "Tủ Quần Áo Lọ Lem",
        slug: "tu-quan-ao-lo-lem",
        overview:
          "Haruka rời quê lên Tokyo học nhưng cảm thấy lạc lõng giữa những bạn học sành điệu, cho đến khi cô gặp một fashionista xinh đẹp và đầy bí ẩn.\r\n",
        release_date: "2025-07-02",
        quality: "fhd",
        rating: "T16",
        runtime: 45,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "8.2",
        latest_episode: {
          1: 3,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "tvr5v7",
            name: "Lãng Mạn",
            slug: "lang-man",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
        ],
        images: {
          posters: [
            {
              path: "53/8d/538d6d80c97c6f08b68d1a4904cc2854/538d6d80c97c6f08b68d1a4904cc2854.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "f4/f2/f4f2f2d76d205327b241d309304419e6/f4f2f2d76d205327b241d309304419e6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "91/47/91475658a5c8fddb79ae478e17ab2e71/91475658a5c8fddb79ae478e17ab2e71.webp",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "KFRgaBM3",
        original_title: "誘拐の日",
        english_title: "The Kidnapping Day",
        title: "Lương Tâm Kẻ Bắt Cóc",
        slug: "luong-tam-ke-bat-coc",
        overview:
          "Để có tiền phẫu thuật tim cho con gái, Masamune Shinjo – dưới áp lực từ vợ – đã lên kế hoạch bắt cóc tiểu thư Rin Nanase. Nhưng sau khi Rin mất trí nhớ, anh buộc phải giả làm cha của cô. Khi cha mẹ thật của Rin bị sát hại, Masamune lập tức trở thành nghi phạm số một. Bị truy đuổi, anh buộc phải chạy trốn cùng cô gái thiên tài và dấn thân vào hành trình vạch trần sự thật đằng sau những tội ác kinh hoàng.",
        release_date: "2025-07-08",
        quality: "fhd",
        rating: "T16",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "bd/c2/bdc266b83aa0a97e020d33783b6978a4/bdc266b83aa0a97e020d33783b6978a4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "ca/b2/cab21c70129046322137ba4ff6cafefb/cab21c70129046322137ba4ff6cafefb.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "4d/63/4d638301781e99d8685aa8c261b18688/4d638301781e99d8685aa8c261b18688.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "5L89sdIu",
        original_title: "愛の、がっこう。",
        english_title: "Learning to Love",
        title: "Bài Học Tình Yêu",
        slug: "bai-hoc-tinh-yeu",
        overview:
          "Bộ phim lãng mạn này kể về hai con người tưởng chừng không thể chung đường, nhưng lại tìm thấy nhau qua những buổi học thầm lặng. Một giáo viên trung học nghiêm khắc, lớn lên trong một gia đình khuôn phép, bắt đầu dạy kèm cho một chàng trai làm việc ở hộp đêm – tốt bụng nhưng mù chữ. Khi tình cảm giữa họ dần lớn lên, định kiến xã hội, ghen tuông và thành kiến bắt đầu đe dọa mối quan hệ bị cấm đoán này.",
        release_date: "2025-07-10",
        quality: "fhd",
        rating: "T16",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
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
              path: "2c/23/2c237cf3acdc16106218eb7b28c1a8a7/2c237cf3acdc16106218eb7b28c1a8a7.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "c2/6c/c26c7b25db9e7fac7006b8c816c08649/c26c7b25db9e7fac7006b8c816c08649.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "ce/66/ce66d19842069bf9a92cb69d33eb190c/ce66d19842069bf9a92cb69d33eb190c.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "3wtCs4Ah",
        original_title: "恋愛禁止",
        english_title: "Forbidden to Love",
        title: "Tình Yêu Cấm Kỵ",
        slug: "tinh-yeu-cam-ky",
        overview:
          "Một người tình cũ vũ phu bạo lực, một tình yêu mới đầy tích cực và một kẻ theo dõi đầy bí ẩn. Một nữ môi giới bất động sản ở Tokyo buộc phải đối mặt với những sự thật bị chôn giấu và những bí ẩn chưa có lời giải.",
        release_date: "2025-07-03",
        quality: "fhd",
        rating: "T16",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
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
              path: "cb/43/cb43580c1b8a1d2e5216aaf386f21419/cb43580c1b8a1d2e5216aaf386f21419.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "3c/9b/3c9b01e39ff3618ec55b10e1dcbcef9f/3c9b01e39ff3618ec55b10e1dcbcef9f.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "9c/b1/9cb1781f85a934d874adbe80f9327981/9cb1781f85a934d874adbe80f9327981.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "nTQwD45z",
        original_title: "医价之裁",
        english_title: "DOCTOR PRICE",
        title: "Doctor Price: Cái Giá Nghề Y",
        slug: "doctor-price-cai-gia-nghe-y",
        overview:
          'Kanenari Naruki (Iwata) từng là bác sĩ nhưng nay thành lập công ty chuyển việc Dr. Connection, chuyên kiếm sống bằng cách "làm môi giới để bán những bác sĩ muốn chuyển việc cho các bệnh viện." Naruki cùng với Yonaga Aki (Makita), nhân viên hành chính làm việc cừ khôi, ăn nói sắc bén, ra tay trừng phạt cái ác đang rình rập trong ngành y tế. Đồng thời anh cũng không ngừng truy tìm sự thật đằng sau vụ tự sát của cha mình.\r\n',
        release_date: "2025-07-06",
        quality: "fhd",
        rating: "T16",
        runtime: 45,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 2,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "5c/b8/5cb89d2b0f7609e3b2dc0bf9f6fbb15f/5cb89d2b0f7609e3b2dc0bf9f6fbb15f.jpg",
              type: 1,
            },
            {
              path: "8d/a3/8da3f072f2d07cf7010fd1a5567a84d4/8da3f072f2d07cf7010fd1a5567a84d4.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "87/67/8767bf5e0e3272120d144676ac442c10/8767bf5e0e3272120d144676ac442c10.jpg",
              type: 2,
            },
            {
              path: "5f/83/5f8397465e74fe29c73eeabf8eca8ceb/5f8397465e74fe29c73eeabf8eca8ceb.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "87/55/87550e0643ef7fb8179c7826645baa90/87550e0643ef7fb8179c7826645baa90.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "f6/f2/f6f265542899e4ea53a0a7d249919132/f6f265542899e4ea53a0a7d249919132.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "Z4ljoMk4",
        original_title: "恋は闇",
        english_title: "Murderous Encounter",
        title: "Bóng Tối Cuộc Tình",
        slug: "bong-toi-cuoc-tinh",
        overview:
          "Khi hai phóng viên rơi vào lưới tình trong lúc điều tra một chuỗi án mạng rúng động, sự thật dần được bóc trần khiến mọi thứ trở nên mơ hồ. Người cô yêu – là cộng sự đáng tin cậy, hay chính là kẻ giết người tàn bạo đang bị săn đuổi? Trong cuộc chạy đua giữa tình yêu và sự thật, chỉ một lựa chọn có thể cứu lấy cô.",
        release_date: "2025-04-16",
        quality: "fhd",
        rating: "T16",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.4",
        latest_episode: {
          1: 4,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "26/58/26588dc915e21b243b4b5ea2745588e2/26588dc915e21b243b4b5ea2745588e2.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "fe/93/fe93911258c826bb1010834025a82a79/fe93911258c826bb1010834025a82a79.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "55/75/557574c182b7b8ca8fdc1ab7d63d6396/557574c182b7b8ca8fdc1ab7d63d6396.webp",
              type: 3,
            },
          ],
          titles: [
            {
              path: "42/ac/42acb0f4aa23f507126143f8224d1354/42acb0f4aa23f507126143f8224d1354.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "rrwVP5oN",
        original_title: "ダメマネ！ －ダメなタレント、マネジメントします－",
        english_title: "I’m a D-list Handler",
        title: "Bà Bầu Gánh Sao Xịt",
        slug: "ba-bau-ganh-sao-xit",
        overview:
          'Bối cảnh câu chuyện là ở Phòng 4 của TOYO Production, một nơi đầy những nghệ sĩ giải trí lập dị. Kandagawa Miwa (Kawaei), từng là một diễn viên thần đồng nhí, là quản lý mới nhận việc. Mặc dù bị tổng quản lý Saigawa Shinichiro (Yasuda) hống hách gây khó dễ, Miwa vẫn cố gắng vận dụng kỹ năng diễn xuất đã có được khi còn nhỏ và khả năng chiếm được cảm tình của mọi người để động viên những "tài năng vô dụng" đang trên bờ suy sụp và giúp họ đứng vững trở lại.',
        release_date: "2025-04-20",
        quality: "fhd",
        rating: "T13",
        runtime: 45,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "7.2",
        latest_episode: {
          1: 8,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "8e/85/8e85c7194c409cc489fa5e89a2de9db9/8e85c7194c409cc489fa5e89a2de9db9.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "11/e5/11e53dde452b95c5b6860c07efea3786/11e53dde452b95c5b6860c07efea3786.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "80/9d/809d757f681e0ad22355106d4567278e/809d757f681e0ad22355106d4567278e.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "TaqfMunj",
        original_title: "霧尾ファンクラブ",
        english_title: "Kirio Fanclub",
        title: "Hội Mê Đắm Kirio",
        slug: "hoi-me-dam-kirio",
        overview:
          'Hai nữ sinh trung học Aimi và Nami có một vài điểm chung: học chung lớp, tính cách bựa như nhau, và đặc biệt là cùng thích một cậu bạn cao ráo, gương mặt sáng sủa, mái tóc ngắn, tên Kirio, cậu bạn cùng lớp giản dị, nhạt nhòa và khó hiểu. Kirio-kun không hề lộ diện mà chỉ được khắc họa qua những cuộc đối thoại giữa Aimi và cô bạn  Nami kiểu như, "Sao giờ? Kirio-kun xì hơi lớn quá" và "Hả? Vui quá còn gì."',
        release_date: "2025-04-02",
        quality: "fhd",
        rating: "T18",
        runtime: 25,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 10,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "n7N6C6",
            name: "Học Đường",
            slug: "hoc-duong",
          },
          {
            _id: "wSzjQd",
            name: "Chuyển Thể",
            slug: "chuyen-the",
          },
        ],
        images: {
          posters: [
            {
              path: "80/32/803288b3428ca5231cdfe750d5c0c33e/803288b3428ca5231cdfe750d5c0c33e.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "72/b2/72b2eb78999864d108c99937b6838bb6/72b2eb78999864d108c99937b6838bb6.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "38/83/3883de6b39a1f0eef990f7cfe5632994/3883de6b39a1f0eef990f7cfe5632994.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "uRQjhFAH",
        original_title: "天久鷹央の推理カルテ",
        english_title: "Ameku M.D.: Doctor Detective",
        title: "Hồ Sơ Bệnh Án của Bác Sĩ Ameku",
        slug: "ho-so-benh-an-cua-bac-si-ameku",
        overview:
          "Yu Takanashi, một cựu bác sĩ phẫu thuật, gia nhập Khoa Chẩn đoán Tổng hợp tại Bệnh viện Đa khoa Tenikai, nơi anh cộng tác với Takao Ameku — một bác sĩ tài năng nhưng lập dị — để giải quyết những ca bệnh bí ẩn.",
        release_date: "2025-04-22",
        quality: "fhd",
        rating: "T18",
        runtime: 50,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "6.3",
        latest_episode: {
          1: 3,
        },
        year: "2025",
        genres: [
          {
            _id: "1gOywM",
            name: "Chính Kịch",
            slug: "chinh-kich",
          },
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "Rqm5ON",
            name: "Khoa Học",
            slug: "khoa-hoc",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
        ],
        images: {
          posters: [
            {
              path: "66/98/6698451337a483525ca2f385a09a3dbf/6698451337a483525ca2f385a09a3dbf.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "b7/bd/b7bddeea2f1dac001229dd6469f62439/b7bddeea2f1dac001229dd6469f62439.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "df/14/df145476eddffb532eb2824de1c0344c/df145476eddffb532eb2824de1c0344c.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "1CeOAur8",
        original_title: "完全不倫 ― 隠す美学、暴く覚悟 ―",
        english_title: "Perfect Adultery: The Beauty of Concealment",
        title: "Ngoại Tình Tột Đỉnh",
        slug: "ngoai-tinh-tot-dinh",
        overview:
          "Một người chồng tận tụy bắt đầu nghi ngờ sự thủy chung của vợ. Nhưng khi lần theo dấu vết của những bí mật sau cánh cửa hôn nhân, anh dần rơi vào mê cung của dối trá, nơi mọi niềm tin đều có thể bị phản bội và sự thật có cái giá đắt hơn cả tình yêu.",
        release_date: "2025-07-02",
        quality: "fhd",
        rating: "T18",
        runtime: 40,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 2,
        },
        year: "2025",
        genres: [
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "4RxsoY",
            name: "Tình Cảm",
            slug: "tinh-cam",
          },
          {
            _id: "Lnhyb0",
            name: "Đời Thường",
            slug: "doi-thuong",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "epV6Ny",
            name: "Tâm Lý",
            slug: "tam-ly",
          },
        ],
        images: {
          posters: [
            {
              path: "10/22/1022218fe4ef044c5f0b0f512fc81527/1022218fe4ef044c5f0b0f512fc81527.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "25/ac/25acd01764eccee10f2053529e0b25c2/25acd01764eccee10f2053529e0b25c2.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "09/c9/09c96c1525940c86176263fdcc5f4c09/09c96c1525940c86176263fdcc5f4c09.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ba/26/ba26e1b07f299ff4eb49c87a22388c1b/ba26e1b07f299ff4eb49c87a22388c1b.png",
              type: 4,
            },
          ],
        },
      },
      {
        _id: "dyoEOQIr",
        original_title: "あやしいパートナー",
        english_title: "Suspicious Partner",
        title: "Đối Tác Đáng Ngờ (Bản Nhật)",
        slug: "doi-tac-dang-ngo-ban-nhat",
        overview:
          "Công tố viên tài năng Tateishi Haruto (Yagi) một ngày nọ bỗng dưng bị một cô gái tưởng nhầm rằng anh là kẻ quấy rối. Còn Miyashita Sakura (Saito) là thực tập sinh với niềm khao khát trở thành luật sư và đang chán chường sau khi bị bạn trai lừa dối. Câu chuyện giữa hai người được bắt đầu bằng một cuộc chạm trán đầy tồi tệ, rồi dần nảy nở một tình yêu trong sáng và còn có cả những yếu tố bí ẩn quanh một vụ việc.",
        release_date: "2025-04-30",
        quality: "fhd",
        rating: "T13",
        runtime: 40,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: "5.8",
        latest_episode: {
          1: 3,
        },
        year: "2025",
        genres: [
          {
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "T6q81e",
            name: "Bí Ẩn",
            slug: "bi-an",
          },
          {
            _id: "W8Dn2a",
            name: "Hài",
            slug: "hai",
          },
          {
            _id: "wca3Bp",
            name: "Phiêu Lưu",
            slug: "phieu-luu",
          },
        ],
        images: {
          posters: [
            {
              path: "62/c8/62c8e0b7c14a65a7327213a150a73a8b/62c8e0b7c14a65a7327213a150a73a8b.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "3d/7a/3d7a189c5a7ad61b9d3616fe09df30b0/3d7a189c5a7ad61b9d3616fe09df30b0.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "1f/dd/1fdd7f9de97f4f45170ff309e12f7ea1/1fdd7f9de97f4f45170ff309e12f7ea1.jpg",
              type: 3,
            },
          ],
          titles: [],
        },
      },
      {
        _id: "om51qzAV",
        original_title: "失踪人捜索班 消えた真実",
        english_title: "Missing Persons Investigation Unit: The Missing Truth",
        title: "Đội Truy Tìm Người Mất Tích",
        slug: "doi-truy-tim-nguoi-mat-tich",
        overview:
          "Cựu thám tử Tatsuhiko Kinosaki thành lập một đội điều tra tư nhân chuyên truy tìm những người mất tích bị cảnh sát bỏ qua, đồng thời âm thầm điều tra vụ mất tích bí ẩn của chính người vợ mình.",
        release_date: "2025-04-11",
        quality: "fhd",
        rating: "T16",
        runtime: 40,
        type: 2,
        origin_country: ["JP"],
        status: "On Going",
        latest_season: 1,
        imdb_rating: {
          $numberDecimal: "0",
        },
        latest_episode: {
          1: 1,
        },
        year: "2025",
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
            _id: "2yxWKe",
            name: "Live Action",
            slug: "live-action",
          },
          {
            _id: "3PP9q7",
            name: "Gay Cấn",
            slug: "gay-can",
          },
          {
            _id: "IN1LmJ",
            name: "Hình Sự",
            slug: "hinh-su",
          },
        ],
        images: {
          posters: [
            {
              path: "3c/b1/3cb13071aab635347d3700812d710893/3cb13071aab635347d3700812d710893.jpg",
              type: 1,
            },
          ],
          horizontal_posters: [
            {
              path: "7d/51/7d51c945dd5764181993b5b5a06d7462/7d51c945dd5764181993b5b5a06d7462.jpg",
              type: 2,
            },
          ],
          backdrops: [
            {
              path: "4b/c1/4bc1fff325367da7ebe28ee8621b3408/4bc1fff325367da7ebe28ee8621b3408.jpg",
              type: 3,
            },
          ],
          titles: [
            {
              path: "ef/35/ef3592635ab6ed019d855361710306b5/ef3592635ab6ed019d855361710306b5.png",
              type: 4,
            },
          ],
        },
      },
    ],
  },
];
function Collection() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cards-row")}>
        {collection.map((data, index) => (
          <div className={cx("collection")}>
            <div className={cx("header")}>
              <h2>{data.name}</h2>
              <a href={`/c/phim/${data.slug}`}>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <ContentStyle data={data.movies} style={data.style} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Collection;
