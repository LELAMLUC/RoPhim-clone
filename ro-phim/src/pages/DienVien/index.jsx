import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DienVien.module.scss";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import TagEppisode from "~/components/TagEppisode";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as genresService from "~/services/genresService";
import * as countryService from "~/services/countryService";
import Panigation from "~/components/Panigation";

const data = {
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
function DienVien() {
  const [header, setHeader] = useState("");
  const [TheLoaiItems, setTheLoaiItems] = useState([]);
  const [QuocGiaItems, setQuocGiaItems] = useState([]);
  const { slug } = useParams();
  const { pathname } = useLocation();

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

  useEffect(() => {
    if (pathname === "/phim-le") {
      setHeader("Phim lẻ");
    } else if (pathname === "/phim-bo") {
      setHeader("Phim bộ");
    } else if (pathname === "/dien-vien") {
      setHeader("Diễn viên");
    } else if (pathname.includes("/the-loai")) {
      TheLoaiItems.map((item) => {
        if (item.slug === slug) {
          setHeader(item.name);
        }
      });
    } else if (pathname.includes("/quoc-gia")) {
      QuocGiaItems.map((item) => {
        if (item.slug === slug) {
          setHeader(item.name);
        }
      });
    }
  }, [pathname, TheLoaiItems, QuocGiaItems, slug]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <h3 className={cx("header")}>{header}</h3>
          <div className={cx("filter")}>
            <FontAwesomeIcon className={cx("icon-filter")} icon={faFilter} />
            <span>Bộ lọc</span>
          </div>
          <div className={cx("content")}>
            <div className={cx("cards-grids")}>
              {data.items.map((item) => (
                <div className={cx("item")}>
                  <a className={cx("actor")}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      alt={item.title}
                    />
                  </a>
                  <div className={cx("info")}>
                    <h4 className={cx("title")}>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Panigation data={data} />
        </div>
      </div>
    </div>
  );
}

export default DienVien;
