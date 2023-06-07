import React from 'react'
import './footer.css'
import {IoLogoFacebook,IoLogoInstagram,IoMail  } from "react-icons/io5";
import {AiTwotonePhone,AiTwotoneMail,AiFillCreditCard}from 'react-icons/ai'
import {FaAddressBook}from 'react-icons/fa'
import {BsCashCoin}from 'react-icons/bs'
import {CgPaypal}from 'react-icons/cg'
import {SiPaytm}from 'react-icons/si'
function Footer()
{
    return(
        <>
        <div className='footer'><div className='contact-us'><h3>Contact-us</h3>
        <div className='require-contact'><ul type='none'><li>< AiTwotonePhone size={21}/>&nbsp;<u>78546564561,8104553563</u></li>
        <li><AiTwotoneMail size={21}/>&nbsp;<u>animeoasis124@gmail.com</u></li><li><FaAddressBook size={21}/>&nbsp;<u>chinch pokhli ,sector-6,chattisgarh</u></li></ul></div>
        </div><div className='policy'><h3>Company-policy</h3><div className='require-policy'><ul type='none'><li>return under 7 days of shipping only</li>
        <li>maximum quantity of product  buying is fixed</li>
        </ul></div></div><div className='payment'><h3>Payment-method</h3><div className='require-payment'><ul type='none'><li><BsCashCoin size={21}/>&nbsp;cash on delivery</li>
        <li><AiFillCreditCard size={21}/>&nbsp;cards credit/debit</li>
        <li><CgPaypal size={21}/>/<SiPaytm size={25}/>paytm/gpay/phonepay/paypal</li></ul></div></div><div className='social-icon'><p>Also connect-with us on</p></div><hr/><div className='icons'><IoMail size={30}/>&nbsp;&nbsp;<IoLogoInstagram size={30}/>&nbsp;&nbsp;<IoLogoFacebook size={30}/></div><div className='right-reserved'><u>Anime-oasis @2022-All right reserved</u></div></div>
        </>
    )
}

export default Footer;