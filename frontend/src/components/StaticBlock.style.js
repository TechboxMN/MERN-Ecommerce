import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const StaticBlockContainer = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`

export const InnerContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const IconContainer = styled.div`
    font-size: 24px;
    padding: 30px;
`

export const IconContainerBox = styled.div`
    font-size: 24px;
    padding: 30px 30px 30px 0;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BoldText = styled.span`
    color: #333;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    cursor: default;
`
export const NormalText = styled.span`
    color: #828282;
    font-weight: 300;
    font-family: 'Inter';
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    cursor: default;
`
