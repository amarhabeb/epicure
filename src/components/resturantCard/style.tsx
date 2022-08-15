import styled from 'styled-components'

export const DivResturantCard = styled.div`
width: 88%;
`

export const DivResturantCardContent = styled.div`
background-color: #F9F4EA;
width: 100%px;
height: 81px; 
display: flex;
flex-direction: column;
@media screen and (min-width: 600px) {

    height: 169px;
    align-items: center;
}
`

export const DivResturantName = styled.div`
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
margin-bottom: 8px;
color: #000000;
@media screen and (min-width: 600px) {
    font-size: 40px;
    line-height: 47px;
    margen-bottom: 8px;
}
`

export const DivResturantChef = styled.div`
height: 20px;
display: flex;
flex-direction: row;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
@media screen and (min-width: 600px) {
    font-size: 24px;
    line-height: 30px;
}`

export const DivDetails = styled.div`
margin-top: 16px;
width: 100%;
height: 100%;

@media screen and (min-width: 600px) {
    font-size: 24px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
    align-items: center;
}

`