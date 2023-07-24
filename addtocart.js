import React from 'react'
import './addtocart.css'
import Footer from './footer';
function addtocart() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','item6'];
  const calculateTotalAmount = () => {
    let total = 0;
    for (const item of data) {
      total += item.price;
    }
    return total;
  };

  return (
   <> <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
      <h1>Your basket</h1>
    <div className='basket-container'>
      <div className="box-container">
      {data.map((item, index) => (
        <div key={index} className="box">
          <div className="name">{item.name}</div>
          <div className="price">${item.price}</div>
          <button className="price">Confirm</button>
          <img className="image" src={item.image} alt={`cover of ${item.name}`} />
        </div>
      ))}
    </div>
    </div>
    <div className="total-section">
        <h2>TOTAL AMOUNT=${calculateTotalAmount()}</h2>
      </div>
    <button className='payment-btn'>Place the order</button>
    <Footer/>
    </>
  );
  
}

export default addtocart
