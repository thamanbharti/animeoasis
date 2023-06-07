import React, { useState, useCallback } from "react";
import data from "./data";
import "./addtocart.css";
import { AiFillDelete } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";

function ADDTOCART() {
  

  const Book = ({ id, name, price, image }) => (
    <li>
      <hr />
      &nbsp;&nbsp;{name}
      <div className="products">
        &nbsp;<img src={image} width={200} alt={name} />
      </div>
      <div className="quantity">
        <button className="increment"  >
          +
        </button>
        &nbsp;qty&nbsp;
        <button className="decrement">-</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="remove">
          <AiFillDelete size={21} />
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <h2>
        &nbsp;<GiPriceTag />
        {price}
      </h2>
    </li>
  );

  return (
    <>
      <h1>CHECKOUT</h1>
      {data.map(Book)}
      <hr />
      <div className="total-section">
        <h2>TOTAL AMOUNT</h2>
      </div>
    </>
  );
}

export default ADDTOCART;
