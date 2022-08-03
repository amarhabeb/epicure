import React from 'react'
import './style.css'
export default function HeaderBar(props: any) {
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
    <div className='headerBar' >
    <div className='hambur' >
      <button onClick={onHamburClick}><img src='icons/HAMBUR.png' alt='harbur'></img></button>   
    </div>
    <div className='logo'>
      <img src='icons/about-logo.png' alt='logo'></img>
    </div>
    <div className='rightIcons' >
      <button onClick={onSearchClick}><img src='icons/Group.png' alt='search'></img></button>   
      <button onClick={onUserClick}><img src='icons/User.png' alt='user'></img></button>   
      <button onClick={onBagClick}><img src='icons/EmptyBag.png' alt='emptybag'></img></button>   
    </div>
  </div>
  )
}
