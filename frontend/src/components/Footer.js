import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
    FacebookButton,
    FooterContainer,
    FooterLogo,
    FooterSpan,
    InstagramButton,
    SocialButtons,
    TwitterButton,
} from './Footer.style'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Row>
                    <Link to='/'>
                        <FooterLogo>Electro</FooterLogo>
                    </Link>
                </Row>
                <Row>
                    <FooterSpan>Copyright &copy; Margusoe</FooterSpan>
                </Row>
                <SocialButtons>
                    <a href='https://www.facebook.com/'>
                        <FacebookButton>
                            <i class='ri-facebook-circle-fill'></i>
                        </FacebookButton>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <InstagramButton>
                            <i class='ri-instagram-fill'></i>
                        </InstagramButton>
                    </a>
                    <a href='https://www.twitter.com/'>
                        <TwitterButton>
                            <i class='ri-twitter-fill'></i>
                        </TwitterButton>
                    </a>
                </SocialButtons>
            </FooterContainer>
        </>
    )
}

export default Footer
