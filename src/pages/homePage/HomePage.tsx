import React from 'react'
import AboutComponent from '../../components/AboutComponent/AboutComponent'
import ChefOfTheWeek from '../../components/cheOfTheWeek/ChefOfTheWeek'
import DishesToShowOnHomePage from '../../components/dishesToShoOnHomePage/DishesToShowOnHomePage'
import Heroes from '../../components/heroes/Heroes'
import PopularResturants from '../../components/popularResturants/PopularResturants'
import SignatureToFilter from '../../components/signatureToFilter/SignatureToFilter'
import { Div } from '../../layouts/layout/style'


export default function HomePage() {
  return (
    <Div style={{marginTop: '45px', width: '100%'}} >
      <Heroes/>
      <PopularResturants/> 
      <DishesToShowOnHomePage/>
      <SignatureToFilter/>
      <ChefOfTheWeek/>
      <AboutComponent/>
    </Div>
  )
}
