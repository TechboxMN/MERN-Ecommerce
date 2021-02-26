import styled from 'styled-components'

export const ProductCol = styled.div`
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    overflow: hidden;
`
export const ProductRow = styled.div`
    padding: 20px 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`
export const Title = styled.span`
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    letter-spacing: 0.1px;
    line-height: 20px;
`
