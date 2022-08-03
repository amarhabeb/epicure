import React from 'react'
import {useNavigate } from 'react-router';
import { Div } from '../layout/style';

export default function Navigator() {
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
    <Div>
        <Div onClick={navigateToContactUs}>Contact Us</Div>
        <Div onClick={navigateToTermOfUse}>Term of Use</Div>
        <Div onClick={navigateToPrivacyPolicy}>Privacy Policy</Div>
    </Div>
    
  )
}