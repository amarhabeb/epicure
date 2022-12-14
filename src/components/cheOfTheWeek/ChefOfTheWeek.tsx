import React from 'react'
import { AppData, settings } from '../../constants/data'
import { Title } from '../../layouts/layout/style'
import ResturantCard from '../resturantCard/ResturantCard'
import { DivAboutTheCef, DivChefOfTheWeek, DivChefOfTheWeekContent, DivChefOfTheWeekName, DivChefOfTheWeekRestaurants, DivChefPicture } from './style'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SetWindowSize from '../../assests/setWindowSize'

export default function ChefOfTheWeek() {
  const windowSize = SetWindowSize();
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
        {AppData.resturantsArray.filter(res => res.chefName===AppData.chefOfTheWeek.chefName).map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturantName}
           chefName=''
           isPopular={resturant.isPopular}
           isNew={resturant.isNew}
           isOpen={resturant.isOpen}
           pathToCover={resturant.pathToCover}
           starsNumber={resturant.starsNumber}
           dishes={resturant.dishes}/> 
        ))}
        </Slider>
        </DivChefOfTheWeekRestaurants>}

        {(windowSize>=600)  && <DivChefOfTheWeekRestaurants>
        {AppData.resturantsArray.filter(res => res.chefName===AppData.chefOfTheWeek.chefName).map((resturant, key)=>(
           <ResturantCard key={key} 
           resturantName={resturant.resturantName}
           chefName=''
           isPopular={resturant.isPopular}
           isNew={resturant.isNew}
           isOpen={resturant.isOpen}
           pathToCover={resturant.pathToCover}
           starsNumber= {0}
           dishes={resturant.dishes}/> 
        ))}
        </DivChefOfTheWeekRestaurants>}
    </DivChefOfTheWeek>
  )
}
