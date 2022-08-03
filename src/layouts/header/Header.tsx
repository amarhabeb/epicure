import React, { useState } from 'react'
import HamburList from '../../components/hamburList/HamburList';
import HeaderBar from '../headerBar/HeaderBar';

import './style.css'

export default function footer() {   
  const [showHamburList, setShowHamburList] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className='header'>
      {showHamburList && <HamburList setShowHamburList={setShowHamburList}/>}
      {!showHamburList && !showSearchBar && <HeaderBar setShowHamburList={setShowHamburList} setShowSearchBar={setShowSearchBar}/>}
    </div>
  )
}

