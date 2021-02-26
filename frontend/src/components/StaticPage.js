import React from 'react'
import { Link } from 'react-router-dom'
import {
    Address,
    LeftContainer,
    LeftTopContainer,
    LeftBottomContainer,
    StaticPageContainer,
    Title,
    LeftBottomInnerWrapper,
    Phone,
    Email,
    RightContainer,
    RightInnerWrapper,
    SubTitle,
    InnerWrapper,
} from './StaticPage.style'

const StaticPage = () => {
    return (
        <>
            <StaticPageContainer>
                <InnerWrapper>
                    <LeftContainer>
                        <LeftTopContainer>
                            <Title>Бидний хаяг</Title>
                            <Address>
                                Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг,
                                1-р хороо, Жуулчны гудамж, Бизнес 34 Центр #601
                                тоот
                            </Address>
                        </LeftTopContainer>
                        <LeftBottomContainer>
                            <Title>Холбоо барих</Title>
                            <LeftBottomInnerWrapper>
                                <a href='tel:7777-2211'>
                                    <Phone>Утас : 7777-2211</Phone>
                                </a>
                                <a href='mailto: support@electro.com'>
                                    <Email>И-Мэйл: support@electro.com</Email>
                                </a>
                            </LeftBottomInnerWrapper>
                        </LeftBottomContainer>
                    </LeftContainer>
                    <RightContainer>
                        <RightInnerWrapper>
                            <Title>Ангилал</Title>
                            <SubTitle>Эхний ангилал</SubTitle>
                            <SubTitle>Дараагийн ангилал</SubTitle>
                            <SubTitle>Гурав дахь ангилал</SubTitle>
                            <SubTitle>Дөрөв дахь ангилал</SubTitle>
                        </RightInnerWrapper>
                        <RightInnerWrapper>
                            <Title>Эрэлттэй</Title>
                            <SubTitle>Эхний ангилал</SubTitle>
                            <SubTitle>Дараагийн ангилал</SubTitle>
                            <SubTitle>Гурав дахь ангилал</SubTitle>
                            <SubTitle>Дөрөв дахь ангилал</SubTitle>
                        </RightInnerWrapper>
                        <RightInnerWrapper>
                            <Title>Тусламж</Title>
                            <SubTitle>Бүтээгдэхүүн авах</SubTitle>
                            <SubTitle>Төлбөр төлөх</SubTitle>
                            <SubTitle>Буцаалт хийх</SubTitle>
                            <SubTitle>Хүргэлт</SubTitle>
                        </RightInnerWrapper>
                    </RightContainer>
                </InnerWrapper>
            </StaticPageContainer>
        </>
    )
}

export default StaticPage
