import styled from 'styled-components'

export const DivSearchBar = styled.div`
width: 100%;
margin 5%;`

export const HeaderSearchBar = styled.div`

display: flex;
flex-direction: row;
width: 100%;`


export const SearchTerm = styled.div`
text-align: center;;
position: relative;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;
color: #000000;`

export const DivBodySearchBar = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 12px 24px 20px;
gap: 24px;
height: 367px;
left: -1px;
top: 46px;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
border-color: black;
border-style: solid;`


export const DivSearch = styled.div`
width: 80%;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;
height: 30px;
top: 100px;
border: 0.5px solid #000000;
border-radius: 4px;`

export const SearchInput = styled.input`
width: 80%;
height: 15px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;

line-height: 15px;
/* identical to box height */
letter-spacing: 1.29px;

color: #000000;

opacity: 0.2;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 1;
border-left: 0.5px solid black;`

export const SearchButton = styled.button`
background: transparent;
border: none`
