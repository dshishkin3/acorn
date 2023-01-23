import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Main from "./Main";

const routes: Array<Object> = [
  {
    path: "/",
    exact: true,
    component: Main,
  },
  {
    path: "/portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
];

export default routes;
