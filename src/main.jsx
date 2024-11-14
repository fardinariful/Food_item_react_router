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
import Fooditems from './Component/Fooditems/Fooditems';
//import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
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
      {
        path: "/fooditems",
        loader:()=>fetch('items.json'),
        element: <Fooditems></Fooditems>
      },
     
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
