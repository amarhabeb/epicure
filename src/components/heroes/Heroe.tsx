import React from 'react'
import { Img } from '../../layouts/layout/style'
import { DivSearch, SearchButton, SearchInput } from '../../layouts/searchBar/style'
import { DivHeroes, DivModalConten, Modal } from './style'

export default function Heroe() {
  return (
    <DivHeroes>
        <Modal>
          <DivModalConten>
            Epicure works with the top chef restaurants in Tel Aviv
          </DivModalConten>
          <DivSearch style={{marginBottom: '16px'}}>
                <SearchButton>
                   <Img src='icons/search.svg' alt='search'/> 
                </SearchButton>
            
            <SearchInput type="text" placeholder="Search for restaurant cuisine, chef"/>

            </DivSearch>
        </Modal>
    </DivHeroes>
  )
}
