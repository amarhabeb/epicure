import React from 'react'
import Heroes from '../../components/heroes/Heroes'
import PopularResturants from '../../components/popularResturants/PopularResturants'
import { Div } from '../../layouts/layout/style'

export default function HomePage() {
  return (
    <Div style={{marginTop: '45px'}} >
      <Heroes/>
      <PopularResturants/>
    </Div>
  )
}
