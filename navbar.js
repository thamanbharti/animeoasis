import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import Popup from 'reactjs-popup';
import './navbar.css';
import './login';
import Login from './login';


function Navbar() {
  const Navigate = useNavigate();
   const [animename,animenameSet]=useState('');
  
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);

  const handleClick = () => {

    setShowLoginPopup(true);
  }

  const handleClosePopup = () => {
    
    setShowLoginPopup(false);
  }
 
  let number = parseInt(localStorage.getItem('number'));
   console.log(number)
  return (
    <>
   
      <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
      <div className='navbar'>
        <ul>
          <li className='active' onClick={()=>{Navigate('/')}}><a href='#'>Home</a></li>
          <li><a href='#'>Anime</a>
            <div className='sub-menu-1'>
              <ul>
                <li onClick={()=>{animenameSet('Naruto')}}>Naruto</li>
                <li onClick={()=>{animenameSet('One-piece')}}>One-piece</li>
                <li onClick={()=>{animenameSet('jutsu-kaisen')}}>jutsu-kaisen</li>
                <li onClick={()=>{animenameSet('onepunch man')}}>onepunch man</li>
                <li onClick={()=>{animenameSet('Demon-slayer')}}>Demon-slayer</li>
                
              </ul>
            </div>
          </li>

          <div className='logo-sec'>
            <ul>
              <li className='cartbtn' onClick={() => { Navigate('/addtocart') }}>
                <BsCartFill size={21} />
                <span className='crnt-num'>{number}</span>
              </li>
              <li className='login-nav' onClick={handleClick}>
                login<IoLogIn size={25} />
              </li>
            </ul>
          </div>
        </ul>
      </div>

      {/* The login popup */}
      <Popup open={showLoginPopup} onClose={handleClosePopup} modal nested contentStyle={{  alignItems: 'center', justifyContent: 'center' }} >
        <Login />
      </Popup>
    </>
  )
}

export default Navbar;
