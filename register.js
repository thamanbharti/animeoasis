import React from 'react'
import "./register.css"
import { useState } from 'react'
import axios from 'axios'   //axios-helps to call api
const Register = () => {
const [user,setUser]=useState({
    name:"",
    email:"",
    passwrd:"",
    reEnterpasswrd:""

})
const register=()=>{
  const {name,email,passwrd,reEnterpasswrd}=user
   if(name&&email&&passwrd&&passwrd===reEnterpasswrd)
   { 
    
    axios.post("http://localhost:9002/register",user)
    .then(res=>console.log(res))
   }
   else{
    alert("kya kar rha hai bhai")
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
    {console.log("user",user)}
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;Don't have account?</h3>
  
    <input type="text" placeholder="Enter your Username"name='name' value={user.name} onChange={handleChange} className="user" />
    <input type="text" name='email' value={user.email} placeholder='Enter your E-mail' onChange={handleChange} className='user'></input>
    <input type="password" name='passwrd' value={user.passwrd} placeholder="Enter your password" onChange={handleChange} className="pwd"/>
    <input type="password" name='reEnterpasswrd' value={user.reEnterpasswrd}placeholder="Confirm your password" onChange={handleChange} className="pwd"/>
    <div className="fgt-pwd"></div>
    <div className="login" onClick={register}><b>Signup</b></div><h3 className='or'>or</h3>
    <div className='login'><b>SignIn</b></div>
    </div>
   
  )
}

export default Register;