import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuthPage from "./userAuth/UserAuthPage.jsx";
import ErrorPage from "./general/ErrorPage.jsx";
import UserContextProvider from "./contexts/UserContextProvider.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/account",
    element: <UserAuthPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/product/:productAsin",
  //   element: <ProductPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/user/tracks",
  //   element: <UserHome />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/addProduct",
  //   element: <FollowProductPage />,
  //   errorElement: <ErrorPage />,
  // },

  // {
  //   path: "/products",
  //   element: <AllProductsPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/getStarted",
  //   element: <GetStartedPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
