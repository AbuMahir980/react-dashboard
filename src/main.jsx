import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard'
import Userprofile from './components/Dashboard/datas/Userprofile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard user={Userprofile}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
