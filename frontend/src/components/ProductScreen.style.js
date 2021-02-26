import { Button, ListGroup } from 'react-bootstrap'
import styled from 'styled-components'

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductPreview = styled.div`
    width: 50%;
`

export const ProductImage = styled.img`
    max-width: 100%;
    height: 540px;
    object-fit: fill;
    border-radius: 4px;
`

export const ProductInfo = styled.div`
    width: 48%;
    height: 100%;
    border-radius: 4px;
    padding: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`

export const ProductName = styled.span`
    height: 24px;
    color: #333;
    font-size: 20px;
    letter-spacing: 0.15px;
    line-height: 24px;
`

export const ProductBrand = styled.span`
    color: #828282;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
    padding: 5px 0;
`

export const ProductPrice = styled.span`
    color: #333;
    font-size: 20px;
    letter-spacing: 0.15px;
    line-height: 24px;
    padding: 10px 0;
`

export const ProductDescription = styled.p`
    color: #828282;
    font-size: 13px;
    line-height: 20px;
    padding-top: 10px;
`

export const DescriptionSpan = styled.span`
    font-size: 15px;
    line-height: 20px;
    color: #333;
`

export const ProductInStock = styled.span`
    color: #828282;
    font-size: 15px;
    font-weight: 300;
`

export const ButtonAdd = styled(Button)`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #828282;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover {
        background-color: white;
        border: 1px solid #828282;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        background-color: white;
        border: 1px solid #828282;
    }
`

export const ButtonSubtract = styled(Button)`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #828282;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    &:hover {
        background-color: white;
        border: 1px solid #828282;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        background-color: white;
        border: 1px solid #828282;
    }
`
export const ButtonCount = styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #828282;
    border-bottom: 1px solid #828282;

    &:hover {
        background-color: white;
        border-top: 1px solid #828282;
        border-bottom: 1px solid #828282;
        cursor: default;
    }
`

export const ButtonAddToCart = styled(Button)`
    margin-right: 30px;
    border-radius: 4px;
    margin-top: 30px;
`

export const ButtonPurchase = styled(Button)`
    margin-left: 30px;
    border-radius: 4px;
    border: 1px solid #828282;
    margin-top: 30px;
`

export const ListGroupItem = styled(ListGroup.Item)`
    border: none;
    padding: 10px 0;
`

export const CommentContainer = styled(ListGroup)`
    border: none;
    margin: 20px 0;
`

export const WriteCommentSpan = styled.div`
    color: #333;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.08px;
    line-height: 24px;
    margin: 10px 0 0;
`

export const UserName = styled.div`
    color: #39f;
    font-family: 'Inter';
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
    padding: 10px 0;
`

export const CommentSpan = styled.div`
    color: #828282;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
`

export const DateSpan = styled.div`
    color: #828282;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
    padding: 20px 0;
`
