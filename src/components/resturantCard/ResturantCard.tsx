import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import SetWindowSize from '../../assests/setWindowSize';
import { AppData, resturantCard} from '../../constants/data'
import {Img } from '../../layouts/layout/style'
import { setRestaurant } from '../../pages/restaurantProfile/profileSlicer';
import { DivDetails, DivResturantCard, DivResturantCardContent, DivResturantChef, DivResturantName } from './style'

export default function ResturantCard(props: resturantCard) {
  const windowSize = SetWindowSize();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function  navigateToRestaurant(){
    navigate('src/pages/restaurantProfile/RestaurantProfile')
    dispatch(setRestaurant(props))
    
    window.scrollTo(0,0);

}
  return (
    
    <DivResturantCard onClick={navigateToRestaurant}>
            <Img src={props.pathToCover} style={{width:'100%'}} alt={props.resturantName}/>
       
        <DivResturantCardContent>
            <DivDetails>
            <DivResturantName>
                {props.resturantName}
            </DivResturantName>
            <DivResturantChef>
                {props.chefName}
            </DivResturantChef>
            </DivDetails>
            {(windowSize>=600) && (props.starsNumber!==0) && <Img src={AppData.pathToRatingImages[props.starsNumber-1]} style={{width:'57%', marginBottom: '18px'}} alt={props.resturantName}/>}
        </DivResturantCardContent>
       
    </DivResturantCard>
    
  )
}
