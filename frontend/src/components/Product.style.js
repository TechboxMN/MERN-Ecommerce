import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`

export const ProductImage = styled.img`
    height: 260px;
    width: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    background-color: #fff;
    position: relative;
    padding: 10px 20px;
    border-top: 1px solid #f2f2f2;
`

export const ProductName = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: rgb(17, 17, 17);
`
export const ProductBrand = styled.span`
    width: 100%;
    font-size: 11px;
    padding: 0 0 5px 0;
    color: rgb(109, 109, 109);
    font-family: 'Poppins', sans-serif;
`
export const ProductPrice = styled.span`
    overflow: hidden;
    width: 100%;
    height: 35px;
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: 300;
    color: rgb(17, 17, 17);
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
`
