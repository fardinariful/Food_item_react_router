import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contactus from './Component/Contact US/Contactus';
import Footer from './Component/Footer/Footer';
//import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/about",
    element:<About></About>
  },
  {
    path: "/contact",
    element: <Contactus></Contactus>
  },
  {
    path: "/footer",
    element: <Footer></Footer>
  },
  // {
  //   path: "/",
  //   element: <Home></Home>
  // },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
