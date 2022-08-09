import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Div, Img } from '../layout/style'
import { DivHeaderBar } from './style'
export default function HeaderBar(props: any) {

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
    <Div >
      <Button onClick={onHamburClick}><Img src='/icons/HAMBUR.png' alt='harbur'></Img></Button>   
    </Div>
    <Div>
      <Img onClick={()=>navigate('/')} src='/icons/about-logo.png' alt='logo'></Img>
    </Div>
    <Div>
      <Button onClick={onSearchClick}><Img src='/icons/Group.png' alt='search'></Img></Button>   
      <Button onClick={onUserClick}><Img src='/icons/User.png' alt='user'></Img></Button>   
      <Button onClick={onBagClick}><Img src='/icons/EmptyBag.png' alt='emptybag'></Img></Button>   
    </Div>
  </DivHeaderBar>
  )
}
