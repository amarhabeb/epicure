import styled from 'styled-components'

export const DivDishOrder = styled.div`

@media screen and (min-width: 600px) {
    
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 40px;
gap: 40px;

position: absolute;
width: 573px;
height: 1064px;
left: 436px;
top: 80px;

background: #FFFFFF;
}


`

export const DivTop = styled.div`
position: absolute;
z-index: 10;
width: 100%;
height: 46px;
left: 0px;
top: 0px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`

export const DivDishContent= styled.div`
width: 85%;
margin-left: 5%;
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 14px;

`

export const DivOrderName= styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */
letter-spacing: 2.67px;

color: #000000;

`

export const DivOrderContent= styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
/* or 112% */
letter-spacing: 1.97px;

color: #000000;

`

export const Label= styled.label`
`



export const Option= styled.option`
`

export const DivRadio= styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
/* identical to box height, or 100% */
text-align: center;
letter-spacing: 1.97px;
gap: 24px;
`

export const DivUH= styled.div`
margin-top: 48px;
text-decoration: underline;
text-decoration-color: #DE9200E5;
text-underline-offset: 8px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
/* identical to box height, or 90% */
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`

export const DivChoices= styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

export const DivQuantity= styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 32px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
/* identical to box height, or 100% */
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`

export const DivAddToBag= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 206px;
height: 48px;
left: 20px;
top: 917px;
background: #000000;
border: 1px solid #000000;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;

color: #FFFFFF;
cursor: pointer;
`

