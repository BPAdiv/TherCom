import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuthPage from "./userAuth/UserAuthPage.jsx";
import ErrorPage from "./general/ErrorPage.jsx";
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import RegisterPage from "./userAuth/RegisterPage.jsx";
import LoginPage from "./userAuth/LoginPage.jsx";
import LandPage from "./landpage/LandPage.jsx";
import ForumPage from "./forum/ForumPage.jsx";
import CreatePost from "./forum/components/CreatePost.jsx";
import ForumPostTopic from "./forum/components/ForumPostTopci.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forum",
    element: <ForumPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forum/post/:postId",
    element: <ForumPostTopic />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forum/post/create",
    element: <CreatePost />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
