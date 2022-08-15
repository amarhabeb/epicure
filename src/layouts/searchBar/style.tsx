import styled from 'styled-components'

export const DivSearchBar = styled.div`
width: 100%;
`

export const HeaderSearchBar = styled.div`

display: flex;
flex-direction: row;
width: 100%;
padding: 10px 0% 0% 0%;`


export const SearchTerm = styled.div`
text-align: center;;
position: relative;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
padding: 0% 14% 0% 0%;
/* identical to box height */
letter-spacing: 1.92px;
color: #000000;`

export const DivBodySearchBar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 24px;
height: 346px;
top: 46px;
background: #FFFFFF;
padding: 23px 0% 0% 8%;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`


export const DivSearch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
width: 84%;
height: 30.5px;
border: 0.5px solid #000000;
border-radius: 4px;
flex: none;
order: 1;
flex-grow: 0;
@media screen and (min-width: 600px) {
    width: 67%;

}
`

export const DivSearchInModal = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;
width: 315px;
height: 30px;
border: 0.5px solid #000000;
border-radius: 4px;
transform: matrix(1, 0, 0, -1, 0, 0);
flex: none;
order: 1;
flex-grow: 0;
`

export const SearchInput = styled.input`
width: 80%;
height: 15px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;

line-height: 15px;
letter-spacing: 1.29px;
background-color: transparent;
color: #000000;
border-color: transparent;
flex: none;
order: 2;
flex-grow: 1;
@media screen and (min-width: 600px) {
    width: 65%;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;

}
`

export const SearchButton = styled.button`
background: transparent;
border: none;
cursor: pointer;`
