import React from 'react'
import { AppData } from '../../constants/data'
import { Div, Img, Title } from '../../layouts/layout/style'
import { DivAboutFirstParagraph, DivAboutOnHomePage, DivAboutSecondParagraph } from './style'

export default function AboutComponent() {
  return (
    <DivAboutOnHomePage>
        <Div style={{marginLeft: '5%'}}>
         <Div style={{ width: '100%', height: '95px', marginBottom: '45px', marginTop: '24px'}}>  
         <Img src='icons/logoBig.svg' style={{ width: '27%', cursor: 'pointer', marginBottom: '45px'}} alt='logo'/>
        </Div>
        <Div style={{width: '100%'}}>  
         <Img src='icons/apple.png' style={{ width: '50%', cursor: 'pointer', marginBottom: '45px'}} alt='apple'/>
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
      </Div>
    </DivAboutOnHomePage>
  )
}
