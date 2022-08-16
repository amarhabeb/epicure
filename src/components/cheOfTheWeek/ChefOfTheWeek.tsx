import React from 'react'
import { useNavigate } from 'react-router'
import { AppData, settings } from '../../constants/data'
import { DivContainNavigator, DivLeftNavigator, Img, Title } from '../../layouts/layout/style'
import ResturantCard from '../resturantCard/ResturantCard'
import { DivAboutTheCef, DivChefOfTheWeek, DivChefOfTheWeekContent, DivChefOfTheWeekName, DivChefOfTheWeekRestaurants, DivChefPicture } from './style'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'

export default function ChefOfTheWeek() {
  const navigate = useNavigate()
  const windowSize = SetWindowSize();
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
        <Title style={{textAlign: 'start', marginLeft: '3%'}}>{AppData.chefOfTheWeek.firstName}`s Restaurants</Title>
        
        {(windowSize<600)  && <DivChefOfTheWeekRestaurants>
        <Slider {...settings}>
        {AppData.resturantsArray.filter(res => res.resturant.chefName===AppData.chefOfTheWeek.chefName).map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturant.resturantName}
           chefName=''
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}
           starsNumber={resturant.resturant.starsNumber}/> 
        ))}
        </Slider>
        </DivChefOfTheWeekRestaurants>}

        {(windowSize>=600)  && <DivChefOfTheWeekRestaurants>
        {AppData.resturantsArray.filter(res => res.resturant.chefName===AppData.chefOfTheWeek.chefName).map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturant.resturantName}
           chefName=''
           isPopular={resturant.resturant.isPopular}
           isNew={resturant.resturant.isNew}
           isOpen={resturant.resturant.isOpen}
           pathToCover={resturant.resturant.pathToCover}
           starsNumber= {0}/> 
        ))}
        </DivChefOfTheWeekRestaurants>}
    </DivChefOfTheWeek>
  )
}
