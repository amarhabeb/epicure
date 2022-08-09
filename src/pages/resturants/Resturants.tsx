import React, { useState } from 'react'
import RestaurantCardInRestaurantsPage from '../../components/restaurantCardInRestaurantPage/RestaurantCardInRestaurantsPage'
import { AppData } from '../../constants/data'
import { Title } from '../../layouts/layout/style'
import { DivAll, DivFilterRestaurantsBar, DivNew, DivOpen, DivPopular, DivRestaurantsInPage, DivRestaurantsPage } from './style'


export default function Resturants() {
  const [restaurantsToShow, setRestaurantsToShow] = useState(AppData.resturantsArray)
  const [witchActive, setWitchActive] = useState('all')
  function allClicked(){
    setRestaurantsToShow(AppData.resturantsArray);
    setWitchActive('all');
  }

  function newClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isNew));
    setWitchActive('new');
  }

  function popularClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isPopular));
    setWitchActive('popular');
  }

  function openClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isOpen));
    setWitchActive('open');
  }
  return (
    <DivRestaurantsPage>
      <Title style={{marginBottom: '27px', marginTop: '60px'}}>Restaurants</Title>
      <DivFilterRestaurantsBar>
        <DivAll onClick={allClicked} whitchActive = {witchActive}>All</DivAll>
        <DivNew onClick={newClicked} whitchActive = {witchActive}>New</DivNew>
        <DivPopular onClick={popularClicked} whitchActive = {witchActive}>Most Popular</DivPopular>
        <DivOpen onClick={openClicked} whitchActive = {witchActive}>Open Now</DivOpen>
      </DivFilterRestaurantsBar>
      <DivRestaurantsInPage>
      {restaurantsToShow.map((resturant, key)=>(
           <RestaurantCardInRestaurantsPage key={key} 
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
