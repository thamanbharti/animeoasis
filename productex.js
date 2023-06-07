import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './productex.css';
import { useState } from 'react';
import data from './data';
import {  BsCartFill} from "react-icons/bs";
import {GiPriceTag} from 'react-icons/gi'


function Productex()
{
    let [number,setNum]=useState(0);
    
    let incNum =()=>{
       
        setNum(Number(number)+1);
        
      };
      const Productdata = ({id,name,price,image}) => 
      <li className='list' key={id}>
       <hr />
      
        <div className='name'> &nbsp; &nbsp;{name} <span className='price'> 
        < GiPriceTag />&nbsp;&nbsp;${price}</span></div> &nbsp; &nbsp; &nbsp;
        <img alt={`cover of ${name}`} src={image} width={400}/>
         <button className='btn' onClick={incNum}><BsCartFill size={21} color='black'/></button>
         
    </li>
    
    
      
   
    return(
        <>
        <Navbar number={number}/>
       {data.map(Productdata)}
        

        <Footer/>
        </>
    )
}

export default Productex;