import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './productex.css';
import { BsCartFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import data from "./data";
import axios from "axios";

function Productex() {
  const [number, setNum] = useState(0);
  const [basket, addtocart] = useState([]);
  const [isButtonPressed, setIsButtonPressed] = useState({});

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
      <Navbar number={number} />
      <br />
      {data.map(Productdata)}
      <Footer />
    </>
  );
}

export default Productex;
