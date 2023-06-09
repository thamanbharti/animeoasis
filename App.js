
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
  const handleloginClick=()=>{
    setIsShowlogin((isShowlogin)=>!isShowlogin)
  }
  return (
   <> 
   <div className='App'>
   <Navbar handleloginClick={handleloginClick} number={number}/>
   {/* <Login isShowlogin={isShowlogin}/> */}
      {isShowlogin?(<Login/>):(<>
        <Product/>
        <Footer/> 
</>)}
      
    
  
      
      
      
      
    </div>
  </>
  );
}

export default App;
