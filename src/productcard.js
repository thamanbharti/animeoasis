import React from 'react'
import {  Link, useLocation, useNavigate } from "react-router-dom";
import './productcard.css'
import Footer from './footer';
import { RiLogoutBoxFill } from 'react-icons/ri';
import Navbar from './navbar';

function Product(setLoginUser)
{
    const location=useLocation();
    const userData=location.state?.userData;
    console.log(userData._id);
    const Navigate=useNavigate();
    return(
        <>
        <Navbar userData={{userid:userData}}/>
        <div className='product-box' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"merchandise"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt</h3></div>
        <div className='product-box1' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"accessories"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp;Accessories </h3></div>
        <div className='product-box2' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"hardware"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp; Hardware</h3></div> 
        <div className='product-box3' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"comics"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp;comics<br /></h3></div> 
        <div className='product-box4' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"sketchbook"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp;sketchbook<br /></h3></div>
        <div className='product-box5' onClick={()=>Navigate('/productitem',{state:{userData:userData,item:"shoes"}})}><h3>&nbsp;&nbsp;&nbsp;&nbsp;shoes</h3></div>
        
        <Footer/>

        </>

    )
}

export default Product;