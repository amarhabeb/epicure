import React from 'react'
import { useNavigate } from 'react-router'
import SetWindowSize from '../../assests/setWindowSize'
import { Button, Div, Img } from '../layout/style'
import { DesktopHeaderNavigator, DivDesktopHeaderBar, DivHeaderBar, DivLogo } from './style'
export default function HeaderBar(props: any) {
      const windowSize = SetWindowSize();
      const navigate = useNavigate()
  
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
    <DivLogo style={{}}>
      <Img onClick={()=>{navigate('/');window.scrollTo(0,0)}} src='/icons/about-logo.png' alt='logo'></Img>
    </DivLogo>
    {(windowSize>=600) && <Div style={{cursor: 'pointer'}}>
      <Img onClick={()=>{navigate('/');window.scrollTo(0,0)}} src='/desktopIcons/EPICURE.png' alt='logo'></Img>
    </Div>}
    {(windowSize>=600) && <Div style={{marginLeft: '-2%'}}>
      <Button onClick={()=> {navigate('src/pages/resturants');window.scrollTo(0,0)}}><DesktopHeaderNavigator>Restaurants</DesktopHeaderNavigator></Button>   
    </Div>}
    {(windowSize>600) && <Div style={{marginLeft: '-2%'}}>
      <Button onClick={() =>{navigate('src/pages/chrfs');window.scrollTo(0,0)}}><DesktopHeaderNavigator>Chefs</DesktopHeaderNavigator></Button>   
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
