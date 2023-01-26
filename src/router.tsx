import { Route, Routes } from "react-router-dom";
import ManageProducts from "./components/ManageProducts";
import ManageTables from "./components/ManageTables";
import ManageUsers from "./components/ManageUsers";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />} />
      <Route path={RoutePath.SETTINGS_TABLES} element={<ManageTables />} />
      <Route>
        <Route
          path={RoutePath.SETTINGS_PRODUCTS}
          element={<ManageProducts />}
        />
        <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
      </Route>
    </Routes>
  );
};

export default Router;
