import React  from "react";
import './login.css';
import './App.css';
import { Link } from "react-router-dom";
import Register from "./register";
import { useState } from "react";
import axios from "axios";

const Login=({isShowlogin})=>
{
    const [user,setUser]=useState({
       
        email:"",
        passwrd:"",
       
    
    })
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
    
    const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res=>alert(res.data.message))
    }
    return(
        <>
        
      <div className={`${!isShowlogin ? "active": "show"}`}>
         {console.log("user",user)}
          <div className="container-right"><div className="profile"><b >Sign In</b></div>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have account?<Link to="./register">Signup</Link></h3>
        
          <input type="text"  name='email' value={user.email} placeholder="Your Email " onChange={handleChange} className="user" />
        
          <input type="password" name="passwrd" value={user.passwrd} onChange={handleChange} placeholder="Password" className="pwd"/>
          <div className="fgt-pwd"><a href="#">forget your password?</a></div>
          <div className="login" onClick={login}><b>Login</b></div>
          </div>
         
          </div>
          
        </>
    )
}
export default Login;