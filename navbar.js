import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import Popup from 'reactjs-popup';
import './navbar.css';
import './login';
import Login from './login';

function Navbar({ number }) {
  const Navigate = useNavigate();

  
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);

  const handleClick = () => {

    setShowLoginPopup(true);
  }

  const handleClosePopup = () => {
    
    setShowLoginPopup(false);
  }

  return (
    <>
      <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
      <div className='navbar'>
        <ul>
          <li className='active'><a href='#'>Home</a></li>
          <li><a href='#'>Anime</a>
            <div className='sub-menu-1'>
              <ul>
                <li>Anime 1</li>
                <li>Anime 2</li>
                <li>Anime 3</li>
                <li>Anime 4</li>
                <li>Anime 5</li>
                <li>Anime 6</li>
                <li>Anime 7</li>
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
