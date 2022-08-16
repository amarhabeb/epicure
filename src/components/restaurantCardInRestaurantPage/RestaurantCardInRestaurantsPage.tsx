import React from 'react'
import SetWindowSize from '../../assests/setWindowSize';
import { AppData, resturantCard } from '../../constants/data'
import { Div, Img } from '../../layouts/layout/style'
import { DivDetails } from '../resturantCard/style';
import { DivCardContentInRestaurantsPage, DivResturantCardInRestaurantsPage, DivResturantChefInRestaurantsPage, DivResturantNameInRestaurantsPage } from './style'

export default function RestaurantCardInRestaurantsPage(props: resturantCard) {
  const windowSize = SetWindowSize();
  return (
    <DivResturantCardInRestaurantsPage>   
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
        {(windowSize>=600) && (props.starsNumber!=0) && <Img src={AppData.pathToRatingImages[props.starsNumber-1]} style={{width:'57%', marginBottom: '18px'}} alt={props.resturantName}/>}
        
        </DivCardContentInRestaurantsPage>
        
    </DivResturantCardInRestaurantsPage>
  )
}
