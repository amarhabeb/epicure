import React from 'react'
import { dishCard } from '../../constants/data'
import { UpdateOpen } from '../../layouts/header/Header';
import { Img } from '../../layouts/layout/style'

import { DivDiscription, DivDish, DivDishAbout, DivDishName, DivDishPriceContainer, PriceLine } from './style'

export default function DishInProfile(props: any) {
    console.log(props.dish.pathToCover);
  return (
    <DivDish onClick={()=>{props.setShowOrder(true)}}>
         <Img src={props.dish.pathToCover} style={{width:'100%'}} alt={props.dish.dishName}/>

         <DivDishAbout>
            <DivDishName>
                {props.dish.dishName}
            </DivDishName>

            <DivDiscription>
                {props.dish.dishContent}
            </DivDiscription>

            <DivDishPriceContainer>
                <Img src={"/icons/price.svg"}  alt="NIS"/>

                {props.dish.price}
                <PriceLine/>

            </DivDishPriceContainer>
         </DivDishAbout>
    </DivDish>
  )
}
