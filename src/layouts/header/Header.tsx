import React, { useState } from 'react'
import HamburList from '../../components/hamburList/HamburList';
import HeaderBar from '../headerBar/HeaderBar';
import SearchBar from '../searchBar/SearchBar';
import { DivHeader } from './style';

export interface UpdateOpen {
  CloseMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Header() {   
  const [showHamburList, setShowHamburList] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <DivHeader>
      {showHamburList && <HamburList CloseMenu={setShowHamburList}/>}
      {showSearchBar && <SearchBar CloseMenu={setShowSearchBar}/>}
      {!showHamburList && !showSearchBar && <HeaderBar setShowHamburList={setShowHamburList} setShowSearchBar={setShowSearchBar}/>}
    </DivHeader>
  )
}

