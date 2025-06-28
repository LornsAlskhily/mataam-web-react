import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'
import '../index.css';
import logo from '../Addid/image/mattamLogoV2.svg';
import userIcon from "../Addid/image/Icons/UserIconV3.png";


export default function Header(){
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === 'true');
    
  return (
  <>
    <header>
      <a className="logo" href='/login'>
        <div>mata'am</div>
        <img src={logo} alt="logo" />
      </a>
      <div className="nav">
        <ul>
          <li><a href="/login">home</a></li>
          <li><a href="#">service</a></li>
          <li><a href="/restaurans">restaurants</a></li>
          {
            isLogin?(<>
              <li id='logout-btn' onClick={
                (e)=>{
                  e.preventDefault()
                  localStorage.setItem('isLogin','false');
                  navigate('/login');
                }
              }>logout</li>
            <li id='accunt-nav'><img src={userIcon} alt="" />
              <div id= 'accunt-name'>{localStorage.getItem("accountName")}</div>
              </li>
            </>) 
            :(<>
              <li><a href="/login">login</a></li>
          <li><a href="/register">register</a></li>
          </>)
          }
        </ul>
      </div>
    </header>
  </>);
}