import config from "~/config";
import TrangChu from "~/pages/TrangChu/TrangChu";
import GioiThieu from "~/pages/GioiThieu";
const publicRouter = [
  { path: config.routes.trangChu, component: TrangChu },
  { path: config.routes.gioiThieu, component: GioiThieu, layout: null },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
