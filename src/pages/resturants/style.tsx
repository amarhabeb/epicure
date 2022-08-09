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
    whitchActive: string;
    
}

export const DivAll = styled.div<DivProps>`
text-decoration: ${props=> props.whitchActive==='all'? 'underline': "none"};
text-decoration-color: ${props=> props.whitchActive==='all'? '#DE9200': "none"};
font-weight: ${props=> props.whitchActive==='all'? 'bold': "none"};
`
export const DivNew = styled.div<DivProps>`
text-decoration: ${props=> props.whitchActive==='new'? 'underline': "none"};
text-decoration-color: ${props=> props.whitchActive==='new'? '#DE9200': "none"};
font-weight: ${props=> props.whitchActive==='new'? 'bold': "none"};
`
export const DivPopular = styled.div<DivProps>`
text-decoration: ${props=> props.whitchActive==='popular'? 'underline': "none"};
text-decoration-color: ${props=> props.whitchActive==='popular'? '#DE9200': "none"};
font-weight: ${props=> props.whitchActive==='popular'? 'bold': "none"};
`
export const DivOpen = styled.div<DivProps>`
text-decoration: ${props=> props.whitchActive==='open'? 'underline': "none"};
text-decoration-color: ${props=> props.whitchActive==='open'? '#DE9200': "none"};
font-weight: ${props=> props.whitchActive==='open'? 'bold': "none"};
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