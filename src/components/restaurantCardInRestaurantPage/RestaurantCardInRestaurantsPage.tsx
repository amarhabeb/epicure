import React from 'react'
import SetWindowSize from '../../assests/setWindowSize';
import { AppData, resturantCard } from '../../constants/data'
import {Img } from '../../layouts/layout/style'
import { DivDetails } from '../resturantCard/style';
import { setRestaurant } from '../../pages/restaurantProfile/profileSlicer';
import { DivCardContentInRestaurantsPage, DivResturantCardInRestaurantsPage, DivResturantChefInRestaurantsPage, DivResturantNameInRestaurantsPage } from './style'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

export default function RestaurantCardInRestaurantsPage(props: resturantCard) {
  const windowSize = SetWindowSize();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function  navigateToRestaurant(){
    dispatch(setRestaurant(props))
    console.log(props.resturantName);
    navigate("src/pages/restaurantProfile/RestaurantProfile");
    window.scrollTo(0,0);
}

  return (
    <DivResturantCardInRestaurantsPage onClick={navigateToRestaurant}>   
        <Img src={props.pathToCover} style={{width:'100%'}} alt={props.resturantName}/>
        <DivCardContentInRestaurantsPage>
          <DivDetails>
            <DivResturantNameInRestaurantsPage>
            {props.resturantName}
        </DivResturantNameInRestaurantsPage>
        <DivResturantChefInRestaurantsPage>
            {props.chefName}
        </DivResturantChefInRestaurantsPage>
        </DivDetails>
        {(windowSize>=600) && (props.starsNumber!==0) && <Img src={AppData.pathToRatingImages[props.starsNumber-1]} style={{width:'57%', marginBottom: '18px'}} alt={props.resturantName}/>}
        
        </DivCardContentInRestaurantsPage>
        
    </DivResturantCardInRestaurantsPage>
  )
}
