import React from 'react'
import { resturantCard } from '../../constants/data'
import { Div, Img } from '../../layouts/layout/style'
import { DivCardContentInRestaurantsPage, DivResturantCardInRestaurantsPage, DivResturantChefInRestaurantsPage, DivResturantNameInRestaurantsPage } from './style'

export default function RestaurantCardInRestaurantsPage(props: resturantCard) {
  return (
    <DivResturantCardInRestaurantsPage>
         <Div>
            <Img src={props.pathToCover} style={{width:'100%'}} alt={props.resturantName}/>
        </Div>
        <DivCardContentInRestaurantsPage>
            <DivResturantNameInRestaurantsPage>
            {props.resturantName}
        </DivResturantNameInRestaurantsPage>
        <DivResturantChefInRestaurantsPage>
            {props.chefName}
        </DivResturantChefInRestaurantsPage>
        </DivCardContentInRestaurantsPage>
        
    </DivResturantCardInRestaurantsPage>
  )
}
