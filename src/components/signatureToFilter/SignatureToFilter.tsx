import React from 'react'
import { AppData } from '../../constants/data'
import { Div, Img, Title } from '../../layouts/layout/style'
import { DivIcons, DivSignatueToFilter, TitleSignatureToFilter } from './style'

export default function SignatureToFilter() {
  function filterToSpicy(){
    AppData.dishesArray = AppData.dishesArray.filter(dish => dish.isVegan)

  }

  function filterToVegan(){

  }

  function filterToVegetarian(){

  }
  return (

    <DivSignatueToFilter>
        <Title> THE MEANING OF OUR ICONS: </Title>
        <DivIcons>
        <Div style={{height: '127px', cursor: 'pointer'}} onClick={filterToSpicy}>  
         <Img src={AppData.pathTospicyBig} alt='spicy'/>
         <TitleSignatureToFilter>Spicy</TitleSignatureToFilter>
        </Div>
        <Div style={{height: '127px', cursor: 'pointer'}} onClick={filterToVegan}>  
         <Img src={AppData.pathToVeganBig} alt='vegan'/>
         <TitleSignatureToFilter>Vegan</TitleSignatureToFilter>
        </Div>
        <Div style={{height: '127px', cursor: 'pointer'}} onClick={filterToVegetarian}>  
         <Img src={AppData.pathToVegetarianBig} alt={'vegetarian'}/>
         <TitleSignatureToFilter>Vegetarian</TitleSignatureToFilter>
        </Div>
      </DivIcons>

    </DivSignatueToFilter>
    
  )
}
