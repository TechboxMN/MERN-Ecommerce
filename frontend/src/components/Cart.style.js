import styled from 'styled-components'
import { Image, Button, ButtonGroup } from 'react-bootstrap'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CartItemContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    margin-left: 20px;
`
export const CartItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const CartItemBox = styled.div`
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    width: 100%;
`

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const CartImage = styled(Image)`
    height: 70px;
    width: 70px;
`

export const CartInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
`

export const CartItemName = styled.span`
    color: #333;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
`

export const CartItemPrice = styled.span`
    font-weight: 300;
    color: #39f;
    font-family: 'Inter';
    font-size: 11px;
    letter-spacing: 0.08px;
    line-height: 20px;
`

export const ButtonAdd = styled(Button)`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover {
        background-color: white;
        border: 1px solid #e0e0e0;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        background-color: white;
        border: 1px solid #e0e0e0;
    }
`

export const ButtonSubtract = styled(Button)`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    &:hover {
        background-color: white;
        border: 1px solid #e0e0e0;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        background-color: white;
        border: 1px solid #e0e0e0;
    }
`
export const ButtonCount = styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
        background-color: white;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        cursor: default;
    }
`

export const CartInfo = styled.div`
    border-top: 1px solid #e0e0e0;
    margin: 50px 0 0 20px;
    display: flex;
    flex-direction: column;
`

export const TotalPrice = styled.span`
    color: #333;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    padding: 20px 0;
`

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonContinue = styled(Button)`
    border-radius: 4px;
    background-color: #333;
    height: 40px;
    width: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
    text-transform: capitalize;
`

export const ButtonCancel = styled(Button)`
    text-transform: capitalize;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    height: 40px;
    color: #333;
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #f2f2f2;

    &:hover {
        background-color: #fff;
        color: #333;
        border: 1px solid #f2f2f2;
    }
`

export const CartSpan = styled.div`
    font-weight: 300;
    color: #828282;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
`

export const ButtonContainer = styled(ButtonGroup)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
