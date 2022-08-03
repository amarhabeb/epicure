import React from 'react'
import {DivFooterInLayOut, Div} from './style'
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContactUs from '../../pages/contactUs/ContactUs';
import TermOfUse from '../../pages/termOfUse/TermOfUse';
import PrivacyPolicy from '../../pages/privacyPolicy/PrivacyPolicy';
import HomePage from '../../pages/homePage/HomePage';
import Resturants from '../../pages/resturants/Resturants';
import Chefs from '../../pages/chefs/Chefs';


export default function LayOut() {
  return (
    <Div>
    <BrowserRouter>
    <Header/>
    <DivFooterInLayOut>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="src/pages/contactUs" element={<ContactUs/>}/>
        <Route path="src/pages/termOfUse" element={<TermOfUse/>}/>
        <Route path="src/pages/privacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="src/pages/resturants" element={<Resturants/>}/>
        <Route path="src/pages/chefs" element={<Chefs/>}/>
      </Routes>     
      <Footer/>
    </DivFooterInLayOut>
    
    
    </BrowserRouter>
    </Div>
    
  )
}
