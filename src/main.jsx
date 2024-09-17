import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// router 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages 
import { AppLayout } from './App';

import { SignInPage } from './Pages/SignInPage';

import { Home } from './Pages/Home';

const Rout_Link = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/swiggy-corporate",
        element: < SignInPage />
      },
      {
        path: "/search",
        element: < SignInPage />
      },
      {
        path: "/offers",
        element: < SignInPage />
      },
      {
        path: "/help",
        element: < SignInPage />
      },
      {
        path: "/sign-in",
        element: < SignInPage />
      },
      {
        path: "/cart",
        element: < SignInPage />
      },
    ],
    errorElement: <Error />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Rout_Link} />
)
