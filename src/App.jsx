import React from 'react';
import './App.css';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';


function App() {

 let routes= createBrowserRouter([
    {path:"startReactApp3",element:<Layout/>,children:[
      {index:true,element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"*",element:<NotFound/>},
      {path:"contact",element:<Contact/>},
    ]}
  ])
  return (
    <RouterProvider router={routes}>
     
    </RouterProvider>
  );
}

export default App;
