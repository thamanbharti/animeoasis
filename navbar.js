import React from 'react'
import {  Link } from "react-router-dom";
import {  BsCartFill} from "react-icons/bs";
import {IoLogIn  } from "react-icons/io5";
import './navbar.css'
import './login'

function Navbar({handleloginClick,number}){
    
     const handleClick=()=>{
      handleloginClick()
     }


    return(
        
        <>
        <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
          <div className='navbar'><ul><li className='active'><a href='#'>Home</a></li>
          <li><a href='#'>Anime</a><div className='sub-menu-1'><ul><li>Anime 1</li>
          <li>Anime 2</li><li>Anime 3</li><li>Anime 4</li><li>Anime 5</li><li>Anime 6</li><li>Anime 7</li></ul></div></li>
          <li><a href='#'>Shop All</a><div className='sub-menu-2'><ul><li>shop 1</li>
          <li>shop 2</li><li>shop 3</li><li>shop 4</li><li>shop 5</li><li>shop 6</li><li>shop 7</li></ul></div></li>
          
          <div className='logo-sec'><ul><li ><BsCartFill size={21}/><span className='crnt-num'>{number}</span></li>
          <li className='login-nav' onClick={handleClick}>login<IoLogIn size={25}/></li></ul></div>
          </ul>
        </div>
     

           
        </>
    )
}




export default Navbar;