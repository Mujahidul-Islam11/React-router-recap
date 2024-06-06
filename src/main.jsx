import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "/about",
    element: <div>Hello World! from about page</div>,
  },
  {
    path: "/contact",
    element: <div>Hello World! from about page</div>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
