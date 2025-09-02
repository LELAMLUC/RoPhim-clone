import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./ContentList.module.scss";
import { useAppData } from "~/context/DataContext";
import Panigation from "~/components/Panigation";
import ListMovie from "./ListMovie";
import ActorList from "./ActorList";

const ListMovieGenres = {
  items: [
    {
      _id: "vD0vCv1P",
      original_title: "気絶勇者と暗殺姫",
      english_title: "The Shy Hero and the Assassin Princesses",
      title: "Anh Hùng Bất Tỉnh Và Công Chúa Ám Sát",
      slug: "anh-hung-bat-tinh-va-cong-chua-am-sat",
      overview:
        "Một chàng trai trẻ tên Toto chuẩn bị thực hiện chuyến phiêu lưu của mình nên đã thành lập một tổ đội Dũng Giả. Có điều, vì vẻ ngoài xấu xí và chứng sợ phụ nữ trầm trọng của anh, nên việc thành lập tổ đội đối với anh vẫn chỉ là mơ ước.Thế nhưng, có ba cô gái bỗng xuất hiện để thành viên tổ đội của anh, nhưng chân diện mục của ba người là những sát thủ đang nhắm đến mạng sống của anh ta.\r\n",
      release_date: "2025-07-12",
      quality: "fhd",
      rating: "T16",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.5",
      latest_episode: {
        1: 1,
        2: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
            path: "f9/ff/f9ff705fe020ce52ca70fbae0161fa35/f9ff705fe020ce52ca70fbae0161fa35.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "40/b3/40b39f997b380fcd2aa8904ae139fa5f/40b39f997b380fcd2aa8904ae139fa5f.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "8f/9c/8f9c28ac197892bc3fc01fb783aaf29f/8f9c28ac197892bc3fc01fb783aaf29f.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "1t4RiwS0",
      original_title: "桃源暗鬼",
      english_title: "Tougen Anki",
      title: "Huyết Quỷ Hỗn Chiến",
      slug: "huyet-quy-hon-chien",
      overview:
        "Sau khi một sát thủ của Momotaro bất ngờ giết chết bố nuôi của cậu, Shiki thề sẽ trả thù cho ông. Nhưng trước tiên, cậu phải học cách chế ngự dòng máu Oni vừa thức tỉnh trong mình.\r\n",
      release_date: "2025-07-11",
      quality: "fhd",
      rating: "T16",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.0",
      latest_episode: {
        1: 3,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "b3/83/b3839a5891eac47dbbf815ba1ba47d86/b3839a5891eac47dbbf815ba1ba47d86.jpg",
            type: 1,
          },
          {
            path: "17/cc/17cca44970f88d92b17aaf25c7d5430e/17cca44970f88d92b17aaf25c7d5430e.jpg",
            type: 1,
          },
          {
            path: "35/40/3540549ac45b8bb7b143c0e11d1ca76d/3540549ac45b8bb7b143c0e11d1ca76d.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "49/48/494875d6e1f00e836ddd251f2d859523/494875d6e1f00e836ddd251f2d859523.jpg",
            type: 2,
          },
          {
            path: "72/3b/723bcbf06fbf558f76149cf1f514f725/723bcbf06fbf558f76149cf1f514f725.jpg",
            type: 2,
          },
          {
            path: "0c/f6/0cf68f286da0fe4cfc0ad37b6df970d4/0cf68f286da0fe4cfc0ad37b6df970d4.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "43/0d/430dd49438d58526519467a3c366ce9b/430dd49438d58526519467a3c366ce9b.webp",
            type: 3,
          },
          {
            path: "52/a6/52a6aa95c922de233ebad02b450010c9/52a6aa95c922de233ebad02b450010c9.webp",
            type: 3,
          },
        ],
        titles: [
          {
            path: "3c/29/3c2957e00f08a3dad130392ca78987ce/3c2957e00f08a3dad130392ca78987ce.png",
            type: 4,
          },
        ],
      },
    },
    {
      _id: "IUfl1DE7",
      original_title:
        "勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～",
      english_title: "Scooped Up by an S-Rank Adventurer!",
      title:
        "Pháp Sư Trắng Bị Loại Khỏi Tổ Đội, Được Mạo Hiểm Giả Cấp S Đón Nhận",
      slug: "phap-su-trang-bi-loai-khoi-to-doi-duoc-mao-hiem-gia-cap-s-don-nhan",
      overview:
        "Bị đuổi khỏi tổ đội anh hùng, Lloyd, pháp sư hỗ trợ luôn nghĩ mình “bình thường”, bất ngờ đồng hành cùng một nhóm mạo hiểm giả cấp S. Không ai ngờ, chính bước ngoặt ấy sẽ khiến tên tuổi anh vang xa, trong khi bản thân vẫn chẳng hay biết mình đang dần trở thành người... vô địch.\r\n",
      release_date: "2025-07-11",
      quality: "fhd",
      rating: "T16",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.5",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "2xCjTG",
          name: "Hành Động",
          slug: "hanh-dong",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "34/1f/341f87518a926dd7ab46a71bdd3f7a98/341f87518a926dd7ab46a71bdd3f7a98.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "1e/0b/1e0b71f44400b90b0b5f45d64150a432/1e0b71f44400b90b0b5f45d64150a432.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "8c/0f/8c0fe8b3bf85a1e8e306c474768d80e5/8c0fe8b3bf85a1e8e306c474768d80e5.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "u3vNLLLn",
      original_title: "ニャイト・オブ・ザ・リビングキャット",
      english_title: "Nyaight of the Living Cat",
      title: "Nyaight of the Living Cat",
      slug: "nyaight-of-the-living-cat",
      overview:
        'Khi một loại virus kỳ quái biến con người thành... mèo lông lá chỉ bằng những cái ôm, thế giới nhanh chóng rơi vào hỗn loạn. Kunagi - người đàn ông mất trí nhớ nhưng hiểu mèo đến lạ thường, phải đấu tranh sinh tồn trong khi cố cưỡng lại sức hấp dẫn khó tả của những chú mèo đáng yêu chết người. Ẩn mình giữa đống đổ nát, anh cùng những người sống sót chống lại đại dịch "ôm là hóa mèo". Hài hước, kịch tính và không kém phần quái đản, đây là cuộc chiến sinh tồn kỳ lạ nhất bạn từng thấy!\r\n',
      release_date: "2025-07-08",
      quality: "fhd",
      rating: "T16",
      runtime: 25,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.4",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "ac/f6/acf6623f4524f713f134bf376e173ba2/acf6623f4524f713f134bf376e173ba2.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "0a/e6/0ae64cf1c05b0492a70cda116f96aa74/0ae64cf1c05b0492a70cda116f96aa74.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "2b/76/2b76dff031c65a7632a4955ac298d134/2b76dff031c65a7632a4955ac298d134.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "I7LiAoc1",
      original_title: "出禁のモグラ",
      english_title: "Dekin no Mogura: The Earthbound Mole",
      title: "Dekin no Mogura: Lạc Giữa Âm Dương",
      slug: "dekin-no-mogura-lac-giua-am-duong",
      overview:
        'Mogura, một "nhà hiền triết tự xưng" bí ẩn còn được gọi là Hyakuan Momoyumi, đã bị cấm từ thế giới bên kia. Để trở về, anh đi lang thang khắp thế giới, thu thập "đèn" ma ở đèn lồng của anh. Tuy nhiên, việc vượt qua các con đường với anh ta mang đến một hậu quả bất thường: khả năng nhìn thấy những hiện tượng kỳ lạ ...',
      release_date: "2025-07-07",
      quality: "fhd",
      rating: "T18",
      runtime: 20,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.2",
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
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "d4/46/d44677b0c80cd91fd456d69ba641a513/d44677b0c80cd91fd456d69ba641a513.jpg",
            type: 1,
          },
          {
            path: "2c/28/2c287a71932f1cb0d0bad5ed44806529/2c287a71932f1cb0d0bad5ed44806529.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "59/62/596254500d846d4526c310d6eb361000/596254500d846d4526c310d6eb361000.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "c6/29/c6291fa9a587da49527b9074e1e5d5a2/c6291fa9a587da49527b9074e1e5d5a2.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "LSmibPWZ",
      original_title: "CITY THE ANIMATION",
      english_title: "CITY THE ANIMATION",
      title: "CITY THE ANIMATION",
      slug: "city-the-animation",
      overview:
        "Câu chuyện xoay quanh cuộc sống thường ngày đầy rắc rối và hài hước của ba cô sinh viên đại học\r\n",
      release_date: "2025-07-07",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.7",
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
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "3a/a1/3aa1ac4e4a32494135e89954dd80118f/3aa1ac4e4a32494135e89954dd80118f.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "0c/b5/0cb5f0c1109a122bf36ff26622800403/0cb5f0c1109a122bf36ff26622800403.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "40/c6/40c64668a9ac2bb6d7477956c168622c/40c64668a9ac2bb6d7477956c168622c.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "ezZnyEOf",
      original_title: "ゲーセン少女と異文化交流",
      english_title: "Cultural Exchange with a Game Centre Girl",
      title: "Cultural Exchange with a Game Centre Girl",
      slug: "cultural-exchange-with-a-game-centre-girl",
      overview:
        "Câu chuyện kể về Renji Kusakabe, một chàng trai trẻ làm việc bán thời gian tại một trò chơi trung tâm trò chơi. Một ngày nọ, Renji gặp một cô gái người Anh tên Lily, và hai người trong số họ là Nhật ký thương mại và bắt đầu một tình bạn không có khả năng trao đổi văn hóa ...\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.9",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "65/ca/65ca0d4a69e76e89ecd989a956fdb459/65ca0d4a69e76e89ecd989a956fdb459.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "19/ac/19ac8cef9b649d119410e02f834d7e9e/19ac8cef9b649d119410e02f834d7e9e.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "f8/7b/f87bd6460ff779bdef18ef52a346337b/f87bd6460ff779bdef18ef52a346337b.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "ZkoDFh7L",
      original_title: "ガチアクタ",
      english_title: "Gachiakuta",
      title: "Gachiakuta",
      slug: "gachiakuta",
      overview:
        'Thành phố, nơi các tầng lớp văn minh sinh sống - khu ổ chuột nơi tụ tập các đời con cháu của bọn tội phạm, hằng ngày đều bị người khác sỉ nhục, khinh bỉ, gọi họ là những thứ rác rưởi, lũ "dân tộc" gớm ghiếc, hai mặt trái của xã hội được ngăn cách bởi những bức tường cao vút, và bên dưới nơi ấy - Abyss - một bãi rác nơi bọn tội phạm bị lưu đày, ngay cả những người dân của khu ổ chuột dù đã quen sống bẩn thỉu nhưng vẫn rất sợ nơi này. Một cậu bé mồ côi - Rudo sống trong khu ổ chuột với người cha nuôi Regto sống sót bằng cách thực hiện các hoạt động tội phạm. Mặc sức Regto khuyên ngăn, Rudo vẫn không có ý định dừng lại vì cậu ta tin rằng đó là cách duy nhất để kiếm tiền và giúp đỡ Regto vì đã nuôi dạy cậu. Nhưng một ngày nọ, khi về đến nhà, những hình ảnh quen thuộc thường ngày được thay thế bằng một cảnh tượng mà cậu không thể nào tin được. Regto đã bị sát hại còn cậu thì bị buộc tội giết người. Bị kết án xuống Vực thẳm - địa ngục ghê tởm ấy, Rudo đã gào thét, thề với tất cả sự giận dữ lẫn nỗi thất vọng trong mình rằng chắc chắn cậu sẽ giết kẻ gây án và tiêu diệt tất cả những người đã buộc tội cậu sát hại gia đình mình.\r\n',
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "8.3",
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
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "1f/de/1fde2b7d9be027e7f4e736780b7777a2/1fde2b7d9be027e7f4e736780b7777a2.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "9b/ff/9bff0ed1bc28df8878b4f81391a490b8/9bff0ed1bc28df8878b4f81391a490b8.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "e2/74/e27464c6742385ec0ab4a0a09b85b08b/e27464c6742385ec0ab4a0a09b85b08b.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "9PJTHQik",
      original_title: "ばっどがーる",
      english_title: "Bad Girl",
      title: "Bad Girl",
      slug: "bad-girl",
      overview:
        "Yuu, cô nàng năm nhất với mái tóc nổi bật và vẻ ngoài “hổ báo” – thực ra lại là một học sinh gương mẫu… đang cố gắng hết sức để trở nên hư hỏng!? Tất cả chỉ để gây ấn tượng với hội trưởng kỷ luật Mizutori – người mà cô luôn thầm thương. Một câu chuyện học đường hài hước, ngốc nghếch và đầy dễ thương sắp bắt đầu!\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.3",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "n7N6C6",
          name: "Học Đường",
          slug: "hoc-duong",
        },
      ],
      images: {
        posters: [
          {
            path: "64/8f/648fe830c8c0aa31766d5305af58a0ad/648fe830c8c0aa31766d5305af58a0ad.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "15/01/1501367236d85036f15f01fbb5533fb4/1501367236d85036f15f01fbb5533fb4.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "95/92/95927349d326923a411f953597d1cb88/95927349d326923a411f953597d1cb88.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "tbNMD4G9",
      original_title: "瑠璃の宝石",
      english_title: "Ruri Rocks",
      title: "Ruri Rocks ",
      slug: "ruri-rocks",
      overview:
        "Câu chuyện về Ruri, một cô gái thích đồ trang sức và phụ kiện, dấn thân vào thế giới khoáng vật học.\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.5",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
        },
      ],
      images: {
        posters: [
          {
            path: "30/27/302751a909f71599895597019ad680c5/302751a909f71599895597019ad680c5.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "2c/0b/2c0b4b7f471124b92d49e1c04e19f7ee/2c0b4b7f471124b92d49e1c04e19f7ee.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "cf/88/cf882024612e12c575ddc92d60446aed/cf882024612e12c575ddc92d60446aed.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "DlmPnSXm",
      original_title: "ブサメンガチファイター",
      english_title: "Uglymug, Epicfighter",
      title: "Chiến Binh Xấu Xí",
      slug: "chien-binh-xau-xi",
      overview:
        "Bị kết án oan ở tuổi 34, Shigeru Yoshioka mất đi tất cả — sự nghiệp, danh dự, và cả niềm tin vào phụ nữ. Anh thu mình lại, trở thành một kẻ ẩn dật, sống ngoài lề xã hội. Cho đến một ngày, anh tình cờ phát hiện ra cách để bước sang một thế giới khác. Khi một bảng trạng thái bí ẩn hiện lên trên màn hình máy tính, Shigeru đã đánh đổi ngoại hình của mình để trở thành thân phận mới là một “Thần toàn năng,” anh bắt đầu hành trình tái sinh ở một thế giới hoàn toàn khác.\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.6",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "9a/17/9a17db6bfb7a5c0671e3ce2a209d4573/9a17db6bfb7a5c0671e3ce2a209d4573.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "4e/be/4ebe32fb19a8da02ea5551ac096743a9/4ebe32fb19a8da02ea5551ac096743a9.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "b6/67/b667c54af38a8e6a10444556382bae34/b667c54af38a8e6a10444556382bae34.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "aZxzJJS6",
      original_title: "薫る花は凛と咲く",
      english_title: "The Fragrant Flower Blooms with Dignity",
      title: "Hoa Thơm Kiêu Hãnh",
      slug: "hoa-thom-kieu-hanh",
      overview:
        "Ở một nơi nào đó, có 2 trường cao trung lân cận. Cao trung Chidori, một trường nam sinh cấp thấp hội tụ đủ những thằng đần, trường nữ sinh Kikyo, một trường nữ sinh danh giá . Rintaro Tsugumi, một nam sinh năm 2 to khỏe và trầm tính tại trường Chidori, bắt gặp Kaoruko Waguri, một khách hàng khi cậu đang giúp việc tại cửa hàng bánh nhà mình . Rintaro cảm thấy thoải mái khi dành thời gian bên Kaoruko, nhưng cô lại là học sinh của trường Kikyo, ngôi trường hàng xóm cực kì căm ghét trường Chidori. Đây là câu chuyện về 2 con người ở rất gần nhưng lại rất xa.\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "8.9",
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
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "n7N6C6",
          name: "Học Đường",
          slug: "hoc-duong",
        },
      ],
      images: {
        posters: [
          {
            path: "b3/d0/b3d09643cde6fdd7d8f2b8ecb836ca89/b3d09643cde6fdd7d8f2b8ecb836ca89.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "0b/de/0bdeb1368bcc1f4061e35639e67fcff8/0bdeb1368bcc1f4061e35639e67fcff8.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "c1/fc/c1fc55b70a5db1b255300eae9f9c3941/c1fc55b70a5db1b255300eae9f9c3941.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "czwrSTe4",
      original_title: "光が死んだ夏",
      english_title: "The Summer Hikaru Died",
      title: "Mùa Hè Hikaru Chết",
      slug: "mua-he-hikaru-chet",
      overview:
        "Sáu tháng trước, Hikaru mất tích suốt một tuần. Giờ đây, khi người bạn thân nhất Yoshiki linh cảm có điều không ổn và đối mặt với cậu, sự thật kinh hoàng dần hé lộ.\r\n\r\n",
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "8.0",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
        },
      ],
      images: {
        posters: [
          {
            path: "ee/b5/eeb501828e56af593c0601ea1895aefa/eeb501828e56af593c0601ea1895aefa.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "48/25/482515058b988a56f83e4fddc3d9e6e9/482515058b988a56f83e4fddc3d9e6e9.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "da/70/da70b8de6a32f92050f7db7c0b09c33f/da70b8de6a32f92050f7db7c0b09c33f.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "q0SSguqI",
      original_title: "ホテル・インヒューマンズ",
      english_title: "Hotel Inhumans",
      title: "Hotel Inhumans",
      slug: "hotel-inhumans",
      overview:
        'Một khách sạn sang trọng, nơi “quý khách” đều là sát thủ. Từ ẩm thực thượng hạng đến dịch vụ ""bí mật"", tất cả đều được đáp ứng. Giữa ranh giới sống – chết, hai nhân viên lễ tân Namuro và Sara luôn nói “vâng” với mọi yêu cầu. Chào mừng đến với Hotel Inhumans – nơi không có chỗ cho sai sót\r\n',
      release_date: "2025-07-06",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.9",
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
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
        },
      ],
      images: {
        posters: [
          {
            path: "ed/3a/ed3a33ab3d6bc2fe9b3972cbb7036f70/ed3a33ab3d6bc2fe9b3972cbb7036f70.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "ee/c5/eec5c10d97d6a0a56a5c3181693bb59a/eec5c10d97d6a0a56a5c3181693bb59a.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "b8/33/b8337eeb6634009f70db36ae9413504e/b8337eeb6634009f70db36ae9413504e.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "HXU55WnZ",
      original_title: "公女殿下の家庭教師",
      english_title: "Private Tutor to the Duke's Daughter",
      title: "Gia Sư Của Công Tước Tiểu Thư",
      slug: "gia-su-cua-cong-tuoc-tieu-thu",
      overview:
        "Anh ấy đã từng có một cuộc sống tốt, cho đến ngày hôm đó... Dù chỉ là một thường dân, nhưng bằng nỗ lực của bản thân, anh đã vượt qua cả lũ quý’s tộc’s và giành được vị trí thứ thứ hai trong Học Viện Hoàng Gia. Sau đó, anh còn tốt nghiệp Học Viện với một thành tích xuất sắc, với nó thì chuyện kiếm một công việc tốt không thành vấn với anh. Nếu mọi chuyện thuận buồm xuôi gió, anh ấy chắc chắn sẽ trở thành một Pháp sư Hoàng Gia. Một người nổi bật ngay cả trong những người ưu tú. Nhưng, không may tôi lại trượt mất kỳ kiểm tra – thật đáng tiếc. Và thậm chí tôi còn chẳng đủ tiền để bắt một chuyến tàu trở về quê nhà. Trong hoàn cảnh tồi tệ đó, giáo sư của tôi đã giới thiệu cho tôi một công việc là: Làm gia sư cho con gái của một công tước. Công việc này có chút mờ ám...Sau đây là một câu chuyện về một chàng trai chỉ sống một cuộc sống yên bình, thế nhưng anh lại bất ngờ bị cuốn vào cuộc cạnh tranh với kẻ thù không đội trời chung từ thời còn ở học viện và học sinh của cậu ta - tất cả những điều này ép anh phải leo lên nấc thang của xã hội.「... Tại sao chuyện này lại xảy ra với tôi chứ?」\r\n",
      release_date: "2025-07-05",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.5",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "f9/64/f9641dbcecd6c49d815d994d40453428/f9641dbcecd6c49d815d994d40453428.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "62/fd/62fd86a9e94d75dd832e3923fa4c7894/62fd86a9e94d75dd832e3923fa4c7894.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "76/18/7618829367fdb0a6d01f601fdb206638/7618829367fdb0a6d01f601fdb206638.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "VWwhGtFK",
      original_title: "サイレント・ウィッチ 沈黙の魔女の隠しごと",
      english_title: "Secrets of the Silent Witch",
      title: "Bí Mật Của Phù Thủy Tĩnh Lặng",
      slug: "bi-mat-cua-phu-thuy-tinh-lang",
      overview:
        'Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực, Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm, khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15, cô đã được chọn làm một trong Bảy Hiền Nhân, bảy pháp sư mạnh mẽ nhất vương quốc, với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi, Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy, hai năm sau, vào một ngày nọ, Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó, Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. "Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi..." Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.\r\n',
      release_date: "2025-07-05",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.1",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "b6/82/b682b905a6f30448ef339e8f98ea952a/b682b905a6f30448ef339e8f98ea952a.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "f4/f9/f4f9e4e8cd619c511eadee099d059a3d/f4f9e4e8cd619c511eadee099d059a3d.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "2f/a6/2fa6022dda7818c7f96689a2f9d27f37/2fa6022dda7818c7f96689a2f9d27f37.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "Se79vjWf",
      original_title: "渡くんの××が崩壊寸前",
      english_title: "Watari-kun's ****** Is About to Collapse",
      title: "Watari-kun no xx ga Houkai Sunzen",
      slug: "watari-kun-no-xx-ga-houkai-sunzen",
      overview:
        "Naoto Watari chỉ sống cho em gái của mình, Suzushiro, cho đến khi người bạn thời thơ ấu hỗn loạn của anh, Satsuki, xông vào cuộc sống của anh. Không thốt ra một từ nào, sự hiện diện của cô ấy đã đốt cháy ký ức đã chôn vùi và làm sáng tỏ thói quen cứng nhắc của anh ấy. Khi căng thẳng gia tăng và bí mật bề mặt, sự tận tâm của Naoto đối với Suzushiro đụng độ với nỗi đau chưa được giải quyết, đe dọa sẽ sụp đổ thế giới mong manh của mình.\r\n",
      release_date: "2025-07-05",
      quality: "fhd",
      rating: "T16",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
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
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "8b/dc/8bdce2ba74a20775bf3531e52ee231b9/8bdce2ba74a20775bf3531e52ee231b9.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "25/12/2512f753b8ab8d480d2984a9e050e331/2512f753b8ab8d480d2984a9e050e331.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "bd/d6/bdd63a462328088fa344d8860fa28f32/bdd63a462328088fa344d8860fa28f32.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "EX83ZnA2",
      original_title: "フェルマーの料理",
      english_title: "Fermat Kitchen",
      title: "Ẩm Thực Của Fermat ",
      slug: "am-thuc-cua-fermat",
      overview:
        "Một cậu bé thiên tài từng từ bỏ ước mơ trở thành nhà toán học - Gaku Kitada đã gặp gỡ ngôi sao ẩm thực bí ẩn là Kai Asakura. họ cùng nhau dấn thân vào thế giới ẩm thực cạnh tranh đầy khốc liệt. Đây là một bữa tiệc giải trí lấy cảm hứng từ toán học! Sử dụng tư duy toán học, Gaku tạo ra những công thức nấu ăn đẹp đến nghẹt thở, khiến mọi người kinh ngạc. Liệu cậu có thể trưởng thành cùng Kai và trở thành một đầu bếp thực thụ?\r\n",
      release_date: "2025-07-05",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.8",
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
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
        },
      ],
      images: {
        posters: [
          {
            path: "ed/3c/ed3c28f64272636ca704737a21f981f5/ed3c28f64272636ca704737a21f981f5.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "a1/96/a1962dbc0d542ee6937f0ca78adb35dc/a1962dbc0d542ee6937f0ca78adb35dc.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "eb/6e/eb6e6e4c5ba59859fedfd0c8aac9a602/eb6e6e4c5ba59859fedfd0c8aac9a602.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "q6AgNHiw",
      original_title: "水属性の魔法使い",
      english_title: "The Water Magician",
      title: "Ma Pháp Sư Thuộc Tính Nước",
      slug: "ma-phap-su-thuoc-tinh-nuoc",
      overview:
        'Ryou rất vui mừng khi được tái sinh vào thế giới kỳ ảo của Phi, nơi anh nghĩ mình sẽ được sống một cuộc sống bình lặng để học cách sử dụng phép thuật nước mới tìm thấy. Tuy nhiên, việc thuận theo dòng chảy ở đây lại có ý nghĩa rất khác. Ryou ngay lập tức phải đối mặt với vùng đất hoang dã mà anh đã đi đến và hàng loạt quái vật chết người gọi tiểu lục địa xa xôi này là nhà. Bạn sẽ nghĩ rằng anh ấy sẽ quên mất việc thư giãn khi anh ấy phải chiến đấu để giành lấy mạng sống, nhưng may mắn cho Ryou, anh ấy vốn lạc quan, thông minh và được ban tặng đặc điểm "Tuổi trẻ vĩnh cửu" tiềm ẩn. Hai mươi năm trôi qua trong chớp mắt, và mỗi cuộc chạm trán trên đường đi đều đưa anh ấy tiến gần hơn một bước đến đỉnh cao của phép thuật loài người. Anh ấy không nhận ra rằng đó chỉ là chương mở đầu cho câu chuyện của mình. Một cuộc gặp gỡ định mệnh đã sớm đưa Ryou lên vị trí hàng đầu của lịch sử, thay đổi mãi mãi cuộc đời anh ấy... Và thế là cuộc phiêu lưu của pháp sư nước mạnh nhất mà thế giới từng thấy bắt đầu - người cũng thích làm mọi việc theo tốc độ của riêng mình!\r\n',
      release_date: "2025-07-04",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.0",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
        },
        {
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
        {
          _id: "m62MH1",
          name: "Phép Thuật",
          slug: "phep-thuat",
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
            path: "f5/d5/f5d510945cf7b10a441dbb1165b9268e/f5d510945cf7b10a441dbb1165b9268e.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "14/cb/14cb311fd201c3e39586fe4735bed8dd/14cb311fd201c3e39586fe4735bed8dd.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "59/d7/59d71ca0707ed2bfa3f013b1d94447f0/59d71ca0707ed2bfa3f013b1d94447f0.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "Ej07VmOF",
      original_title: "強くてニューサーガ",
      english_title: "New Saga",
      title: "New Saga",
      slug: "new-saga",
      overview:
        "Để chống lại cuộc tấn công không thể ngăn cản của quân đội quỷ (mà dân DotA gọi là Unstopable), loài người đã gửi một đội quân cảm tử âm thầm tiến sâu vào lãnh thổ kẻ thù để ám sát vua Quỷ. Sau trận chiến dữ dội và nguy hiểm, vị kiếm phép sư Kail cuối cùng cũng đã giết được hắn ta, nhưng cái giá phải trả là toàn quân bị tiêu diệt, ngay cả bản thân anh ta cũng chịu nhiều vết thương chí mạng. Bên bờ vực của cái chết, Kail đã nhìn thấy một di vật kì bí thuộc quyền sở hữu của Quỷ Vương. Di vật này đã gửi anh ta về quá khứ trước khi cuộc xâm lược bắt đầu. Tỉnh dậy với những kí ức đầy đủ về tương lai(!), anh ta định nhân cơ hội này để sửa đổi mọi thứ nhằm tránh một cái kết bi kịch sắp đến.\r\n",
      release_date: "2025-07-03",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.3",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "35/3f/353f8bb7f2df045bc0c8548018c7e184/353f8bb7f2df045bc0c8548018c7e184.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "0a/11/0a1127bd29f0212db5b658db61e84eaa/0a1127bd29f0212db5b658db61e84eaa.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "74/e6/74e6b8d53ba67f0803f10c092a9c077c/74e6b8d53ba67f0803f10c092a9c077c.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "BNrBU3Q2",
      original_title: "追放者食堂へようこそ！",
      english_title: "Welcome to the Outcast's Restaurant!",
      title: "Welcome to the Outcast's Restaurant!",
      slug: "welcome-to-the-outcasts-restaurant",
      overview:
        "Câu chuyện diễn ra tại một thế giới thần thoại nơi con người và các sinh vật huyền bí sống chung hòa bình. Tuy nhiên, một ngày nọ, một nhà hàng bí ẩn mang tên Tsuihousha Shokudou xuất hiện đột ngột. Điều đặc biệt của nhà hàng này là nó chỉ mở cửa đối với những người bị đày lưu đày. Các khách hàng bước vào nhà hàng sẽ được phục vụ những món ăn ngon nhất từ các thực đơn kỳ lạ và phép thuật. Nhưng không phải ai cũng có thể tìm thấy đường vào Tsuihousha Shokudou, chỉ những người thực sự cần và xứng đáng mới có thể biết cách tìm đến. Cuộc phiêu lưu bắt đầu khi một đội ngũ các nhân vật đầy sáng tạo và hài hước tìm đến nhà hàng để khám phá bí mật đằng sau cánh cửa của Tsuihousha Shokudou.\r\n",
      release_date: "2025-07-03",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.8",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "a3/b7/a3b73b7b09009e2cb039c9a42294e0de/a3b73b7b09009e2cb039c9a42294e0de.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "16/a4/16a4496f068af52468bce83390b1796b/16a4496f068af52468bce83390b1796b.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "36/ed/36ed2ed9a40d0ab460500a87594ee806/36ed2ed9a40d0ab460500a87594ee806.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "ezbegB8b",
      original_title: "陰陽廻天 Re:バース",
      english_title: "Onmyo Kaiten Re:Birth Verse",
      title: "Âm Dương Luân Hồi",
      slug: "am-duong-luan-hoi",
      overview:
        "Takeru, một kẻ cô độc với quá khứ đầy bạo lực, luôn bị ám ảnh bởi cô gái kỳ lạ chỉ xuất hiện trong giấc mơ. Nhưng sau một tai nạn bất ngờ, anh tỉnh dậy ở Denji Heian-kyou – nơi công nghệ và phép thuật cùng tồn tại, và cô gái ấy… hoàn toàn có thật. Khi định mệnh đen tối bắt đầu lặp lại, Takeru quyết định đứng lên, học cách trở thành một onmyouji và chiến đấu để thay đổi số phận.\r\n",
      release_date: "2025-07-03",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.9",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "99/d2/99d28b1cb50309c1875b1b08881e5833/99d28b1cb50309c1875b1b08881e5833.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "0a/64/0a6424beecf4495d7c34032ce1bd48de/0a6424beecf4495d7c34032ce1bd48de.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "bf/3b/bf3b3fc0c51c28ae14d55aa8d36e5c19/bf3b3fc0c51c28ae14d55aa8d36e5c19.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "3pZG42aD",
      original_title: "クレバテス-魔獣の王と赤子と屍の勇者",
      english_title: "Clevatess",
      title: "CLEVATESS: Vua Ma Thú, Đứa Trẻ Định Mệnh Và Anh Hùng Bất Tử",
      slug: "clevatess-vua-ma-thu-dua-tre-dinh-menh-va-anh-hung-bat-tu",
      overview:
        "Một trong những lãnh chúa của những con thú bóng tối, Clevatess, triều đại tan vỡ khi anh ta hồi sinh một anh hùng mà cá nhân anh ta bị giết và nhận nuôi một đứa trẻ hình người mồ côi, hy vọng cuối cùng sẽ cứu một thế giới sắp chết. Bây giờ bị ràng buộc với nhau, số phận đang chờ đợi bộ ba không thể này?\r\n",
      release_date: "2025-07-02",
      quality: "fhd",
      rating: "T16",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "8.1",
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
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "d5/c7/d5c7e9b575d29ab75a69a91f7d7b2a2f/d5c7e9b575d29ab75a69a91f7d7b2a2f.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "64/9c/649c97c0b148ac880e8b8b94a92b84c3/649c97c0b148ac880e8b8b94a92b84c3.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "3b/4c/3b4c8357526991d6bceb8ab10838b906/3b4c8357526991d6bceb8ab10838b906.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "9AX2oL9U",
      original_title: "まったく最近の探偵ときたら",
      english_title: "Detectives These Days Are Crazy!",
      title: "Thám Tử Ngày Nay Thật Điên Rồ",
      slug: "tham-tu-ngay-nay-that-dien-ro",
      overview:
        "Từng là thần đồng phá án thời cấp 3, giờ đây Nagumo – 35 tuổi, lưng đau, văn phòng ế ẩm – đang dần lụi tàn cùng quá khứ huy hoàng. Cho đến một ngày, một nữ sinh bất ngờ xuất hiện, ngỏ ý muốn cùng anh điều tra. Liệu sự kết hợp kỳ lạ này có thể giúp anh tìm lại ánh hào quang xưa… hay là mở ra một chương mới đầy bất ngờ?\r\n",
      release_date: "2025-07-01",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.7",
      latest_episode: {
        1: 4,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "69/d7/69d70120e49eda5c075f9ae811ca2260/69d70120e49eda5c075f9ae811ca2260.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "fe/81/fe81fad17d3cc65c6d9bcb9027f06394/fe81fad17d3cc65c6d9bcb9027f06394.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "ae/17/ae170f289ecbf736a7c0783938a7ee59/ae170f289ecbf736a7c0783938a7ee59.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "R4AkraGj",
      original_title: "タコピーの原罪",
      english_title: "Takopi's Original Sin",
      title: "Nguyên Tội Của Takopi",
      slug: "nguyen-toi-cua-takopi",
      overview:
        "Một sinh vật nhỏ hình mực từ hành tinh xa xôi đáp xuống Trái Đất với ước mơ lan tỏa hạnh phúc. Tại đây, cậu gặp Shizuka – cô bé luôn lặng lẽ, không bao giờ cười. Dù chẳng hiểu hết nỗi buồn của con người, Takopi vẫn cố gắng dùng tất cả “xúc tu” của mình để khiến cô bé mỉm cười. Nhưng con đường đến hạnh phúc... chưa bao giờ đơn giản\r\n",
      release_date: "2025-06-28",
      quality: "fhd",
      rating: "T16",
      runtime: 0,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "9.2",
      latest_episode: {
        1: 5,
      },
      year: "2025",
      genres: [
        {
          _id: "1gOywM",
          name: "Chính Kịch",
          slug: "chinh-kich",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "35/08/35089d3984c9bfcb36a1941a5831a387/35089d3984c9bfcb36a1941a5831a387.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "00/6d/006dceb262b2fd46b2f611bd6cb546d0/006dceb262b2fd46b2f611bd6cb546d0.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "4c/47/4c478bdb3b6f85fa50016fdb72106839/4c478bdb3b6f85fa50016fdb72106839.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "ah7LInQ5",
      original_title: "天使のたまご",
      english_title: "Angel's Egg",
      title: "Trứng Thiên Thần",
      slug: "trung-thien-than",
      overview:
        "Nội dung trong bộ Phim Trứng Thiên Thần là câu chuyện xoay quanh cuộc sống của một cô gái trẻ vô danh, cô sống một mình trong một thành phố bị bỏ rơi. Cô gái quan tâm đến một quả trứng lớn – một vật mà cô hay giấu bên dưới chiếc váy của mình, cô bảo vệ nó trong khi tìm kiếm thức ăn và nước uống bên trong quang cảnh thành phố Kiến trúc Phục Hưng Gothic/ Art Nouveau đổ nát. Cũng kể từ đó mà cô gái với quả trứng kì lạ kia như hình với bóng.\r\nVào thời điểm đó xuất hiện một chàng trai trông khá giống một người lính và không có tên đang quan sát một con tàu lớn có hình dạng một khối cầu từ từ lăn xuống ở trên bầu trời, hiện tại thì anh ta đang du hành trên một chiếc xe tăng lưu động. Ngay sau khi gặp cô gái anh đã phát hiện ra quả trứng kia, và kể từ đó câu chuyện xoay quanh đôi nam nữ này bắt đầu. Cùng đón xem bộ phim Trứng Thiên Thần – Angel’s Egg để khám phá những điều thú vị nhé các bạn.",
      release_date: "2025-06-09",
      quality: "fhd",
      rating: "T16",
      runtime: 71,
      type: 1,
      origin_country: ["JP"],
      status: "Released",
      latest_season: 0,
      imdb_rating: "7.5",
      latest_episode: {
        1: 1,
      },
      year: "2025",
      genres: [
        {
          _id: "T6q81e",
          name: "Bí Ẩn",
          slug: "bi-an",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      images: {
        posters: [
          {
            path: "19/d0/19d06b7333ca9340dc7a35961f368394/19d06b7333ca9340dc7a35961f368394.webp",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "dc/0a/dc0a8d84e7e892feb593fb2971ae69ee/dc0a8d84e7e892feb593fb2971ae69ee.webp",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "fe/03/fe03a9bc616890cf388a7c833adae35b/fe03a9bc616890cf388a7c833adae35b.webp",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "RiR3tTOw",
      original_title: "白豚貴族ですが前世の記憶が生えたのでひよこな弟育てます",
      english_title:
        "SHIROHIYO - Reincarnated as a Neglected Noble: Raising My Baby Brother with Memories from My Past Life",
      title:
        "SHIROHIYO - Chuyển Sinh Thành Quý Tộc Bị Bỏ Rơi: Nuôi Em Trai Bằng Ký Ức Kiếp Trước",
      slug: "shirohiyo-chuyen-sinh-thanh-quy-toc-bi-bo-roi-nuoi-em-trai-bang-ky-uc-kiep-truoc",
      overview:
        'Trong thế giới lấp lánh, huyền ảo này, có rất nhiều sự sang trọng và kỳ diệu! Những yêu tinh xinh đẹp và duyên dáng, những vị thần vượt quá tầm hiểu biết của con người, sức mạnh của phép thuật—mọi thứ đều giống như một giấc mơ. Và quan trọng nhất, còn có "gà con" lông bông và cậu em trai đáng yêu, Regulus, người yêu quý anh cả của mình hơn bất cứ thứ gì. Nhưng bên dưới bề mặt rực rỡ này, những căng thẳng tiềm ẩn vẫn âm ỉ trong gia đình quý tộc Kikunoi, trong khi sự thối nát của tầng lớp quý tộc hoàng gia vẫn tiếp tục lan rộng…\r\n',
      release_date: "2025-04-20",
      quality: "fhd",
      rating: "T13",
      runtime: 25,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.7",
      latest_episode: {
        1: 11,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "6d/2f/6d2fce97f440875153b935be374c2c2d/6d2fce97f440875153b935be374c2c2d.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "84/b8/84b876c7c46443fb0b65564d0257c5d2/84b876c7c46443fb0b65564d0257c5d2.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "73/86/738658c3b26ead25d6e6cd8f03595fda/738658c3b26ead25d6e6cd8f03595fda.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "vny6rXs0",
      original_title: "mono",
      english_title: "Mono",
      title: "Mono",
      slug: "mono",
      overview:
        "Câu lạc bộ Nhiếp ảnh đang có nguy cơ đóng cửa?! Và cả Câu lạc bộ Điện ảnh nữa?! Đừng lo lắng, vì họ sẽ hợp nhất và trở thành... Câu lạc bộ Điện ảnh-Nhiếp ảnh! Giờ đây, các thành viên câu lạc bộ Satsuki, An và Sakurako được mời làm nhân vật chính cho tác phẩm mới nhất của họa sĩ truyện tranh Haruno, tác phẩm tập trung vào máy quay hành động. Các cô gái lên đường ghi lại những cảnh đẹp của Nhật Bản, thử nghiệm các thiết bị không chỉ giới hạn ở thiết bị nhiếp ảnh và quay phim, và tất nhiên, thưởng thức những món ngon địa phương trên đường đi!\r\n",
      release_date: "2025-04-13",
      quality: "fhd",
      rating: "K",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.2",
      latest_episode: {
        1: 9,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "0a/a8/0aa8ab24212ee70397e08a2b112c738f/0aa8ab24212ee70397e08a2b112c738f.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "e9/d0/e9d0f21f59898c278db815b4ab435da8/e9d0f21f59898c278db815b4ab435da8.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "30/54/3054a63b7ab8f76d841f6e07527325c7/3054a63b7ab8f76d841f6e07527325c7.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "lc1JA2nZ",
      original_title: "日々は過ぎれど飯うまし",
      english_title: "Food for the Soul",
      title: "Food for the Soul",
      slug: "food-for-the-soul",
      overview:
        "Một hoạt hình nguyên bản về cuộc sống hàng ngày của năm cô gái vừa trở thành sinh viên đại học. Họ yêu thích những món ăn ngon, muốn có nhiều niềm vui với mọi người, và học tập khó khăn hơn một chút để tận hưởng cuộc sống đại học một cách trọn vẹn! \r\n",
      release_date: "2025-04-13",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "7.3",
      latest_episode: {
        1: 11,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
      ],
      images: {
        posters: [
          {
            path: "e3/73/e3735de7a17545acb9a2545fe159df6b/e3735de7a17545acb9a2545fe159df6b.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "47/64/47645853267cd2fb0ee52eb4ab2bbe4a/47645853267cd2fb0ee52eb4ab2bbe4a.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "50/e4/50e4f2c5fccf25f91cb28e765079b94b/50e4f2c5fccf25f91cb28e765079b94b.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "bDqVJShj",
      original_title: "神統記",
      english_title: "Teogonia",
      title: "Teogonia",
      slug: "teogonia",
      overview:
        "Trong một thế giới loạn lạc bởi chiến tranh giữa loài người và các bộ tộc á nhân, Kai – một cậu bé bình thường ở làng Rag – ngày ngày chiến đấu để bảo vệ quê hương. Giữa những trận chiến khốc liệt, cậu bất ngờ nhớ lại ký ức về một thế giới hiện đại mà mình chưa từng sống. Từ đó, Kai bị cuốn vào những biến cố lớn, bắt đầu hành trình trưởng thành giữa một thế giới đầy thử thách và hiểm nguy.\r\n",
      release_date: "2025-04-12",
      quality: "fhd",
      rating: "T13",
      runtime: 23,
      type: 2,
      origin_country: ["JP"],
      status: "On Going",
      latest_season: 1,
      imdb_rating: "6.9",
      latest_episode: {
        1: 12,
      },
      year: "2025",
      genres: [
        {
          _id: "1gOywM",
          name: "Chính Kịch",
          slug: "chinh-kich",
        },
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
        },
        {
          _id: "ZERgfX",
          name: "Hoạt Hình",
          slug: "hoat-hinh",
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
            path: "2d/f0/2df0127f504b71d282bb105b3d4a666d/2df0127f504b71d282bb105b3d4a666d.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "fa/ce/face65d380764624561fa69defa39fe7/face65d380764624561fa69defa39fe7.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "7a/ac/7aac45ead7eba60727e620d50e45ff5b/7aac45ead7eba60727e620d50e45ff5b.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
    {
      _id: "MQRADKlR",
      original_title: "ムーンライズ",
      english_title: "Moonrise",
      title: "Trăng Lên",
      slug: "trang-len",
      overview:
        "Sau khi quân phản loạn tấn công Trái Đất, người thừa kế vô ưu nọ trở thành nghi phạm chính và gia nhập đơn vị quân đội đặc biệt để tìm ra kẻ chủ mưu thực sự trên Mặt Trăng.\r\n",
      release_date: "2025-04-10",
      quality: "fhd",
      rating: "T13",
      runtime: 24,
      type: 2,
      origin_country: ["JP"],
      status: "Ended",
      latest_season: 1,
      imdb_rating: "6.4",
      latest_episode: {
        1: 18,
      },
      year: "2025",
      genres: [
        {
          _id: "TKMmgF",
          name: "Anime",
          slug: "anime",
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
          _id: "gVRG25",
          name: "Kỳ Ảo",
          slug: "ky-ao",
        },
      ],
      images: {
        posters: [
          {
            path: "ee/fd/eefd8fcdd29618818361c2113638477d/eefd8fcdd29618818361c2113638477d.jpg",
            type: 1,
          },
        ],
        horizontal_posters: [
          {
            path: "34/80/3480254f774bc8b0bffcaff5659c8570/3480254f774bc8b0bffcaff5659c8570.jpg",
            type: 2,
          },
        ],
        backdrops: [
          {
            path: "6b/ba/6bba86381e8b2637836fdb6724a1179d/6bba86381e8b2637836fdb6724a1179d.jpg",
            type: 3,
          },
        ],
        titles: [],
      },
    },
  ],
  item_count: 394,
  page_count: 13,
};
const ListActor = {
  items: [
    {
      _id: "kOcjNL",
      name: "Madonna",
      original_name: "Madonna",
      slug: "madonna",
      profile_path: "/pI6g1iVlUy7cUAZ6AspVXWq4kli.jpg",
      gender: 1,
    },
    {
      _id: "80YJUA",
      name: "Tamlyn Tomita",
      original_name: "Tamlyn Tomita",
      slug: "tamlyn-tomita",
      profile_path: "/rmlZGE8f18Fxpgd9AlOko8cK074.jpg",
      gender: 1,
    },
    {
      _id: "YBY09V",
      name: "Sakari Kuosmanen",
      original_name: "Sakari Kuosmanen",
      slug: "sakari-kuosmanen",
      profile_path: "/syM87lzV2IqFno87Za1PbeAUdMW.jpg",
      gender: 2,
    },
    {
      _id: "XaTa4t",
      name: "Valeria Golino",
      original_name: "Valeria Golino",
      slug: "valeria-golino",
      profile_path: "/bLw0lNPEhICtbTLtnTswamefN7C.jpg",
      gender: 1,
    },
    {
      _id: "Du0Nyb",
      name: "Paul Calderon",
      original_name: "Paul Calderon",
      slug: "paul-calderon",
      profile_path: "/xIORhcIDmFMlaS3ZS3em1QiTkt5.jpg",
      gender: 2,
    },
    {
      _id: "jgb6Ws",
      name: "Charles Barkley",
      original_name: "Charles Barkley",
      slug: "charles-barkley",
      profile_path: "/ceRTD8xYs13kcyPcV6feH9vkDwb.jpg",
      gender: 2,
    },
    {
      _id: "bvN028",
      name: "Jennifer Beals",
      original_name: "Jennifer Beals",
      slug: "jennifer-beals",
      profile_path: "/uJYKQC9GfRU3LHugCVDbAP1DrFH.jpg",
      gender: 1,
    },
    {
      _id: "k4Xdjn",
      name: "Veikko Uusimäki",
      original_name: "Veikko Uusimäki",
      slug: "veikko-uusimaki",
      profile_path: "/n88CSw4DEIt9KnDX9Kf4mehykZ1.jpg",
      gender: 2,
    },
    {
      _id: "Bmyrs4",
      name: "Salma Hayek Pinault",
      original_name: "Salma Hayek Pinault",
      slug: "salma-hayek-pinault",
      profile_path: "/ELaERdV9IiAvGDTROOlO21ZIok.jpg",
      gender: 1,
    },
    {
      _id: "iBPVbf",
      name: "Brian O'Halloran",
      original_name: "Brian O'Halloran",
      slug: "brian-ohalloran",
      profile_path: "/c8bhTxVxhN4DMrJeCnu5usutbY5.jpg",
      gender: 2,
    },
    {
      _id: "ZMG1XD",
      name: "Marc Lawrence",
      original_name: "Marc Lawrence",
      slug: "marc-lawrence",
      profile_path: "/exCnOfb7yD7VSppd32RA9K4TIWx.jpg",
      gender: 2,
    },
    {
      _id: "35XDQ2",
      name: "Kathy Griffin",
      original_name: "Kathy Griffin",
      slug: "kathy-griffin",
      profile_path: "/khhZT54SfcKIZuPwTH55CB1I0Gf.jpg",
      gender: 1,
    },
    {
      _id: "FM3S4I",
      name: "Alec Baldwin",
      original_name: "Alec Baldwin",
      slug: "alec-baldwin",
      profile_path: "/hzKy7x574eeUS3wt1R3yvWBRpeR.jpg",
      gender: 2,
    },
    {
      _id: "mj4aY4",
      name: "Sammi Davis",
      original_name: "Sammi Davis",
      slug: "sammi-davis",
      profile_path: "/v94Yqh0sA4a3NvGAoQ158ejNkb1.jpg",
      gender: 1,
    },
    {
      _id: "XyeUnm",
      name: "Jaakko Talaskivi",
      original_name: "Jaakko Talaskivi",
      slug: "jaakko-talaskivi",
      profile_path: "/jHYgBI3RSt4bfRgARQDDBNWoPD9.jpg",
      gender: 2,
    },
    {
      _id: "AVQmQV",
      name: "Ione Skye",
      original_name: "Ione Skye",
      slug: "ione-skye",
      profile_path: "/7gkOvSaUcUPgBMNQ1NxecMzuVc2.jpg",
      gender: 1,
    },
    {
      _id: "rLz8t1",
      name: "Timo Harakka",
      original_name: "Timo Harakka",
      slug: "timo-harakka",
      profile_path: "/2qU3eFinUMnMk6xnqidFSwVhT18.jpg",
      gender: 2,
    },
    {
      _id: "oL1hCf",
      name: "Alicia Witt",
      original_name: "Alicia Witt",
      slug: "alicia-witt",
      profile_path: "/vQ2McAjHjY3A7oDrPMx6aLSsvkW.jpg",
      gender: 1,
    },
    {
      _id: "nVEsyS",
      name: "Esko Nikkari",
      original_name: "Esko Nikkari",
      slug: "esko-nikkari",
      profile_path: "/mNiyD3BOzWba4CB0VTbIqA4EAVm.jpg",
      gender: 2,
    },
    {
      _id: "9ETrom",
      name: "Lana McKissack",
      original_name: "Lana McKissack",
      slug: "lana-mckissack",
      profile_path: "/foE5SoQgMPrHqY0ER5ZyC53OQDf.jpg",
      gender: 1,
    },
    {
      _id: "W66Mkj",
      name: "Jorma Markkula",
      original_name: "Jorma Markkula",
      slug: "jorma-markkula",
      profile_path: "/oQduzpvqQhArEoa1kM8IOqySBmm.jpg",
      gender: 2,
    },
    {
      _id: "CowPNh",
      name: "Quentin Tarantino",
      original_name: "Quentin Tarantino",
      slug: "quentin-tarantino",
      profile_path: "/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
      gender: 2,
    },
    {
      _id: "XISXbb",
      name: "Esko Salminen",
      original_name: "Esko Salminen",
      slug: "esko-salminen",
      profile_path: "/74y98xEaOSBC5xp1vpcm9VrFGLW.jpg",
      gender: 2,
    },
    {
      _id: "bqeGMc",
      name: "Marisa Tomei",
      original_name: "Marisa Tomei",
      slug: "marisa-tomei",
      profile_path: "/qjErinf79aBgooxA6Dmq0CNsVwg.jpg",
      gender: 1,
    },
    {
      _id: "1L0nqg",
      name: "Jason Mewes",
      original_name: "Jason Mewes",
      slug: "jason-mewes",
      profile_path: "/pZAmLSlIUhRUGrztm5i2AuNQV2o.jpg",
      gender: 2,
    },
    {
      _id: "Pj6IHz",
      name: "Kimberly Blair",
      original_name: "Kimberly Blair",
      slug: "kimberly-blair",
      profile_path: "/hPajx1WWe7MqU5nYlDEBExgbGz0.jpg",
      gender: 1,
    },
    {
      _id: "Az42zX",
      name: "Antonio Banderas",
      original_name: "Antonio Banderas",
      slug: "antonio-banderas",
      profile_path: "/5BmWgSeW8Rg6hkisEeqLM5P0OBZ.jpg",
      gender: 2,
    },
    {
      _id: "HNV14c",
      name: "Kevin Smith",
      original_name: "Kevin Smith",
      slug: "kevin-smith",
      profile_path: "/g8sC36zUTkSTh7y9HjWa4Rbr0JP.jpg",
      gender: 2,
    },
    {
      _id: "jzhgHA",
      name: "Bruce Willis",
      original_name: "Bruce Willis",
      slug: "bruce-willis",
      profile_path: "/A1XBu3CffBpSK8HEIJM8q7Mn4lz.jpg",
      gender: 2,
    },
    {
      _id: "RR7VSe",
      name: "Juuso Hirvikangas",
      original_name: "Juuso Hirvikangas",
      slug: "juuso-hirvikangas",
      profile_path: "/7rvAPTsfz9U2E5tYghfY8YQlZ94.jpg",
      gender: 2,
    },
    {
      _id: "NpAE16",
      name: "David Proval",
      original_name: "David Proval",
      slug: "david-proval",
      profile_path: "/ku3LWQXiJ80nWgs21fKvTMaR6Ui.jpg",
      gender: 2,
    },
    {
      _id: "dI60Lr",
      name: "Kevin Michael Richardson",
      original_name: "Kevin Michael Richardson",
      slug: "kevin-michael-richardson",
      profile_path: "/xXt9Nh7RAT5bOen66TaXreNYmCl.jpg",
      gender: 2,
    },
    {
      _id: "qEgEwd",
      name: "Amanda de Cadenet",
      original_name: "Amanda de Cadenet",
      slug: "amanda-de-cadenet",
      profile_path: "/pLlI568voL7dkFbUDIq4hFI0o0v.jpg",
      gender: 1,
    },
    {
      _id: "IvA68d",
      name: "Tomi Salmela",
      original_name: "Tomi Salmela",
      slug: "tomi-salmela",
      profile_path: "/7XmK7A2dYWDyzh0PJ3h43eHKwfn.jpg",
      gender: 2,
    },
    {
      _id: "5bZs3Z",
      name: "Tim Roth",
      original_name: "Tim Roth",
      slug: "tim-roth",
      profile_path: "/qSizF2i9gz6c6DbAC5RoIq8sVqX.jpg",
      gender: 2,
    },
    {
      _id: "zhAHmK",
      name: "Turo Pajala",
      original_name: "Turo Pajala",
      slug: "turo-pajala",
      profile_path: "/b6JdzqTn6UFYf4DouHbbE8Ypk4r.jpg",
      gender: 2,
    },
    {
      _id: "mbpJL1",
      name: "Marja Packalén",
      original_name: "Marja Packalén",
      slug: "marja-packalen",
      profile_path: "/iBOu9d5LDY6rppEEoWFGXIYPF7Q.jpg",
      gender: 1,
    },
    {
      _id: "LpIebm",
      name: "Matti Pellonpää",
      original_name: "Matti Pellonpää",
      slug: "matti-pellonpaa",
      profile_path: "/1Qzhkkp3wFE2NMGKVyOra9931q2.jpg",
      gender: 2,
    },
    {
      _id: "f6SdsM",
      name: "Jeff Anderson",
      original_name: "Jeff Anderson",
      slug: "jeff-anderson",
      profile_path: "/edwQlYwAWWHQC9um89c5CQpFYof.jpg",
      gender: 2,
    },
    {
      _id: "i0qHht",
      name: "Lawrence Bender",
      original_name: "Lawrence Bender",
      slug: "lawrence-bender",
      profile_path: "/mZRwkIvUj8USnS7Jfwd6VdHkY2x.jpg",
      gender: 2,
    },
  ],
  item_count: 139314,
  page_count: 3483,
};
const cx = classNames.bind(styles);

function ContentList() {
  const [header, setHeader] = useState("");
  const { genres, countries } = useAppData();

  const { slug } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/phim-le") {
      setHeader("Phim lẻ");
    } else if (pathname === "/phim-bo") {
      setHeader("Phim bộ");
    } else if (pathname === "/dien-vien") {
      setHeader("Diễn viên");
    } else if (pathname.includes("/the-loai")) {
      const found = genres.find((item) => item.slug === slug);
      if (found) setHeader(found.name);
    } else if (pathname.includes("/quoc-gia")) {
      const found = countries.find((item) => item.slug === slug);
      if (found) setHeader(found.name);
    }
  }, [pathname, slug]);

  const ContentComponent = pathname === "/dien-vien" ? ActorList : ListMovie;
  const data = pathname === "/dien-vien" ? ListActor : ListMovieGenres;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <ContentComponent data={data} header={header} />
          <Panigation data={data} />
        </div>
      </div>
    </div>
  );
}

export default ContentList;
