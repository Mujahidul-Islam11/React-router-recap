import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/\*_Adding a route _/
//step-1
// import createBrowserRouter, RouterProvider from react-router-dom package
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//step-2
// call the createBrowserRouter function

const router = createBrowserRouter([
// create a path and select an element for the path
{
path: "/",
element: <div>Hello World!</div>,
},
]);

//step-3
// call the routerProvider func inside the react.strictMode, and pass the routes that you have created above
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
);

## loader & useLoaderData

// step -1 
type the loader inside of main.jsx where you created the route & where you want to load the data.
{
path: '/Users',
element: <Users></Users>,
loader: () => fetch('https://jsonplaceholder.typicode.com/users')
},

// step -2
Load the data using useLoaderData func.
const users = useLoaderData();

