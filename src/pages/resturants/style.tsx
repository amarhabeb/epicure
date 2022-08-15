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
position: unset;`

export interface DivProps{
    whichActive: string;
    
}

export const DivAll = styled.div<DivProps>`
text-decoration: ${props=> props.whichActive==='all'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='all'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='all'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}


`
export const DivNew = styled.div<DivProps>`
text-decoration: ${props=> props.whichActive==='new'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='new'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='new'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}
`
export const DivPopular = styled.div<DivProps>`
text-decoration: ${props=> props.whichActive==='popular'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='popular'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='popular'? 'bold': "none"};
@media screen and (min-width: 600px) {
    text-decoration: none;

}
`
export const DivOpen = styled.div<DivProps>`
text-decoration: ${props=> props.whichActive==='open'? 'underline': "none"};
text-decoration-color: ${props=> props.whichActive==='open'? '#DE9200': "none"};
font-weight: ${props=> props.whichActive==='open'? 'bold': "none"};
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
`