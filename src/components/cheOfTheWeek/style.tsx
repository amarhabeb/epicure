import styled from 'styled-components'

export const DivChefOfTheWeek = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
width: 95%;
`
export const DivChefOfTheWeekContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 5%;
width: 95%;
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 25px;
    margin-top: 20px;
    align-items: start;

}
`


export const DivChefPicture= styled.div`
height: 338px;
width: 100%;
display: flex;
justify-content: flex-end;
flex-direction: column;
background-size: cover;
background-position: bottom;
@media screen and (min-width: 600px) {
    width: 41%;
    height: 478px;
    background-position: bottom;
    background-size: cover;
}
`

export const DivAboutTheCef = styled.div`
width: 100%;
left: 20px;
top: 2239px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
/* or 156% */
text-align: justify;
letter-spacing: 1.25px;

color: #000000;
@media screen and (min-width: 600px) {
    width: 45%;
    margin: 3%;
    font-family: 'Helvetica Neue';
    font-size: 24px;
    line-height: 35px;
}

`
export const DivChefOfTheWeekRestaurants = styled.div`
width: 100%;
@media screen and (min-width: 600px) {
    --grid-layout-gap: 16px;
    --grid-column-count: 3;
    --grid-item--min-width: 20%;
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: 20%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(var(--grid-item--min-width),var(--grid-item--max-width)),1fr));
    width: 95%;
    border-radius: [object Object]px;
    margin: 0 auto;
    grid-gap: 16px;
}`

export const DivChefOfTheWeekName = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
height: 51px;
left: 0px;
right: 0px;
bottom: 0px;
background: rgba(255, 255, 255, 0.8);
@media screen and (min-width: 600px) {    
height: 78px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 47px;
/* identical to box height, or 118% */
text-align: center;
letter-spacing: 2.67px;

color: #000000;
}`
