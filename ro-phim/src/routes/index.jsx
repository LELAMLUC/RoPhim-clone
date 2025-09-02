import config from "~/config";
import TrangChu from "~/pages/TrangChu";
import ChuDe from "~/pages/ChuDe";
import GioiThieu from "~/pages/GioiThieu";
import ContentList from "~/pages/ConTentList";
import DienVien from "~/pages/DienVien";
const publicRouter = [
  { path: config.routes.gioiThieu, component: GioiThieu, layout: null },
  { path: config.routes.trangChu, component: TrangChu },
  { path: config.routes.chuDe, component: ChuDe },
  { path: config.routes.theLoai, component: ContentList },
  { path: config.routes.phimLe, component: ContentList },
  { path: config.routes.phimbo, component: ContentList },
  { path: config.routes.quocGia, component: ContentList },
  { path: config.routes.dienVien, component: ContentList },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
