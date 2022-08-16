import styled from 'styled-components'

export const DivAboutOnHomePage = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin-top: 48px;
gap: 32px;
width: 100%;
background: #FAFAFA;
margin-top: 100px
`

export const DivAboutFirstParagraph = styled.div`
width: 88%;
left: 19px;
top: 3266px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
/* or 156% */
letter-spacing: 2.14px;

color: #000000;
`

export const DivAboutSecondParagraph = styled.div`
width: 100%;
left: 19px;
top: 3547px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
/* or 156% */
letter-spacing: 2.14px;
color: #000000;
`
export const DivSecondPart = styled.div`
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
}
`

export const DivAboutContaier = styled.div`
margin-left: 5%;
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 9%;
}
`
export const DivDownload = styled.div`
width: 100%;
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 25px;
    margin-top: 20px;

}`

export const DivDownloadContainer = styled.div`
width: 100%;
@media screen and (min-width: 600px) {
    width: 25%;

}
`

export const ImgDownload = styled.img`
width: 50%; 
cursor: pointer; 
margin-bottom: 45px;
@media screen and (min-width: 600px) {
    width: 100%; 
    align-self: center;
}
`


export const ImgLogo = styled.img`
width: 27%; 
cursor: pointer; 
margin-bottom: 45px;
@media screen and (min-width: 600px) {
    width: 26%; 
    align-self: center;
}
`

export const DivlogoContainer = styled.div`
width: 100%; 
 margin-top: 24px;
 @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
}
`