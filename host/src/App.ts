import "./index.css";
import { start, registerApplication } from "single-spa"
import { constructLayoutEngine,constructRoutes, constructApplications } from "single-spa-layout"
import { getRoutes } from "./routes"

const apps = {
  "header/header": () => import("header/header"),
  "catalog/catalog": () => import("catalog/catalog"),
};


const initAppEngine = () => {
  const routes = constructRoutes(getRoutes());
  const applications = constructApplications({
    routes,
    loadApp({ name }) {
      return apps[name]?.();
    },
  });
  const layoutEngine = constructLayoutEngine({ routes, applications });

  applications.forEach(registerApplication);
  return Promise.resolve(layoutEngine);
};

initAppEngine().then((layoutEngine) => {
  layoutEngine.activate();
  start();
});