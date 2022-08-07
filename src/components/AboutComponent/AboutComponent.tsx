import React from 'react'
import { AppData } from '../../constants/data'
import { Div, Img, Title } from '../../layouts/layout/style'
import { DivAboutFirstParagraph, DivAboutOnHomePage, DivAboutSecondParagraph } from './style'

export default function AboutComponent() {
  return (
    <DivAboutOnHomePage>
         <Div style={{ width: '100%', height: '95px'}}>  
         <Img src='icons/about-logo.png' style={{ width: '27%', cursor: 'pointer', marginTop: '24px'}} alt='logo'/>
        </Div>
        <Div style={{width: '100%'}}>  
         <Img src='icons/apple.png' style={{ width: '50%', cursor: 'pointer'}} alt='apple'/>
        </Div>
        <Div style={{width: '100%'}}>  
         <Img src='icons/google.png' style={{ width: '50%', cursor: 'pointer'}} alt='google'/>
        </Div>
        <Title>about us:</Title>
        <DivAboutFirstParagraph>
            {AppData.aboutUsFirstParagraph}
            <br/>
            {AppData.aboutUsSecondParagraph}
        </DivAboutFirstParagraph>
        <DivAboutSecondParagraph>
            
        </DivAboutSecondParagraph>
    </DivAboutOnHomePage>
  )
}
