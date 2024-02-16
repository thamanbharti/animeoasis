import React from 'react'
import "./register.css"
import { useState } from 'react'
import axios from 'axios'   //axios-helps to call api
import { useNavigate } from 'react-router-dom'

const Register = () => {
const Navigate=useNavigate();
const [user,setUser]=useState({
    name:"",
    email:"",
    passwrd:"",
    reEnterpasswrd:"",
    address:""

})
const register=()=>{
  const {name,email,passwrd,reEnterpasswrd,address}=user
   if(name&&email&&passwrd&&(passwrd===reEnterpasswrd))
   { 
    
    axios.post("http://localhost:3001/register",user)
    .then((res)=>{
      if(res.data.message==="User allready register")
      {
        alert("User already register ")
        Navigate('/')
      }
    }
      )
     Navigate(-1)
   }
   else{
    alert("invalid information or invalid input")
   }
 
}
//e=onchanging anything in the input field changes got stored in event e  ,target property give the place where event occured ..
const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
        ...user,  ///...user,helps to whenever i am changing onething ,remaining thing should remain intact;
        [name]:value   /// these line helps to in which input field i am working keep that thing  value in
                        /// its name
    })
    console.log(name,value)

    
}
  return (
    <div className="container-right"><div className="profile"><b >Signup</b></div>
  <input type="text" placeholder="Enter your Username"name='name' value={user.name} onChange={handleChange} className="user" />
    <input type="text" name='email' value={user.email} placeholder='Enter your E-mail' onChange={handleChange} className='user'/>
    <input type="password" name='passwrd' value={user.passwrd} placeholder="Enter your password" onChange={handleChange} className="pwd"/>
    <input type="password" name='reEnterpasswrd' value={user.reEnterpasswrd}placeholder="Confirm your password" onChange={handleChange} className="pwd"/>
    <div className="login" onClick={register}><b>Signup</b></div>  
    </div>
   
  )
}

export default Register;