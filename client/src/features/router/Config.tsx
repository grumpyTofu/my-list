import Dashboard from "../../pages/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  icon: any;
  title: string;
}

// TODO: Setup to contain all routes
export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Dashboard />,
    icon: <DashboardIcon />,
    title: "Dashboard",
  },
];
