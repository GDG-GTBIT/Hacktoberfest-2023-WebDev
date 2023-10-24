// import Main from "../pages/Main";
// import Emails from "../components/Emails";

import { lazy } from "react";
// learn about react lazy loading

const Main = lazy(() => import("../pages/Main"));
const Emails = lazy(() => import("../components/Emails"));
const ViewEmail = lazy(() => import("../components/ViewEmail"));
const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
};

export { routes };
