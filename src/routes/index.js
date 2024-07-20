import ContactUs from "../pages/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import Fashion1 from "../pages/Home/fashion-1";
import NotFound from "../pages/Not-found";
import Login from "../pages/Login";
import Mainlayout from "../layouts/main-layout";
import AuthProvider from "../providers/auth-Provider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <AuthProvider component={Fashion1} /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
  { path: "*", element: <NotFound /> },
  { path: "/login", element: <Login /> },
]);
