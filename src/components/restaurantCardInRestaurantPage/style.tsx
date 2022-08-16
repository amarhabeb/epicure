import styled from 'styled-components'

export const DivResturantCardInRestaurantsPage = styled.div`
background: #F9F4EA;
width: 100%;
`
export const DivCardContentInRestaurantsPage = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 10px;
height: 81px;
background: #F9F4EA;
order: 12;
align-self: stretch;
flex-grow: 0;
@media screen and (min-width: 600px) {
    height: 169px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const DivResturantNameInRestaurantsPage = styled.div`
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width: 600px) {
    font-size: 40px;
    line-height: 47px;
}
`
export const DivResturantChefInRestaurantsPage = styled.div`
height: 20px;
display: flex;
flex-direction: row;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */
letter-spacing: 1.97px;
color: #000000;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
@media screen and (min-width: 600px) {
    font-size: 24px;
    line-height: 30px;
}
`