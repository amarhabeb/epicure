import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AboutComponent from '../../components/AboutComponent/AboutComponent'
import ChefOfTheWeek from '../../components/cheOfTheWeek/ChefOfTheWeek'
import { setDishes } from '../../components/dishesToShoOnHomePage/dishesSlicer'
import DishesToShowOnHomePage from '../../components/dishesToShoOnHomePage/DishesToShowOnHomePage'
import Heroe from '../../components/heroes/Heroe'
import PopularResturants from '../../components/popularResturants/PopularResturants'
import SignatureToFilter from '../../components/signatureToFilter/SignatureToFilter'
import { Div } from '../../layouts/layout/style'


export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const dishes = await(await fetch("http://localhost:3001/api/dishes/getDishes")).json();
      dispatch(setDishes(dishes));
      
    }
    
  }, [])
  
  return (
    <Div style={{marginTop: '45px', width: '100%'}} >
      <Heroe/>
      <PopularResturants/> 
      <DishesToShowOnHomePage/>
      <SignatureToFilter/>
      <ChefOfTheWeek/>
      <AboutComponent/>
    </Div>
  )
}
