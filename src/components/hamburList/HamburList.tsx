import React from 'react'
import {useNavigate } from 'react-router';
import Footer from '../../layouts/footer/Footer';
import './style.css'

export default function HamburList(props: any) {
    const navigate = useNavigate()

    function  navigateToResturantsPage(){
        navigate('src/pages/resturants')
    
    }

    function  navigateToChefsPage(){
        navigate('src/pages/chefs')
    
    }
    function  closeHambulList(){
        props.setShowHamburList(false)
    
    }
  return (
    <div className='hamburList'>
        <div className='closeImg'>
            <button onClick={closeHambulList}>
                <img className='closehambur' src='icons/BlackX.png' alt='blackx'/>
            </button>       
        </div>
        <div className='resturantsDiv' onClick={navigateToResturantsPage}>Resturants</div>
        <div className='chefsDiv' onClick={navigateToChefsPage}>Chefs</div>
        <div className='line'/>
        <div className='footer'><Footer/></div>
    </div>
  )
}
