import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;
`

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`

export const Title = styled.span`
    color: #333;
    font-weight: 300;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 0.03px;
    line-height: 28px;
    cursor: default;
`

export const NormalText = styled.span`
    font-weight: 300;
    color: #828282;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    width: 130px;
    margin-right: -100px;
    cursor: default;
`
export const ButtonContainer = styled.div``

export const Button = styled.button`
    background-color: #333;
    width: 32px;
    height: 32px;
    color: #fff;
    border: none;
    border-radius: 50%;

    i {
        font-size: 20px;
        height: 18px;
        width: 18px;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
`
