import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppData } from '../../constants/data'
import { Div, DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import SignatureOfDishCard from '../signatureOfDishCard/SignatureOfDishCard'
import { DivDishOnHome } from './style'



export default function DishesToShowOnHomePage() {
    const navigate = useNavigate()
    const [dishesToShow, setDisheshTosho] = useState(AppData.dishesArray)
    function  navigateToResturantsPage(){
      navigate('src/pages/resturants')
  
  }
    return (
      <Div>
          <Title>Signature Dish Of:</Title>
          <DivDishOnHome>
          {dishesToShow.map((dish, key)=>(
             <SignatureOfDishCard key={key} 
             dishName={dish.dish.dishName}
             dishContent={dish.dish.dishContent}
             isSpicy={dish.dish.isSpicy}
             isVegitarian={dish.dish.isVegitarian}
             isVegan={dish.dish.isVegan}
             pathToCover={dish.dish.pathToCover}
             price={dish.dish.price}
             dishTime={dish.dish.dishTime} /> 
            
          ))}
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
  