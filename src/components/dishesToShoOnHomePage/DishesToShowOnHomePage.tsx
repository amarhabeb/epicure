import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppData, settings } from '../../constants/data'
import { Div, DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import SignatureOfDishCard from '../signatureOfDishCard/SignatureOfDishCard'
import { DivDishOnHome } from './style'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function DishesToShowOnHomePage() {
    const navigate = useNavigate()
    const [dishesToShow, setDisheshTosho] = useState(AppData.dishesArray)
    function  navigateToResturantsPage(){
      navigate('src/pages/resturants')
  
  }
    return (
      <Div style={{marginLeft: '5%', width: '95%'}}>
          <Title>Signature Dish Of:</Title>
          <DivDishOnHome>
          <Slider {...settings}>
          {dishesToShow.map((dish, key)=>(
            <Div style={{width: '100%'}}>
             <SignatureOfDishCard key={key} 
             dishName={dish.dish.dishName}
             dishContent={dish.dish.dishContent}
             isSpicy={dish.dish.isSpicy}
             isVegitarian={dish.dish.isVegitarian}
             isVegan={dish.dish.isVegan}
             pathToCover={dish.dish.pathToCover}
             price={dish.dish.price}
             dishTime={dish.dish.dishTime} /> 
            </Div>
          ))}
          </Slider>
        </DivDishOnHome>
        <DivContainNavigator>
          <DivLeftNavigator onClick={navigateToResturantsPage}>
            All restaurants
          </DivLeftNavigator>
          <Img src='icons/nav.png' alt='navigate' onClick={navigateToResturantsPage} style={{cursor: 'pointer'}} />
        </DivContainNavigator>
      </Div>
  
    )
  }
  