import './style.css';
import React from 'react'
import {useNavigate } from 'react-router';

export default function footer() {
  const navigate = useNavigate()

  function  navigateToContactUs(){
      navigate('src/pages/contactUs')
  
  }
  
  function  navigateToTermOfUse(){
  navigate('src/pages/termOfUse')
      }
  
  function  navigateToPrivacyPolicy(){
  navigate('src/pages/privacyPolicy')
  
  }
    return (
      <div className='footer'>
          <div onClick={navigateToContactUs}>Contact Us</div>
          <div onClick={navigateToTermOfUse}>Term of Use</div>
          <div onClick={navigateToPrivacyPolicy}>Privacy Policy</div>
      </div>
      
    )
  }
