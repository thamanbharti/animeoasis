import React, { useEffect, useState } from 'react'
import { MdWorkHistory } from "react-icons/md";
import Footer from './footer'
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useLocation, useNavigate } from 'react-router-dom';
import './profile.css'
export default function Profile() {
  const location=useLocation()
  const userData=location.state?.userData
  // console.log(userData)
  const name=userData.userid.name.toUpperCase();
  const [address,setAddress]=useState(userData.userid.address);
  const userId=userData.userid._id;
  const userEmail=userData.userid.email;
  console.log(userData)
  const [edit,setEdit]=useState(false);
  const [shippedData,setData]=useState([{ }]);

  useEffect(()=>{
       axios.get(`http://localhost:3001/addtocart/${userId}`)
       .then((res)=>{
        const data=[];
              for(let i=0;i<res.data.length;i++)
              {
               
                console.log(res.data.length);
                if(res.data[i].shipped===true)
                { 
                  console.log(res.data[0].shipped);
                  data.push( {
                    "Date": "41",
                    "price": res.data[i].price,
                    "name": res.data[i].name
                  })
        
                }
              }
             setData(data)
            
              
       })
       .catch((err)=>{
        console.log(err);
       })
  },[userId])

const updateAddress=()=>{
  axios.put(`http://localhost:3001/register/${userEmail}`,{address:address})
  .then(()=>{
      console.log("successfully changed address");
  })
  .catch((err)=>{console.log(err)});
}  
useEffect(()=>{
 


})
const handleChange=(e)=>{
  const address=e.target.value;
  setAddress(address)
}
console.log(address)  

  

  const changePhoto = () => {
    alert('Change photo functionality will be implemented here!');
  };
  return (
    <div id='profile'>
        <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
        <div className='history'><br/><span><h2 style={{color:'yellow'}}>Shipment History<MdWorkHistory color='red' size={21}/></h2></span>
        <br/>
        <br/>
        {
          shippedData.length<=0?<h3 style={{color:'red'}}>No Shipping till now</h3>:shippedData.map((data,index)=>(
            <div className='ship-x' key={index}><li typeof='none' style={{ color: 'black', fontSize: '16px' }}>Date of shipment:{data.Date}</li><li typeof='none' style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>item:{data.name}</li><li typeof='none' style={{ color: "black", fontSize: '16px', fontWeight:'bold'}}>Transaction:{data.price}</li></div>
          ))
        }
       
        
        </div>
    <div className='edit-profile'><div className='profile-photo1'>
        <img className="profile-photo" src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  alt="Profile Photo" />
      </div>
      <div className='all-details'>
        <div className='details' ><ImProfile size={20} color='violet'/>&nbsp;&nbsp;{name}</div>
        <div className='details'><IoMailUnreadOutline color='violet' size={20}/>&nbsp;&nbsp;<a>{userData.userid.email}</a></div>
        {edit?<input className='details' style={{color:'black',backgroundColor:'violet',fontFamily:'cursive',fontSize:'large'}} value={address} onChange={handleChange}/>:<div className='details'><FaAddressBook size={20} color='violet'/>&nbsp;&nbsp;{address}<span className='edit-btn' onClick={()=>{setEdit(!edit)}}><CiEdit color ={"white"} size={24}/></span></div>}
        {edit?<div className='buttons' onClick={()=>{setEdit(!edit);updateAddress()  }}>save</div>: <div className='buttons'>
            Logout
        </div>}
       
        </div>
        </div>
      <Footer/>  
</div>
  )
}
