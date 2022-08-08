import React from 'react'
import { useNavigate } from 'react-router'
import { AppData } from '../../constants/data'
import { DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import ResturantCard from '../resturantCard/ResturantCard'
import { DivAboutTheCef, DivChefOfTheWeek, DivChefOfTheWeekContent, DivChefOfTheWeekName, DivChefOfTheWeekRestaurants, DivChefPicture } from './style'

export default function ChefOfTheWeek() {
  const navigate = useNavigate()
  function  navigateToResturantsPage(){
    navigate('src/pages/resturants')

}
  return (
    <DivChefOfTheWeek>
        <Title>Chef of the week:</Title>
        <DivChefOfTheWeekContent>
        <DivChefPicture style={{backgroundImage: `url(${AppData.chefOfTheWeek.pathToChefPicture}`}}>
          <DivChefOfTheWeekName>{AppData.chefOfTheWeek.chefName}</DivChefOfTheWeekName>
        </DivChefPicture>
        <DivAboutTheCef>
            {AppData.chefOfTheWeek.about}
        </DivAboutTheCef>
        </DivChefOfTheWeekContent>
        <Title>{AppData.chefOfTheWeek.firstName}`s Restaurants</Title>
        <DivChefOfTheWeekRestaurants>
        {AppData.resturantsArray.filter(res => res.resturant.chefName===AppData.chefOfTheWeek.chefName).map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturant.resturantName}
           chefName=''
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}/> 
        ))}
        </DivChefOfTheWeekRestaurants>
        <DivContainNavigator>
        <DivLeftNavigator onClick={navigateToResturantsPage}>
          All restaurants
        </DivLeftNavigator>
        <Img src='icons/nav.png' alt='navigate' onClick={navigateToResturantsPage} style={{cursor: 'pointer'}} />
      </DivContainNavigator>
    </DivChefOfTheWeek>
  )
}
