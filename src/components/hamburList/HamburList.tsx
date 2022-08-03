import React from 'react'
import {useNavigate } from 'react-router';
import Footer from '../../layouts/footer/Footer';
import {Line, DivHamburList} from './style'
import  {UpdateOpen}  from '../../layouts/header/Header';
import { Button, Div, Img } from '../../layouts/layout/style';


export default function HamburList(props: UpdateOpen) {
    const navigate = useNavigate()

    function  navigateToResturantsPage(){
        navigate('src/pages/resturants')
    
    }

    function  navigateToChefsPage(){
        navigate('src/pages/chefs')
    
    }
    function  closeHambulList(){
        props.CloseMenu(false)
    
    }
  return (
    <DivHamburList>
        <Div>
            <Button onClick={closeHambulList}>
                <Img className='closehambur' src='icons/BlackX.png' alt='blackx'/>
            </Button>       
        </Div>
        <Div  onClick={navigateToResturantsPage}>Resturants</Div>
        <Div  onClick={navigateToChefsPage}>Chefs</Div>
        <Line/>
        <Footer/>
    </DivHamburList>
  )
}
