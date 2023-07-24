import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './login';
import Footer from './footer';
import './productex.css';
import { BsCartFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { IoLogIn } from "react-icons/io5";
import Popup from 'reactjs-popup';
import Data from "./data";
import axios from "axios";

function Productitem() {
  const [number, setNum] = useState(0);
  const [basket, addtocart] = useState([]);
  const [isButtonPressed, setIsButtonPressed] = useState({});
  const [animename, animenameSet] = useState('Naruto');
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const history = useNavigate();
  
  
  
  const handleClick = () => {
    setShowLoginPopup(true);
  }

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  }

  const setmyBasket = (product) => {
    addtocart((prevBasket) => [...prevBasket, product]);
    setNum((prevNumber) => prevNumber + 1);
    setIsButtonPressed((prevstateofbtn) => ({
      ...prevstateofbtn,
      [product.id]: true,
    }));
  };

  const addToBasketAndPost = (product) => {
    setmyBasket(product);
    alert("Added to cart");

    // Send the product to the server
    const url = 'http://localhost:3001/addtocart';
    axios.post(url, product)
      .then(response => {
        // Handle successful response
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  const Productdata = ({ id, name, price, image }) => {
    const isProductButtonPressed = isButtonPressed[id];

    return (
      <li className="list" key={id}>
        <div className="name">
          &nbsp;&nbsp;{name}{' '}
          <span className="price">
            <GiPriceTag />&nbsp;&nbsp;${price}
          </span>
        </div>
        &nbsp; &nbsp; &nbsp;
        <img alt={`cover of ${name}`} src={image} width={400} />
        <button
          className="btn"
          onClick={() => addToBasketAndPost({ id, name, price, image })}
          disabled={isProductButtonPressed}
        >
          <BsCartFill size={21} color="black" />
        </button>
        <br /><br /><br />
      </li>
    );
  };

  return (
    <>
      <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
      <div className='navbar'>
        <ul>
          <li className='active' onClick={() => { history('/') }}><a href='#'>Home</a></li>
          <li><a href='#'>Anime</a>
            <div className='sub-menu-1'>
              <ul>
                <li onClick={() => { animenameSet('Naruto') }}>Naruto</li>
                <li onClick={() => { animenameSet('Onepiece') }}>One-piece</li>
                <li onClick={() => { animenameSet('jutsukaisen') }}>jutsu-kaisen</li>
                <li onClick={() => { animenameSet('onepunchman') }}>onepunch man</li>
                <li onClick={() => { animenameSet('Demonslayer') }}>Demon-slayer</li>
              </ul>
            </div>
          </li>

          <div className='logo-sec'>
            <ul>
              <li className='cartbtn' onClick={() => { history('/addtocart') }}>
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
      <Popup open={showLoginPopup} onClose={handleClosePopup} modal nested contentStyle={{ alignItems: 'center', justifyContent: 'center' }} >
        <Login />
      </Popup>
      <br />
      
      {Data[animename].map(product => (
         <Productdata key={product.id} {...product} />
))}

      <Footer />
    </>
  );
}

export default Productitem;
