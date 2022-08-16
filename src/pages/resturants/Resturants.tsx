import React, { useState } from 'react'
import SetWindowSize from '../../assests/setWindowSize'
import RestaurantCardInRestaurantsPage from '../../components/restaurantCardInRestaurantPage/RestaurantCardInRestaurantsPage'
import { AppData } from '../../constants/data'
import { Img, Title } from '../../layouts/layout/style'
import { DivAll, DivFilterRestaurantsBar, DivMap, DivNew, DivOpen, DivPopular, DivRestaurantsInPage, DivRestaurantsPage, DivSelect } from './style'


export default function Resturants() {
  const windowSize = SetWindowSize();
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

  function mapClicked(){
    setRestaurantsToShow(AppData.resturantsArray);
    setWichActive('map');
  }
  return (
    <DivRestaurantsPage>
      {(windowSize<600) && <Title style={{marginBottom: '27px', marginTop: '60px'}}>Restaurants</Title>}
      <DivFilterRestaurantsBar>
        <DivAll onClick={allClicked} whichActive = {wichActive}>All</DivAll>
        <DivNew onClick={newClicked} whichActive = {wichActive}>New</DivNew>
        <DivPopular onClick={popularClicked} whichActive = {wichActive}>Most Popular</DivPopular>
        <DivOpen onClick={openClicked} whichActive = {wichActive}>Open Now</DivOpen>
        {(windowSize>=600) && <DivMap onClick={mapClicked} whichActive = {wichActive}>Map View</DivMap>}
      </DivFilterRestaurantsBar>
      {(windowSize>=600)&& (false) && <DivSelect>
        aa
      </DivSelect>}
      {(wichActive==="map") && <Img src='/desktop/map.png' alt='mapPic'/>}
      {(wichActive !="map") && <DivRestaurantsInPage>
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
      </DivRestaurantsInPage>}
      
    </DivRestaurantsPage>
  )
}
