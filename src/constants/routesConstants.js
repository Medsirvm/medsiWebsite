import Dashboard from "../pages/Dashboard";

export const PUBLIC_ROUTES = [
  {
    path: "/dashboard",
    key: "landingPage",
    exact: true,
    restricted:false,
    component: () => <Dashboard />,
  },
];
