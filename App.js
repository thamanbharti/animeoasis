
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './navbar';
import Product from './productcard';
import Footer from './footer';
import Login from './login';
import ADDTOCART from './addtocart';
import Productex from './productex';

function App() {
  
  const [isShowlogin,setIsShowlogin]=useState(true)
  const handleloginClick=()=>{
    setIsShowlogin((isShowlogin)=>!isShowlogin)
  }
  return (
   <>
   <div className='App'>
      <Navbar handleloginClick={handleloginClick}/>
      <Login isShowlogin={isShowlogin}/>
      <Product/>
      {/* <Productex/> */}
      <Footer/>
      
      
    </div>
  </>
  );
}

export default App;
