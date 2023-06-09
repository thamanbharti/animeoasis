import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productex from './productex';
import ADDTOCART from './addtocart';
import Register from './register';
import Product from './productcard';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/productex",
    element: <Productex/>,
  },
  {
    path: "/addtocart",
    element: <ADDTOCART/>,
  },
  {
    path: "/register",
    element:< Register/>
  },
  {
    path:"/productex/addtocart",
    element:<ADDTOCART/>
  },
  {
    path:"/login/App",
    element:<App/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
