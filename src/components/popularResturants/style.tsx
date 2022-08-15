import styled from 'styled-components'

export const DivPopularOnHome = styled.div`

width: 100%;
max-width: 100vw;
position: relative;
@media screen and (min-width: 600px) {
    --grid-layout-gap: 10px;
    --grid-column-count: 3;
    --grid-item--min-width: 32%;
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: 32%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(var(--grid-item--min-width),var(--grid-item--max-width)),1fr));
    width: 95%;
    border-radius: [object Object]px;
    margin: 0 auto;
    grid-gap: 24px;
}
`
