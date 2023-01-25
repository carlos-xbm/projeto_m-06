import { Route, Routes } from "react-router-dom";
import ManageProducts from "./components/ManageProducts";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />{" "}
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />} />
      <Route path={RoutePath.SETTINGS_PRODUCTS} element={<ManageProducts />} />
    </Routes>
  );
};

export default Router;
