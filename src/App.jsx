import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fashion1 from "./pages/Home/fashion-1";
import NotFound from "./pages/Not-found";
import Login from "./pages/Login";
import Mainlayout from "./layouts/main-layout";
import AuthProvider from "./providers/auth-Provider";
import FetchSingleProduct from "./pages/Home/product";
import ShoppingCart from "./pages/cartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { index: true, element: <AuthProvider component={Fashion1} /> },
        { path: "/New Arrival", element: <Fashion1 /> },
        { path: "/Best Sellers", element: <Fashion1 /> },
        { path: "/Featured", element: <Fashion1 /> },
        { path: "/Special Offer", element: <Fashion1 /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/product/:id", element: <FetchSingleProduct /> },
        { path: "/ShoppingCart", element: <ShoppingCart /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
