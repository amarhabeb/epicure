import React from 'react'
import { resturantCard} from '../../constants/data'
import { Div, Img } from '../../layouts/layout/style'
import { DivResturantCard, DivResturantCardContent, DivResturantChef, DivResturantName } from './style'

export default function ResturantCard(props: resturantCard) {
  return (
    
    <DivResturantCard>
            <Img src={props.pathToCover} style={{width:'100%'}} alt={props.resturantName}/>
       
        <DivResturantCardContent>
            <Div style={{margin: '16px'}}>
            <DivResturantName>
                {props.resturantName}
            </DivResturantName>
            <DivResturantChef>
                {props.chefName}
            </DivResturantChef>
            </Div>
        </DivResturantCardContent>
       
    </DivResturantCard>
    
  )
}
