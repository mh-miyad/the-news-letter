import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Component/LogIn_Comp.jsx";
import SignUp from "./Component/SignUp_Comp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Authprovider from "./Provider/Authprovider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path:'/login',
      element: <Login/>
       },
      { path:'/signup',
      element: <SignUp/>
       },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Authprovider>

   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>
);
