import React from 'react'
import { AppData, settings } from '../../constants/data'
import { Div, DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import ResturantCard from '../resturantCard/ResturantCard'
import { DivPopularOnHome } from './style'
import {useNavigate } from 'react-router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'



export default function PopularResturants() {
  const navigate = useNavigate()
  const windowSize = SetWindowSize();
  function  navigateToResturantsPage(){
    navigate('src/pages/resturants')

}
  return (
    <Div style={{marginLeft: '5%', width: '95%'}}>
        <Title>popular restaurant in epicure:</Title>
        
        {(windowSize<600) && <DivPopularOnHome>
        <Slider {...settings}>
          {AppData.resturantsArray.filter(res => res.resturant.isPopular).map((resturant, key)=>(
           <ResturantCard key={key}  
           resturantName={resturant.resturant.resturantName}
           chefName={resturant.resturant.chefName}
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}
           starsNumber={resturant.resturant.starsNumber}/> 
           
        ))}
        </Slider>
      </DivPopularOnHome>}

      {(windowSize>=600) && <DivPopularOnHome>
          {AppData.resturantsArray.filter(res => res.resturant.isPopular).map((resturant, key)=>(
           <ResturantCard key={key}  
           resturantName={resturant.resturant.resturantName}
           chefName={resturant.resturant.chefName}
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}
           starsNumber={resturant.resturant.starsNumber}/> 
           
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
