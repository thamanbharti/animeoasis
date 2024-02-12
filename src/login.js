import React  from "react";
import './login.css';
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Login=({isShowlogin},{setLoginUser})=>
{
    const Navigate=useNavigate()
    
    const [show,Display]=useState(0)
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
        // console.log(name,value)
    }
    
   

    const login = () => {

        if(user.email===""){
           alert("Email Required")
        }
        axios.post("http://localhost:3001/login", user)
        .then(res => {
           
            console.log(res.data.user)
            
            if(res.data.message==='Login successful')
            {
            setUser(res.data.user)

                Navigate('/productcard',{state:{userData:res.data.user}});

            }
            else if(user.email!=""||user.passwrd!=""){
                
               show=1;
            }
        })
    }
    return(
        <>
        
      
         {console.log("user",user)}
          <div className="container-right"><div className="profile"><b >Sign In</b></div>
          <h3>Don't have account?<Link to="./register">Signup</Link></h3>
        
          <input type="text"  name='email' value={user.email} placeholder="Your Email " onChange={handleChange} className="user" />
        
          <input type="password" name="passwrd" value={user.passwrd} onChange={handleChange} placeholder="Password" className="pwd"/>
          {show===true?<div className="fgt-pwd" style={{color:'white',fontWeight:'bold'}}>Signup first or password must be wrong</div>:<div style={{color:'white',fontWeight:'bold'}}>Fill all required fields</div>}
          <div className="login" onClick={login}><b>Login</b></div>
          </div>
         
          
          
        </>
    )
}
export default Login;