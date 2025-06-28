import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'
import '../index.css';
import logo from '../Addid/image/mattamLogoV2.svg';
import userIcon from "../Addid/image/Icons/UserIconV3.png";
import lockedIcon from "../Addid/image/Icons/PasswordIcon.png";
import Header from "./Header";
import Footer from "./Footer"
import accountData from "../tempData/account"



export default function Login(){
  const [showPass,setShowPass] = useState("password")
  const [ifShowPassChecked,setIfShowPassChecked] = useState("")
  const [inputUsername,setInputUsername] = useState("")
  const [inputPassword,setInputPassword] = useState("")
  const [formInputrColor,setInputBorderColor] = useState("rgba(255, 255, 255, 0.966)")
  const [accoutnName, setAccountName] = useState(localStorage.getItem('accountName') === '');
  
  const navigate = useNavigate();

  return(
    <>
    {
      localStorage.getItem("isLogin")==="true"?    <Navigate to="/restaurans" replace /> : console.log("")
    }
    <Header/>
  <div className="login-contant">
    <div className='logo'>
        <div>mata'am</div>
        <img src={logo} alt="logo" />
    </div>
    <div className="login-screen">
        <form  >
        
          <h1>login</h1>
          <label ><input type="text" placeholder='Username' style={{borderColor:formInputrColor}} className='inpt' value={inputUsername} onChange={
            (e)=>{
              setInputUsername(e.target.value)
            }
          }/> <img src={userIcon} id='user-icon' /></label>
          <label><input type={showPass} placeholder='Password' style={{borderColor:formInputrColor}} className='inpt' value={inputPassword} onChange={
            (e)=>{
              setInputPassword(e.target.value)
            }
          }/> <img src={lockedIcon} id='locked-icon'/></label>
          <label id='checked-label'><input type="checkbox" checked={ifShowPassChecked} onChange={(e)=>{
            setIfShowPassChecked(e.target.checked)
            if (e.target.checked==true){
              setShowPass("text")
            }
            else{ 
              setShowPass("password")
            }
          }}/><span>show password</span></label>
          
          <button onClick=
          {(e)=>
            {
              let f = 0;
              for(let account = 0;account<accountData.length; account++)
              {
                e.preventDefault()
                if (accountData[account].username ===inputUsername){
                  if(accountData[account].password ===inputPassword)
                    {
                      localStorage.setItem('isLogin', 'true');
                      localStorage.setItem("accountName", accountData[account].username)
                      navigate('/restaurans');
                      f =1;
                    }
                  }                  
              }
              if (f===0){
                alert("your username or password is worng")
                setInputBorderColor("rgb(255, 0, 0)")
                  setInputUsername("")
                  setInputPassword("")
              }     
            }
          }
        >
            Login
          </button>
          <label id='reg'>
            Don't have on account? <a href='/register'>register</a>
          </label>
        </form>
    </div>
  </div>
  <Footer/>
  </>)
}




