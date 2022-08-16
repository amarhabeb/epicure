import React from 'react'
import { AppData, settings } from '../../constants/data'
import { Div, Title } from '../../layouts/layout/style'
import SignatureOfDishCard from '../signatureOfDishCard/SignatureOfDishCard'
import { DivDishOnHome } from './style'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'



export default function DishesToShowOnHomePage() {
    const windowSize = SetWindowSize();
    const dishesToShow = AppData.dishesArray;
    return (
      <Div style={{marginLeft: '5%', width: '95%'}}>
          <Title>Signature Dish Of:</Title>
          {(windowSize<600) && <DivDishOnHome>
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
        </DivDishOnHome>}

        {(windowSize>=600) && <DivDishOnHome>
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
        </DivDishOnHome>}
      </Div>
  
    )
  }
  