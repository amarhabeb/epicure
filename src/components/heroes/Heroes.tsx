import React from 'react'
import { Img } from '../../layouts/layout/style'
import { DivSearch, SearchButton, SearchInput } from '../../layouts/searchBar/style'
import { DivHeroes, DivModalConten, Modal } from './style'

export default function Heroes() {
  return (
    <DivHeroes>
        <Modal>
          <DivModalConten>
            Epicure works with the top chef restaurants in Tel Aviv
          </DivModalConten>
          <DivSearch style={{margin: '3%'}}>
                <SearchButton>
                   <Img src='icons/search.svg' alt='search'/> 
                </SearchButton>
            
            <SearchInput type="text" placeholder="Search for restaurant cuisine, chef"/>

            </DivSearch>
        </Modal>
    </DivHeroes>
  )
}
