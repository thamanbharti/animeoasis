import React from 'react'
import {  Link } from "react-router-dom";
import './productcard.css'

function Product()
{
    return(
        <>
       <Link to="./productex"> <div className='product-box' ><h3>T-shirt</h3></div></Link>
        <div className='product-box1'><h3>T-shirt</h3></div>
        <div className='product-box1'><h3>T-shirt</h3></div> 
        <div className='product-box1'><h3>T-shirt<br /></h3></div> 
        <div className='product-box1'><h3>T-shirt<br /></h3></div>
        <div className='product-box1'><h3>T-shirt</h3></div></>
    )
}

export default Product;