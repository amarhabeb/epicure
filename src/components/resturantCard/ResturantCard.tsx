import React from 'react'
import SetWindowSize from '../../assests/setWindowSize';
import { AppData, resturantCard} from '../../constants/data'
import {Img } from '../../layouts/layout/style'
import { DivDetails, DivResturantCard, DivResturantCardContent, DivResturantChef, DivResturantName } from './style'

export default function ResturantCard(props: resturantCard) {
  const windowSize = SetWindowSize();
  return (
    
    <DivResturantCard>
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
