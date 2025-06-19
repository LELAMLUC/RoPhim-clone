import config from "~/config";
import TrangChu from "~/pages/TrangChu";
import GioiThieu from "~/pages/GioiThieu";
const publicRouter = [
  { path: config.routes.trangChu, component: TrangChu },
  { path: config.routes.gioiThieu, component: GioiThieu },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
