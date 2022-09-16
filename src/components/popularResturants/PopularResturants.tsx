import React, { useState } from 'react'
import {resturantCard, settings } from '../../constants/data'
import { Div, DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import ResturantCard from '../resturantCard/ResturantCard'
import { DivPopularOnHome } from './style'
import {useNavigate } from 'react-router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'
import { useSelector } from 'react-redux'



export default function PopularResturants() {
  const navigate = useNavigate()
  const windowSize = SetWindowSize();
  const restaurants: resturantCard[] = useSelector((state:any) => state.restaurants.value);
  

  function  navigateToResturantsPage(){
    navigate('src/pages/resturants');
    window.scrollTo(0,0)

}
  return (
    <Div style={{marginLeft: '5%', width: '95%'}}>
        <Title>popular restaurant in epicure:</Title>
        
        {(windowSize<600) && <DivPopularOnHome>
        <Slider {...settings}>
          {restaurants.filter(res => res.isPopular).map((resturant, key)=>(
           <ResturantCard key={key}  
           resturantName={resturant.resturantName}
           chefName={resturant.chefName}
           isPopular={resturant.isPopular}
           isNew={resturant.isNew}
           isOpen={resturant.isOpen}
           pathToCover={resturant.pathToCover}
           starsNumber={resturant.starsNumber}
           dishes={resturant.dishes}/> 
           
        ))}
        </Slider>
      </DivPopularOnHome>}

      {(windowSize>=600) && <DivPopularOnHome>
          {restaurants.filter(res => res.isPopular).map((resturant, key)=>(
           <ResturantCard key={key}  
           resturantName={resturant.resturantName}
           chefName={resturant.chefName}
           isPopular={resturant.isPopular}
           isNew={resturant.isNew}
           isOpen={resturant.isOpen}
           pathToCover={resturant.pathToCover}
           starsNumber={resturant.starsNumber}
           dishes={resturant.dishes}/> 
           
        ))}
      </DivPopularOnHome>}
      
        
      <DivContainNavigator>
        <DivLeftNavigator onClick={navigateToResturantsPage}>
          All restaurants
        </DivLeftNavigator>
        <Img src='icons/nav.png' alt='navigate' onClick={navigateToResturantsPage} style={{cursor: 'pointer'}} />
      </DivContainNavigator>
    </Div>

  )
}
