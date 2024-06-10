import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Groups from "./components/Groups.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>, 
    children: [
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      },
      {
        path: '/Users',
        element: <Users></Users>,
      },
      {
        path: '/Groups',
        element: <Groups></Groups>,
        loader: ()=> fetch('/groups.json'),
      },
      {
        path: '/Users/:id', // if you give '/Users/id' it will be a fixed route, but to set a dynamic
        // route we have to give a colon before the id '/Users/:id' colon means an id will be passed
        // here Users component
        element: <UserDetails></UserDetails>,
        // load single data using params
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
