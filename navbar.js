import React, { createContext, useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Popup from 'reactjs-popup';
import './navbar.css';
import './login';
import Login from './login';
import Footer from './footer';
import Empty from './empty';



function Navbar({userData}) {
  const Navigate = useNavigate();
   const [animename,animenameSet]=useState('');
  
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const userId=userData.userId;

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
          <li className='active' onClick={()=>{Navigate('/')}}>Home</li>
          <li>Anime
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
              {/* <li className='cartbtn' onClick={() => { Navigate('/addtocart',{state:{userId:userId}}) }}> */}
                {/* <BsCartFill size={21} /> */}
                {/* <span className='crnt-num'>0</span> */}
              {/* </li> */}
              <li className='login-nav' >
                <IoPersonOutline size={28} color='black' onClick={()=>Navigate('/profile',{state:{userData:userData}})}/>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      
      
      {/* The login popup */}
      {/* <Popup open={showLoginPopup} onClose={handleClosePopup} modal nested contentStyle={{  alignItems: 'center', justifyContent: 'center' }} >
        <Login />
      </Popup> */}
    </>
  )
}

export default Navbar;
