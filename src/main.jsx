import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Report from "./routes/report";

import "./index.css";
import { ConfigProvider } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "23456THGC23TYGRV",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#ccde02",
        colorTextBase: "#6a747b",
        fontFamily: "Poppins, sans-serif",
        borderRadius: 4,
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);
