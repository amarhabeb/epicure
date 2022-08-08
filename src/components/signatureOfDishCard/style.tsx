import styled from 'styled-components'

export const DivSignatueDishCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 10px;
height: 388px;
background: #F9F4EA;
order: 12;
align-self: stretch;
flex-grow: 0;
`
export const DivDishCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 16px;
gap: 10px;

height: 100px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
`
export const DivDishName = styled.div`
width: 118px;
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;


color: #000000;

`

export const DivSignature = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 10px;
margin-top: 16px;
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
`