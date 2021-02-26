import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const StaticPageContainer = styled.div`
    height: 210px;
    width: 100%;
    background-color: #222;
    display: flex;
    align-items: center;
`

export const InnerWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
`

export const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LeftTopContainer = styled.div`
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`

export const LeftBottomContainer = styled.div`
    width: 100%;
    text-align: start;
`

export const LeftBottomInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Title = styled.span`
    color: #bdbdbd;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    padding-bottom: 10px;
    cursor: default;
`

export const Address = styled.span`
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    cursor: default;
`

export const Phone = styled.span`
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    padding-right: 40px;
`

export const Email = styled.span`
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
`

export const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 40px;
`

export const RightInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubTitle = styled.div`
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1px;
    line-height: 20px;
    padding-bottom: 5px;
`
