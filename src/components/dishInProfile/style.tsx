import styled from 'styled-components'

export const DivDish = styled.div`
width: 90%;
margin-left: 5%;
`

export const DivDishAbout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
width: 100%;
background: #F9F4EA;
`

export const DivDishName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 2.67px;
color: #000000;
margin-left: 5%;
margin-top: 5%;
`

export const DivDiscription = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* or 125% */
letter-spacing: 1.97px;
color: #000000;
margin-left: 5%;
margin-right: 5%;
`

export const DivDishPriceContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 5%;
align-items: center;
gap: 12px;
width: 90%;
margin-bottom: 16px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */
text-align: center;
letter-spacing: 1.97px;

color: #000000;

`

export const PriceLine = styled.div`
width: 85%;
height: 0px;

border: 0.5px solid #979797;`
