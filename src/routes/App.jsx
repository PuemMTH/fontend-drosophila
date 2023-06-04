import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, RouterProvider, useLoaderData, useNavigate, Link, } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NotFound from "./NotFound.jsx";
import Login from "./std/Login_pages.jsx";
import Home from "./std/Home_pages.jsx";
import Drosophila_Selected from "../routes/std/Select_pages.jsx";
import Charts from "./std/Charts_pages.jsx";

import { Button } from "@mui/material";
import { ErrorInfo } from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}
const Layout = () => {
  return (
    <Outlet />
  )
}

let router = createBrowserRouter([
  {
    path: "/std",
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "select",
        element: <Drosophila_Selected />,
      }
    ],
    errorElement: <NotFound />,
  },
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "more",
            element: <div>More about</div>,
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "charts",
        element: <Charts />,
      }
    ],
    errorElement: <NotFound />,
  }
]);

export default function App() {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#4caf58',
        },
        secondary: {
          main: '#81c784',
        },
      },
    }
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ThemeProvider>
  );
}