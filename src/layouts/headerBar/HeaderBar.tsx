import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SetWindowSize from '../../assests/setWindowSize'
import { Button, Div, Img } from '../layout/style'
import {DesktopHeaderNavigatorChef, DesktopHeaderNavigatorRes, DivDesktopHeaderBar, DivHeaderBar, DivLogo, DivToRestaurants } from './style'
export default function HeaderBar(props: any) {
      const windowSize = SetWindowSize();
      const navigate = useNavigate()
      const [whichPage, setWichPage] = useState('')
  
      function onHamburClick(){
        props.setShowHamburList(true)
      }
      function onSearchClick(){
        props.setShowSearchBar(true)
      }
      function onUserClick(){
    
      }
      function onBagClick(){
    
      }
  return (
    <DivHeaderBar >
    {(windowSize<600) && <Div style={{marginLeft: '-2%'}}>
      <Button onClick={onHamburClick}><Img src='/icons/HAMBUR.png' alt='harbur'></Img></Button>   
    </Div>}
    <DivDesktopHeaderBar>
    <DivLogo>
      <Img onClick={()=>{navigate('/');window.scrollTo(0,0); setWichPage('home');}} src='/icons/about-logo.png' alt='logo'></Img>
    </DivLogo>
    {(windowSize>=600) && <Div style={{cursor: 'pointer'}}>
      <Img onClick={()=>{navigate('/');window.scrollTo(0,0); setWichPage('home');}} src='/desktopIcons/EPICURE.png' alt='logo'></Img>
    </Div>}
    {(windowSize>=600) && <DivToRestaurants whichPage={whichPage} >
      <Button onClick={()=> {navigate('src/pages/resturants');window.scrollTo(0,0); setWichPage('restaurants');}}><DesktopHeaderNavigatorRes whichPage={whichPage}>Restaurants</DesktopHeaderNavigatorRes></Button>   
    </DivToRestaurants>}
    {(windowSize>600) && <Div style={{marginLeft: '-2%'}}>
      <Button onClick={() =>{navigate('src/pages/chrfs');window.scrollTo(0,0); setWichPage('chefs');}}><DesktopHeaderNavigatorChef whichPage={whichPage}>Chefs</DesktopHeaderNavigatorChef></Button>   
    </Div>}
    </DivDesktopHeaderBar>
    <Div>
      <Button onClick={onSearchClick}><Img src='/icons/Group.png' alt='search'></Img></Button>   
      <Button onClick={onUserClick}><Img src='/icons/User.png' alt='user'></Img></Button>   
      <Button onClick={onBagClick}><Img src='/icons/EmptyBag.png' alt='emptybag'></Img></Button>   
    </Div>
  </DivHeaderBar>
  )
}
