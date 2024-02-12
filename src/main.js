import React, { useEffect, useState } from 'react';
import Login from './login';
import './main.css';
import Register from './register';
import Popup from 'reactjs-popup';

export default function Main() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const url = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48f15006-bc11-49fa-ae79-396c79c46b6a/dd08wn1-28d112c1-3210-4414-919a-a44ab694e0f9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4ZjE1MDA2LWJjMTEtNDlmYS1hZTc5LTM5NmM3OWM0NmI2YVwvZGQwOHduMS0yOGQxMTJjMS0zMjEwLTQ0MTQtOTE5YS1hNDRhYjY5NGUwZjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ARbCPzA8iputOmp24DDmacDLDN_G3L1UhLos65WP5AI',
    'https://wallpapercave.com/wp/wp8115145.png',
    'https://wallpaperaccess.com/full/229954.jpg'
    ,'https://wallpapercave.com/wp/wp7836447.png'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % url.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClickLogin = () => {
    setShowLoginPopup(true);
  };

  const handleClickRegister = () => {
    setShowRegisterPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  return (
    <div className='main-page' style={{ backgroundImage: `url(${url[currentIndex]})` }}>
      <header>
        <h1>AnimeOasis</h1>
      </header>

      <section>
        <h2>Welcome to AnimeOasis</h2>
        <p>Discover and enjoy your favorite animeStore!</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button className='login-btn' onClick={handleClickLogin}>
          Login
        </button>
        &nbsp;&nbsp;
        <button className='signup-btn' onClick={handleClickRegister}>
          Signup
        </button>

        <Popup open={showLoginPopup} onClose={handleClosePopup} modal nested contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <Login />
        </Popup>
        <Popup open={showRegisterPopup} onClose={handleClosePopup} modal nested contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <Register />
        </Popup>
      </section>
      
          <div className='seq-num'>{currentIndex+1}/4 </div> 
       
      
    </div>
  );
}
