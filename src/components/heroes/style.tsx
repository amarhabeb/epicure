import styled from 'styled-components'

export const DivHeroes = styled.div`
background-image: url("/images/heroesBackground.png");
background-size: cover;
background-repeat: no-repeat;
height: 273px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
@media screen and (min-width: 600px) {
    height: 696px;

}
`

export const Modal = styled.div`
display: flex;
height: 144px;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 200;
font-size: 24px;
line-height: 32px;
letter-spacing: 1.97px;
color: #000000;
gap: 16px;
width: 88%;
top: 16px;
bottom: 16px;
background: rgba(255, 255, 255, 0.88);
@media screen and (min-width: 600px) {
    width: 55%;
    height: 32%;

}
`

export const DivModalConten = styled.div`
display: flex;
flex-direction: column;
width: 88%;
height: 64px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
line-height: 32px;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width: 600px) {
    width: 61%;
    height: 36%;
    font-weight: 200;
    font-size: 32px;
    line-height: 40px;

}
`

