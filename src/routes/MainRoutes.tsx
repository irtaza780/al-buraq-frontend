import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout/Header";
import Loadable from "../ui-components/Loadable";
// import MinimalLayout from "../layout/MinimalLayout";
import Protectedroutes from "./protectedRoutes";

const HomePage = Loadable(lazy(() => import("../views/HomePage")));
const About = Loadable(lazy(() => import("../views/About")));
const Services = Loadable(lazy(() => import("../views/Services")));
const Portfolio = Loadable(lazy(() => import("../views/Portfolio")));
const Contact = Loadable(lazy(() => import("../views/Contact")));
const UserProfile = Loadable(
  lazy(() => import("../views/UserProfile/UserProfile"))
);
const OrderTemplates = Loadable(lazy(() => import("../views/OrderTemplates")));
const OrderCheckout = Loadable(
  lazy(() => import("../views/Orders/OrderCheckout"))
);

const OrderPayment = Loadable(
  lazy(() => import("../views/Orders/OrderPayment"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <Protectedroutes component={<MainLayout />} />,
  children: [
    {
      path: "homepage",
      element: <Protectedroutes component={<HomePage />} />,
    },
    {
      path: "about",
      element: <Protectedroutes component={<About />} />,
    },
    {
      path: "services",
      element: <Protectedroutes component={<Services />} />,
    },
    {
      path: "portfolio",
      element: <Protectedroutes component={<Portfolio />} />,
    },
    {
      path: "contact",
      element: <Protectedroutes component={<Contact />} />,
    },
    {
      path: "user-profile",
      element: <Protectedroutes component={<UserProfile />} />,
    },
    {
      path: "order-templates",
      element: <Protectedroutes component={<OrderTemplates />} />,
    },
    {
      path: "order-checkout",
      element: <Protectedroutes component={<OrderCheckout />} />,
    },
    {
      path: "order-payment",
      element: <Protectedroutes component={<OrderPayment />} />,
    },
  ],
};

export default MainRoutes;
