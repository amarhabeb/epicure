import React from 'react'
import { dishCard, settings } from '../../constants/data'
import { Div, Title } from '../../layouts/layout/style'
import SignatureOfDishCard from '../signatureOfDishCard/SignatureOfDishCard'
import { DivDishOnHome } from './style'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'
import { useSelector } from 'react-redux'



export default function DishesToShowOnHomePage() {
    const windowSize = SetWindowSize();
    const dishesToShow: dishCard[] = useSelector((state:any) => state.dishes.value);
    
    

    return (
      <Div style={{marginLeft: '5%', width: '95%'}}>
          <Title>Signature Dish Of:</Title>
          {(windowSize<600) && <DivDishOnHome>
          <Slider {...settings}>
          {dishesToShow.map((dish, key)=>(
            <Div style={{width: '100%'}}>
             <SignatureOfDishCard key={key} 
             dishName={dish.dishName}
             dishContent={dish.dishContent}
             restaurantName = {dish.restaurantName}
             isSpicy={dish.isSpicy}
             isVegitarian={dish.isVegitarian}
             isVegan={dish.isVegan}
             pathToCover={dish.pathToCover}
             price={dish.price}
             dishTime={dish.dishTime} /> 
            </Div>
          ))}
          </Slider>
        </DivDishOnHome>}

        {(windowSize>=600) && <DivDishOnHome>
          {dishesToShow.map((dish, key)=>(
            <Div style={{width: '100%'}}>
             <SignatureOfDishCard key={key} 
             dishName={dish.dishName}
             dishContent={dish.dishContent}
             restaurantName = {dish.restaurantName}
             isSpicy={dish.isSpicy}
             isVegitarian={dish.isVegitarian}
             isVegan={dish.isVegan}
             pathToCover={dish.pathToCover}
             price={dish.price}
             dishTime={dish.dishTime} /> 
            </Div>
          ))}
        </DivDishOnHome>}
      </Div>
  
    )
  }
  