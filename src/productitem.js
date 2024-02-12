import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import { IoPersonOutline } from "react-icons/io5";
import Footer from './footer';
import './productex.css';
import { BsCartFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { IoLogIn } from "react-icons/io5";
import Popup from 'reactjs-popup';
import Data from "./data";
import shoesData from './shoes';
import AccessoriesData from './access';
import comicsData from './comics';
import hardwareData from './hardware';
import sketchBookData from './sketchbook';
import axios from "axios";

function Productitem() {
  const location=useLocation();
 const shipped=false;
 const Navigate=useNavigate();
  const userData=location.state?.userData;
  
  const item=location.state?.item;
  const userId=userData._id;
  const [number, setNum] = useState(0);
  const [basket, addtocart] = useState([]);
  // const [isButtonPressed, setIsButtonPressed] = useState({});
  const [animename, animenameSet] = useState('Naruto');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  
  
   
  const history = useNavigate();
  let Dataname;
   
  
    if(item==="merchandise")
    {
      Dataname=Data;
      console.log(Data)
    }
    else if(item==="comics")
    {
      Dataname=comicsData
    }
    else if(item==="accessories")
    {
      Dataname=AccessoriesData;
    }
    else if(item==="shoes")
    {
      Dataname=shoesData;
      console.log(shoesData)
    }
    else if(item==="sketchbook")
    {
      Dataname=sketchBookData; 
    }
    else if(item==="hardware")
    {
      Dataname=hardwareData;
    }
  
  
  console.log(item)
  const handleClick = () => {
    setShowLoginPopup(true);
  }

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  }
   
 
 
  const addToBasketAndPost = ({name,_id,price,image,shipped }) => {
    const cartItem = {name,_id,price,image,userId,item,shipped};
    axios.post('http://localhost:3001/addtocart',cartItem)
    .then(()=>{
      console.log("success");
    })
    .catch((err)=>{
      console.log(err)
    })
    addtocart(prevcart => [...prevcart, cartItem]);
    
  };
  

 

  

  const Productdata = ({ _id, name, price, image,userId }) => {
    // const isProductButtonPressed = isButtonPressed[id];

    return (
      <li className="list" key={_id}>
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
          onClick={() => addToBasketAndPost({ _id, name, price, image,shipped})}
          // disabled={isProductButtonPressed}
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
          <li className='active' onClick={() => { history('/') }}>Home</li>
          <li>Anime
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
              <li className='cartbtn' onClick={() => { history('/addtocart',{state:{userId:userId}}) }}>
                <BsCartFill size={21} />
                <span className='crnt-num'>{number}</span>
              </li>
             
            </ul>
          </div>
        </ul>
      </div>

      
      {/* <Popup open={showLoginPopup} onClose={handleClosePopup} modal nested contentStyle={{ alignItems: 'center', justifyContent: 'center' }} >
        <Login />
      </Popup> */}
      <br />
      
      {
      
        Dataname[animename].map(product => (
         <Productdata key={product._id} {...product} userId={userId}/>
))}

      <Footer />
    </>
  );
}

export default Productitem;
