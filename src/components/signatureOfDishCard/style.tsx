import styled from 'styled-components'

export const DivSignatueDishCard = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
background: #F9F4EA;
align-self: stretch;
width: 88%;
`
export const DivDishCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
width: 90%;
height: 236px;
margin-left: 16px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width: 600px) {

    height: 350px;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 55px;
    text-align: center;
    align-items: center;

}
`
export const DivDishName = styled.div`
width: 87%;
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
margin-left: 16px;

color: #000000;
@media screen and (min-width: 600px) {
    
    
    font-size: 40px;
    line-height: 47px;

}

`

export const DivSignature = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 10px;
margin-top: 16px;
margin-left: 16px;

@media screen and (min-width: 600px) {
 margin-top: 0px;
 margin-left: 0px;

}
`
export const DivPrice = styled.div`
width: 20px;
height: 19px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
order: 1;
margin-left: 16px;
margin-bottom: 16px;

@media screen and (min-width: 600px) {
    margin-left: 0px;
    font-weight: 200;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height, or 125% */
    text-align: center;
    letter-spacing: 1.97px;
   
   }
`

export const DivSignatureAndPrice = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
@media screen and (min-width: 600px) {
width: 100%;
align-content: center;
align-items: center;   
   }
`