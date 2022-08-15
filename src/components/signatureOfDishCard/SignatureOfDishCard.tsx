import React from 'react'
import { AppData, dishCard } from '../../constants/data'
import { Div, Img } from '../../layouts/layout/style'
import { DivDishCardContent, DivDishName, DivPrice, DivSignatueDishCard, DivSignature, DivSignatureAndPrice } from './style'

export default function SignatureOfDishCard(props: dishCard) {
  return (
    <DivSignatueDishCard>
   
    <Img src={props.pathToCover} style={{width:'100%'}} alt={props.dishName}/>

    <DivDishCardContent>
        <DivDishName>
            {props.dishName}
        </DivDishName>
        <DivDishCardContent>
            {props.dishContent}
        </DivDishCardContent>
        <DivSignatureAndPrice>
        <DivSignature>
            {props.isSpicy && <Img src={AppData.pathToSpicySmall} style={{width:'30px', height: '23px'}} alt='spicy'/>}
            {props.isVegan && <Img src={AppData.pathToVeganSmall} style={{width:'30px', height: '23px'}} alt='vegan'/>}
            {props.isVegitarian && <Img src={AppData.pathToVegetarianSmall} style={{width:'30px', height: '23px'}} alt={'vegetarian'}/>}

        </DivSignature>
        <DivPrice>
            {props.price}
        </DivPrice>
        </DivSignatureAndPrice>
    </DivDishCardContent>
</DivSignatueDishCard>
)}
