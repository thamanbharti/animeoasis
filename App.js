
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './navbar';
import Product from './productcard';
import Footer from './footer';
import Login from './login';
import ADDTOCART from './addtocart';
import Productex from './productex';
import Register from './register';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App({number}) {
  
  const [user,setLoginUser]=useState({})
  const [isShowlogin,setIsShowlogin]=useState(true)
  
  return (
   <> 
   <div className='App'>
   <Navbar  number={number}/>
   <Product/>
   <Footer/> 

      
    
  
      
      
      
      
    </div>
  </>
  );
}

export default App;
