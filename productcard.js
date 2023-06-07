import React from 'react'
import {  Link } from "react-router-dom";
import './productcard.css'
import { RiLogoutBoxFill } from 'react-icons/ri';

function Product(setLoginUser)
{
    return(
        <>
       <Link to="./productex"> <div className='product-box' ><h3>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt</h3></div></Link>
        <div className='product-box1'><h3>&nbsp;&nbsp;&nbsp;&nbsp;Home hardware</h3></div>
        <div className='product-box2'><h3>&nbsp;&nbsp;&nbsp;&nbsp;Accessories</h3></div> 
        <div className='product-box3'><h3>&nbsp;&nbsp;&nbsp;&nbsp;comics<br /></h3></div> 
        <div className='product-box4'><h3>&nbsp;&nbsp;&nbsp;&nbsp;sketchbook<br /></h3></div>
        <div className='product-box5'><h3>&nbsp;&nbsp;&nbsp;&nbsp;shoes</h3></div>
        
       <br /> <br /> <br /> <div className='logout-section' onClick={()=>setLoginUser}><button className='Logout'><RiLogoutBoxFill size={21}/>logout</button></div>

        </>

    )
}

export default Product;