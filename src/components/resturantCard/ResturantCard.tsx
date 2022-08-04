import React from 'react'
import { resturantCard } from '../../constants/data'
import { Div, Img } from '../../layouts/layout/style'
import { DivResturantCard, DivResturantCardContent, DivResturantChef, DivResturantName } from './style'

export default function ResturantCard(props: resturantCard) {
  return (
    <DivResturantCard>
        <Div>
            <Img src={props.pathToCover} style={{width:'245px'}} alt={props.resturantName}/>
        </Div>
        <DivResturantCardContent>
            <DivResturantName>
                {props.resturantName}
            </DivResturantName>
            <DivResturantChef>
                {props.chefName}
            </DivResturantChef>
        </DivResturantCardContent>
    </DivResturantCard>
  )
}
