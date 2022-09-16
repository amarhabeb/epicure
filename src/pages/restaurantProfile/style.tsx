import styled from 'styled-components'

export const DivprofilePage = styled.div``

export const DivAboutRestaurant = styled.div`
display: flex;
 flex-direction: column;
 gap: 16px;
 margin-left: 5%;
 margin-top: 24px;
 @media screen and (min-width: 600px) {
    text-align: center;
    
}
 `

export const DivRestaurantName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width: 600px) {
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 56px;
line-height: 64px;
/* identical to box height, or 114% */
letter-spacing: 3.67px;

color: #000000;

    
}
`

export const DivRestaurantChef = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */
letter-spacing: 1.97px;

color: #000000;
@media screen and (min-width: 600px) {
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 32px;
line-height: 36px;
/* identical to box height, or 112% */
letter-spacing: 1.97px;

color: #000000;
    
}
`

export const DivIsOpen = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */
letter-spacing: 1.97px;

color: #000000;
@media screen and (min-width: 600px) {
    
    justify-content: center;
}
`
export const DivImage = styled.div`
@media screen and (min-width: 600px) {
    margin-left: 8%;
    width: 84%;
}
`
export const DivDishes = styled.div`
 display: flex;
 flex-direction: column;
 gap: 22px;
 @media screen and (min-width: 600px) {
    --grid-layout-gap: 10px;
    --grid-column-count: 4;
    --grid-item--min-width: 26%;
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: 32%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(var(--grid-item--min-width),var(--grid-item--max-width)),1fr));
    width: 100%;
    border-radius: [object Object]px;
    margin: 0 auto;
    grid-gap: 24px;
}
 `

 export interface DivProps{
    whichActive: string;
    
}

export const DivBreakfast = styled.div<DivProps>`
cursor: pointer;
    text-decoration: ${props=> props.whichActive==='breakfast'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichActive==='breakfast'? '#DE9200': "none"};
    font-weight: ${props=> props.whichActive==='breakfast'? 'bold': "none"};
`

export const DivLanch = styled.div<DivProps>`
cursor: pointer;
    text-decoration: ${props=> props.whichActive==='lanch'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichActive==='lanch'? '#DE9200': "none"};
    font-weight: ${props=> props.whichActive==='lanch'? 'bold': "none"};
`

export const DivDinner = styled.div<DivProps>`
cursor: pointer;
    text-decoration: ${props=> props.whichActive==='dinner'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichActive==='dinner'? '#DE9200': "none"};
    font-weight: ${props=> props.whichActive==='dinner'? 'bold': "none"};
`

export const DivFilterDishes = styled.div`
width: 65%;
margin-left: 5%;
margin-bottom: 29px;
margin-top: 32px;

display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;

color: #000000;


@media screen and (min-width: 600px) {

    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    letter-spacing: 1.92px;
    width: 100%;
    justify-content: center;
    gap: 32px;
}
`