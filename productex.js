import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './productex.css';

function Productex()
{
    return(
        <>
        <Navbar/>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div><div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div><div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div><div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <div className='box'><div className='save-box'>saved</div><div className='add-box'>Add to cart</div></div>
        <Footer/>
        </>
    )
}

export default Productex;