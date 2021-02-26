import React from 'react'
import {
    BlockWrapper,
    BoldText,
    IconContainer,
    IconContainerBox,
    InnerContainer,
    NormalText,
    StaticBlockContainer,
    TextContainer,
} from './StaticBlock.style'

const StaticBlock = () => {
    return (
        <StaticBlockContainer>
            <InnerContainer>
                <BlockWrapper>
                    <IconContainerBox>
                        <i class='ri-archive-line'></i>
                    </IconContainerBox>
                    <TextContainer>
                        <BoldText>Хурдан шуурхай хүргэлт</BoldText>
                        <NormalText>
                            Хамгийн удаан хүргэлт 24 цаг болдог!
                        </NormalText>
                    </TextContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <IconContainer>
                        <i class='ri-user-voice-line'></i>
                    </IconContainer>
                    <TextContainer>
                        <BoldText>12/7 тусламжын үйлчилгээ</BoldText>
                        <NormalText>
                            Бидэнтэй утас, чатаар холбогдож болно
                        </NormalText>
                    </TextContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <IconContainer>
                        <i class='ri-shield-check-line'></i>
                    </IconContainer>
                    <TextContainer>
                        <BoldText>100% хамгаалалттай төлбөрийн систем</BoldText>
                        <NormalText>Аль ч банкны картаар боломжтой</NormalText>
                    </TextContainer>
                </BlockWrapper>
            </InnerContainer>
        </StaticBlockContainer>
    )
}

export default StaticBlock
