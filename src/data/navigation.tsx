import Home from "../assets/icons/home.svg";
import Settings from "../assets/icons/settings.svg";
import { NavItem } from "../components/Menu/types";
import { RoutePath } from "../types/routes";

export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  {
    icon: <Settings />,
    path: RoutePath.SETTINGS,
  },
];
