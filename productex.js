// import React from 'react';
// import Navbar from './navbar';
// import Footer from './footer';
// import './productex.css';
// import { useState } from 'react';
// import data from './data';
// import {  BsCartFill} from "react-icons/bs";
// import {GiPriceTag} from 'react-icons/gi'
// import ADDTOCART from './addtocart';

// function Productex()
// {
//     let [number,setNum]=useState(0);
//     let [basket,addtocart]=useState([]);

//     let setmyBasket=(product)=>{
//         addtocart((prevBasket) => [...prevBasket, product])
//         setNum(Number(number)+1);
//     }
//     // let incNum =()=>{
       
        
        
//     //   };
//       const Productdata = ({id,name,price,image}) => 
//       <li className='list' key={id}>
//        <hr />
      
//         <div className='name'> &nbsp; &nbsp;{name} <span className='price'> 
//         < GiPriceTag />&nbsp;&nbsp;${price}</span></div> &nbsp; &nbsp; &nbsp;
//         <img alt={`cover of ${name}`} src={image} width={400}/>
//          <button className='btn' onClick={() => setmyBasket({ id, name, price, image })} ><BsCartFill size={21} color='black'/></button>
         
//     </li>
    
    
      
   
//     return(
//         <>
//         <Navbar number={number}/>
//        {data.map(Productdata)}
       
//         <Footer/>
//         </>
//     )
// }

// export default Productex;

import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './productex.css';
import { BsCartFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import data from "./data";
import ADDTOCART from './addtocart';

function Productex() {
  let [number, setNum] = useState(0);
  let [basket, addtocart] = useState([]);

  let setmyBasket = (product) => {
    addtocart((prevBasket) => [...prevBasket, product]);
    setNum(Number(number) + 1);
    console.log(basket);
  };

  const Productdata = ({ id, name, price, image }) => (
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
        onClick={() => setmyBasket({ id, name, price, image })}
      >
        <BsCartFill size={21} color="black" />
      </button>
      <br/><br/><br/>
    </li>
  );

  return (
    <>
      <Navbar number={number} />
      <br/>
      {data.map(Productdata)}
      <ADDTOCART basket={basket}/>
      <Footer />
    </>
  );
}

export default Productex;









