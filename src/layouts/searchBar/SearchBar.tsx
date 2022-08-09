import React from 'react'
import { UpdateOpen } from '../header/Header'
import { Button, Img } from '../layout/style'
import { DivBodySearchBar, DivSearch, DivSearchBar, HeaderSearchBar, SearchButton, SearchInput, SearchTerm } from './style'

export default function SearchBar(props: UpdateOpen) {
    function  closeSearchBar(){
        props.CloseMenu(false)

    }
  return (
    <DivSearchBar>
        <HeaderSearchBar>
            <Button onClick={closeSearchBar}>
                <Img src='/icons/BlackX.png' alt='blackx'/>
            </Button>  
            <SearchTerm>Search</SearchTerm>     
        </HeaderSearchBar>
        <DivBodySearchBar>
            <DivSearch>
                <SearchButton>
                   <Img src='/icons/search.svg' alt='search'/> 
                </SearchButton>
            
            <SearchInput type="text" placeholder="Search for restaurant cuisine, chef"/>

            </DivSearch>
        </DivBodySearchBar>
        
    </DivSearchBar>
  )
}
