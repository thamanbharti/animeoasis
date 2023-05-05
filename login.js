import React  from "react";
import './login.css';
import './App.css';


const Login=({isShowlogin})=>
{

    
    return(
        <>
        
      <div className={`${!isShowlogin ? "active": "show"}`}>
         
          <div className="container-right"> <div className="cancel" >x</div><div className="profile"><b >Sign In</b></div>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have account?<a href="#">Signup</a></h3>
        
          <input type="text" placeholder="Your Username " className="user" />
        
          <input type="password" placeholder="Password" className="pwd"/>
          <div className="fgt-pwd"><a href="#">forget your password?</a></div>
          <div className="login"><b>Login</b></div>
          </div>
         
          </div>
          
        </>
    )
}
export default Login;