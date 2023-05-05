import React from 'react'
import './footer.css'
import {IoLogoFacebook,IoLogoInstagram,IoMail  } from "react-icons/io5";

function Footer()
{
    return(
        <>
        <div className='footer'><div className='contact-us'><h3>Contact-us</h3>
        <div className='require-contact'><ul type='none'><li>contact</li>
        <li>Email</li><li>Address</li></ul></div>
        </div><div className='policy'><h3>Company-policy</h3><div className='require-policy'><ul type='none'><li>policy 1</li>
        <li>policy 2</li>
        <li>policy 3</li></ul></div></div><div className='payment'><h3>payment-method</h3><div className='require-payment'><ul type='none'><li>method 1</li>
        <li>method 2</li>
        <li>method 3</li></ul></div></div><div className='social-icon'><p>Also connect-with us on</p></div><hr/><div className='icons'><IoMail size={30}/>&nbsp;&nbsp;<IoLogoInstagram size={30}/>&nbsp;&nbsp;<IoLogoFacebook size={30}/></div><div className='right-reserved'><u>Anime-oasis @2022-All right reserved</u></div></div>
        </>
    )
}

export default Footer;