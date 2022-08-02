import './footer.css';
import React from 'react'
import { Route, useNavigate } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import ContactUs from '../../pages/contactUs/ContactUs';
import TermOfUse from '../../pages/termOfUse/TermOfUse';
import PrivacyPolicy from '../../pages/privacyPolicy/PrivacyPolicy';
import Navigator from '../Navigator/Navigator';

export default function footer() {
  // const navigate = useNavigate()

  // function  navigateToContactUs(){
  //     navigate('../../pages/contactUs/ContactUs')
  // }

  // function  navigateToTermOfUse(){
  //   navigate('../../pages/termOfUse/TermOfUse')
  //    }

  // function  navigateToPrivacyPolicy(){
  //   navigate('../../pages/privacyPolicy/PrivacyPolicy')

  // }
  return (
    <div className='footer'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Navigator />} /> 
        <Route path="src/pages/contactUs" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
        {/* <p onClick={navigateToContactUs}>Contact Us</p>
        <p onClick={navigateToTermOfUse}>Term of Use Us</p>
        <p onClick={navigateToPrivacyPolicy}>Privacy Policy</p> */}
    </div>
  )
}
