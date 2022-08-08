import React, { useState } from 'react'
import ResturantCard from '../../components/resturantCard/ResturantCard'
import { AppData } from '../../constants/data'
import { Title } from '../../layouts/layout/style'
import { DivRestaurantsInPage, DivRestaurantsPage } from './style'

export default function Resturants() {
  const [restaurantsToShow, setRestaurantsToShow] = useState(AppData.resturantsArray)
  return (
    <DivRestaurantsPage>
      <Title>Restaurants</Title>
      <DivRestaurantsInPage>
      {restaurantsToShow.map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturant.resturantName}
           chefName={resturant.resturant.chefName}
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}/> 
        ))}
      </DivRestaurantsInPage>
      
    </DivRestaurantsPage>
  )
}
