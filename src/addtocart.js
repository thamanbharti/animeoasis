import React, { useEffect, useState } from 'react';
import './addtocart.css';
import Footer from './footer';
import axios from 'axios';
import Empty from './empty';
import { IoPersonOutline } from "react-icons/io5";
import { AiFillDelete } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import Notify from './notify';

function Addtocart() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
  const date=new Date().getDate();
  const [cartdata, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({});
  const [a,send]=useState(false);
  useEffect(() => {
    axios.get(`http://localhost:3001/addtocart/${userId}`)
    .then((res)=>{
      const data=[];
      for(let i=0;i<res.data.length;i++)
      {
       
        
        if(res.data[i].shipped===false)
        { 
          data.push(res.data[i])
        }
      }
      setData(data)
    })
    
  }, [userId]);


  const sendNotification = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-notification', {
        to: '+918103621241',
        message: "order placed",
      });
  
      console.log(response.data); // Notification sent successfully
    } catch (error) {
      console.error('Error sending notification:', error.message);
    }
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartdata.length; i++) {
      sum = sum + parseInt(cartdata[i].price);
    }
    setTotal(sum);
  }, [cartdata]);

  const ondelete = (id) => {
    axios.delete(`http://localhost:3001/addtocart/${id}`)
      .then(() => console.log("successfully deleted"))
      .catch((err) => console.log(err));
  };
  const payment_start = async (totalAmount) => {
    try {
      const paymentResponse = await axios.post('http://localhost:3001/payment_animeoasis', { total: total,cartdata:cartdata,date:date});
      const orderId = paymentResponse.data.order_id;
      console.log(paymentResponse.data.key)
      const orderData = {
        key: paymentResponse.data.key,
        amount: parseInt(totalAmount) * 100,
        currency: 'INR',
        name: "Anime-Oasis",
        order_id: orderId,
        prefill: {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc",
          // hide_topbar: false,  // Show or hide the top ba
          // image:"https://wallpapers.com/images/featured/anime-boy-dark-oltg2lztxcu00bec.jpg"
        },      
        handler: function () {
         
          axios.put(`http://localhost:3001/addtocart/${userId}`,{shipped:true})
          .then(()=>{
          console.log("successfully updated shipped");
          send(true);
        })
          .catch((err)=>console.log(err))
         
        }

      };

      setOrder(orderData);
      
      console.log('Before Razorpay initialization');

    } catch (err) {
      console.log(err);
    }
  };

useEffect(()=>{
  if(a)
  {
    sendNotification();
  }
},[a])


useEffect(() => {
  if (Object.keys(order).length > 0) {
    console.log(order.key,"hi")
    const rzp = new window.Razorpay(order);
    console.log(rzp.id)
    rzp.on('payment.failed', function (response) {

    });
    


    document.getElementById('payButton').onclick = function () {
      rzp.open();
     
    };
  }
}, [order]);





  return (
    <>
    
      <div className='webname'><h1> Anime<h21>-oasis</h21> </h1>
      </div>
      
      <div className='basket-container'>
        <div className="box-container">
         
          {cartdata.length > 0 ? cartdata.map((item, index) => (
            <div key={index} className="box">
              <span className='delete' onClick={() => ondelete(item._id)}><AiFillDelete size={21} /></span>
              <div className="itemname">{item.name}</div>
              <div className="itemprice">${item.price}</div>
              <img className="Image" src={item.image} alt={`cover of ${item.name}`} />
            </div>
          )) : <Empty />
         } 
        </div>
     
        <h2 >TOTAL AMOUNT=${total}</h2>
    
      <br/>
      {/* <button onClick={()=> sendNotification()} id='payButton'>Place the order</button> */}
      <button onClick={() => {payment_start(total);
        // sendNotification()
      }} id='payButton'>Place the order</button>

      </div>
      <Footer />
    </>
  );
}

export default Addtocart;
