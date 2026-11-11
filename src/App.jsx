import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout';
import Homepage from './pages/Homepage';
import Menupage from './pages/Menupage';
import Aboutpage from './pages/Aboutpage';
import Gallerypage from './pages/Gallerypage';
import Contactpage from './pages/Contactpage';



export default function App() {
  const routers=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/menu",
      element:<Menupage/>
    },
    {
      path:"/about",
      element:<Aboutpage/>
    },
    {
      path:"/gallery",
      element:<Gallerypage/>
    },
    {
      path:"/contact",
      element:<Contactpage/>
    }

      ]
    },
    
  ]);
  return (
    <>
    
    <RouterProvider router={routers}/>
    </>
  )
}
