import React from 'react'
import { AppData } from '../../constants/data'
import { Div, Title } from '../../layouts/layout/style'
import { DivAboutContaier, DivAboutFirstParagraph, DivAboutOnHomePage, DivDownload, DivDownloadContainer, DivlogoContainer, DivSecondPart, ImgDownload, ImgLogo } from './style'

export default function AboutComponent() {
  return (
    <DivAboutOnHomePage>
        <DivAboutContaier>
         <DivlogoContainer>  
         <ImgLogo src='icons/logoBig.svg' alt='logo'/>
        </DivlogoContainer>
        <DivSecondPart>
        <DivDownload>
        <DivDownloadContainer>  
         <ImgDownload src='icons/apple.png' alt='apple'/>
        </DivDownloadContainer>
        <DivDownloadContainer>  
         <ImgDownload src='icons/google.png' alt='google'/>
        </DivDownloadContainer>
        </DivDownload>
        <Div>
        <Title>about us:</Title>
        <DivAboutFirstParagraph>
            {AppData.aboutUsFirstParagraph}
            <br/>
            {AppData.aboutUsSecondParagraph}
        </DivAboutFirstParagraph>
        </Div>
        </DivSecondPart>
      </DivAboutContaier>
    </DivAboutOnHomePage>
  )
}
