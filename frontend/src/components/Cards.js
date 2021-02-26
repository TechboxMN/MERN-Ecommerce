import React from 'react'
import {
    CardContainer,
    InnerWrapper,
    Title,
    TextContainer,
    NormalText,
    ButtonContainer,
    Button,
    ImageContainer,
    Image,
    MainContainer,
} from './Cards.style'

const Cards = () => {
    return (
        <MainContainer>
            <CardContainer>
                <InnerWrapper>
                    <TextContainer>
                        <Title>AirPods</Title>
                        <NormalText>Шинээр нэмэгдлээ.</NormalText>
                    </TextContainer>
                    <ButtonContainer>
                        <Button>
                            <i class='ri-arrow-right-line'></i>
                        </Button>
                    </ButtonContainer>
                </InnerWrapper>
                <ImageContainer>
                    <Image src='images/download.png' />
                </ImageContainer>
            </CardContainer>
            <CardContainer>
                <InnerWrapper>
                    <TextContainer>
                        <Title>AirPods</Title>
                        <NormalText>Шинээр нэмэгдлээ.</NormalText>
                    </TextContainer>
                    <ButtonContainer>
                        <Button>
                            <i class='ri-arrow-right-line'></i>
                        </Button>
                    </ButtonContainer>
                </InnerWrapper>
                <ImageContainer>
                    <Image src='images/download.png' />
                </ImageContainer>
            </CardContainer>
            <CardContainer>
                <InnerWrapper>
                    <TextContainer>
                        <Title>AirPods</Title>
                        <NormalText>Шинээр нэмэгдлээ.</NormalText>
                    </TextContainer>
                    <ButtonContainer>
                        <Button>
                            <i class='ri-arrow-right-line'></i>
                        </Button>
                    </ButtonContainer>
                </InnerWrapper>
                <ImageContainer>
                    <Image src='images/download.png' />
                </ImageContainer>
            </CardContainer>
        </MainContainer>
    )
}

export default Cards
