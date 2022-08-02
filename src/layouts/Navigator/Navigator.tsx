import React from 'react'
import {useNavigate } from 'react-router';

export default function Navigator() {
const navigate = useNavigate()

function  navigateToContactUs(){
    navigate('src/pages/contactUs')
}

function  navigateToTermOfUse(){
navigate('../../pages/termOfUse/TermOfUse')
    }

function  navigateToPrivacyPolicy(){
navigate('../../pages/privacyPolicy/PrivacyPolicy')

}
  return (
    <div className='navigator'>
        <div onClick={navigateToContactUs}>Contact Us</div>
        <div onClick={navigateToTermOfUse}>Term of Use</div>
        <div onClick={navigateToPrivacyPolicy}>Privacy Policy</div>
    </div>
    
  )
}