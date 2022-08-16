import styled from 'styled-components'

export const DivHeaderBar = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
align-items: center;
width: 100%;
margin-top: 0;
margin-right: 5%;
margin-left: 5%;
width: 100%;
`

export const DivLogo = styled.div`
transform: translate(60%, 5%); 
padding: 2%; 
cursor: pointer;
margin-right: 16px;
`

export const DivDesktopHeaderBar = styled.div`
display: flex;
justify-content: space-around;
align-content: center;
align-items: center;
margin-top: 0;
gap: 32px;
`
export const DesktopHeaderNavigatorRes = styled.div<DivNavProps>`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;
text-decoration: ${props=> props.whichPage==='restaurants'? 'underline': "none"};
text-decoration-color: ${props=> props.whichPage==='restaurants'? '#DE9200': "none"};
`
export const DesktopHeaderNavigatorChef = styled.div<DivNavProps>`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;
text-decoration: ${props=> props.whichPage==='chefs'? 'underline': "none"};
text-decoration-color: ${props=> props.whichPage==='chefs'? '#DE9200': "none"};
`
export interface DivNavProps{
    whichPage: string;
    
}

export const DivToRestaurants = styled.div<DivNavProps>`
    marginLeft: '-2%';
    cursor: pointer;
    text-decoration: ${props=> props.whichPage==='restaurants'? 'underline': "none"};
    text-decoration-color: ${props=> props.whichPage==='restaurants'? '#DE9200': "none"};
    font-weight: ${props=> props.whichPage==='restaurants'? 'bold': "none"};
    `

export const DivToChefs = styled.div``