import React, { useState } from 'react'
import RestaurantCardInRestaurantsPage from '../../components/restaurantCardInRestaurantPage/RestaurantCardInRestaurantsPage'
import { AppData } from '../../constants/data'
import { Title } from '../../layouts/layout/style'
import { DivAll, DivFilterRestaurantsBar, DivNew, DivOpen, DivPopular, DivRestaurantsInPage, DivRestaurantsPage } from './style'


export default function Resturants() {
  const [restaurantsToShow, setRestaurantsToShow] = useState(AppData.resturantsArray)
  const [wichActive, setWichActive] = useState('all')
  function allClicked(){
    setRestaurantsToShow(AppData.resturantsArray);
    setWichActive('all');
  }

  function newClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isNew));
    setWichActive('new');
  }

  function popularClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isPopular));
    setWichActive('popular');
  }

  function openClicked(){
    setRestaurantsToShow(AppData.resturantsArray.filter(res => res.resturant.isOpen));
    setWichActive('open');
  }
  return (
    <DivRestaurantsPage>
      <Title style={{marginBottom: '27px', marginTop: '60px'}}>Restaurants</Title>
      <DivFilterRestaurantsBar>
        <DivAll onClick={allClicked} whichActive = {wichActive}>All</DivAll>
        <DivNew onClick={newClicked} whichActive = {wichActive}>New</DivNew>
        <DivPopular onClick={popularClicked} whichActive = {wichActive}>Most Popular</DivPopular>
        <DivOpen onClick={openClicked} whichActive = {wichActive}>Open Now</DivOpen>
      </DivFilterRestaurantsBar>
      <DivRestaurantsInPage>
      {restaurantsToShow.map((resturant, key)=>(
           <RestaurantCardInRestaurantsPage key={key} 
           resturantName={resturant.resturant.resturantName}
           chefName={resturant.resturant.chefName}
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}
           starsNumber={resturant.resturant.starsNumber}/> 
        ))}
      </DivRestaurantsInPage>
      
    </DivRestaurantsPage>
  )
}
