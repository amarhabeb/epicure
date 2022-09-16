import React, { useState } from 'react'
import SetWindowSize from '../../assests/setWindowSize'
import RestaurantCardInRestaurantsPage from '../../components/restaurantCardInRestaurantPage/RestaurantCardInRestaurantsPage'
import { resturantCard } from '../../constants/data'
import { Img, Title } from '../../layouts/layout/style'
import { DivAll, DivFilterRestaurantsBar, DivMap, DivNew, DivOpen, DivPopular, DivRestaurantsInPage, DivRestaurantsPage, DivSelect } from './style'
import { useSelector } from 'react-redux';



export default function Resturants() {
  const windowSize = SetWindowSize();
  const restaurants: resturantCard[] = useSelector((state:any) => state.restaurants.value);
  const [restaurantsToShow, setRestaurantsToShow] = useState(restaurants);
  const [wichActive, setWichActive] = useState('all');

  function allClicked(){
    setRestaurantsToShow(restaurants);
    setWichActive('all');
  }

  function newClicked(){
    setRestaurantsToShow(restaurants.filter(res => res.isNew));
    setWichActive('new');
  }

  function popularClicked(){
    setRestaurantsToShow(restaurants.filter(res => res.isPopular));
    setWichActive('popular');
  }

  function openClicked(){
    setRestaurantsToShow(restaurants.filter(res => res.isOpen));
    setWichActive('open');
  }

  function mapClicked(){
    setRestaurantsToShow(restaurants);
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
      </DivSelect>}
      {(wichActive==="map") && <Img src='/desktop/map.png' alt='mapPic'/>}
      {(wichActive !=="map") && <DivRestaurantsInPage>
      {restaurantsToShow.map((resturant, key)=>(
           <RestaurantCardInRestaurantsPage key={key} 
           resturantName={resturant.resturantName}
           chefName={resturant.chefName}
           isPopular={resturant.isPopular}
           isNew={resturant.isNew}
           isOpen={resturant.isOpen}
           pathToCover={resturant.pathToCover}
           starsNumber={resturant.starsNumber}
           dishes={resturant.dishes}/> 
        ))}
      </DivRestaurantsInPage>}
      
    </DivRestaurantsPage>
  )
}
