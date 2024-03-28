import App from "@/App";
import Blog from "@/pages/blog";
import Home from "@/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
