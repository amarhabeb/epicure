import styled from 'styled-components'

export const DivSignatueToFilter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 32px;
width: 100%;
height: 584px;
background: #FAFAFA;
margin-top: 100px;
@media screen and (min-width: 600px) {
    height: 265px;
}


`
export const TitleSignatureToFilter = styled.div`
width: 136px;
height: 35px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 30px;
/* or 167% */
text-align: center;
letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;`

export const DivIcons = styled.div`
height: 470px;
@media screen and (min-width: 600px) {
    height: 265px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;

}
`