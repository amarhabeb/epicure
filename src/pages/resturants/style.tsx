import styled from 'styled-components'

export const DivRestaurantsPage = styled.div`
width: 90%;
margin: 5%;
`
export const DivRestaurantsInPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
width: 100%;
position: unset;
@media screen and (min-width: 600px) {
    --grid-layout-gap: 10px;
    --grid-column-count: 3;
    --grid-item--min-width: 32%;
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: 32%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(var(--grid-item--min-width),var(--grid-item--max-width)),1fr));
    width: 95%;
    border-radius: [object Object]px;
    margin: 0 auto;
    grid-gap: 24px;
}
`

export const DivSelect = styled.div`
width: 100%;
height: 60px;
background: #FAFAFA;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 40px;
`

export interface DivProps{
    whichActive: string;
    
}

export const DivAll = styled.div<DivProps>`
cursor: pointer;
    text-decoration: ${props=> props.whichActive==='all'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichActive==='all'? '#DE9200': "none"};
    font-weight: ${props=> props.whichActive==='all'? 'bold': "none"};
    @media screen and (min-width: 600px) {
        text-decoration: none;

    }
`
export const DivNew = styled.div<DivProps>`
cursor: pointer;
text-decoration: ${props=> props.whichActive==='new'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='new'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='new'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}
`
export const DivPopular = styled.div<DivProps>`
cursor: pointer;
text-decoration: ${props=> props.whichActive==='popular'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='popular'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='popular'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}
`
export const DivOpen = styled.div<DivProps>`
cursor: pointer;
text-decoration: ${props=> props.whichActive==='open'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='open'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='open'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}
`

export const DivMap = styled.div<DivProps>`
    cursor: pointer;
    text-decoration: ${props=> props.whichActive==='map'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichActive==='map'? '#DE9200': "none"};
    font-weight: ${props=> props.whichActive==='map'? 'bold': "none"};
    @media screen and (min-width: 600px) {
        text-decoration: none;

    }
`

export const DivFilterRestaurantsBar = styled.div`
width: 100%;
height: 27px;
margin-bottom: 37px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px;
gap: 21px;
ont-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;
color: #000000;
@media screen and (min-width: 600px) {
    justify-content: center;
}
`