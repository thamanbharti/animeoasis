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
import Productitem from './productitem';
import ADDTOCART from './addtocart';
import Register from './register';
import Product from './productcard';
import Empty from './empty';
import Payment from './payment';
import Profile from './profile';
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
    path: "/productitem",
    element: <Productitem/>,
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
    path:"/productitem/addtocart",
    element:<ADDTOCART/>
  },
  {
    path:"/login/App",
    element:<App/>
  },
  {
    path:"/empty",
    element:<Empty/>
  }
  ,{
    path:'/productcard',
    element:<Product/>
  }
  ,{
    path:'/payment-animeoasis',
    element:<Payment/>
  }
  ,{
    path:'/profile',
    element:<Profile/>
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
