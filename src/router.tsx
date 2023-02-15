import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ManageProducts from "./components/ManageProducts";
import ManageTables from "./components/ManageTables";
import ManageUsers from "./components/ManageUsers";
import { Auth } from "./helpers/Auth";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import UserCreate from "./pages/UserCreate";
import { RoutePath } from "./types/routes";

const AuthenticatedRoutes = () => {
  const isAuthenticated = Auth.isAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.USERCREATE} element={<UserCreate />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path="/" element={<AuthenticatedRoutes />}>
        <Route path={RoutePath.HOME} element={<Home />} />
        <Route path={RoutePath.SETTINGS} element={<Settings />}>
          <Route path={RoutePath.SETTINGS_TABLES} element={<ManageTables />} />
          <Route
            path={RoutePath.SETTINGS_PRODUCTS}
            element={<ManageProducts />}
          />
          <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
