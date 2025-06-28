import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Header";
import logo from '../Addid/image/mattamLogoV2.svg';
import userIcon from "../Addid/image/Icons/UserIconV3.png";
import lockedIcon from "../Addid/image/Icons/PasswordIcon.png";
import Footer from './Footer';
import accountData from "../tempData/account"



export default function Register(){
      const [ifShowPassChecked,setIfShowPassChecked] = useState("")
      const navigate = useNavigate();

    return (
        <>
         {
            localStorage.getItem("isLogin")==="true"?    <Navigate to="/restaurans" replace /> : console.log("hello")
         }
            <Header/>
            <div className="login-contant">
    <div className='logo'>
        <div>mata'am</div>
        <img src={logo} alt="logo" />
    </div>
    <div className="login-screen">
        <form >
          <h1>register</h1>
          <label ><input type="text" placeholder='Username' className='inpt'/> <img src={userIcon} id='user-icon' /></label>
          <label><input type="text" placeholder='Password' className='inpt' /> <img src={lockedIcon} id='locked-icon'/></label>
          <label ><input type="text" className='inpt' placeholder='confirm password' /><img src={lockedIcon} id='locked-icon'/></label>
          <label id='checked-label'><input type="checkbox"/><span>I'm over 16 years old</span></label>
          <button onClick={(e)=>{
            e.preventDefault();
            accountData.push({id:1,username:"noor",password:"test"})
            for(let i = 0;i<accountData.length;i++){
                console.log(accountData[i].username+" "+ accountData[i].password)
            }
            // localStorage.setItem('isLogin', 'true');
            // navigate('/restaurans');
          }}>
            Register
          </button>
          <label id='reg'>
            You have on account? <a href='/login'>Login</a>
          </label>
        </form>
    </div>
  </div>
  <Footer/>
        </>
    )
}