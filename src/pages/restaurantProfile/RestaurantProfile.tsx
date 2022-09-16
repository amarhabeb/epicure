import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SetWindowSize from '../../assests/setWindowSize';
import DishInProfile from '../../components/dishInProfile/DishInProfile';
import DishOrder from '../../components/dishOrder/DishOrder';
import { dishCard, resturantCard } from '../../constants/data';
import { Div, Img } from '../../layouts/layout/style';
import { DivAboutRestaurant, DivBreakfast, DivDinner, DivDishes, DivFilterDishes, DivImage, DivIsOpen, DivLanch, DivprofilePage, DivRestaurantChef, DivRestaurantName } from './style';

export default function RestaurantProfile() {
  const windowSize = SetWindowSize();
  const restaurant: resturantCard = useSelector((state:any) => state.profile.value);
  const allDishes: dishCard[] = useSelector((state:any) => state.dishes.value);
  const dishes = allDishes.filter(dish => dish.restaurantName === restaurant.resturantName)
  const [dishesToShow, setDishesToShow] = useState(restaurant.dishes.filter(dish => dish.dishTime === "Breakfast"));
  const [wichActive, setWichActive] = useState('breakfast');
  const [showOrder, setShowOrder] = useState(false);

  function breakfastClicked(){
    setDishesToShow(dishes.filter(dish => dish.dishTime === "Breakfast"));
    setWichActive('breakfast');
  }

  function lanchClicked(){
    setDishesToShow(dishes.filter(dish => dish.dishTime === "Lanch"));
    setWichActive('lanch');
  }

  function dinnerClicked(){
    setDishesToShow(dishes.filter(dish => dish.dishTime === "Dinner"));
    setWichActive('dinner');
  }
  return (
    <DivprofilePage>
      {showOrder && <DishOrder CloseMenu={setShowOrder}/>}
      {(windowSize>600 || !showOrder) && <Div>
      <DivImage>
          <Img src={restaurant.pathToCover} style={{width:'100%'}} alt={restaurant.resturantName}/>
          
        <DivAboutRestaurant>
          <DivRestaurantName>
            {restaurant.resturantName}
          </DivRestaurantName>
          <DivRestaurantChef>
            {restaurant.chefName}
          </DivRestaurantChef>
          {true && <DivIsOpen>
            <Img src="/icons/clock-icon 1.png" style={{height:'18px'}} alt="isOpen"/>
            Open now
            </DivIsOpen>}
        </DivAboutRestaurant>

        <DivFilterDishes>
        <DivBreakfast onClick={breakfastClicked} whichActive = {wichActive}>Breakfast</DivBreakfast>
        <DivLanch onClick={lanchClicked} whichActive = {wichActive}>Lanch</DivLanch>
        <DivDinner onClick={dinnerClicked} whichActive = {wichActive}>Dinner</DivDinner>
      </DivFilterDishes>


        <DivDishes>
          {dishesToShow.map((dish, key)=>(
            <Div style={{width: '100%'}}>
             <DishInProfile setShowOrder={setShowOrder} dish={dish} /> 
            </Div>
          ))}
        </DivDishes>
        </DivImage>
      </Div>}
    </DivprofilePage>
  )
}
