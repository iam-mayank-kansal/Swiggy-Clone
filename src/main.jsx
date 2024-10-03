import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// router 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages 
import { AppLayout } from './App';

import { SignInPage } from './Pages/SignInPage';

import { Home } from './Pages/Home';
import { Heading } from './components/Heading';
// lazy loading 

// on demand loading 
// dynamic import 
// import { ResPage } from './Pages/ResPage';
// fallBack is used to render until the component completely renders 

const ResPage = lazy(() => import("./Pages/ResPage"));


const Rout_Link = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/swiggy-corporate", element: <SignInPage /> },
      { path: "/search", element: <SignInPage /> },
      { path: "/offers", element: <SignInPage /> },
      { path: "/help", element: <SignInPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/cart", element: <SignInPage /> },
      {
        path: "/restaurent/:resId",
        element: (
          <Suspense fallback={<section className="max-w-[700px] mx-auto"><Heading name="Loading ..." /></section>}>
            <ResPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error error={{ message: "Page not found" }} />, // Simplified Error Handling
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Rout_Link} />
)
