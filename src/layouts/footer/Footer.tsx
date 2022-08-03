import React from 'react'
import {useNavigate } from 'react-router';
import { DivFooter } from './style';
import { Div } from '../layout/style';

export default function Footer() {
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
      <DivFooter>
          <Div onClick={navigateToContactUs}>Contact Us</Div>
          <Div onClick={navigateToTermOfUse}>Term of Use</Div>
          <Div onClick={navigateToPrivacyPolicy}>Privacy Policy</Div>
      </DivFooter>
      
    )
  }
